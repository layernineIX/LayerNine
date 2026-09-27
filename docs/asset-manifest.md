# Layer Nine — Asset Manifest

Internal production document. **Not linked from the live site and must never be.**

This lists every asset the redesigned site still needs, plus what's already
delivered and in use. It exists so missing media is tracked here — not as an
"Asset Pending" card, a dashed drop-zone, or placeholder copy on a page a
visitor can see. Nothing in this file is permission to fake, mock up, or
stand in AI-generated imagery for something labelled as real photography —
see the labelling rules in the project brief (SKAI/ERATO are AI-generated
concept work and are labelled as such; Giveh is real client photography —
its shoot has now been delivered and the page is live and linked, as of
2026-09-28).

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
| SKAI-HERO-01 | `work/skai.html` (banner), homepage Selected Work (card) | Campaign hero. The case-study banner and the homepage card now use two different images: the banner needed a wide 16:9 shot to fill a short, full-bleed hero without cropping the product; the homepage card keeps the taller product-range shot, which suits its portrait card better. | 16:9 (banner) / 9:16 (card) | Both | Still | — | **Delivered** — banner: `skai-hero-03.jpg/webp` (`object-position: center 20%` set inline to keep clearance above the cap in short/wide hero containers). Card: `skai-hero-02.jpg/webp`. Both supersede the original `skai-portrait-hero.*`, which — like `skai-hero-02`'s now-unused banner role — stays on disk rather than being deleted. | No |
| SKAI-DETAIL-01/02 | `work/skai.html` gallery, homepage format grid | Product/texture detail stills (Barrier Cream jar + spoon; Barrier Cream in a poppy flower) | 4:5 | Both | Still | — | **Delivered** — `skai-detail-01`, `skai-detail-02` (+ webp/card variants) | No |
| SKAI-LIFESTYLE-01 | `work/skai.html` gallery | Two products styled together on a stone pedestal | 16:9 | Both | Still | — | **Delivered** — `skai-lifestyle-01.jpg/webp` | No |
| SKAI-PRODUCT-OLD-01..05 | Superseded | The original 5-still set (Daily Essence, Viral Format, Gen Z Moment, Night Repair, Character Reference) | 4:5 | — | Still | — | **Superseded, kept on disk unused** — `skai-still-01` through `05`. Three service-landing pages (product-photography-malaysia, ai-content-production-malaysia) still reference two of these as their own `og:image`; that's a separate, intentionally out-of-scope item flagged to the studio, not a broken link. | No |
| SKAI-MACRO-STILL-01 | Not currently placed | A still macro shot (product texture/ingredient close-up), separate from the existing macro video | 4:5 | Desktop | Still | — | **Missing** | No |
| SKAI-FILM-01..04 | Not currently placed | Product/lifestyle/character/macro short films (Bottle Reveal, Morning Ritual, Portrait Film, Skin Texture) | 9:16 | Both | Video | 4–5s each | **Delivered, but unplaced** — `skai-bottle-reveal.mp4`, `skai-morning-ritual.mp4`, `skai-portrait-film.mp4`, `skai-skin-texture.mp4`. Real, finished clips; the "Campaign Videos" strip on `work/skai.html` was cleared to empty (label only, no cells) at the studio's request, pending a decision on what goes back in it. The homepage format grid's "Short Film" slot now shows a Giveh clip instead (see GIVEH-FILM-01). | No |
| SKAI-CONCEPT-FINAL-01 | Reserved — "concept-to-final" reveal component | A genuine matched pair: rough concept frame → finished campaign frame, same shot | 4:5 | Desktop (with mobile fallback) | Still pair (or short video pair) | — | **Missing.** The reveal component exists in the design system but is **not wired into any live page** because no real matched concept/final pair exists yet — publishing it now would misrepresent process. | **Yes — component stays unpublished until this asset lands** |
| SKAI-IDENTITY-BOARD-01 | Reserved — brand-identity showcase | A single-frame identity/style board (palette, type, logo lockup, key art) for SKAI as a brand system, not just a campaign | 4:5 or 16:9 | Desktop | Still | — | **Missing** | No |
| SKAI-LANDING-01 | Reserved — capability showcase | A mockup/screenshot of a SKAI product landing page, to demonstrate the "digital presence" capability using SKAI as the example brand | 16:9 (screenshot) | Desktop | Still | — | **Missing** | No |

