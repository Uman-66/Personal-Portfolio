# Test report

## Automated checks

| Check | Result |
|---|---|
| `npm install` | Passed |
| `npm run lint` | Passed |
| `npm run build` | Passed |
| Static homepage export | Passed |
| Static research routes | Passed: 2 routes |
| Static project routes | Passed: 3 routes |
| CV PDF exists at `/cv.pdf` | Passed |
| Profile image exists at `/profile.jpeg` | Passed |
| Sitemap and robots routes | Passed by static build |
| Placeholder scan for `TODO`, `coming soon`, `add results` in rendered source | Passed |

## Manual/browser checks

- Homepage opened successfully at `http://localhost:3000`.
- Hero content, CV download link, profile photo, section navigation, project filters, detail links, and contact links rendered.
- Reduced-motion CSS uses `prefers-reduced-motion: reduce` and removes transitions/automatic smooth scrolling.
- Layout uses responsive breakpoints for mobile, tablet, and desktop widths: `600px` and `800px`.

## Lighthouse

Lighthouse was not run because a Lighthouse executable or browser audit runner is not available in this workspace. No score is claimed.

## Link validation

Internal static routes were generated successfully by `next build`. External URLs are sourced from `links.txt` and were not rewritten. They should be checked again after deployment because external availability can change.
