import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const title = 'Forge — Become who you\'re capable of becoming'
const description =
  'Forge is an iOS app that helps you build discipline through daily missions, habits and AI guidance. Join the waitlist.'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forge.app',
  ),
  title,
  description,
  applicationName: 'Forge',
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title,
    description:
      'Build discipline through daily missions, habits and AI guidance. Join the waitlist.',
    siteName: 'Forge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      'Build discipline through daily missions, habits and AI guidance. Join the waitlist.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Scroll reveals are driven by IntersectionObserver; without scripts
            the content must simply be there. */}
        <noscript>
          <style>{`[data-reveal],.animate-rise{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
