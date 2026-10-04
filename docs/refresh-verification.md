# Screenshot and privacy refresh — 4 October 2026

- Updated seven selected product screenshots, each with 480px and 960px WebP versions. Preserved the supplied UI and aspect ratio.
- Checked the six tour buttons at 1440px, 390px and 320px: each activates the correct screenshot; no document horizontal overflow.
- Visually reviewed desktop hero, mobile hero, mobile Ask Forge tour and mobile privacy page.
- Privacy page includes all eleven main sections, plus the short-version callout, with the new Pro/AI/backup content and 4 October date. Editorial notes are excluded.
- TypeScript check passed (`npm exec tsc -- --noEmit --incremental false`).
- Production build passed (`npm run build -- --webpack`). Default Turbopack encountered a local sandbox port-binding error; no bundler configuration was changed.
- `git diff --check` passed.
- Local browser console contains the expected unavailable Vercel Analytics endpoint (`/_vercel/insights/script.js`); no application runtime errors observed.

Local review captures (ignored by Git): `output/playwright/refresh-desktop.png`, `refresh-mobile.png`, `refresh-mobile-ai.png`, `refresh-privacy.png`.
