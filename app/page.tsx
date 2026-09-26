import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RitualPreview } from '@/components/ritual-preview'
import { ProductStories } from '@/components/product-stories'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function Page() {
  return (
    <div className="launch-site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <section
          id="try-forge"
          className="ritual-section shell"
          aria-labelledby="ritual-title"
        >
          <Reveal className="section-intro">
            <p className="eyebrow">A SMALL TASTE OF FORGE</p>
            <h2 id="ritual-title">
              Don’t just check a box.
              <br />
              <span>Earn the pull.</span>
            </h2>
            <p>Try a sample day. The last action unlocks the sword.</p>
          </Reveal>
          <RitualPreview />
          <ol className="ritual-explainer">
            <li>
              <span>01 / PLAN</span>
              <h3>Choose what matters.</h3>
              <p>Give today a few clear intentions.</p>
            </li>
            <li>
              <span>02 / DO</span>
              <h3>Follow through.</h3>
              <p>Complete your activities, one by one.</p>
            </li>
            <li>
              <span>03 / EARN</span>
              <h3>Make the day yours.</h3>
              <p>Pull the sword. Carry the progress forward.</p>
            </li>
          </ol>
        </section>
        <section
          id="inside-forge"
          className="inside-section shell"
          aria-labelledby="inside-title"
        >
          <Reveal className="section-intro">
            <p className="eyebrow">MORE THAN A FINISHED TO-DO LIST</p>
            <h2 id="inside-title">
              A day becomes
              <br />
              <span>a body of work.</span>
            </h2>
          </Reveal>
          <ProductStories />
          <div className="more-features">
            <div>
              <h3>Challenges</h3>
              <p>Give yourself something to commit to.</p>
            </div>
            <div>
              <h3>Reviews</h3>
              <p>Reflect on what worked. Adjust what didn’t.</p>
            </div>
            <div>
              <h3>Chapters</h3>
              <p>Give your longer-term progress a direction.</p>
            </div>
          </div>
        </section>
        <Reveal className="privacy-note shell">
          <ShieldCheck size={25} strokeWidth={1.4} aria-hidden="true" />
          <div>
            <h2>Personal growth. Personal space.</h2>
            <p>
              No account needed. Your entries stay on your device.
              <br className="desktop-break" /> Anonymous usage analytics are
              optional. <Link href="/privacy">Your privacy</Link>
            </p>
          </div>
        </Reveal>
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
