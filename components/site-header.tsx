import Link from 'next/link'
import { Sword } from 'lucide-react'
import { AppStoreCta } from '@/components/app-store-cta'

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="Forge home">
        <Sword aria-hidden="true" size={25} strokeWidth={1.3} />
        FORGE
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        <a href="#experience">The experience</a>
        <a href="#inside-forge">Inside Forge</a>
      </nav>
      <AppStoreCta compact />
    </header>
  )
}
