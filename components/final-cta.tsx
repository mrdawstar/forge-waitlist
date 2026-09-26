import Image from 'next/image'
import { AppStoreCta } from '@/components/app-store-cta'

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <Image
        src="/forge-icon.webp"
        alt="Forge app icon"
        width={64}
        height={64}
      />
      <h2 id="final-title">
        Tomorrow is another
        <br />
        day to keep.
      </h2>
      <p>Make your next one count with Forge.</p>
      <AppStoreCta event="final_app_store_click" />
      <span>Free on iPhone. No account needed.</span>
    </section>
  )
}
