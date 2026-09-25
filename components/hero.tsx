import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { AppStoreCta, CtaNote } from '@/components/app-store-cta'
import { PhoneMockup } from '@/components/phone-mockup'

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-word" aria-hidden="true">
        FORGE
      </div>
      <div className="hero-copy">
        <p className="eyebrow hero-entrance">
          <span className="status-dot" /> FORGE — THE DISCIPLINE APP
        </p>
        <h1 id="hero-title" className="hero-entrance hero-title">
          Build
          <br />
          <span>Yourself.</span>
        </h1>
        <p className="hero-description hero-entrance">
          The person you want to be is built daily.
          <br />
          Plan your day. Keep your word. Earn the pull.
        </p>
        <div className="hero-actions hero-entrance">
          <AppStoreCta />
          <a className="text-link" href="#experience">
            Find your edge <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <CtaNote className="hero-entrance" />
      </div>
      <div className="hero-product hero-entrance">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-device-back">
          <PhoneMockup
            src="/screens/becoming.webp"
            alt="Forge Becoming: personal growth across six areas, based on your own activity record"
          />
        </div>
        <div className="hero-device-front">
          <PhoneMockup
            src="/screens/forge-today.webp"
            alt="Forge Today: your sword, daily streak, planning controls and activity panel"
            priority
          />
        </div>
        <div className="product-annotation">
          <span /> A DAILY PRACTICE.
          <br />
          <strong>A DIFFERENT YOU.</strong>
        </div>
      </div>
      <div className="hero-bottom">
        <span>DISCIPLINE IS A PRACTICE.</span>
        <a href="#experience" aria-label="Explore the Forge experience">
          <ArrowDown size={16} />
        </a>
        <span>MAKE IT YOURS.</span>
      </div>
    </section>
  )
}
