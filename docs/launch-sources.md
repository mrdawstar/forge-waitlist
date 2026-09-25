# Launch content sources — 25 September 2026

## Product images

The five user-supplied screenshots are the source of truth. Their complete UI and aspect ratio are preserved; only image size/encoding changes for delivery.

- IMG_5100.PNG → public/screens/forge-today.webp
- IMG_4444 2.PNG → public/screens/blade-progress.webp
- IMG_4445 2.PNG → public/screens/blade-collection.webp
- IMG_4442 2.PNG → public/screens/activity-record.webp
- IMG_4440 2.PNG → public/screens/becoming.webp

Sword and icon: matching app artwork from forge-ios Assets.xcassets/sword-layer.imageset and AppIcon.appiconset. No generated UI or simulated product screenshots.

## Ratings and reviews

App: https://apps.apple.com/app/id6797894749
Polish storefront: https://apps.apple.com/pl/app/forge-build-yourself/id6797894749

Apple's PL and US lookup endpoints returned userRatingCount: 0 and averageUserRating: 0 on the verification date. The public PL page stated that there were not enough ratings/reviews for an overview; the public PL and US customer review feeds returned no entries. These results do not establish that no reviews exist in any storefront.

The user supplied review text, but requested App Store verification. It could not be independently matched to a public review. The site therefore links to real App Store reviews without publishing unsupported scores, counts, quotes, or invented reviewer identities. Replace this fallback only with verified data and record its source, storefront and date.

## Privacy

Source of truth: mrdawstar/forge-ios, branch feat/telemetry, commit 677ecf5, PR #2.
Read directly from Forge/Engine/ForgeTelemetry.swift, Forge/Views/Settings/SettingsTabView.swift and docs/APP_STORE.md (updated 2026-09-25).

- Anonymous usage sharing defaults on; Settings → Privacy → Share anonymous usage disables it.
- Closed event values/counts and days_since_install; no user-entered content, chosen schedule times, or HealthKit readings.
- SDK 2.14.2 metadata includes app/device/OS, screen/orientation, language/locale/region/time zone, appearance/accessibility and session/installation information.
- SDK automatic session event is disabled; session metadata can still accompany explicit events.
- Purchase/paywall/trial/restore event definitions currently have no call sites. Do not describe them as active collection.
- No account, cloud sync, or AI service is active in this build.

Reference: https://telemetrydeck.com/docs/ingest/default-parameters/
Reference: https://telemetrydeck.com/docs/guides/privacy-faq/

Existing website Vercel hosting/analytics is preserved. The old email endpoint now returns HTTP 410 and cannot write new addresses. Historical Supabase schema/storage is retained; no existing records are deleted.
