# PIXXMAP — custom portfolio

A local review build using Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and GSAP ScrollTrigger. No Framer code is copied and nothing is deployed.

## Run

Node.js 22+ recommended (built and tested on Node 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The managed review launcher runs the compiled production server when given its preview flags; build before starting that preview. Normal `npm run dev` uses the development server. To verify the production build:

```sh
npm test
npm run typecheck
npm run build
npm start
```

## Edit content

- Projects: `src/data/projects.ts`
- Studio/contact/process/experience: `src/data/site.ts`
- Layout and styles: `src/app/globals.css`
- Audit, sitemap, architecture, schema and motion: `docs/AUDIT-AND-ARCHITECTURE.md`
- Build verification and limitations: `docs/VERIFICATION.md`

Ten source project titles are provided. Only Toshiba has a source-grounded narrative. Other briefs and all original artwork are pending. The visible panels are explicitly labeled placeholders. Do not publish them as finished client work.

### Add a project without a new page

1. Put approved media in `public/projects/your-slug/`.
2. Add an object to `projects` using the `Project` type. Use a unique lowercase hyphenated slug.
3. Set one or more categories from the exported taxonomy.
4. Set `cover: {src:'/projects/your-slug/cover.webp', alt:'Describe the real artwork', width:1600, height:1200}`.
5. Fill the gallery with the same media structure, plus optional captions. Portrait, landscape and full-width images retain their natural ratio in the case study.
6. Add approved story sections and deliverables; confirm client, year, and role. Set `status:'ready'` only when complete.
7. Optional video: local MP4/WebM path, poster, title, and WebVTT captions where needed. It uses controls, no autoplay, and preload none.
8. Run tests and build. `/work/[slug]` is generated automatically.

Category selections use OR semantics: projects matching any selected category appear. Filter state is URL-backed and respects browser history. A zero-result selection displays a useful reset control. Do not add fictional projects to fill empty categories.

## Contact

Email and telephone destinations now match the values displayed on the reference site. Confirm ownership before release. The contact composer opens a `mailto:` draft; it does not send or store submissions. A functioning email handler is needed. The direct email link remains available. Backend form delivery is a separate future integration, not implied by this build.

## Fonts and artwork

Space Grotesk and Inter are bundled locally from their Fontsource packages. Their OFL license texts are included in `docs/licenses/`. Space Grotesk is a temporary display-font substitution for the reference's Clash Display. Supply the approved font and original logo to restore exact brand fidelity. No unrelated stock imagery is used.

## Vercel, when approved

1. Import the project into a repository and Vercel after approval. Next.js is detected automatically. Build: `npm run build`; output directory: default.
2. Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS origin.
3. Replace pending content and complete the release checklist in the audit.
4. Set `NEXT_PUBLIC_INDEXABLE=true` only for the approved public version. Defaults block indexing of review content; this is not authentication.
5. Deploy only after the user approves. Do not change Framer DNS or domain settings as part of a preview.

No environment secrets are required. `.env.example` documents public configuration. Existing Framer paths for all ten project slugs are preserved to help a later approved migration.
