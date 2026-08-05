'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { BookOpen, Check, Dumbbell, ListChecks, Route, Swords, Wind } from 'lucide-react'
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
/*  03 — Choose Your Path                                                     */
/* -------------------------------------------------------------------------- */

// Tints stay in the site's blue, just at different depths, so the row reads as
// one family rather than three unrelated colours.
const paths = [
  {
    tag: 'Solitude',
    name: 'The Vigil',
    line: 'You are what you do when nobody is watching.',
    tint: 'oklch(0.62 0.18 256 / 26%)',
  },
  {
    tag: 'Discipline',
    name: 'The Ledger',
    line: 'Small debts, paid daily, become a fortune.',
    tint: 'oklch(0.55 0.09 256 / 22%)',
  },
  {
    tag: 'Stillness',
    name: 'The Quiet',
    line: 'The calm is not a reward. It is the practice.',
    tint: 'oklch(0.48 0.04 256 / 20%)',
  },
]

function PathsVisual({ shown }: { shown: boolean }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div
      className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3"
      onMouseLeave={() => setHovered(0)}
    >
      {paths.map((path, i) => {
        const isActive = i === hovered
        return (
          // Outer element owns the scroll reveal, inner element owns the hover
          // lift, so the two transforms never fight over the same property.
          <div
            key={path.name}
            style={{
              transitionProperty: 'opacity, transform',
              transitionDuration: '700ms',
              transitionTimingFunction: 'var(--ease-out-soft)',
              transitionDelay: shown ? `${i * 90}ms` : '0ms',
              opacity: shown ? 1 : 0,
              transform: shown ? 'none' : 'translate3d(0, 20px, 0)',
            }}
          >
            <div
              onMouseEnter={() => setHovered(i)}
              className={cn(
                'relative flex items-center gap-3.5 overflow-hidden rounded-[1.125rem] border p-4',
                'sm:aspect-[3/4] sm:flex-col sm:items-stretch sm:justify-end sm:gap-0',
                'transition-[transform,border-color] duration-500 will-change-transform',
                isActive
                  ? 'border-white/20 sm:-translate-y-1'
                  : 'border-white/[0.07]',
              )}
              style={{
                transitionTimingFunction: 'var(--ease-out-soft)',
                background: `linear-gradient(165deg, ${path.tint} 0%, oklch(0.06 0 0 / 90%) 62%), oklch(0.07 0 0)`,
              }}
            >
              <span
                className={cn(
                  'shrink-0 rounded-full px-2 py-1 text-center font-mono text-[0.5625rem] uppercase tracking-[0.18em] transition-colors duration-500',
                  'min-w-[5.75rem] sm:absolute sm:left-4 sm:top-4 sm:min-w-0',
                  isActive
                    ? 'bg-white/15 text-foreground/90'
                    : 'bg-white/[0.07] text-muted-foreground',
                )}
              >
                {path.tag}
              </span>

              <span className="relative min-w-0">
                <span className="block text-sm font-semibold tracking-tight text-foreground/95">
                  {path.name}
                </span>
                <span
                  className={cn(
                    'mt-1.5 block text-pretty text-[0.6875rem] leading-snug text-muted-foreground transition-opacity duration-500',
                    isActive ? 'opacity-100' : 'opacity-100 sm:opacity-55',
                  )}
                >
                  {path.line}
                </span>
              </span>
            </div>
          </div>
        )
      })}
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
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="Three ways Forge sharpens you."
        description="The work, the proof, and the mindset behind both."
      />

      <div
        ref={ref}
        className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-4 sm:max-w-lg md:max-w-2xl lg:max-w-5xl lg:grid-cols-12"
      >
        <FeatureCard
          index="01"
          icon={ListChecks}
          title="Daily Tasks"
          description="A focused set of tasks every day. Discipline is built by finishing them, not by planning them."
          shown={shown}
          delay={0}
          className="lg:col-span-7"
          visual={<TasksVisual shown={shown} />}
        />
        <FeatureCard
          index="02"
          icon={Swords}
          title="Blade Progress"
          description="Every day you show up is recorded. Keep the streak and the blade you carry grows with you."
          shown={shown}
          delay={110}
          className="lg:col-span-5"
          visual={<BladeVisual shown={shown} />}
        />
        <FeatureCard
          index="03"
          icon={Route}
          title="Choose Your Path"
          description="Follow a path drawn from characters who were forged by the same thing you are facing."
          shown={shown}
          delay={220}
          className="lg:col-span-12"
          wide
          visual={<PathsVisual shown={shown} />}
        />
      </div>
    </section>
  )
}
