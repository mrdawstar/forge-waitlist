'use client'

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  delay?: number
  distance?: number
  as?: ElementType
  className?: string
}

/** Content is visible without JavaScript. Only offscreen content is animated. */
export function Reveal({
  children,
  delay = 0,
  distance = 24,
  as: Tag = 'div',
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!el || motion.matches || !('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    el.dataset.pending = 'true'
    const show = () => {
      delete el.dataset.pending
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
      },
      { threshold: 0, rootMargin: '0px 0px -32px 0px' },
    )
    observer.observe(el)
    motion.addEventListener('change', show)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', show)
      show()
    }
  }, [])
  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn('reveal', className)}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-distance': `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  )
}
