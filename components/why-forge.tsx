import Link from 'next/link'
import { AppStoreCta } from '@/components/app-store-cta'
import { IPhone, Screenshot } from '@/components/iphone'
import { Reveal } from '@/components/reveal'

const points = [
  { title: 'The day has a finish.', text: 'The sword only comes out once the work is done.' },
  { title: 'No XP. No leaderboards.', text: 'Just the days you actually kept.' },
  { title: 'Yours alone.', text: 'No account. Your activities stay on your iPhone.', link: true },
]

export function WhyForge() {
  return (
    <section id="why" className="why" aria-labelledby="why-title">
      <div className="shell why-grid">
        <Reveal className="why-head">
          <p className="label">Why Forge</p>
          <h2 id="why-title" className="reveal-lines">
            <span className="line"><span>Not another</span></span>{' '}
            <span className="line" style={{ '--line': 1 } as React.CSSProperties}><span>habit tracker.</span></span>
          </h2>
        </Reveal>

        <div className="why-device">
          <IPhone className="why-phone">
            <Screenshot
              src="/screens/forge-earned-day.webp"
              alt="Forge Today: a four-day streak, sword in stone, and two of four daily activities completed"
              sizes="(max-width: 860px) 62vw, 300px"
            />
          </IPhone>
        </div>

        <div className="why-body">
          <ul className="why-points">
            {points.map((point, index) => (
              <Reveal as="li" key={point.title} delay={index * 90}>
                <h3>{point.title}</h3>
                <p>
                  {point.text}
                  {point.link && (
                    <>
                      {' '}
                      <Link href="/privacy">Privacy&nbsp;details</Link>
                    </>
                  )}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="why-cta" delay={120}>
            <AppStoreCta event="why_app_store_click" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
