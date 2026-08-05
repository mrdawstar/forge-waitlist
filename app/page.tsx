import { Hero } from '@/components/hero'
import { Showcase } from '@/components/showcase'
import { Features } from '@/components/features'
import { FinalCta } from '@/components/final-cta'

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

        <footer className="mx-auto max-w-5xl border-t border-border px-6 py-10">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
              FORGE
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Forge. Built for those who show up.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
