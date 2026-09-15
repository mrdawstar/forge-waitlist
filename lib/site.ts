/**
 * Every fact about the site that lives outside a component.
 *
 * If you are here to flip the site over on App Store launch day, you only need
 * `APP_STORE_URL` below.
 */

export const site = {
  name: 'Forge',
  tagline: 'A day you earn, not one you tick',
  url: 'https://forgebetter.app',
  owner: 'Davyd Bubnov',
  copyright: '© 2026 Davyd Bubnov',
  supportEmail: 'forge.discipline.daily@gmail.com',
  privacyEmail: 'forge.discipline.daily@gmail.com',
  /** Jurisdiction the operator is established in. */
  country: 'Poland',
  /** Minimum age stated in the Terms of Use. */
  minimumAge: 13,
  /** Last review of the Terms of Use. */
  legalUpdated: '6 August 2026',
  /** Last review of the Privacy Policy. Tracked separately so revising one
   *  page does not silently re-date the other. */
  privacyUpdated: '15 September 2026',
} as const

/**
 * ── LAUNCH DAY: THE ONE LINE TO CHANGE ──────────────────────────────────────
 *
 * Paste the App Store URL here once the app is live, e.g.
 *   export const APP_STORE_URL: string | null =
 *     'https://apps.apple.com/app/forge/id0000000000'
 *
 * While it is `null` the site invites people to be told when Forge lands.
 * The moment it is a string, every call to action on the site becomes a
 * "Download on the App Store" button instead — homepage hero, closing section
 * and support page — and the launch-notification form stops being rendered.
 *
 * Nothing else needs editing. Do not put a placeholder or guessed URL here:
 * `null` is what makes the pre-launch wording correct.
 */
export const APP_STORE_URL: string | null = null

/** Whether the app is downloadable right now. */
export const isLive = APP_STORE_URL !== null

export const legalNav = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/support', label: 'Support' },
] as const
