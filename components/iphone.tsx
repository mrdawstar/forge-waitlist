import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * A generic, CSS-drawn iPhone frame. Every measurement is in container units
 * (cqw), so one component renders crisply at any width. The screen holds one
 * or more <Screenshot>s; the frame never alters them.
 */
export function IPhone({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('iphone', className)}>
      <div className="iphone-body">
        <div className="iphone-screen">{children}</div>
      </div>
    </div>
  )
}

interface ScreenshotProps {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  active?: boolean
}

/** A real Forge screenshot, shipped as 480w and 960w WebP encodings. */
export function Screenshot({ src, alt, sizes, priority = false, active }: ScreenshotProps) {
  const small = src.replace('.webp', '-480.webp')
  return (
    // eslint-disable-next-line @next/next/no-img-element -- pre-sized local encodings
    <img
      src={src}
      srcSet={`${small} 480w, ${src} 960w`}
      sizes={sizes}
      alt={alt}
      width={960}
      height={2086}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable={false}
      data-active={active}
    />
  )
}
