import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className, priority }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19.3] w-full select-none rounded-[2.6rem] p-[3px]',
        'bg-gradient-to-b from-white/25 via-white/5 to-white/15',
        'shadow-[0_2px_1px_rgba(255,255,255,0.15)_inset,0_40px_120px_-20px_rgba(0,0,0,0.9)]',
        className,
      )}
    >
      {/* titanium rail */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.45rem] bg-black ring-1 ring-black/60">
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 80vw, 380px"
          className="object-cover object-top"
        />

        {/* dynamic island */}
        <div className="absolute left-1/2 top-[1.6%] z-10 h-[3.2%] w-[34%] -translate-x-1/2 rounded-full bg-black" />

        {/* subtle screen sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
      </div>
    </div>
  )
}
