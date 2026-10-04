# Launch content sources — 4 October 2026

## Product images

The user-supplied screenshots from 4 October are the current visual source. Their complete UI and aspect ratio are preserved; only image size/encoding changes for delivery (480px and 960px WebP, quality 88).

- IMG_5407.PNG → public/screens/forge-today.webp (hero and Plan)
- IMG_5401.PNG → public/screens/blade-progress.webp (Earn)
- IMG_5403.PNG → public/screens/activity-record.webp (hero and Record)
- IMG_5404.PNG → public/screens/becoming.webp (hero and Become)
- IMG_5406.PNG → public/screens/arcs.webp (Arcs)
- IMG_5405.PNG → public/screens/ask-forge.webp (Ask Forge, labelled Forge Pro)
- IMG_5409.PNG → public/screens/forge-earned-day.webp (Why Forge)

IMG_5402.PNG is omitted because the blade collection does not need a separate screen in the tour. The old, unused blade-collection assets were removed.

Sword and icon: matching app artwork from forge-ios Assets.xcassets/sword-layer.imageset and AppIcon.appiconset. No generated UI or simulated product screenshots.

## Ratings and reviews

App: https://apps.apple.com/app/id6797894749
Polish storefront: https://apps.apple.com/pl/app/forge-build-yourself/id6797894749

Apple's PL and US lookup endpoints returned userRatingCount: 0 and averageUserRating: 0 on the verification date. The public PL page stated that there were not enough ratings/reviews for an overview; the public PL and US customer review feeds returned no entries. These results do not establish that no reviews exist in any storefront.

The user supplied review text, but requested App Store verification. It could not be independently matched to a public review. The conversion-focused revision uses product proof instead of a review section, without publishing unsupported scores, counts, quotes, or invented reviewer identities. Replace this fallback only with verified data and record its source, storefront and date.

## Privacy

Current product-data source: the owner-supplied `privacy-policy.md`, “Forge Privacy Policy — the 1.1 changes”, dated 2026-10-04. The public page incorporates its substantive content, without publishing editorial notes. This replaces the earlier 1.0.1 privacy description. Website/support, developer details, analytics metadata and rights sections remain in place.

- Local record now includes onboarding answers, Arcs, Ask Forge history, widgets/Live Activity and export/import backups.
- Apple Health reads steps, workout minutes, sleep and mindful minutes; raw readings stay on-device.
- Forge Pro adds StoreKit purchases and anonymous purchase/trial/paywall/restore events.
- Optional AI requires consent and an explicit request, uses Forge’s Supabase server and OpenAI, and verifies Pro access using Apple’s signed purchase record.
- AI request counts and technical logs are separate from conversation content. No unverified 14-day automatic deletion or AI hosting-region guarantee is published.
- Clarified that an AI identifier associates requests with an installation/purchase, and that information typed into shared text is included in the request.
- OpenAI API data controls checked on 2026-10-04: no model training by default; abuse-monitoring retention generally up to 30 days, with stated exceptions. Requesting no response storage does not remove abuse-monitoring retention.
- Homepage, support and existing terms were aligned with Pro, optional AI and backups.

References:
- https://developers.openai.com/api/docs/guides/your-data
- https://openai.com/policies/
- https://telemetrydeck.com/docs/ingest/default-parameters/
- https://telemetrydeck.com/docs/guides/privacy-faq/

Existing website Vercel hosting/analytics is preserved. The old email endpoint now returns HTTP 410 and cannot write new addresses. Historical Supabase schema/storage is retained; no existing records are deleted.
