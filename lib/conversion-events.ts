import { track } from '@vercel/analytics'

/** Every App Store link is tagged with where on the page it was clicked. */
export type ConversionEvent =
  | 'header_app_store_click'
  | 'hero_app_store_click'
  | 'why_app_store_click'
  | 'final_app_store_click'
  | 'footer_app_store_click'
  | 'tour_step_viewed'

export type ConversionProperties = {
  step?: number
}

/** Placement and step index only: never personal data. */
export function trackConversion(
  name: ConversionEvent,
  properties: ConversionProperties = {},
) {
  if (typeof window === 'undefined') return
  // A provider-independent hook also makes the funnel verifiable locally.
  window.dispatchEvent(
    new CustomEvent('forge:conversion', { detail: { name, properties } }),
  )
  // Custom events require a supported Vercel plan. No navigation waits on analytics.
  if (process.env.NODE_ENV === 'production') {
    try {
      track(name, properties)
    } catch {
      /* Analytics must never interrupt the product. */
    }
  }
}
