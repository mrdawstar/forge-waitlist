import { AppStoreCta } from '@/components/app-store-cta'
import { PhoneMockup } from '@/components/phone-mockup'

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-category">THE DAILY DISCIPLINE APP</p>
        <h1 id="hero-title">
          Build <span>yourself.</span>
        </h1>
        <p className="hero-description">
          Plan your day. Complete what matters.
          <br className="desktop-break" /> Pull the sword and earn the day.
        </p>
        <div className="hero-conversion">
          <AppStoreCta event="hero_app_store_click" />
          <p>Free on iPhone. No account needed.</p>
        </div>
        <a className="hero-demo-link" href="#try-forge">
          Try the ritual <span aria-hidden="true">↓</span>
        </a>
      </div>
      <figure className="hero-product">
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-screen">
          <PhoneMockup
            src="/screens/forge-today.webp"
            alt="The real Forge Today screen: your sword, daily streak, day and week planning, and activity panel"
            priority
          />
        </div>
        <figcaption>
          <span>PLAN. DO. EARN.</span>
          <span>FORGE ON IPHONE</span>
        </figcaption>
      </figure>
    </section>
  )
}
