import Image from 'next/image'
import Link from 'next/link'
import { DownloadLink } from '@/components/app-store-cta'
import { legalNav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <Link href="/" className="brand">
            <Image src="/forge-icon.webp" width={28} height={28} alt="" />
            <span>FORGE</span>
          </Link>
          <nav aria-label="Footer">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <DownloadLink event="footer_app_store_click">App Store</DownloadLink>
          </nav>
        </div>
        <div className="footer-legal">
          <span>{site.copyright}</span>
          <p>
            Apple and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries and regions.
            App Store is a service mark of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
