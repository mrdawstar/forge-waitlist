import Image from 'next/image'
import { AppStoreCta } from '@/components/app-store-cta'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <Reveal className="shell final-inner">
        <Image className="final-icon" src="/forge-icon.webp" alt="" width={88} height={88} />
        <h2 id="final-title" className="reveal-lines">
          <span className="line"><span>Tomorrow is another</span></span>{' '}
          <span className="line" style={{ '--line': 1 } as React.CSSProperties}><span>day to keep.</span></span>
        </h2>
        <p className="final-lede">Plan it tonight. <span className="text-accent">Earn</span> it tomorrow.</p>
        <div className="final-actions">
          <AppStoreCta event="final_app_store_click" />
          <div className="final-qr">
            {/* eslint-disable-next-line @next/next/no-img-element -- static vector */}
            <img src="/app-store-qr.svg" alt="QR code linking to Forge on the App Store" width={88} height={88} loading="lazy" />
            <p>On a computer? Scan with your iPhone camera.</p>
          </div>
        </div>
        <p className="final-note">Free · No account · Requires iOS 26</p>
      </Reveal>
    </section>
  )
}