## 3. ERATO (self-initiated brand, in development, AI-generated)

| ID | Placement | Subject / purpose | Aspect ratio | Desktop/mobile | Still/video | Duration | Current state | Launch-required |
|---|---|---|---|---|---|---|---|---|
| ERATO-HERO-01 | `work/erato.html`, homepage Selected Work | Campaign hero — branded t-shirt, historical illustration print | 4:5 | Both | Still | — | **Delivered** — `erato-hero-02.jpg/webp` (+ card crop). Supersedes the earlier `erato-hero.*`, which stays on disk unused rather than deleted. | No |
| ERATO-EDITORIAL-01..02 | `work/erato.html` gallery | Tote bag with the same illustration print; statue in a colonnade wearing a branded tee | 4:5 / 16:9 | Both | Still | — | **Delivered** — `erato-editorial-01`, `erato-editorial-02` | No |
| ERATO-EDITORIAL-03 | Homepage format grid ("Product Imagery") | Branded t-shirt styled on a wooden chair by a window | 3:4 | Both | Still | — | **Delivered** — `erato-editorial-03.jpg/webp` (+ card crop) | No |
| ERATO-OLD-01..04 | Superseded | The original portrait/environment/corridor set | 4:5 / 1:1 | — | Still | — | **Superseded, kept on disk unused** — `erato-hero`, `erato-corridor-01`, `erato-environment-01`, `erato-portrait-01/02`. One service-landing page (brand-film-production-malaysia) still references `erato-corridor-01` as its own `og:image` — same intentionally out-of-scope item as the SKAI row above. | No |
| ERATO-FASHION-FILM-01 | Reserved — would extend `work/erato.html` and the homepage the way SKAI's video strip does | A short fashion/campaign film for ERATO | 9:16 | Both | Video | ~5s | **Missing.** ERATO currently has no video assets at all — by design decision, ERATO stays static (poster-only, no hover-preview) until this exists. | No — current static-only treatment is the deliberate interim, not a gap to hide |
| ERATO-VERTICAL-SOCIAL-01 | Reserved | A dedicated vertical/9:16 social cut (existing ERATO stills are 4:5/1:1) | 9:16 | Both | Still or video | — | **Missing** | No |

## 4. Giveh (real client project — LN-2026-GIVEH-01)

| ID | Placement | Subject / purpose | Aspect ratio | Desktop/mobile | Still/video | Duration | Current state | Launch-required |
|---|---|---|---|---|---|---|---|---|
| GIVEH-HERO-01 | `work/giveh.html`, homepage Selected Work, Work grid | Campaign hero — editorial portrait | 3:4 | Both | Still | — | **Delivered** (2026-09-28) — `giveh-hero-01.jpg/webp` (+ card crop). Real photography, not AI-generated. Page is now linked from `work.html`, the homepage Selected Work slider, and `sitemap.xml`. | No |
| GIVEH-LIFESTYLE-01 | `work/giveh.html` gallery | Lifestyle shot — linen clothing and espadrilles on Persian rugs | 3:4 | Both | Still | — | **Delivered** — `giveh-lifestyle-01.jpg/webp` | No |
| GIVEH-PRODUCT-01 | `work/giveh.html` gallery | Product photography — embroidered espadrilles, multi-angle | 4:5 | Both | Still | — | **Delivered** — `giveh-product-01.jpg/webp` | No |
| GIVEH-FILM-01 | Homepage format grid ("Short Film") | Real lifestyle/product film for Giveh | 9:16 | Both | Video | 6s | **Delivered** — `giveh-lifestyle-film.mp4`. Real footage, not AI-generated; labelled "Real photography" on its tile since this slot sits next to two AI-generated ones. | No |

---

## Notes for production

- Nothing above should be simulated, mocked up with AI imagery presented as a
  real photoshoot, or otherwise faked to fill a launch-required row — these
  rows are the reason a component stays unpublished or a page stays
  unlinked, not a prompt to improvise around the gap.
- When an asset lands, update its row's status to **Delivered**, add the
  file(s) under `assets/`, and only then wire it into the relevant page.
