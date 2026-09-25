import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/** The complete supplied screenshot, at its original aspect ratio. */
export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className={cn('phone-frame', className)}>
      <Image
        src={src}
        alt={alt}
        width={1320}
        height={2868}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        sizes="(max-width: 600px) 68vw, (max-width: 1000px) 32vw, 320px"
      />
    </div>
  )
}
