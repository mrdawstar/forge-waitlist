import Image from 'next/image'
import { AppStoreCta, CtaNote } from '@/components/app-store-cta'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="final-cta section-pad" aria-labelledby="final-title">
      <div className="final-word" aria-hidden="true">
        FORGE
      </div>
      <Reveal className="final-content">
        <Image
          src="/forge-icon.webp"
          alt=""
          width={72}
          height={72}
          className="final-icon"
        />
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS TODAY</p>
        <h2 id="final-title">
          Build a day.
          <br />
          <span className="muted-type">Build yourself.</span>
        </h2>
        <p>You bring the effort. Forge gives it a shape.</p>
        <AppStoreCta />
        <CtaNote />
      </Reveal>
    </section>
  )
}
