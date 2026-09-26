'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { PhoneMockup } from '@/components/phone-mockup'

const stories = [
  {
    label: 'Your record',
    title: 'Your actions leave a record.',
    copy: 'See the days you kept, the habits that stuck, and the progress you can build on. A clear view of your consistency over time.',
    src: '/screens/activity-record.webp',
    alt: 'Forge Blade screen with a twelve-week activity record, chapter progress and personal milestones',
    number: '01',
  },
  {
    label: 'Your growth',
    title: 'See what you’re becoming.',
    copy: 'Your daily actions contribute to six parts of your life. See where you’re showing up — and where there’s room to grow.',
    src: '/screens/becoming.webp',
    alt: 'Forge Becoming screen with six dimensions: intellect, relationships, discipline, ambition, mental and physical',
    number: '02',
  },
  {
    label: 'Your blades',
    title: 'A blade you actually earned.',
    copy: 'Keep showing up. Build your streak and earn new blades as your record grows. Each one marks days of work behind you.',
    src: '/screens/blade-collection.webp',
    alt: 'The actual Forge blade collection: Rough, Struck, Shaped, Folded, Quenched, Edged and the locked Proven blade',
    number: '03',
  },
]

export function ProductStories() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  function navigate(event: KeyboardEvent<HTMLButtonElement>) {
    let next = active
    if (event.key === 'ArrowRight') next = (active + 1) % stories.length
    else if (event.key === 'ArrowLeft')
      next = (active + stories.length - 1) % stories.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = stories.length - 1
    else return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }
  return (
    <div className="product-stories">
      <div
        className="story-tabs"
        role="tablist"
        aria-label="Explore Forge progress"
      >
        {stories.map((story, i) => (
          <button
            key={story.label}
            id={`story-tab-${i}`}
            ref={(el) => {
              tabs.current[i] = el
            }}
            role="tab"
            aria-selected={i === active}
            aria-controls={`story-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={navigate}
          >
            {story.label}
          </button>
        ))}
      </div>
      {stories.map((story, i) => (
        <div
          key={story.label}
          id={`story-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`story-tab-${i}`}
          tabIndex={0}
          hidden={i !== active}
          className="story-panel"
        >
          <div className="story-copy">
            <span className="story-number">{story.number} / THE LONG GAME</span>
            <h3>{story.title}</h3>
            <p>{story.copy}</p>
          </div>
          <div className="story-visual">
            <PhoneMockup src={story.src} alt={story.alt} />
          </div>
        </div>
      ))}
    </div>
  )
}
