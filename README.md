# Muhammad Rumman Aslam — Portfolio

This is a static-exported Next.js portfolio built from the CV in the workspace. It uses the App Router, TypeScript, Tailwind CSS, `next/font`, `next/image`, `next-themes`, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` to create the static export in `out/`.

## Edit content

All portfolio content is typed and lives in [`src/data/`](src/data/):

- `profile.ts` — name, role, intro, contact links, hero facts, current focus
- `education.ts` — education entry
- `experience.ts` — experience entry and bullets
- `research.ts` — research cards and detail-page content
- `projects.ts` — project cards, tags, outcomes, and verified links
- `skills.ts` — expert technical skills
- `certifications.ts` — certification names and issuers
- `achievements.ts` — leadership and achievement entries
- `sections.ts` — navigation labels and CV section order
- `site.ts` — the single `SITE_URL` constant used by metadata, sitemap, and robots

Components render these data files; do not duplicate content in JSX. To add a project, add one typed object to `projects.ts`. Its `slug` creates the static `/projects/[slug]` detail route automatically. Add a research object to `research.ts` for the matching research route.

## Replace the photo or CV

- Replace `public/profile.jpeg` with the approved portrait, keeping the filename or updating the `src` in `FrontPage.tsx`.
- Replace `public/cv.pdf` with the current PDF. The Download CV button points to `/cv.pdf`.

## Deploy

### Vercel

Import the repository into Vercel. The default build command is `npm run build`.

### GitHub Pages

Build with `npm run build`, then publish the generated `out/` directory from a Pages workflow or deployment branch. If using a project subpath, configure the appropriate `basePath` and `assetPrefix` in `next.config.ts`.

Before deploying, replace `SITE_URL` in `src/data/site.ts` with the real canonical domain.

## Content policy

The CV is the source of truth. Supporting README claims that are not in the CV are intentionally excluded unless explicitly approved. See [`AUDIT.md`](AUDIT.md) and [`NOT-IN-CV.md`](NOT-IN-CV.md).
