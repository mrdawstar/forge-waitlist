# Forge conversion update — 26 September 2026

## Design decisions

The first viewport names the category (daily discipline app), explains planning/completion/the sword, and puts the official App Store badge before the product visual. The mobile header is limited to the actual icon, FORGE, and iPhone context. The original dark palette, typography, sword asset, application icon, and supplied app screenshots remain.

The conversion rhythm is hero download → sample ritual → earned-day download → product evidence → final download. The sample ritual is explicitly a preview, not a saved day or a claim that the website is the iOS app. It loads on approach to the viewport. Only the handle captures vertical gestures; the rest of the page scrolls normally. Keyboard and tap alternatives avoid requiring a drag.

Three manually selected product stories show the real record, Becoming, and blade collection. This replaces a long sequence of similar screenshot cards. Removed repeated philosophy, decorative sword branding, handmade Apple icon buttons, and the unverified-review prompt. No unverifiable ratings or testimonials are published. Existing Next.js hosting, download redirects, legal routes, and Vercel Analytics remain.

## Reference review

These sites were inspected as hierarchy/interaction references, not copied or used as sources of Forge claims:

- [Opal](https://www.opalapp.com/): a specific benefit and direct download action alongside distinctive product presentation. Forge uses a clear category and ritual rather than Opal's proof/claims.
- [Structured](https://structured.app/): strong consumer-app identity. Its large lifestyle-video treatment was not adopted; Forge's real product and badge remain visible early on mobile.
- [Stoic](https://www.getstoic.com/): restrained benefit-led copy and calm presentation. Forge avoids a large opening overlay and keeps the decision path short.
- [Things](https://culturedcode.com/things/): product-specific explanations and actual interface evidence.
- [Apple marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/): original black badge, accessible link, minimum size and clear space, unmodified/unrotated artwork, Apple attribution in the footer. Screenshots use a plain mount without invented hardware features.

Official badge source: [Apple SVG](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg). The local SVG is unchanged. Screenshot delivery adds 480px encodings alongside the 960px versions, preserving the full UI and aspect ratio.

## Conversion measurement

`lib/conversion-events.ts` provides the existing Vercel Analytics integration and a local `forge:conversion` browser event. No new analytics backend or dependency was added. Development emits only the browser event. Production also calls Vercel `track`; navigation never waits for analytics.

| Event                    | Trigger                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| `hero_app_store_click`   | Hero badge                                                       |
| `demo_started`           | First action selection, once per sample day                      |
| `demo_action_completed`  | First completion of each action, avoiding undo/recheck inflation |
| `demo_sword_pulled`      | Successful pull or keyboard/tap alternative, once per sample day |
| `demo_app_store_click`   | Success badge or static preview fallback badge                   |
| `final_app_store_click`  | Closing badge                                                    |
| `header_app_store_click` | Desktop header download link                                     |
| `footer_app_store_click` | Footer download link                                             |

Payloads contain only action count, completed count, and input method where applicable. No action names, personal text, user IDs, or saved preview state. Replay starts another sample-day attempt. The website section of the privacy policy describes these events; the audited iOS TelemetryDeck disclosures remain intact.

Measure outbound clicks per visit by source/device and placement, then the demo-start → sword-pull → demo-download funnel. Clicks are not downloads: use App Store Connect data to assess installation outcomes. Do not claim a conversion lift until there is real comparative data.

[Vercel custom events](https://vercel.com/docs/analytics/custom-events) require a supported paid plan and Web Analytics enabled on the deployment. The hooks are implemented and locally verified; server-side receipt/account entitlements have not been verified. The provider-independent browser event remains available if that setup changes.
