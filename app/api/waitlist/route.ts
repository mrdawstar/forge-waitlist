import { NextResponse } from 'next/server'
import { getSupabaseClient, SupabaseConfigError } from '@/lib/supabase'
import {
  isValidEmail,
  normalizeEmail,
  type WaitlistErrorCode,
  type WaitlistResponse,
  type WaitlistStatus,
} from '@/lib/waitlist'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Postgres unique violation — the address is already on the list. */
const UNIQUE_VIOLATION = '23505'
/** Postgres check violation — the address got past validation but not the DB. */
const CHECK_VIOLATION = '23514'

const RATE_LIMIT = { windowMs: 60_000, max: 5 }
/**
 * Best-effort throttle. It is per server instance and resets on redeploy, which
 * is enough to keep a bored visitor from hammering the endpoint; anything
 * stronger belongs in front of the app.
 */
const hits = new Map<string, number[]>()

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT.windowMs,
  )
  recent.push(now)
  hits.set(key, recent)

  // Opportunistic cleanup so the map cannot grow forever.
  if (hits.size > 5_000) {
    for (const [id, times] of hits) {
      if (times.every((time) => now - time >= RATE_LIMIT.windowMs)) {
        hits.delete(id)
      }
    }
  }
  return recent.length > RATE_LIMIT.max
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return (
    forwarded?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function ok(status: WaitlistStatus, message: string) {
  return NextResponse.json<WaitlistResponse>({ status, message })
}

function fail(code: WaitlistErrorCode, message: string, httpStatus: number) {
  return NextResponse.json<WaitlistResponse>(
    { error: code, message },
    { status: httpStatus },
  )
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return fail(
      'rate_limited',
      'That is a lot of tries. Give it a minute and try again.',
      429,
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return fail('invalid_request', 'We could not read that request.', 400)
  }

  if (typeof body !== 'object' || body === null) {
    return fail('invalid_request', 'We could not read that request.', 400)
  }

  const { email, website } = body as { email?: unknown; website?: unknown }

  // Honeypot: a real person never fills this in. Answer as if all is well so
  // the bot has nothing to learn.
  if (typeof website === 'string' && website.trim() !== '') {
    return ok('subscribed', 'You are on the list.')
  }

  if (typeof email !== 'string') {
    return fail('invalid_email', 'Please enter your email address.', 400)
  }

  const normalized = normalizeEmail(email)
  if (!normalized) {
    return fail('invalid_email', 'Please enter your email address.', 400)
  }
  if (!isValidEmail(normalized)) {
    return fail(
      'invalid_email',
      'That address does not look right. Please check it.',
      400,
    )
  }

  try {
    const supabase = getSupabaseClient()
    const { error } = await supabase
      .from('waitlist_signups')
      .insert({ email: normalized, source: 'landing' })

    if (error) {
      if (error.code === UNIQUE_VIOLATION) {
        return ok('already_subscribed', 'You are already on the list.')
      }
      if (error.code === CHECK_VIOLATION) {
        return fail(
          'invalid_email',
          'That address does not look right. Please check it.',
          400,
        )
      }
      console.error('[waitlist] insert failed', error)
      return fail(
        'server_error',
        'Something went wrong on our side. Please try again.',
        502,
      )
    }

    return ok('subscribed', 'You are on the list.')
  } catch (error) {
    if (error instanceof SupabaseConfigError) {
      console.error('[waitlist]', error.message)
      return fail(
        'not_configured',
        'The waitlist is temporarily unavailable. Please try again later.',
        503,
      )
    }
    console.error('[waitlist] unexpected error', error)
    return fail(
      'server_error',
      'Something went wrong on our side. Please try again.',
      500,
    )
  }
}
