import { Flag, BookOpen, CalendarDays, ArrowUpRight } from 'lucide-react'
import { PhoneMockup } from '@/components/phone-mockup'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: CalendarDays,
    title: 'A plan with purpose.',
    text: 'Plan your day and week around what you want to build. Give good intentions a place in your schedule.',
  },
  {
    icon: Flag,
    title: 'A challenge to grow into.',
    text: 'Step beyond the familiar with daily challenges. Accept one, follow through, and take something from it.',
  },
  {
    icon: BookOpen,
    title: 'Space to reflect.',
    text: 'Review your week. Notice what worked. Set a direction for your next chapter with a little more self-knowledge.',
  },
]

export function Features() {
  return (
    <section
      className="progress-section section-pad"
      aria-labelledby="progress-title"
    >
      <div className="shell">
        <Reveal className="section-topline">
          <span className="eyebrow">02 / BUILT OVER TIME</span>
          <span className="section-aside">
            SMALL ACTIONS. A LASTING RECORD.
          </span>
        </Reveal>
        <div className="progress-grid">
          <Reveal className="progress-visual">
            <span className="progress-watermark" aria-hidden="true">
              BECOME.
            </span>
            <div className="progress-phone">
              <PhoneMockup
                src="/screens/blade-progress.webp"
                alt="Forge Blade: earned sword, progress to the next blade and your current chapter"
              />
            </div>
            <span className="image-caption">YOUR EFFORT, MADE VISIBLE.</span>
          </Reveal>
          <div className="progress-copy">
            <Reveal>
              <h2 id="progress-title" className="display-title">
                You don’t change
                <br />
                in a day.
                <br />
                <span className="muted-type">You change daily.</span>
              </h2>
              <p className="body-copy">
                Build streaks. Earn blades. Watch a collection of ordinary days
                become a record of who you’re becoming.
              </p>
            </Reveal>
            <div className="feature-list">
              {features.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 60} className="feature-row">
                  <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <a href="#inside-forge" className="text-link">
              Take a closer look <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
