import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Shape of the tables this app touches. Keeping it here means the insert in the
 * waitlist route is type checked against the migration in supabase/migrations.
 */
export interface Database {
  public: {
    Tables: {
      waitlist_signups: {
        Row: {
          id: string
          email: string
          source: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          source?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          source?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

export type TypedSupabaseClient = SupabaseClient<Database>

/** Thrown when the deployment is missing its Supabase environment variables. */
export class SupabaseConfigError extends Error {
  constructor(missing: string[]) {
    super(`Missing Supabase environment variables: ${missing.join(', ')}`)
    this.name = 'SupabaseConfigError'
  }
}

/**
 * Accepted names for each credential, most specific first. The `SUPABASE_*`
 * pair is what .env.example documents; the rest are the names Vercel's Supabase
 * integration and older Supabase templates inject, so a project wired up either
 * way works without renaming anything.
 */
const URL_VARS = ['SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL'] as const
const KEY_VARS = [
  'SUPABASE_PUBLISHABLE_KEY',
  'SUPABASE_ANON_KEY',
  'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const

/**
 * First variable that holds an actual value. A variable that exists but is
 * blank counts as unset — pasting into a dashboard and leaving the field empty
 * should fall through to the next name, not win with an empty string.
 */
function firstConfigured(names: readonly string[]): string | undefined {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

let client: TypedSupabaseClient | null = null

/**
 * Server-side Supabase client built on the publishable (anon) key.
 *
 * The key is deliberately not exposed to the browser: every write goes through
 * the /api/waitlist route so validation and rate limiting cannot be skipped.
 * Row level security still allows nothing but INSERT on waitlist_signups.
 */
export function getSupabaseClient(): TypedSupabaseClient {
  if (client) return client

  const url = firstConfigured(URL_VARS)
  const key = firstConfigured(KEY_VARS)

  const missing: string[] = []
  if (!url) missing.push(URL_VARS.join(' or '))
  if (!key) missing.push(KEY_VARS.join(' or '))
  if (!url || !key) throw new SupabaseConfigError(missing)

  client = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'x-application-name': 'forge-waitlist' } },
  })
  return client
}
