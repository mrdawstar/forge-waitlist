# Launch website verification — 25 September 2026

- `npm run build`: passes (Next.js 16.3, static homepage/legal pages/social image).
- `tsc --noEmit`: passes.
- `git diff --check`: passes.
- Browser layout checks at 320, 375, 390, 540, 768, 820, 1024 and 1440 px: no document horizontal overflow.
- Visual inspection of desktop hero/full page, tablet hero, mobile hero/ritual/product gallery, mobile privacy policy and social preview.
- All three primary App Store buttons point directly to `https://apps.apple.com/app/id6797894749`.
- `/download` and `/downloand`: HTTP 307 to the same App Store URL.
- Retired `/api/waitlist` POST: HTTP 410; no database write or email collection.
- No signup form, prelaunch CTA or old screenshots remain in rendered pages.
- All product images loaded successfully in the mobile scroll check.
- Buffered Layout Shift observer recorded no layout-shift entries during the mobile load/scroll session. This is a local browser check, not a field performance score.
- No browser console errors. A development-only Next Image LCP warning appeared for an offscreen, lazy-loaded screenshot after programmatic scrolling; the above-fold main screenshot is eager/high priority.
- Reduced-motion emulation: reveal content visible, hero/sword animations disabled.
- JavaScript disabled: reveal content visible and App Store link functional.
- Privacy checked against `forge-ios` / `feat/telemetry`, commit `677ecf5`, including inactive purchase events and automatically attached SDK metadata.

Local screenshots are in ignored `output/playwright/`. Rating/review provenance and screenshot mappings are in `launch-sources.md`.
