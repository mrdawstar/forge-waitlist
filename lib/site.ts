/** Shared product facts and destinations. */
export const site = {
  name: 'Forge',
  tagline: 'Build Yourself',
  url: 'https://forgebetter.app',
  owner: 'Davyd Bubnov',
  copyright: '© 2026 Davyd Bubnov',
  supportEmail: 'forge.discipline.daily@gmail.com',
  privacyEmail: 'forge.discipline.daily@gmail.com',
  country: 'Poland',
  minimumAge: 13,
  legalUpdated: '25 September 2026',
  privacyUpdated: '27 September 2026',
} as const

export const APP_STORE_URL = 'https://apps.apple.com/app/id6797894749'
export const APP_STORE_REVIEWS_URL =
  'https://apps.apple.com/pl/app/forge-build-yourself/id6797894749?see-all=reviews'

export const legalNav = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
] as const
