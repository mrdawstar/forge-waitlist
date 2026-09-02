import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

interface LegalPageProps {
  eyebrow: string
  title: string
  intro?: string
  updated?: string
  children: React.ReactNode
}

/**
 * Shared shell for Privacy, Terms and Support: same ambient light, same
 * entrance, same measure. Long-form content sits in a narrower column than the
 * homepage so the lines stay readable.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: LegalPageProps) {
  return (
    <main className="grain relative min-h-dvh overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-14%] h-[460px] w-[460px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.62 0.18 256 / 55%) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl px-6 pt-12 sm:pt-16">
          <Reveal>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Forge
            </Link>
          </Reveal>

          <header className="mt-12 sm:mt-16">
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                <span className="text-gradient">{title}</span>
              </h1>
            </Reveal>
            {intro ? (
              <Reveal delay={160}>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {intro}
                </p>
              </Reveal>
            ) : null}
            {updated ? (
              <Reveal delay={200}>
                <p className="mt-6 font-mono text-xs tracking-[0.18em] text-muted-foreground/60">
                  LAST UPDATED {updated.toUpperCase()}
                </p>
              </Reveal>
            ) : null}
          </header>

          <div className="hairline my-12" />

          {/* Deliberately not wrapped in a reveal. This is a document that
              App Store review and regulators have to be able to read; it must
              not be able to depend on an observer firing. */}
          <div className="prose-forge pb-16">{children}</div>
        </div>

        <SiteFooter />
      </div>
    </main>
  )
}
