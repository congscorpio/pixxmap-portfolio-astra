# Verification — first review build

Date: 2 November 2026.

## User story

A visitor discovers PIXXMAP on Home, browses the Work archive, selects one or more disciplines, opens a project case study, and reaches the studio's contact information or prepares an email draft. Project content is read from a typed local data module; there is no database or submission API in this version.

## Results

| Check | Result and evidence |
|---|---|
| TypeScript | `npm run typecheck` passed initially; final `npm run build` also passed its complete TypeScript phase |
| Production compilation | Next.js 16.4.3 production build passed; 20 static outputs generated, including all ten project slugs |
| Unit tests | 7/7 passed: unique slugs, multi-category OR matching, empty/reset selection, category parsing, valid taxonomy, unknown slug and next-project wrapping, ready-project content requirements |
| Dependency audit | `npm audit --omit=dev --audit-level=high` returned `found 0 vulnerabilities` |
| Desktop layout | Home and Work inspected visually in the cloud browser at approximately 1348px |
| Responsive layout | 320px and 390px phone-sized iframe viewports and 768px tablet viewport inspected; these are real CSS viewport widths, not hardware-device tests |
| Overflow | An initial 320px footer overflow was fixed. Home, Contact, About and Toshiba were checked at a 305px content width (320px iframe including scrollbar) and had matching document/content widths. Toshiba also matched at 753px content width |
| Mobile menu | Expanded navigation displayed all three links; Escape collapsed it and restored the menu button |
| Anchor navigation | Home's Explore the work link reached Selected Work in the production preview |
| Filters | Campaign & Social → 6 results; adding Event & Experience → 9; All work → 10; POSM & Retail → 0 with reset control |
| URL state | Campaign filter updated the URL with an encoded category query; parsing/invalid values separately covered by unit tests |
| Case-study navigation | Project-card navigation opened Toshiba; one H1, metadata facts, narrative, deliverables and next-project link were present |
| Service disclosure | Native details control revealed the service explanation and filtered-work link |
| Unknown slug | `/work/not-a-project` displayed the custom “off the map” recovery page |
| Contact validation | Empty submission focused the name field; name, email and brief were invalid as expected |
| Telephone | Rendered link is `tel:+84327665295`, matching the visible reference number |
| Email handler | Cloud browser security rejected mailto navigation. Draft opening in a real email application is unverified. No email was sent |
| Metadata | Homepage title, exactly one H1, local canonical origin, and `noindex, nofollow` observed in the browser |
| Asset policy | No unrelated stock imagery. All project covers are labeled placeholders. Original gallery/video integration remains to be validated with supplied media |

## Preview configuration repair

The managed preview launcher supplies Vite-style flags. `scripts/dev.mjs` normalizes host/port flags for Next.js. Next's development server then reported `uv_resident_set_memory` errors in this restricted runtime and did not hydrate reliably. The managed launcher now serves the compiled production build, which passed the interactive checks above. Normal `npm run dev` on a developer machine still starts Next's development server. No sandbox permissions or runtime internals were changed.

The temporary responsive QA harness was removed from deliverables after inspection. It was only used to place the actual application in narrow iframe viewports.

## Limits and remaining release checks

- Reduced-motion paths were reviewed in code (Motion configuration/hooks, CSS media query and GSAP matchMedia cleanup). This session did not emulate the OS preference.
- No real-device touch, Safari, Firefox, screen-reader, or formal WCAG audit was performed.
- No Lighthouse scores are claimed. Fonts are locally bundled (approximately 22KB display + 47KB body); GSAP loads only for eligible desktop motion. Real artwork will determine final image payload and LCP.
- Native email-app integration requires a local test. The composer is deliberately not a backend form, inbox, or delivery service.
- The other nine source case-study bodies were not inspected. Artwork, final credits, detailed briefs and category mappings remain pending.
- Exact Clash Display and the approved logo were not provided; provisional typography and a logo redraw are documented in the audit.
- No deployment, domain change, source-site edit, or public release occurred. Canonical origin and indexing must be configured for an approved release.
