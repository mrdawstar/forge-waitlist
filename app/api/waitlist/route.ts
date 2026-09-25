import { NextResponse } from 'next/server'
import { APP_STORE_URL } from '@/lib/site'

/** Retired: do not accept or store email addresses after launch. */
export function POST() {
  return NextResponse.json(
    { message: 'Forge is available on the App Store.', url: APP_STORE_URL },
    { status: 410 },
  )
}
