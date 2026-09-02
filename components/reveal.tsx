'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  /** Milliseconds to wait after the element enters the viewport. */
  delay?: number
  /** How far the element travels while fading in. */
  distance?: number
  as?: ElementType
  className?: string
}

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Every section uses this so the whole page shares one entrance motion.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 24,
  as: Tag = 'div',
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // `threshold: 0` deliberately: it fires as soon as any part of the element
    // overlaps the viewport. A fractional threshold looks equivalent on a card
    // but is a trap on anything taller than the viewport — an element 10x the
    // viewport height can never reach a ratio of 0.12, so it would stay
    // invisible forever. The negative bottom margin keeps the "reveals just
    // after it comes up" feel that the threshold was there for.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(
        'transition-[opacity,transform,filter] duration-[900ms] will-change-[opacity,transform]',
        className,
      )}
      style={{
        transitionTimingFunction: 'var(--ease-out-soft)',
        transitionDelay: shown ? `${delay}ms` : '0ms',
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translate3d(0, ${distance}px, 0)`,
        filter: shown ? 'none' : 'blur(6px)',
      }}
    >
      {children}
    </Tag>
  )
}
