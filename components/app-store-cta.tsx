'use client'

import { APP_STORE_URL } from '@/lib/site'
import { trackConversion, type ConversionEvent } from '@/lib/conversion-events'
import { cn } from '@/lib/utils'

type DownloadEvent = Extract<ConversionEvent, `${string}_app_store_click`>

/**
 * Apple's badge artwork, unmodified and never animated. The anchor supplies
 * the required clear space (a quarter of the badge height) and hover/press states.
 */
export function AppStoreCta({ className, event }: { className?: string; event: DownloadEvent }) {
  return (
    <a
      href={APP_STORE_URL}
      className={cn('app-store-badge', className)}
      aria-label="Download Forge on the App Store"
      onClick={() => trackConversion(event)}
      data-conversion={event}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- Apple's vector artwork, served as supplied */}
      <img src="/badges/download-on-the-app-store.svg" alt="" width={150} height={50} />
    </a>
  )
}

/** A plain text action where a second badge would crowd the layout. */
export function DownloadLink({
  event,
  className,
  children = 'Get Forge',
  label,
}: {
  event: DownloadEvent
  className?: string
  children?: React.ReactNode
  label?: string
}) {
  return (
    <a
      href={APP_STORE_URL}
      onClick={() => trackConversion(event)}
      data-conversion={event}
      aria-label={label}
      className={cn('download-link', className)}
    >
      {children}
    </a>
  )
}
