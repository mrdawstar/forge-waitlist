import Image from 'next/image'
import Link from 'next/link'
import { DownloadLink } from '@/components/app-store-cta'

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link href="/" className="brand" aria-label="Forge home">
        <Image src="/forge-icon.webp" width={36} height={36} alt="" />
        FORGE
      </Link>
      <nav aria-label="Main navigation">
        <a href="#try-forge">Try the ritual</a>
        <a href="#inside-forge">Inside Forge</a>
      </nav>
      <DownloadLink event="header_app_store_click" className="header-download">
        Download Forge
      </DownloadLink>
      <span className="mobile-brand-note">FOR IPHONE</span>
    </header>
  )
}
