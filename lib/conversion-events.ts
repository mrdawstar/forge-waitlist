import { track } from '@vercel/analytics'

export type ConversionEvent =
  | 'hero_app_store_click'
  | 'header_app_store_click'
  | 'demo_started'
  | 'demo_action_completed'
  | 'demo_sword_pulled'
  | 'demo_app_store_click'
  | 'final_app_store_click'
  | 'footer_app_store_click'

export type ConversionProperties = {
  action_count?: number
  completed_count?: number
  input?: 'pointer' | 'keyboard' | 'button'
}

/** Only aggregate counts and input method: never action labels or personal text. */
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
