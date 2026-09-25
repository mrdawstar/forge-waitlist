import Link from 'next/link'
import { Sword, ArrowUpRight } from 'lucide-react'
import { legalNav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Link href="/" className="wordmark">
          <Sword size={23} strokeWidth={1.3} aria-hidden="true" />
          FORGE
        </Link>
        <p>Built with intention. Used with purpose.</p>
        <a href="/download" className="text-link">
          Get Forge <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>{site.copyright}</p>
        <nav aria-label="Footer">
          {legalNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <span>Build Yourself.</span>
      </div>
    </footer>
  )
}
