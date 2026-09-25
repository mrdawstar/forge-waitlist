import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { APP_STORE_REVIEWS_URL } from '@/lib/site'

/** No rating/quotes until a verifiable source is supplied. See docs/launch-sources.md. */
export function StoreProof() {
  return (
    <Reveal className="store-proof shell">
      <div className="store-proof-identity">
        <Image
          src="/forge-icon.webp"
          alt="Forge app icon"
          width={64}
          height={64}
        />
        <div>
          <p className="eyebrow">ON THE APP STORE</p>
          <h2>Forge. In your own hands.</h2>
        </div>
      </div>
      <p>
        Explore the app and read the latest
        <br className="desktop-break" /> ratings and reviews on the App Store.
      </p>
      <a href={APP_STORE_REVIEWS_URL} className="text-link">
        Read the reviews <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </Reveal>
  )
}
