# PIXXMAP — audit and build specification

Audit date: 2 November 2026. Reference: https://pixxmapdesign.framer.website/

## What was inspected

The live homepage, its rendered first-screen composition and computed typography, the Toshiba case study, and the Contact page were inspected in a browser. Text extraction through web search could not access the reference; the audit evidence below is from the live browser.

The homepage links ten project detail routes. The other nine case studies were not individually audited, so their briefs, credits, galleries, and results have not been migrated. No standalone Work or About route was exposed in the inspected navigation. Their existence elsewhere is unconfirmed. Mobile behavior, the original form's backend, exact animation timings, fonts' redistribution rights, and original asset files were not verified. Nothing was submitted to the original contact form.

## Existing visual identity

- Black canvas; oversized white uppercase PIXXMAP masthead.
- Clash Display for display text and Inter Display for supporting text, observed via computed styles.
- Blue/yellow star details in the logo, a blue/yellow three-dot motif, thin horizontal rules.
- Full-width creative imagery, extensive whitespace, typography-led hierarchy.
- Small numbered section labels, large two-line headings, outlined contact controls.
- Editorial sequence: hero → approach → portfolio → about → services → visual statement → stats → experience → contact/footer.

## Available content and migration

| Area | Verified source content | First-build treatment |
|---|---|---|
| Hero | PIXXMAP; Ho Chi Minh City; creative disciplines; Everything & Everyone | Retained identity cues, new concise introductory copy, labeled abstract motion study |
| Approach | Discover & Define / Design & Build / Deliver & Optimize | Edited for concision; retains the source's process |
| Portfolio | Ten titles and linked slugs (see data file) | All ten retained, artwork explicitly pending |
| About | Multidisciplinary studio in Ho Chi Minh City; branding, campaigns, social, motion, events, e-commerce | Concise source-grounded introduction; no new biography |
| Services | Branding, Communication Design, Event Design, Motion & Video Edit, POSM Design | Mapped to the five user-specified categories |
| Experience | PIXXMAP collective and disciplines from 2022; brand identity from 2024 | Retains individual published dates; drops conflicting 2013 header |
| Toshiba | 2026, Toshiba, Social Guideline, two weeks, challenge/direction/system narrative, deliverables | English paraphrase of the published narrative, explicit role pending, no performance claims |
| Contact | Visible pixxmapdesign@gmail.com and (+84) 327 665 295 | Functional mailto/tel use visible values; no form provider assumed |

### Observed content and UX defects

- “Behance” points to Dribbble; social links go to generic platform homepages, not verified PIXXMAP profiles. Contact labels and destinations are also swapped.
- Email displays pixxmapdesign@gmail.com but links to dummy@mail.com. Phone labels display the Vietnamese number but link to different US numbers.
- The copyright links to an unrelated X profile. “Start a project” opens a Drive document.
- Several project image alt texts refer to unrelated template examples (e.g., Cortana Café and Lunar Drop).
- The experience section header says 2013–present, while individual entries start in 2022 or 2024.
- Statistics were observed as zero before any scroll-counter behavior was verified. Actual metric values are unverified; no metrics are carried into this build.
- Toshiba's main title is an H2, while Deliverables is an H1. The new template uses one H1 followed by ordered H2/H3 headings.

## Sitemap

| Route | Purpose |
|---|---|
| `/` | Hero, approach, selected projects, about, services, experience, contact CTA |
| `/work` | Complete project archive with responsive multi-category OR filtering |
| `/work?category=…` | Shareable filter state; commas separate categories; unknown values ignored |
| `/work/[slug]` | Static generated project pages using a common case-study template |
| `/about` | Studio introduction, approach, services, experience |
| `/contact` | Verified visible contact details and a mailto draft composer |
| Not found | Accessible recovery link to the Work page |

## Component architecture

App Router pages and the root layout are server components. Project metadata stays in `src/data/projects.ts`. Server-rendered `ProjectCard` and `ProjectMedia` are also used by the client-filtered grid. Small client boundaries handle interactions:

- `MotionProvider`: LazyMotion, global reduced-motion preference, shared easing.
- `Header`: active navigation, mobile disclosure, Escape and keyboard support.
- `Hero`: kinetic masthead and a lazy-loaded, desktop-only GSAP ScrollTrigger timeline.
- `Reveal`: visible-by-default scroll entrances.
- `WorkGrid`: URL-backed multi-select filters, live result count, Motion layout and presence.
- `ContactForm`: native validation and mailto preparation; no server or storage.

Reusable server sections: Approach, SelectedWork, AboutSection, Services, Experience, Footer. Case study content remains declarative rather than hardcoded per route.

## Data schema

`Project` has `slug`, `title`, `shortTitle`, `client`, `year`, `role`, `categories[]`, `description`, `cover`, `gallery[]`, `video`, `deliverables[]`, `story[]`, `accent`, `motif`, `source`, `status`, `featured`, and optional `categoryNote`.

- Client, year, and role may be null when unverified.
- A media record holds local path, meaningful alt text, width, height, and optional caption.
- Video holds local path, poster, title, optional WebVTT captions. It does not autoplay.
- A story section holds label, title, and body. One template renders any number of sections.
- Status is `artwork-pending` or `ready`; ready content must include a cover, credits, and approved story.
- Category taxonomy is a fixed TypeScript union. Multiple categories are allowed. New categories require a taxonomy edit; new projects do not need new components.
- The three reclassifications noted in data are proposals, not new claims about commissioned scope. No POSM sample has been invented to fill the filter.

## Motion specification

| Interaction | Behavior | Timing / bounds | Reduced-motion behavior |
|---|---|---|---|
| Hero masthead | Short vertical letter entrance; accessible title remains one label | 750 ms, 45 ms stagger, 28 px max | Static |
| Hero art | Desktop scroll-driven star rotation/vertical drift and opposing outline text drift | Scroll scrub 1; star -15°→25°, y +40→-40; text x -30→30 | No GSAP initialization |
| Section reveal | Subtle vertical movement and opacity; no initially hidden content | 650 ms, 16 px, once per section | Static |
| Project hover | Small artwork scale and visible project CTA | 650 ms, scale 1.025; no touch-only dependency | No transform |
| Filter changes | Grid layout + entry/exit opacity | 300 ms, stable slug keys | Instant |
| Route entry | Consistent cover framing and short heading reveal | No navigation lock or loading sequence | Static |
| Services | Native disclosure; plus changes to cross | 250 ms icon transition | Instant |

Shared-element navigation is intentionally deferred. Cross-route layout IDs alone do not guarantee correct App Router transitions. Standard Next links preserve prefetch, keyboard, modified clicks, history and scroll behavior. Stable artwork framing and fast routes take priority. No Lenis: native scrolling is sufficient. CSS handles simple hover effects; GSAP only owns the advanced hero scroll sequence, with scoped cleanup.

## Visual system and content integrity

Near-black #090909, warm white #f2f1e9, muted gray #989895, electric blue #2854ff, soft yellow #f4da58. Fluid display type, restrained body sizes, border-led sections, asymmetric selected-work rhythm, two-column archive, single-column mobile flow.

Clash Display's redistributable file was not supplied. This build uses locally bundled Space Grotesk as an explicitly provisional display substitute, plus Inter for body text. The custom two-star logo is a provisional redraw of observed identity cues; replace it with the approved vector mark. No source code or Framer export has been copied. Colored project panels are layout placeholders, not representations of client artwork. The hero graphic is a labeled PIXXMAP motion study, not client work.

## Production foundations and release gate

Next.js App Router + TypeScript + Tailwind CSS; no runtime CMS requirement. Local fonts, `next/image` with explicit sizing, lazy gallery loading, optional captioned video, metadata, generated social image, robots and sitemap, semantic headings, focus styles, skip link, native disclosures, reduced motion, no analytics or trackers.

The application is Vercel-ready, but the content is not launch-ready. Before release: provide original cover/gallery/video assets and approved logo/font; confirm roles/credits and remaining project briefs; confirm category mapping, visible contact details and studio wording; configure the canonical domain; choose whether mailto remains sufficient or connect a real form provider; review real-image performance and screen-reader/mobile QA. Only then set `NEXT_PUBLIC_INDEXABLE=true`. Publishing requires the user's approval. The current Framer site has not been modified.
