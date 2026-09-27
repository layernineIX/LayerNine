# Layer Nine — Asset Manifest

Internal production document. **Not linked from the live site and must never be.**

This lists every asset the redesigned site still needs, plus what's already
delivered and in use. It exists so missing media is tracked here — not as an
"Asset Pending" card, a dashed drop-zone, or placeholder copy on a page a
visitor can see. Nothing in this file is permission to fake, mock up, or
stand in AI-generated imagery for something labelled as real photography —
see the labelling rules in the project brief (SKAI/ERATO are AI-generated
concept work and are labelled as such; Giveh is a real, unstarted shoot and
stays off the site until delivered).

Status key: **Delivered** = real asset in `assets/`, in use today. **Missing**
= no asset exists; the page either does without it or (for Giveh) is held
off navigation until it's delivered. **Launch-required** = the site should
not claim to have that specific feature/component live until this lands.

---

## 1. Layer Nine (homepage / studio-wide)

| ID | Placement | Subject / purpose | Aspect ratio | Desktop/mobile | Still/video | Duration | Current state | Launch-required |
|---|---|---|---|---|---|---|---|---|
| LN-HERO-01 | Homepage hero, `#ln-s1` | Cinematic opening shot/loop — the studio's signature footage | 16:9 (cropped via CSS per breakpoint) | Both (shared asset, re-cropped) | Video (+ poster still) | Loop, ~5–10s | **Delivered** — `home-hero-poster.jpg/webp` + `home-hero-placeholder.mp4`. Filename still says "placeholder" from an earlier dev pass; worth renaming for clarity, not launch-blocking. | No |
| LN-HERO-MOBILE-01 | Homepage hero, mobile breakpoint | A genuinely re-shot/re-framed mobile crop of the hero, rather than the same frame re-centred by CSS | 4:5 or 9:16 | Mobile only | Video or still | Same as LN-HERO-01 | **Missing** — currently using `object-position` to re-centre the one existing video per breakpoint (see `.hero-video-crop` in `assets/css/site.css`). Honest and functional, but not a true art-directed mobile shot. | No — current CSS crop is an acceptable interim |
| LN-DETAIL-01 | Reserved (not currently placed) | A tighter behind-the-scenes / equipment / set-detail cutaway, for future use in About/Studio storytelling | 4:5 | Desktop | Still | — | **Missing** — not required by any current page | No |

## 2. SKAI (self-initiated, AI-generated concept campaign)

| ID | Placement | Subject / purpose | Aspect ratio | Desktop/mobile | Still/video | Duration | Current state | Launch-required |
|---|---|---|---|---|---|---|---|---|
| SKAI-HERO-01 | `work/skai.html`, homepage Selected Work | Campaign hero portrait | 4:5 | Both | Still | — | **Delivered** — `skai-portrait-hero.jpg/webp` (+ card crop) | No |
| SKAI-PRODUCT-01..05 | `work/skai.html` gallery, homepage format grid | Product/campaign stills (Daily Essence, Viral Format, Gen Z Moment, Night Repair, Character Reference) | 4:5 | Both | Still | — | **Delivered** — `skai-still-01` through `05` (+ webp/card variants) | No |
| SKAI-PORTRAIT-01 | Covered by SKAI-PRODUCT set | Character portrait | 4:5 | Both | Still | — | **Delivered** — see `skai-still-03`, `skai-portrait-hero` | No |
| SKAI-MACRO-01 | `work/skai.html` video strip | Skin-texture macro | 9:16 | Both | Video | 4s | **Delivered** — `skai-skin-texture.mp4` | No |
| SKAI-MACRO-STILL-01 | Not currently placed | A still macro shot (product texture/ingredient close-up), separate from the existing macro video | 4:5 | Desktop | Still | — | **Missing** | No |
| SKAI-FILM-01..03 | `work/skai.html` video strip, homepage format grid | Product/lifestyle/character short films (Bottle Reveal, Morning Ritual, Portrait Film) | 9:16 | Both | Video | 5s each | **Delivered** — `skai-bottle-reveal.mp4`, `skai-morning-ritual.mp4`, `skai-portrait-film.mp4` | No |
| SKAI-VERTICAL-SOCIAL-01 | Homepage format grid ("Vertical Social") | Social-first vertical still, already captioned for this use | 4:5 | Both | Still | — | **Delivered** — `skai-still-02.jpg` ("Viral Format · Social First · Gen Z") | No |
| SKAI-CONCEPT-FINAL-01 | Reserved — "concept-to-final" reveal component | A genuine matched pair: rough concept frame → finished campaign frame, same shot | 4:5 | Desktop (with mobile fallback) | Still pair (or short video pair) | — | **Missing.** The reveal component exists in the design system but is **not wired into any live page** because no real matched concept/final pair exists yet — publishing it now would misrepresent process. | **Yes — component stays unpublished until this asset lands** |
| SKAI-IDENTITY-BOARD-01 | Reserved — brand-identity showcase | A single-frame identity/style board (palette, type, logo lockup, key art) for SKAI as a brand system, not just a campaign | 4:5 or 16:9 | Desktop | Still | — | **Missing** | No |
| SKAI-LANDING-01 | Reserved — capability showcase | A mockup/screenshot of a SKAI product landing page, to demonstrate the "digital presence" capability using SKAI as the example brand | 16:9 (screenshot) | Desktop | Still | — | **Missing** | No |

