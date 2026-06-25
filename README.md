# QuestFamily.ca — Version 1.0

**The Quest Family launch website.** Simple, mobile-first, launch-focused.

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| SummerQuest | `/summerquest/` |
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
| `summerquest-promo.jpg` | SummerQuest page | 454KB (from 2.7MB PNG) |
| `logo-circle.png` | Footer (full size) | 2.3MB |
| `logo-circle-sm.png` | Header/navbar | 81KB |

## Strict Rules

- ❌ Do not touch the SummerQuest app code
- ❌ No blog, login, shop, backend, or CMS
- ✅ Launch-focused and App Store ready
- ✅ Mobile-first, accessible, fast
