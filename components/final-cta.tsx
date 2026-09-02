import { AppStoreCta, CtaNote } from '@/components/app-store-cta'
import { Reveal } from '@/components/reveal'
import { isLive } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.62 0.18 256 / 60%) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        <Reveal>
          <p className="eyebrow">{isLive ? 'Available now' : 'Coming soon'}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            <span className="text-gradient">Start becoming.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {isLive
              ? 'Free, with nothing locked. Keep today, and then keep tomorrow.'
              : 'Forge is finished and heading to the App Store. Leave your email and you will hear the day it lands.'}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <AppStoreCta className="mx-auto mt-9 max-w-md items-center" />
          <CtaNote className="mt-4" />
        </Reveal>
      </div>
    </section>
  )
}
