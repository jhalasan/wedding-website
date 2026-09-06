# Invitation Redesign → jhalasan/wedding-website

Frozen design source: `Invitation (Locked v1).dc.html` (do not edit; edit `Invitation.dc.html` for future iterations).
Target repo: `jhalasan/wedding-website` (branch `master`), React + Vite + TS.

## How to migrate

1. Copy `migration/src/**` over the repo's `src/`, keeping existing `src/assets/` in place.
2. Keep `src/config/rsvp.ts` from the repo — `Rsvp.tsx` reads `RSVP_URL` from it. If it doesn't export that name, adjust the import.
3. `index.html` needs the font link (see below) or keep it in `global.css` via @import.
4. `npm i && npm run dev` — no new dependencies required.

Components are inline-styled with values lifted verbatim from the locked design (fidelity over CSS-module convention).
Only global resets, fonts and the `rise` keyframe live in CSS (`src/styles/global.css`).
Old per-component `.css` files in the repo can be deleted; the old section components are replaced 1:1 by the list below.

## Fonts

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap">
```

- Body / all text: `'Cormorant Garamond','Iowan Old Style',Georgia,serif`, base `20px`, line-height `1.65`
- Script accents (names, "and so the adventure begins", monogram ampersand): `'Mrs Saint Delafield',cursive`
- Headings: weight 500, `text-wrap:balance`; paragraphs `text-wrap:pretty`
- Eyebrows: `.86rem`, `letter-spacing:.3em`, uppercase, weight 600
- Section titles: `clamp(2rem,5vw,2.9rem)`, italic
- Entourage names: `1.34rem` (principal sponsors `1.28rem`)

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| cream | #FAF7F0 | page background |
| card | #FFFDF7 | cards, light buttons |
| sand | #F1ECDD | alternating band sections (countdown, gallery) |
| line | #DCD3BE | hairlines, grid gaps, borders |
| gold | #B79A5D | rules, accents, script ampersand |
| goldSoft | #E7DCBE | on-dark accents, eyebrows over photos |
| ink | #2B3B2A | body text, darkest green |
| green | #3F5A3C | primary green (RSVP band, links) |
| sage | #5B6753 | secondary text |
| sageLight | #7C8F5D | icon strokes, attire swatch |
| mint | #CFE6D4 | attire swatch, RSVP fallback note |
| olive | #8A7F4A | attire swatch |

## Rhythm

- Section padding: `clamp(3.5rem,8vw,6.5rem) clamp(1.25rem,5vw,3rem)`
- Content widths: 34rem (verse), 42rem (RSVP), 62rem (note, reminders), 66rem (details, entourage, attire), 74rem (gallery)
- Card grids: 1px gaps over a `#DCD3BE` background = hairline dividers, plus a 1px outer border
- Band sections (`#F1ECDD`) carry 1px top+bottom borders in `#DCD3BE`
- Divider motif: `width:64px;height:1px;background:linear-gradient(to right,transparent,#B79A5D,transparent)` (120px in the verse section)

## Section order (App.tsx)

Nav · Hero · Verse · Countdown · CoupleNote · PhotoBand(adventure) · EventDetails · Gallery · Entourage · SaveTheDate · AttireGifts · Rsvp · Reminders · Footer

## Photo assets (all already in `src/assets/`)

| File | Used by | object-position |
| --- | --- | --- |
| _CEP4320.jpg | Hero full-bleed | 50% 32% |
| _CEP4726.jpg | "Adventure begins" band + gallery | 50% 30% |
| _CEP5017.jpg | "Save the date" band + gallery | 50% 35% |
| _CEP5429.jpg | Footer + gallery | 50% 22% |
| _CEP4346.jpg | gallery | — |
| _CEP4889.jpg | gallery | — |
| _CEP4903.jpg | gallery | — |
| _CEP5111.jpg | gallery | — |
| _CEP5379.jpg | gallery | — |
| _CEP5438.jpg | gallery | — |
| _CEP5507.jpg | gallery | — |

Gallery order is the array in `src/data/photos.ts`: 4346, 4889, 4903, 5111, 5379, 5438, 5507, 4726, 5017, 5429.

## Countdown logic

Target: `new Date("2026-09-26T14:30:00+08:00")` (Sept 26 2026, 2:30 PM, Asia/Manila — the +08:00 offset is required so the timer is correct for guests abroad).
`useCountdown` ticks every 1000ms, clamps at zero, returns `[{value,label}]` for Days/Hours/Minutes/Seconds; hours, minutes and seconds are zero-padded to 2 digits, days are not. Cell numerals use `font-variant-numeric:tabular-nums` so the layout doesn't jitter.

## Gallery carousel behaviour

One photo centered at `clamp(240px,52vw,460px)`, aspect 4/5, in a scroll-snap track. Track padding `0 calc((100% - clamp(240px,52vw,460px)) / 2)` centers the first and last slides. Two absolutely positioned overlays of that same width blur the neighbours (`backdrop-filter:blur(7px) saturate(.85)` over a `#F1ECDD` gradient) — that's the peek-through effect; they must be `pointer-events:none`. Prev/next buttons and dots call `scrollTo`, which centers child `i`; the track's `onScroll` picks the child nearest the center to sync the counter. Clicking a photo opens a fixed lightbox (`rgba(28,40,27,.94)`), closed by backdrop click, the × button, or Escape.

## Design decisions to preserve

- Nav monogram is a horizontal lockup: italic J / gold script & / italic R, a vertical gold hairline, then a two-line caption ("The Wedding of" in gold .62rem/.3em over "Julius & Revia" in sage .78rem/.16em).
- Hero, adventure band, save-the-date band and footer are the only full-bleed photo moments — keep them evenly spaced through the page.
- The adventure band's caption sits in a frosted bar (`rgba(30,42,29,.42)` + blur 8px) with gold hairlines top and bottom, inside a 1px inset gold-cream frame.
- Entourage type is deliberately large (1.34rem) — it's the section guests read most.
- Max two background colours (`#FAF7F0`, `#F1ECDD`) plus the one green RSVP band.
- `prefers-reduced-motion` kills the hero rise animation and smooth scrolling.
