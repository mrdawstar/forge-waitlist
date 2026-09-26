import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/** A plain screenshot mount, not a simulated Apple device. Full UI is preserved. */
export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: PhoneMockupProps) {
  const small = src.replace('.webp', '-480.webp')
  return (
    <div className={cn('screen-mount', className)}>
      {/* Responsive local encodings avoid a server image request and keep the UI unchanged. */}
      <img
        src={src}
        srcSet={`${small} 480w, ${src} 960w`}
        sizes="(max-width: 600px) 190px, 300px"
        alt={alt}
        width={1320}
        height={2868}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  )
}
