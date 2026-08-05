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

  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key =
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const missing: string[] = []
  if (!url) missing.push('SUPABASE_URL')
  if (!key) missing.push('SUPABASE_PUBLISHABLE_KEY')
  if (!url || !key) throw new SupabaseConfigError(missing)

  client = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'x-application-name': 'forge-waitlist' } },
  })
  return client
}
