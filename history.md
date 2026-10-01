# Portfolio history

## 2026-10-01 — Phase 2

### Added
- Scaffolded a Next.js App Router portfolio in `portfolio/` with TypeScript and Tailwind CSS.
- Added typed profile and CV section data under `src/data/`.
- Added light/dark theme support with `next-themes`.
- Added responsive sticky navigation, mobile menu, accessible theme toggle, hero, profile photo, CV download, fact tiles, current-focus list, and section shortcuts.
- Copied the confirmed resume to `public/cv.pdf` and the supplied profile image to `public/profile.jpeg`.

### Removed
- Removed the default Create Next App starter screen and styles.
- Excluded NSRI, Fiverr/EthnoHack, and the unverified Fall 2028 graduate-study claim.

### Notes
- The remaining CV sections will be added in Phase 3 after front-page review.

## 2026-10-01 — Phase 3

### Added
- Added typed CV data for Education, Experience, Research Projects, Technical Projects, Volunteering and Teaching, Leadership and Achievements, Expert Technical Skills, and Certifications.
- Added all remaining CV sections in the exact CV order.
- Added research cards with status, methods, results framing, tags, and static detail routes.
- Added equal-sized technical project cards with All / Research / ML / Full-stack / Hackathon filters and static detail routes.
- Added contact section with email, copy-email control, GitHub, LinkedIn, and Medium links.
- Added footer with back-to-top link and last-updated label.

### Removed / excluded
- Kept non-CV Robust Multimodal Learning and GraphBRAIN-ABIDE projects out of the site because they were not approved for inclusion.
- Kept Fiverr/EthnoHack and NSRI out of the site.

### Verification
- `npm run build` passed with all homepage, research, and project routes statically generated.
- `npm run lint` passed.

## 2026-10-01 — Phase 4

### Added
- Added canonical `SITE_URL`, Open Graph metadata, Person JSON-LD, static sitemap, robots route, and initials favicon.
- Replaced starter README with content-editing, asset replacement, and Vercel/GitHub Pages deployment instructions.
- Added `AUDIT.md`, `NOT-IN-CV.md`, and `TEST-REPORT.md` documenting source traceability, excluded facts, and verification evidence.
- Added static-export compatibility for metadata routes.

### Verification
- `npm run build` passed and generated homepage, five detail routes, sitemap, robots, and favicon.
- `npm run lint` passed.
- Placeholder scan of generated `out/` passed.
- Local checks returned HTTP 200 for homepage, one research page, one project page, robots, sitemap, and CV PDF.
- Lighthouse was not run; no Lighthouse score is claimed.

## 2026-10-01 — Final smoke check

### Added
- Added the documented `data-scroll-behavior="smooth"` attribute to the root HTML element to remove the Next.js route-transition warning.

### Verification
- Browser smoke check at 375px confirmed the homepage title, 12 main sections, CV link, and research detail link.
- Direct research detail navigation rendered Problem, Method, Results, and Limitations / Lessons.
- Final `npm run build` passed.

## 2026-10-01 — UI refinement

### Added
- Reworked Expert Technical Skills into five readable category cards with short explanations and individual technology tags, preserving only CV-listed skills.
- Added lightweight fade-and-rise section entrance motion and card hover lift transitions.
- Added an animated fine-pointer cursor with a responsive dot and trailing ring; it is disabled for touch pointers and prefers-reduced-motion users.

### Removed
- Removed the visible “CV section” label from every section heading.

### Verification
- `npm run build` passed with all static routes generated.
- `npm run lint` passed.

## 2026-10-01 — Removed duplicate section shortcuts

### Removed
- Removed the “Section shortcuts” navigation block below the current-focus list because the sticky top navigation already provides the same links.
- Removed its unused CSS and icon import.