## 3. ERATO (self-initiated brand, in development, AI-generated)

| ID | Placement | Subject / purpose | Aspect ratio | Desktop/mobile | Still/video | Duration | Current state | Launch-required |
|---|---|---|---|---|---|---|---|---|
| ERATO-HERO-01 | `work/erato.html`, homepage Selected Work | Campaign hero | 1:1 | Both | Still | — | **Delivered** — `erato-hero.jpg/webp` | No |
| ERATO-EDITORIAL-01..02 | `work/erato.html` gallery | Environment / corridor editorial stills | 4:5 | Both | Still | — | **Delivered** — `erato-environment-01`, `erato-corridor-01` | No |
| ERATO-PORTRAIT-DETAIL-01..02 | `work/erato.html` gallery | Portrait studies (amber / blue light) | 4:5 | Both | Still | — | **Delivered** — `erato-portrait-01`, `erato-portrait-02` | No |
| ERATO-FASHION-FILM-01 | Reserved — would extend `work/erato.html` and the homepage the way SKAI's video strip does | A short fashion/campaign film for ERATO | 9:16 | Both | Video | ~5s | **Missing.** ERATO currently has no video assets at all — by design decision, ERATO stays static (poster-only, no hover-preview) until this exists. | No — current static-only treatment is the deliberate interim, not a gap to hide |
| ERATO-VERTICAL-SOCIAL-01 | Reserved | A dedicated vertical/9:16 social cut (existing ERATO stills are 4:5/1:1) | 9:16 | Both | Still or video | — | **Missing** | No |

## 4. Giveh (real client quotation — LN-2026-GIVEH-01)

| ID | Placement | Subject / purpose | Aspect ratio | Desktop/mobile | Still/video | Duration | Current state | Launch-required |
|---|---|---|---|---|---|---|---|---|
| GIVEH-HERO-01 | `work/giveh.html` only (unlinked from nav/Work grid/sitemap) | Campaign hero, once the shoot happens | 16:10 | Both | Still | — | **Missing — real shoot not yet delivered.** Page file exists but is intentionally unreferenced from `work.html`, the homepage, and `sitemap.xml` per the quotation status. | **Yes — do not link this page from anywhere until real delivered photography exists** |
| GIVEH-STILL-01..03 | `work/giveh.html` gallery | Boutique clothing stills | 4:5 | Both | Still | — | **Missing — same as above** | Yes, same as above |

---

## Notes for production

- Nothing above should be simulated, mocked up with AI imagery presented as a
  real photoshoot, or otherwise faked to fill a launch-required row — these
  rows are the reason a component stays unpublished or a page stays
  unlinked, not a prompt to improvise around the gap.
- When an asset lands, update its row's status to **Delivered**, add the
  file(s) under `assets/`, and only then wire it into the relevant page.
