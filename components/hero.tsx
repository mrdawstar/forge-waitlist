import { AppStoreCta } from '@/components/app-store-cta'
import { IPhone, Screenshot } from '@/components/iphone'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-copy">
        <h1 id="hero-title" className="hero-title">
          <span className="line"><span>Build</span></span>{' '}
          <span className="line"><span>yourself.</span></span>
        </h1>
        <p className="hero-lede">
          The discipline app for iPhone. Plan your day, do the work, and pull the sword once the day is earned.
        </p>
        <div className="hero-cta">
          <AppStoreCta event="hero_app_store_click" />
          <p className="hero-note">Free download · Optional Forge Pro</p>
        </div>
      </div>

      <div className="hero-devices">
        <IPhone className="hero-phone hero-phone-side hero-phone-left">
          <Screenshot
            src="/screens/activity-record.webp"
            alt="Forge Blade: a twelve-week activity record, analytics and personal milestones"
            sizes="(max-width: 700px) 50vw, 250px"
          />
        </IPhone>
        <IPhone className="hero-phone hero-phone-main">
          <Screenshot
            src="/screens/forge-today.webp"
            alt="Forge Today: the sword, your day count, Today and Week planning, and a daily challenge"
            sizes="(max-width: 700px) 64vw, 310px"
            priority
          />
        </IPhone>
        <IPhone className="hero-phone hero-phone-side hero-phone-right">
          <Screenshot
            src="/screens/becoming.webp"
            alt="Forge Becoming: six areas of growth and an overall score of 89"
            sizes="(max-width: 700px) 50vw, 250px"
          />
        </IPhone>
      </div>
    </section>
  )
}
