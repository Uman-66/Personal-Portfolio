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
- Removed the extra current-focus / “What I’m working on” block below the hero because it duplicated the front-page structure and felt crowded.
- Removed its unused CSS and icon import.

## 2026-10-01 — Removed extra research label

### Removed
- Removed the extra “Independent research” label from each research card to keep the card layout cleaner and more minimal.

### Verification
- Confirmed the research cards now display only the status and title, without the extra badge.
- `npm run build` passed successfully.

## 2026-10-01 — Visual motion pass

### Added
- Added a subtle ambient orbit detail behind the main content.
- Added a restrained pulsing halo around the profile photo.
- Added accent sweep feedback to cards and a soft lift/shadow on interactive controls.
- Added cursor hover expansion over links and buttons.
- Preserved reduced-motion and coarse-pointer safeguards.

### Verification
- `npm run build` passed with all static routes generated.

## 2026-10-01 — Expanded header name

### Changed
- Replaced the abbreviated `MRA.` header wordmark with the full name “Muhammad Rumman Aslam.”
- Tightened the wordmark spacing slightly so the full name remains readable in the sticky header.

## 2026-10-01 — Simplified header navigation

### Changed
- Reduced the desktop header to the primary destinations: Education, Experience, Research Projects, Technical Projects, and Contact.
- Kept the remaining CV section links available in the mobile navigation menu instead of forcing every section into the desktop bar.

## 2026-10-01 — Refined hero actions

### Changed
- Kept Download CV as the single prominent action.
- Replaced the equal-looking GitHub, LinkedIn, and Email buttons with quieter icon links to reduce visual crowding in the hero.
- Used GitHub and LinkedIn icons instead of generic link icons for clearer scanning.

## 2026-10-01 — Recomposed hero actions

### Changed
- Replaced the single inline action row with a dedicated CV call-to-action card.
- Grouped GitHub, LinkedIn, and Email into a separate, quieter link row beneath it.
- Added clearer hierarchy and spacing so the hero no longer reads like a row of competing buttons.

## 2026-10-01 — Simplified hero actions

### Changed
- Removed the CV action card after review.
- Replaced the entire action area with a lightweight editorial link row with no button boxes or supporting copy.

## 2026-10-01 — Separated CV and social actions

### Changed
- Made Download CV a distinct primary control.
- Added a separate social/contact area for Email, GitHub, LinkedIn, Medium, and LeetCode.
- Added recognizable platform marks through a local `BrandIcon` component instead of generic link arrows.

### Note
- `react-icons` installation was attempted but blocked by a network reset, so no new dependency was added.

## 2026-10-01 — Clarified hero descriptor

### Changed
- Updated the hero eyebrow to “AI/ML Engineer · Software Engineering Undergraduate” for a clearer professional identity.

## 2026-10-01 — Added education scholarship

### Added
- Added the user-confirmed fully funded, merit-based bachelor's scholarship to the Education card.
- Removed the redundant “from the university” wording from the scholarship statement.

## 2026-10-01 — Updated experience location

### Changed
- Updated the FlyRank experience location to “Chicago, Illinois, United States (Remote)” as requested.

## 2026-10-01 — Removed research card

### Removed
- Removed the Breast Cancer Detection & Histopathological Image Analysis research item completely from the research data.
- Its static detail route is no longer generated because the study is no longer part of the research collection.

## 2026-10-01 — Expanded single research card

### Changed
- Made the remaining TrustClinAI research card span the full content width instead of leaving an empty second column.
- Added its existing result statement as a concise Focus detail inside the card.

## 2026-10-01 — Simplified project showcase

### Removed
- Removed the All / Research / ML / Full-stack / Hackathon filter controls.

### Changed
- The Technical Projects section now displays every project at once.
- Each card now shows all of its available verified links instead of only the first link.

## 2026-10-01 — Added remaining documented projects

### Added
- Added Robust Multimodal Learning with its verified GitHub and Medium links.
- Added GraphBRAIN-ABIDE with its verified GitHub link.
- Added static detail routes for both projects.

### Source note
- These projects were not listed in `cv.tex`; they were added only after the user explicitly requested all documented projects from the supporting files.

## 2026-10-01 — Added all remaining local projects

### Added
- Added IBM Bob 2.0 Modernizer from the local project README and architecture documentation.
- Added WarrantyVault from the local application source.

### Link handling
- No external links were added for these projects because no verified public URLs were present in `links.txt`.

## 2026-10-01 — Removed NeuroVision-AI

- Removed NeuroVision-AI from the Technical Projects inventory at the user's request.
- Its generated detail route is no longer produced because routes are generated from the project inventory.

## 2026-10-01 — Corrected Negotiator project

- Renamed the project card from “The Cleaning Negotiator” to its actual project name, “The Negotiator.”
- Updated its subtitle and contribution details from the local project README.
- Added the verified certificate link from `links.txt`.

## 2026-10-02 — Simplified project cards

- Removed the category label displayed above each project title.
- Kept project titles, descriptions, tags, details links, and external links unchanged.

## 2026-10-02 — Renamed project detail section

- Replaced the “My contribution” heading on every project detail page with “Project details.”
- Kept the project-specific implementation and outcome details beneath the new heading.

## 2026-10-02 — Refined contact section

- Reworked the contact area into a clearer introduction and bordered contact panel.
- Grouped the email address and primary actions separately from GitHub, LinkedIn, and Medium links.
- Added responsive stacking for smaller screens.

## 2026-10-02 — Expanded iCodeGuru teaching entry

- Updated the entry to state that Muhammad led a 5-person teaching team.
- Added that the ML course supported underprivileged students from technical and non-technical backgrounds.
- Added the provided lecture recordings spreadsheet link.
