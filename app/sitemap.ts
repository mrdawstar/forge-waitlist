import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/support`, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
