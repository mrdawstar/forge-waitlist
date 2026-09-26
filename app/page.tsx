import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductTour } from '@/components/product-tour'
import { WhyForge } from '@/components/why-forge'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { APP_STORE_URL, site } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

// Only facts the App Store listing supports: no rating is claimed.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Forge: Build Yourself',
  operatingSystem: 'iOS 26 or later',
  applicationCategory: 'LifestyleApplication',
  url: site.url,
  downloadUrl: APP_STORE_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function Page() {
  return (
    <div className="launch-site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProductTour />
        <WhyForge />
        <FinalCta />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
