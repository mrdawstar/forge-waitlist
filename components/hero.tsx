import { WaitlistForm } from '@/components/waitlist-form'
import { PhoneMockup } from '@/components/phone-mockup'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-8 pt-20 sm:pt-28">
      {/* ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.62 0.18 256 / 55%) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto flex max-w-md flex-col items-center text-center lg:max-w-6xl lg:flex-row lg:items-center lg:gap-16 lg:text-left">
        <div className="flex-1">
          <div className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            FORGE FOR iOS
          </div>

          <h1
            className="animate-rise text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.08s' }}
          >
            <span className="text-gradient">
              Become who you&apos;re capable of becoming.
            </span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg"
            style={{ animationDelay: '0.16s' }}
          >
            Forge is an iOS app that helps you build discipline through daily
            missions, habits and AI guidance.
          </p>

          <div
            className="animate-rise mt-9"
            style={{ animationDelay: '0.24s' }}
          >
            <WaitlistForm className="mx-auto max-w-md lg:mx-0" />
            <p className="mt-4 text-xs tracking-wide text-muted-foreground/70">
              Early access. No spam. Leave whenever you like.
            </p>
          </div>
        </div>

        {/* hero device */}
        <div
          className="animate-rise relative mt-16 w-full max-w-[260px] shrink-0 lg:mt-0 lg:max-w-[320px]"
          style={{ animationDelay: '0.32s' }}
        >
          <div className="animate-floaty [transform:perspective(1600px)_rotateY(-14deg)_rotateX(4deg)]">
            <PhoneMockup
              src="/screens/forge-home.jpeg"
              alt="Forge iOS app home screen showing today's missions"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
