# Forge landing page — 27 September 2026

## Structure

1. **Hero** — "Build yourself.", one sentence saying what Forge is, the official App Store badge, "Free on iPhone · No account needed", and three real screens in iPhone frames (Today in front).
2. **How Forge works** — a pinned iPhone whose screen changes with the scroll: Plan → Earn → Record → Become. One idea and one real screen per step; the rail under the text jumps to a step.
3. **Why Forge** — three short differentiators (the day has a finish, no XP/leaderboards, no account) beside the blade collection, then the badge.
4. **Final** — app icon, "Tomorrow is another day to keep.", badge, and a QR code for desktop visitors (hidden on touch devices).

The sticky header keeps the Forge icon, the wordmark and a "Get Forge" pill on every screen. The interactive sword demo was removed.

## Product imagery

Screens are the unaltered screenshots in `public/screens/` (480w and 960w WebP). The iPhone frame is drawn in CSS (`components/iphone.tsx`) and scales with container units. It is a generic frame, not Apple's product artwork. For strict adherence to Apple's product-image guidance, swap it for the official device frames from Apple Design Resources.

## Apple branding

Apple's black "Download on the App Store" SVG is unchanged: no animation, a quarter of its height as clear space, one badge per screen, and hover states on the container only. Trademark credit is in the footer. No ratings, reviews or download counts are shown (the listing had none on 22–27 September 2026).

## Motion

Hero headline line reveal, lede/badge fade-up, iPhones rising, and scroll-linked parallax on the hero and "Why" screens (CSS scroll timelines where supported). Section headings reveal line by line on entry. Tour steps crossfade. Motion is transform/opacity only and is disabled under `prefers-reduced-motion` (tour steps still switch, instantly).

## Conversion measurement

`lib/conversion-events.ts` sends Vercel Analytics custom events in production and a local `forge:conversion` browser event everywhere.

| Event                    | Trigger                                   |
| ------------------------ | ----------------------------------------- |
| `header_app_store_click` | Header "Get Forge"                        |
| `hero_app_store_click`   | Hero badge                                |
| `why_app_store_click`    | Badge after "Why Forge"                   |
| `final_app_store_click`  | Closing badge                             |
| `footer_app_store_click` | Footer App Store link                     |
| `tour_step_viewed`       | First view of each tour step (`step` 1–4) |

Clicks are not installs: compare with App Store Connect. Vercel custom events need a supported plan.
