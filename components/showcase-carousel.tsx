'use client'

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneMockup } from '@/components/phone-mockup'
import { cn } from '@/lib/utils'

interface Screen {
  src: string
  alt: string
  label: string
  caption: string
}

const screens: Screen[] = [
  {
    src: '/screens/forge-home.jpeg',
    alt: 'The Forge tab: the sword in the stone above today’s list of activities',
    label: 'Forge',
    caption: 'Today’s list, and nothing else asking for your attention.',
  },
  {
    src: '/screens/forge-sword.jpeg',
    alt: 'The sword in the stone, ready to be pulled once the day is complete',
    label: 'The pull',
    caption: 'Finish everything and the blade comes loose. You still have to drag it out.',
  },
  {
    src: '/screens/blade.jpeg',
    alt: 'The Blade tab: twelve weeks of history, blades earned and the next milestone',
    label: 'Blade',
    caption: 'Twelve weeks of proof, counted from what you actually did.',
  },
]

const LEN = screens.length
/** Cards rendered either side of the centre card. */
const HALF = 3
const SLOTS = HALF * 2 + 1
const AUTOPLAY_MS = 5200
/** Slightly under-damped, so a slide settles with a hint of give. */
const STIFFNESS = 130
const DAMPING = 19

const mod = (n: number, m: number) => ((n % m) + m) % m
const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v))

interface Metrics {
  card: number
  step: number
  height: number
}

/**
 * Depth of a card, purely as a function of how far it sits from the centre.
 * Used by the animation loop and by the first render, so the markup a visitor
 * receives already has every card in the right place.
 */
function depth(offset: number, step: number, blur: boolean) {
  const distance = Math.abs(offset)
  const scale = clamp(1 - distance * 0.115, 0.55, 1)
  const rotate = clamp(-offset * 7, -21, 21)
  return {
    transform:
      `translate3d(calc(-50% + ${(offset * step).toFixed(2)}px), ${(distance * 16).toFixed(2)}px, 0)` +
      ` rotateY(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`,
    opacity: clamp(1 - distance * 0.42, 0, 1).toFixed(3),
    zIndex: String(100 - Math.round(distance * 10)),
    filter: blur ? `blur(${Math.min(distance * 1.6, 5).toFixed(2)}px)` : 'none',
    pointerEvents: distance < 0.5 ? 'auto' : 'none',
  } as const
}

function measure(width: number): Metrics {
  const narrow = width < 520
  const card = narrow
    ? Math.min(232, width * 0.63)
    : width < 780
      ? 240
      : width < 1000
        ? 256
        : 272
  // Tighter spacing on phones so the next card still peeks past the edge.
  return { card, step: card * (narrow ? 1.08 : 1.16), height: card * (19.3 / 9) }
}

