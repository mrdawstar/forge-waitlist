import Image from 'next/image'
import Link from 'next/link'
import { DownloadLink } from '@/components/app-store-cta'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Forge home">
          <Image src="/forge-icon.webp" width={32} height={32} alt="" loading="eager" />
          <span>FORGE</span>
        </Link>
        <nav aria-label="Main">
          <a href="#tour">How it works</a>
          <a href="#why">Why Forge</a>
        </nav>
        <DownloadLink event="header_app_store_click" className="header-cta" label="Get Forge on the App Store" />
      </div>
    </header>
  )
}
