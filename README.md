# QuestFamily.ca — Version 1.0

**The Quest Family launch website.** Simple, mobile-first, launch-focused.

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Sun & Fern | `/sun-and-fern/` |
| Get Sun & Fern | `/get-sun-and-fern/` |
| Privacy Policy | `/privacy/` |
| Terms of Use | `/terms/` |
| Support | `/support/` |

## Tech Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS**
- **TypeScript**
- **Netlify** (deploy-ready via `netlify.toml`)

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

Output is in the `out/` folder — deploy to Netlify, Vercel, or any static host.

## Images

All site images live in `public/images/`:

| File | Usage | Original |
|------|-------|---------|
| `hero-banner.jpg` | Homepage hero | 521KB (from 3MB PNG) |
| `sun-and-fern-hero.jpg` | Sun & Fern product page | Approved rebranded scene |
| `the-quest-family-icon.webp` | Shared header and 404 page | Approved mountain/river/sunrise circle from 2026-10-22 |
| `the-quest-family-logo.webp` | Shared footer | Approved full Quest Family logo from 2026-10-22 |
| `logo-circle-sm.png` | Reserved for Sun & Fern and other apps featuring the four guides | Character badge preserved unchanged; not the umbrella logo |

Approved brand masters and usage rules are documented in `docs/brand-assets.md`.

## Strict Rules

- ❌ Do not change the Sun & Fern mobile app from this website repository
- ❌ No blog, login, shop, backend, or CMS
- ✅ Launch-focused and App Store ready
- ✅ Mobile-first, accessible, fast
