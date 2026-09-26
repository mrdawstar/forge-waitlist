# Conversion update verification — 26 September 2026

## Automated and visual checks

- Production `npm run build`, TypeScript `npx tsc --noEmit`, and `git diff --check`: passed.
- Chromium desktop: 1440×1000. Mobile emulation: 320, 375, 390, 430×844, touch enabled, device scale 2. Hero, complete page, product tabs, earned state and success state inspected. No horizontal overflow at any tested width.
- Hero App Store badge ends around y=309–327 CSS pixels on the tested phones, ahead of the product screenshot.
- Mouse drag: short pull returns to the socket; sufficient upward pull completes the ritual. Selection requires 2–3 actions. A fourth action is rejected. All actions must be completed. Undo/recheck does not duplicate action-completion events.
- Touch: CDP touchStart/touchMove/touchEnd succeeds at all four widths; touchCancel keeps the day earned and permits another pull. These are browser emulation results, not physical-device Safari testing.
- Keyboard: Enter pulls the unlocked sword; replay resets the attempt. Product tabs support left/right/Home/End and selected-tab focus. Separate tap button completes the ritual without dragging.
- After the final sword/pedestal spacing correction: pull-instruction hit testing and successful drag rechecked at 320, 430, and 1440px. Instructions are no longer occluded by the socket.
- All five CTA placements (header, hero, demo success, final, footer): verified href and local conversion event. Navigation was prevented during click tests so the whole funnel could be observed. The links themselves are ordinary anchors to `https://apps.apple.com/app/id6797894749`.
- `/download` and `/downloand`: HTTP 307 with the expected App Store Location. `/privacy`, `/terms`, `/support`: HTTP 200, no mobile overflow. Old POST `/api/waitlist`: HTTP 410.
- No waitlist/signup/release-soon CTA, email capture, fabricated review, or rating on the public page. Historical Supabase code/schema is untouched.

## Loading, accessibility and limits

- Production local Chromium sample at 390px: observed CLS=0 during load/section scrolling; no failed displayed images. LCP around 96ms on localhost is a local sanity check, **not** a field-performance claim.
- Initial script responses totaled about 151KiB encoded (including framework bundles); the ritual module was not loaded at initial view. The hero selected its 480px WebP. Its screenshot dimensions and the preview's fixed-height placeholder reserve layout space. Below-fold screenshots are lazy loaded. Gesture updates use requestAnimationFrame and transforms.
- Reduced-motion preference: reveal content remains visible and blade motion transitions are effectively removed; tap alternative succeeded.
- JavaScript disabled: headline, real screenshot, product copy, privacy links, and App Store links remain. Preview explains that the interactive portion requires JavaScript; its otherwise inactive button is hidden.
- Semantic sections/headings, descriptive screenshot alt text, named checkbox/toggle controls, progress label, live instructions, focusable skip link, visible keyboard focus, and 44px-or-larger principal interaction targets checked.
- No uncaught page exceptions in desktop/mobile interaction tests. The standalone production server logs the expected 404 for `/_vercel/insights/script.js`: that endpoint is provided on an enabled Vercel deployment. Analytics ingestion, Vercel plan support, actual installs, and real-world conversion gains are not claimed as verified.
- No new runtime package, video, WebGL, continuous particle loop, or analytics backend was introduced. Existing lint script has no installed ESLint dependency; validation used TypeScript, the Next production build, browser flows, and source review.

Local browser captures are under ignored `output/playwright/` (hero/full/earned width captures, final-earned captures, production complete-page captures). Older captures may show intermediate layouts; final-earned captures include the last pedestal correction.