export function ShowcaseCarousel() {
  const frameRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLSpanElement>(null)
  const loopRef = useRef<number | null>(null)
  const lastTime = useRef(0)

  // `position` is a float index into an endless strip of cards. The animation
  // loop owns it; React only learns about it when the centred card changes.
  const position = useRef(0)
  const target = useRef(0)
  const velocity = useRef(0)
  const elapsed = useRef(0)

  const paused = useRef(false)
  const dragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartPos = useRef(0)
  const sample = useRef({ x: 0, t: 0, v: 0 })
  const wheelAccum = useRef(0)

  const metrics = useRef<Metrics>(measure(1024))
  const reduced = useRef(false)

  // `base` is the committed integer index of the centre slot. Card contents and
  // card transforms are both derived from it, so they can never disagree.
  const [base, setBase] = useState(0)
  const baseRef = useRef(0)
  const [dims, setDims] = useState<Metrics>(() => measure(1024))
  const [ready, setReady] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const active = mod(base, LEN)
  const current = screens[active]

  /* ---------------------------------------------------------------- layout */

  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    const apply = (width: number) => {
      if (!width) return
      const next = measure(width)
      metrics.current = next
      setDims((prev) => (prev.card === next.card ? prev : next))
    }
    apply(el.clientWidth)
    const observer = new ResizeObserver(([entry]) =>
      apply(entry.contentRect.width),
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      reduced.current = query.matches
    }
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  /* -------------------------------------------------------------- painting */

  const paint = useCallback(() => {
    const { step } = metrics.current
    for (let slot = 0; slot < SLOTS; slot++) {
      const el = cardRefs.current[slot]
      if (!el) continue
      const offset = baseRef.current + (slot - HALF) - position.current
      const style = depth(offset, step, !reduced.current)
      el.style.transform = style.transform
      el.style.opacity = style.opacity
      el.style.zIndex = style.zIndex
      el.style.filter = style.filter
      el.style.pointerEvents = style.pointerEvents
    }
  }, [])

  // Content and transforms are swapped together, inside the same commit.
  useLayoutEffect(() => {
    baseRef.current = base
    paint()
  }, [base, dims, paint])

  /* -------------------------------------------------------------- rAF loop */

  const tick = useCallback(
    (now: number) => {
      const dt = Math.min((now - lastTime.current) / 1000, 1 / 30)
      lastTime.current = now

      if (dragging.current) {
        velocity.current = 0
      } else if (reduced.current) {
        position.current = target.current
      } else {
        const delta = target.current - position.current
        velocity.current += (STIFFNESS * delta - DAMPING * velocity.current) * dt
        position.current += velocity.current * dt
        if (Math.abs(delta) < 0.0005 && Math.abs(velocity.current) < 0.001) {
          position.current = target.current
          velocity.current = 0
        }
      }

      // Autoplay lives in the same loop, so the progress bar can never drift
      // away from the slide it is describing.
      const running =
        !paused.current &&
        !dragging.current &&
        !reduced.current &&
        !document.hidden
      if (running) {
        elapsed.current += dt * 1000
        if (elapsed.current >= AUTOPLAY_MS) {
          elapsed.current = 0
          target.current = Math.round(target.current) + 1
        }
      }
      if (progressRef.current) {
        const ratio = clamp(elapsed.current / AUTOPLAY_MS, 0, 1)
        progressRef.current.style.transform = `scaleX(${ratio.toFixed(4)})`
      }

      paint()
      const rounded = Math.round(position.current)
      if (rounded !== baseRef.current) setBase(rounded)

      loopRef.current = requestAnimationFrame(tick)
    },
    [paint],
  )

  // Only animate while the carousel is on screen.
  useEffect(() => {
    const el = frameRef.current
    if (!el) return

    const start = () => {
      if (loopRef.current !== null) return
      lastTime.current = performance.now()
      loopRef.current = requestAnimationFrame(tick)
    }
    const stop = () => {
      if (loopRef.current === null) return
      cancelAnimationFrame(loopRef.current)
      loopRef.current = null
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true)
          start()
        } else {
          stop()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      stop()
    }
  }, [tick])

  /* ------------------------------------------------------------ navigation */

  const goBy = useCallback((delta: number) => {
    target.current = Math.round(target.current) + delta
    elapsed.current = 0
  }, [])

  const goToLogical = useCallback((index: number) => {
    const settled = Math.round(target.current)
    let diff = index - mod(settled, LEN)
    if (diff > LEN / 2) diff -= LEN
    if (diff < -LEN / 2) diff += LEN
    target.current = settled + diff
    elapsed.current = 0
  }, [])

  /* ------------------------------------------------------------------ drag */

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    dragging.current = true
    dragStartX.current = event.clientX
    dragStartPos.current = position.current
    sample.current = { x: event.clientX, t: performance.now(), v: 0 }
    elapsed.current = 0
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    const { step } = metrics.current
    position.current =
      dragStartPos.current - (event.clientX - dragStartX.current) / step
    target.current = position.current

    const now = performance.now()
    const dt = now - sample.current.t
    if (dt > 8) {
      const instant = -(event.clientX - sample.current.x) / step / (dt / 1000)
      // Smooth the sampled velocity so a jittery finish can't overshoot.
      sample.current = {
        x: event.clientX,
        t: now,
        v: sample.current.v * 0.55 + instant * 0.45,
      }
    }

    paint()
    const rounded = Math.round(position.current)
    if (rounded !== baseRef.current) setBase(rounded)
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    dragging.current = false
    setIsDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    // Project where the flick was heading, then settle on the nearest card.
    const projected = position.current + sample.current.v * 0.16
    target.current = Math.round(
      clamp(projected, position.current - 2, position.current + 2),
    )
    velocity.current = clamp(sample.current.v, -14, 14)
    sample.current.v = 0
  }

  /* ----------------------------------------------------------------- wheel */

  useEffect(() => {
    const el = frameRef.current
    if (!el) return

    const onWheel = (event: WheelEvent) => {
      // Claim clearly horizontal gestures only; vertical stays with the page.
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.2) return
      event.preventDefault()
      wheelAccum.current += event.deltaX
      if (Math.abs(wheelAccum.current) >= metrics.current.step * 0.45) {
        goBy(Math.sign(wheelAccum.current))
        wheelAccum.current = 0
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [goBy])

  /* -------------------------------------------------------------- keyboard */

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goBy(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goBy(1)
    }
  }

  const pause = useCallback(() => {
    paused.current = true
  }, [])
  const resume = useCallback(() => {
    paused.current = false
  }, [])

  return (
    <div className="relative">
      <div
        ref={frameRef}
        className="group/carousel relative"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
      >
        <div
          data-reveal=""
          className="transition-[opacity,transform] duration-1000"
          style={{
            transitionTimingFunction: 'var(--ease-out-soft)',
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translate3d(0, 28px, 0) scale(0.96)',
          }}
        >
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Forge app screens"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className={cn(
              'mask-edges relative touch-pan-y select-none rounded-3xl outline-none',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
            style={{
              height: dims.height + 72,
              perspective: '1800px',
              perspectiveOrigin: '50% 45%',
            }}
          >
            {Array.from({ length: SLOTS }, (_, slot) => {
              const screen = screens[mod(base + slot - HALF, LEN)]
              const isCentre = slot === HALF
              return (
                <div
                  key={slot}
                  ref={(el) => {
                    cardRefs.current[slot] = el
                  }}
                  aria-hidden={!isCentre}
                  className="absolute left-1/2 top-9 will-change-transform [&_img]:pointer-events-none"
                  style={{
                    width: dims.card,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    ...depth(slot - HALF, dims.step, true),
                  }}
                >
                  <PhoneMockup
                    src={screen.src}
                    alt={isCentre ? screen.alt : ''}
                    priority={isCentre}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Arrows: desktop only, surfacing when the carousel is hovered. */}
        {(['prev', 'next'] as const).map((dir) => {
          const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
          return (
            <button
              key={dir}
              type="button"
              onClick={() => goBy(dir === 'prev' ? -1 : 1)}
              aria-label={dir === 'prev' ? 'Previous screen' : 'Next screen'}
              className={cn(
                'glass absolute top-1/2 z-[200] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full md:flex',
                'text-foreground/70 opacity-0 transition-all duration-500 hover:text-foreground',
                'hover:border-white/25 hover:bg-white/[0.09] active:scale-95',
                'group-hover/carousel:opacity-100 focus-visible:opacity-100',
                dir === 'prev'
                  ? 'left-1 group-hover/carousel:translate-x-1 lg:left-4'
                  : 'right-1 group-hover/carousel:-translate-x-1 lg:right-4',
              )}
              style={{ transitionTimingFunction: 'var(--ease-out-soft)' }}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </button>
          )
        })}
      </div>

      {/* Caption + progress dots */}
      <div className="relative mt-7 flex flex-col items-center gap-5">
        <div className="h-[4.75rem] sm:h-[4.25rem]">
          <div key={active} className="animate-rise text-center">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-foreground/90">
              {current.label}
            </p>
            <p className="mx-auto mt-3 max-w-[17rem] text-pretty text-sm leading-relaxed text-muted-foreground sm:max-w-sm">
              {current.caption}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {screens.map((screen, i) => {
            const isActive = i === active
            return (
              <button
                key={screen.src}
                type="button"
                onClick={() => goToLogical(i)}
                aria-label={`Show the ${screen.label} screen`}
                aria-current={isActive}
                className={cn(
                  'relative h-2 overflow-hidden rounded-full transition-all duration-500',
                  isActive
                    ? 'w-10 bg-white/15'
                    : 'w-2 bg-white/20 hover:bg-white/45',
                )}
                style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
              >
                {isActive ? (
                  <span
                    ref={progressRef}
                    className="absolute inset-0 origin-left rounded-full bg-primary"
                    style={{ transform: 'scaleX(0)' }}
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {`${current.label} screen, ${active + 1} of ${LEN}`}
      </p>
    </div>
  )
}
