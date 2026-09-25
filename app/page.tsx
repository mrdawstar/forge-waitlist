import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { LaunchProof, Experience } from '@/components/experience'
import { Features } from '@/components/features'
import { Showcase } from '@/components/showcase'
import { StoreProof } from '@/components/store-proof'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

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
        <LaunchProof />
        <Experience />
        <Features />
        <Showcase />
        <StoreProof />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
