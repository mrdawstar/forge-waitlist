/** Shared contract between the waitlist API route and the form component. */

export type WaitlistStatus = 'subscribed' | 'already_subscribed'

export type WaitlistErrorCode =
  | 'invalid_request'
  | 'invalid_email'
  | 'rate_limited'
  | 'not_configured'
  | 'server_error'

export interface WaitlistSuccessResponse {
  status: WaitlistStatus
  message: string
}

export interface WaitlistErrorResponse {
  error: WaitlistErrorCode
  message: string
}

export type WaitlistResponse = WaitlistSuccessResponse | WaitlistErrorResponse

export const MAX_EMAIL_LENGTH = 254

/**
 * Pragmatic address check: a single @, something either side, a dotted domain
 * and no whitespace. It matches the CHECK constraint on the table, so the
 * client, the route and the database all agree on what an address looks like.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

export function isValidEmail(value: string): boolean {
  return value.length <= MAX_EMAIL_LENGTH && EMAIL_PATTERN.test(value)
}
