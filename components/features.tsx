'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { BookOpen, Check, Dumbbell, Hexagon, ListChecks, Swords, Wind } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/*  Card shell                                                                */
/* -------------------------------------------------------------------------- */

interface FeatureCardProps {
  index: string
  icon: typeof ListChecks
  title: string
  description: string
  visual: ReactNode
  shown: boolean
  delay: number
  className?: string
  /** Side-by-side copy and visual instead of stacked. */
  wide?: boolean
}

function FeatureCard({
  index,
  icon: Icon,
  title,
  description,
  visual,
  shown,
  delay,
  className,
  wide,
}: FeatureCardProps) {
  const ref = useRef<HTMLElement>(null)

  // Feed the cursor position to the .spotlight gradient.
  function onMouseMove(event: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <article
      ref={ref}
      data-reveal=""
      onMouseMove={onMouseMove}
      className={cn(
        'glass spotlight group relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8',
        'transition-[opacity,transform,border-color,box-shadow] duration-[900ms]',
        'hover:border-white/20 hover:shadow-[0_30px_80px_-40px_oklch(0.62_0.18_256_/_45%)]',
        wide ? 'lg:flex lg:items-center lg:gap-12 lg:p-10' : 'flex flex-col',
        className,
      )}
      style={{
        transitionTimingFunction: 'var(--ease-out-soft)',
        transitionDelay: shown ? `${delay}ms` : '0ms',
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translate3d(0, 28px, 0)',
      }}
    >
      {wide ? (
        <span className="absolute right-7 top-7 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground/50 sm:right-8 sm:top-8 lg:right-10 lg:top-10">
          {index}
        </span>
      ) : null}

      <div className={cn('relative', wide && 'lg:w-[38%] lg:shrink-0')}>
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/[0.06] ring-1 ring-white/10 transition-all duration-500 group-hover:bg-primary/15 group-hover:ring-primary/30">
            <Icon
              className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.75}
            />
          </span>
          {!wide ? (
            <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground/50">
              {index}
            </span>
          ) : null}
        </div>

        <h3 className="mt-7 text-balance text-xl font-semibold tracking-tight sm:text-[1.375rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <div
        className={cn(
          'relative',
          wide ? 'mt-8 lg:mt-0 lg:flex-1' : 'mt-8 flex-1 justify-end',
        )}
      >
        {visual}
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/*  01 — Daily Tasks                                                          */
/* -------------------------------------------------------------------------- */

const tasks = [
  { icon: BookOpen, name: 'Read', detail: 'Ten pages of paper', value: '10 pages' },
  { icon: Dumbbell, name: 'Push-ups', detail: 'Chest to the floor', value: '20' },
  { icon: Wind, name: 'Stretch', detail: 'Five minutes on the floor', value: '5 min' },
]

function TasksVisual({ shown }: { shown: boolean }) {
  return (
    <div className="rounded-[1.25rem] border border-white/[0.07] bg-black/40 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[0.625rem] tracking-[0.25em] text-muted-foreground">
          TODAY
        </span>
        <span className="flex flex-1 gap-1.5">
          {tasks.map((task, i) => (
            <span
              key={task.name}
              className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/10"
            >
              <span
                className="block h-full origin-left rounded-full bg-primary transition-transform duration-[900ms]"
                style={{
                  transitionTimingFunction: 'var(--ease-out-expo)',
                  transitionDelay: `${500 + i * 260}ms`,
                  transform: shown && i < 2 ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </span>
          ))}
        </span>
      </div>

      <ul className="mt-4">
        {tasks.map((task, i) => {
          const done = i < 2
          const TaskIcon = task.icon
          return (
            <li
              key={task.name}
              className="flex items-center gap-3.5 border-t border-white/[0.06] py-3.5 first:border-t-0 first:pt-1"
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms',
                transitionTimingFunction: 'var(--ease-out-soft)',
                transitionDelay: `${240 + i * 120}ms`,
                opacity: shown ? 1 : 0,
                transform: shown ? 'none' : 'translate3d(0, 10px, 0)',
              }}
            >
              <TaskIcon
                className="h-4 w-4 shrink-0 text-foreground/60"
                strokeWidth={1.75}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-foreground/90">
                  {task.name}
                </span>
                <span className="block truncate text-xs text-muted-foreground/70">
                  {task.detail}
                </span>
              </span>
              <span className="text-xs text-muted-foreground">{task.value}</span>
              <span
                className={cn(
                  'flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-500',
                  done
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-white/15',
                )}
                style={{
                  transitionTimingFunction: 'var(--ease-out-expo)',
                  transitionDelay: `${560 + i * 260}ms`,
                  transform: shown && done ? 'scale(1)' : done ? 'scale(0.4)' : 'none',
                  opacity: shown || !done ? 1 : 0,
                }}
              >
                {done ? <Check className="h-3 w-3" strokeWidth={3.5} /> : null}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  02 — Blade Progress                                                       */
/* -------------------------------------------------------------------------- */

const WEEKS = 12
const DAYS = 7
/** Deterministic so the server and the client agree on the pattern. */
const heatmap = Array.from({ length: WEEKS * DAYS }, (_, i) => {
  const wave = Math.sin(i * 1.71) * 0.5 + Math.cos(i * 0.83) * 0.5
  const week = Math.floor(i / DAYS)
  // The last few days of the twelve weeks are still ahead, so leave them empty.
  const future = week === WEEKS - 1 && i % DAYS > 2 ? 0 : 1
  return Math.max(0, Math.min(1, wave * 0.55 + 0.55)) * future
})

const RING_RADIUS = 19
const RING_LENGTH = 2 * Math.PI * RING_RADIUS
const RING_PROGRESS = 56 / 60

function BladeVisual({ shown }: { shown: boolean }) {
  return (
    <div className="rounded-[1.25rem] border border-white/[0.07] bg-black/40 p-5 backdrop-blur-sm">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[0.625rem] tracking-[0.25em] text-muted-foreground">
          LAST TWELVE WEEKS
        </span>
        <span className="text-xs text-muted-foreground/80">48 days</span>
      </div>

      <div
        className="mx-auto mt-4 grid max-w-[26rem] grid-flow-col gap-[3px]"
        style={{
          gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${WEEKS}, minmax(0, 1fr))`,
        }}
        aria-hidden
      >
        {heatmap.map((level, i) => {
          const week = Math.floor(i / DAYS)
          const day = i % DAYS
          return (
            <span
              key={i}
              className="aspect-[3/2] rounded-[2px]"
              style={{
                background:
                  level < 0.28
                    ? 'oklch(1 0 0 / 4%)'
                    : `oklch(1 0 0 / ${(5 + level * 17).toFixed(1)}%)`,
                transitionProperty: 'opacity, transform',
                transitionDuration: '520ms',
                transitionTimingFunction: 'var(--ease-out-soft)',
                transitionDelay: `${180 + (week * 2 + day) * 12}ms`,
                opacity: shown ? 1 : 0,
                transform: shown ? 'none' : 'scale(0.4)',
              }}
            />
          )
        })}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-white/[0.06] pt-4">
        <span className="relative h-11 w-11 shrink-0">
          <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90">
            <circle
              cx="22"
              cy="22"
              r={RING_RADIUS}
              fill="none"
              stroke="oklch(1 0 0 / 10%)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r={RING_RADIUS}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={RING_LENGTH}
              strokeDashoffset={
                shown ? RING_LENGTH * (1 - RING_PROGRESS) : RING_LENGTH
              }
              style={{
                transitionProperty: 'stroke-dashoffset',
                transitionDuration: '1400ms',
                transitionTimingFunction: 'var(--ease-out-expo)',
                transitionDelay: '520ms',
              }}
            />
          </svg>
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-2">
            <span className="font-mono text-[0.625rem] tracking-[0.25em] text-muted-foreground/70">
              NEXT BLADE
            </span>
            <span className="whitespace-nowrap text-xs text-muted-foreground">
              56 / 60
            </span>
          </span>
          <span className="mt-1 block text-sm font-medium text-foreground/90">
            Champion Sword
          </span>
        </span>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  03 — What you're building                                                 */
/* -------------------------------------------------------------------------- */

/**
 * The six parts of a person the app files every activity under, drawn as the
 * Shape: a hexagon whose reach on each axis is how much of the last four weeks
 * went there. The numbers are illustrative of a real, lopsided week.
 */
const dimensions = [
  { label: 'Physical', value: 71 },
  { label: 'Intellect', value: 52 },
  { label: 'Discipline', value: 64 },
  { label: 'Mental', value: 45 },
  { label: 'Relationship', value: 18 },
  { label: 'Ambition', value: 38 },
] as const

const CENTRE = 100
const RADIUS = 62

/** Unit vector for axis `i`, starting at the top and going clockwise. */
function axis(i: number) {
  const angle = ((-90 + i * (360 / dimensions.length)) * Math.PI) / 180
  return { x: Math.cos(angle), y: Math.sin(angle) }
}

function ring(scale: number) {
  return dimensions
    .map((_, i) => {
      const { x, y } = axis(i)
      return `${(CENTRE + x * RADIUS * scale).toFixed(2)},${(CENTRE + y * RADIUS * scale).toFixed(2)}`
    })
    .join(' ')
}

function shapePoints() {
  return dimensions
    .map((d, i) => {
      const { x, y } = axis(i)
      const r = RADIUS * (d.value / 100)
      return `${(CENTRE + x * r).toFixed(2)},${(CENTRE + y * r).toFixed(2)}`
    })
    .join(' ')
}

function ShapeVisual({ shown }: { shown: boolean }) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="relative w-full max-w-[15rem] shrink-0">
        <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden>
          {/* guide rings */}
          {[0.35, 0.7, 1].map((scale) => (
            <polygon
              key={scale}
              points={ring(scale)}
              fill="none"
              stroke="oklch(1 0 0 / 7%)"
              strokeWidth="1"
            />
          ))}
          {/* spokes */}
          {dimensions.map((d, i) => {
            const { x, y } = axis(i)
            return (
              <line
                key={d.label}
                x1={CENTRE}
                y1={CENTRE}
                x2={CENTRE + x * RADIUS}
                y2={CENTRE + y * RADIUS}
                stroke="oklch(1 0 0 / 6%)"
                strokeWidth="1"
              />
            )
          })}
          {/* the shape itself */}
          <polygon
            points={shapePoints()}
            fill="oklch(0.62 0.18 256 / 22%)"
            stroke="oklch(0.68 0.17 256)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{
              transformOrigin: '100px 100px',
              transitionProperty: 'opacity, transform',
              transitionDuration: '1100ms',
              transitionTimingFunction: 'var(--ease-out-expo)',
              transitionDelay: '260ms',
              opacity: shown ? 1 : 0,
              transform: shown ? 'scale(1)' : 'scale(0.4)',
            }}
          />
          {dimensions.map((d, i) => {
            const { x, y } = axis(i)
            const r = RADIUS * (d.value / 100)
            return (
              <circle
                key={d.label}
                cx={CENTRE + x * r}
                cy={CENTRE + y * r}
                r="2.5"
                fill="oklch(0.74 0.16 256)"
                style={{
                  transitionProperty: 'opacity',
                  transitionDuration: '600ms',
                  transitionTimingFunction: 'var(--ease-out-soft)',
                  transitionDelay: `${700 + i * 70}ms`,
                  opacity: shown ? 1 : 0,
                }}
              />
            )
          })}
        </svg>
      </div>

      <ul className="grid w-full grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-1 sm:gap-y-2.5">
        {dimensions.map((d, i) => (
          <li
            key={d.label}
            className="flex items-center gap-3"
            style={{
              transitionProperty: 'opacity, transform',
              transitionDuration: '600ms',
              transitionTimingFunction: 'var(--ease-out-soft)',
              transitionDelay: `${300 + i * 70}ms`,
              opacity: shown ? 1 : 0,
              transform: shown ? 'none' : 'translate3d(0, 8px, 0)',
            }}
          >
            <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
              {d.label}
            </span>
            <span className="h-1 w-14 shrink-0 overflow-hidden rounded-full bg-white/10 sm:w-20">
              <span
                className="block h-full origin-left rounded-full bg-primary"
                style={{
                  transitionProperty: 'transform',
                  transitionDuration: '1000ms',
                  transitionTimingFunction: 'var(--ease-out-expo)',
                  transitionDelay: `${420 + i * 70}ms`,
                  transform: shown ? `scaleX(${d.value / 100})` : 'scaleX(0)',
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* -------------------------------------------------------------------------- */

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      // threshold 0, not a fraction: this grid is taller than the viewport, and
      // a fractional ratio can be unreachable on a short screen.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="Three parts, one practice."
        description="The day, the record it leaves, and the shape it builds."
      />

      <div
        ref={ref}
        className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-4 sm:max-w-lg md:max-w-2xl lg:max-w-5xl lg:grid-cols-12"
      >
        <FeatureCard
          index="01"
          icon={ListChecks}
          title="The day you earn"
          description="A short list of what today asks of you. Finish all of it and the blade comes loose — then you pull it free yourself."
          shown={shown}
          delay={0}
          className="lg:col-span-7"
          visual={<TasksVisual shown={shown} />}
        />
        <FeatureCard
          index="02"
          icon={Swords}
          title="A record that cannot flatter you"
          description="Every day you kept is counted from what you actually did. Blades and milestones follow. Nothing already earned is ever taken away."
          shown={shown}
          delay={110}
          className="lg:col-span-5"
          visual={<BladeVisual shown={shown} />}
        />
        <FeatureCard
          index="03"
          icon={Hexagon}
          title="What you’re building"
          description="Every activity belongs to one of six parts of a person, so Forge can show you the shape of the last four weeks — not just its size. Choose which to build, and it aims what it suggests at them."
          shown={shown}
          delay={220}
          className="lg:col-span-12"
          wide
          visual={<ShapeVisual shown={shown} />}
        />
      </div>
    </section>
  )
}
