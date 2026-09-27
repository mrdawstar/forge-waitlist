'use client'

import { useEffect, useRef, useState } from 'react'
import { IPhone, Screenshot } from '@/components/iphone'
import { trackConversion } from '@/lib/conversion-events'

const steps = [
  {
    name: 'Plan',
    title: 'Give the day a ',
    accent: 'direction.',
    text: 'Choose what matters and place it in your day or your week.',
    src: '/screens/forge-today.webp',
    alt: 'Forge Today with Today and Week planning and a daily challenge',
  },
  {
    name: 'Earn',
    title: 'Every day you keep is a ',
    accent: 'strike.',
    text: 'Finish the plan, pull the sword, and your blade is reforged.',
    src: '/screens/blade-progress.webp',
    alt: 'Forge Blade: the Edged Sword, with three days to go until the Proven Sword',
  },
  {
    name: 'Record',
    title: 'Your actions leave a ',
    accent: 'record.',
    text: 'Twelve weeks of kept days, and chapters with a purpose.',
    src: '/screens/activity-record.webp',
    alt: 'Forge record: the chapter Creating yourself and a twelve-week grid of kept days',
  },
  {
    name: 'Become',
    title: 'See who you’re ',
    accent: 'becoming.',
    text: 'Six parts of you, scored from your last four weeks.',
    src: '/screens/becoming.webp',
    alt: 'Forge Becoming: a radar chart of six areas of growth with an overall score of 57',
  },
]

/**
 * A pinned iPhone whose screen follows the scroll: one step per stretch of
 * page. Every step's text stays in the document, so nothing depends on motion.
 */
export function ProductTour() {
  const section = useRef<HTMLElement>(null)
  const seen = useRef(new Set<number>())
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = section.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const range = rect.height - window.innerHeight
      const progress = range > 0 ? Math.min(0.9999, Math.max(0, -rect.top / range)) : 0
      const step = Math.floor(progress * steps.length)
      setActive(step)
      if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0 && !seen.current.has(step)) {
        seen.current.add(step)
        trackConversion('tour_step_viewed', { step: step + 1 })
      }
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  function show(index: number) {
    const el = section.current
    if (!el) return
    const range = el.offsetHeight - window.innerHeight
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: el.offsetTop + range * ((index + 0.5) / steps.length),
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  return (
    <section
      id="tour"
      ref={section}
      className="tour"
      aria-labelledby="tour-title"
      style={{ '--steps': steps.length } as React.CSSProperties}
    >
      <div className="tour-sticky">
        <div className="shell tour-grid">
          <div className="tour-copy">
            <h2 id="tour-title" className="label">How Forge works</h2>
            <ol className="tour-steps">
              {steps.map((step, index) => (
                <li
                  key={step.name}
                  className="tour-step"
                  data-state={index === active ? 'active' : index < active ? 'past' : 'next'}
                >
                  <p className="tour-name">
                    <span>0{index + 1}</span>
                    {step.name}
                  </p>
                  <h3>{step.title}<span className="text-accent">{step.accent}</span></h3>
                  <p className="tour-text">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="tour-rail">
              {steps.map((step, index) => (
                <button
                  key={step.name}
                  type="button"
                  aria-label={`Step ${index + 1}: ${step.name}`}
                  aria-current={index === active ? 'step' : undefined}
                  onClick={() => show(index)}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
          <div className="tour-device">
            <IPhone className="tour-phone">
              {steps.map((step, index) => (
                <Screenshot
                  key={step.name}
                  src={step.src}
                  alt={step.alt}
                  sizes="(max-width: 860px) 240px, 330px"
                  active={index === active}
                />
              ))}
            </IPhone>
          </div>
        </div>
      </div>
    </section>
  )
}
