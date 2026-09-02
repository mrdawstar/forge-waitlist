import { Hero } from '@/components/hero'
import { Showcase } from '@/components/showcase'
import { Features } from '@/components/features'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="grain relative min-h-dvh overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl">
        <Hero />

        <div className="hairline mx-auto max-w-5xl" />
        <Showcase />

        <div className="hairline mx-auto max-w-5xl" />
        <Features />

        <FinalCta />

        <SiteFooter />
      </div>
    </main>
  )
}
