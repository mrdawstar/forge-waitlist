import { redirect } from 'next/navigation'
import { APP_STORE_URL } from '@/lib/site'

export function GET() {
  redirect(APP_STORE_URL)
}
