import Link from 'next/link'
import { legalNav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-14 pt-10">
      <div className="hairline mb-10" />

      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="text-center sm:text-left">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.3em] text-foreground/80 transition-colors hover:text-foreground"
          >
            FORGE
          </Link>
          <p className="mt-3 max-w-xs text-pretty text-xs leading-relaxed text-muted-foreground/70">
            {site.tagline}. An iOS app by {site.owner}.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground/60 sm:text-left">
        {site.copyright}
      </p>
    </footer>
  )
}
