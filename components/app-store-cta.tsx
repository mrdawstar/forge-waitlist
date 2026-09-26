'use client'

import Image from 'next/image'
import { APP_STORE_URL } from '@/lib/site'
import { trackConversion, type ConversionEvent } from '@/lib/conversion-events'
import { cn } from '@/lib/utils'

type DownloadEvent = Extract<ConversionEvent, `${string}_app_store_click`>

/** Apple's original artwork, unmodified. The container supplies clear space. */
export function AppStoreCta({
  className,
  event,
}: {
  className?: string
  event: DownloadEvent
}) {
  return (
    <a
      href={APP_STORE_URL}
      className={cn('app-store-badge', className)}
      aria-label="Download Forge on the App Store"
      onClick={() => trackConversion(event)}
      data-conversion={event}
    >
      <Image
        src="/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={180}
        height={60}
        unoptimized
      />
    </a>
  )
}

export function DownloadLink({
  event,
  className,
  children = 'Get Forge',
}: {
  event: DownloadEvent
  className?: string
  children?: React.ReactNode
}) {
  return (
    <a
      href={APP_STORE_URL}
      onClick={() => trackConversion(event)}
      data-conversion={event}
      className={cn('download-link', className)}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
