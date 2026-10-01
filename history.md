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
