# Quietly Woven introduction review — 2026-10-23

The owner confirmed that Quietly Woven has not launched and must be presented as **Coming soon**.

## Public visitor journey

- The homepage labels Quietly Woven Coming soon and links to its public introduction with **Discover Quietly Woven**.
- The introduction explains the journal's practical benefits, separates the free mobile offer from optional Premium, and gives each section a clear next step.
- **See what's coming** opens the features section. **View launch plans** opens the platform status section. Android, iPhone/iPad and desktop all say Coming soon.
- There are no Quietly Woven download, app-preview or checkout links on these marketing pages. There is no invented launch date or waitlist.
- Premium includes the Ritual collections, Reflection Library, more quotes, personal Insights and 30-day mood history. No numerical content counts or unverified prices are promised.
- Local journal storage is explained without promising subscription-based cloud backup or sync.

## Brand and scope

The approved forest artwork, existing botanical mark, tagline and cream/forest/sage styling are retained. The introduction's forest overlay is stronger so the small cream text is easier to read. No replacement artwork, emoji, dependencies, app-source changes or billing changes are included.

The canonical page remains `/quietly-woven/`. The legacy `/the-quiet-grove/` route uses the same component. Existing legal and support routes remain linked.

## Prelaunch finishing touches

### Smaller forest downloads

The original JPEGs are preserved. AVIF copies retain the original dimensions and composition, with WebP fallbacks for browsers that do not support AVIF. The homepage picture also retains JPEG fallbacks. Both the homepage and introduction use the smaller formats.

| Artwork | Dimensions | Original JPEG bytes | AVIF bytes | Reduction | WebP fallback bytes |
| --- | --- | ---: | ---: | ---: | ---: |
| Mobile | 1024 × 1536 | 700,245 | 207,159 | 70.4% | 379,366 |
| Desktop | 1536 × 1024 | 604,108 | 176,638 | 70.8% | 310,608 |

These figures measure image transfer size, not a guaranteed page-load time.

### Compact FAQ

Three native disclosure controls answer what will be free, what Premium will include and where writing will be stored. All are closed initially and work with pointer or keyboard without additional JavaScript. The answers preserve the Coming soon status and existing Free/Premium and local-storage scope.

### Branded sharing card

The 1200 × 630 PNG combines the approved desktop forest, existing Lora/Inter fonts, Quietly Woven name, tagline, Coming soon label and The Quest Family attribution. Open Graph and Twitter large-image tags point to this card, with descriptive alt text. It is not loaded as an additional image in the page body.

The card is served as a static file. Recreate it with `node scripts/render-quietly-woven-share.mjs`; the generator uses existing project dependencies and local assets only. Its canonical production URL will become available after the approved website change is published. The asset can be inspected on the PR preview in the meantime.

## Verification

- `npm run build`: compilation, Next.js checks/types and static export pass.
- 13 exported HTML documents: 262 internal links and 47 image elements checked with no missing targets, anchors or image files.
- Both introduction routes have one H1, Coming soon metadata and no public app-preview, checkout or Google Play links.
- Browser review at 320px and 390px phone widths and a 1348px desktop content width: no horizontal overflow. Feature and launch anchors settle below the header. The homepage introduction button opens the correct page, and its narrow-phone label fits on one line.
- FAQ answers open with a pointer; Enter opens and Space closes a focused question. Expanded answers remain readable at phone widths.
- Open Graph/Twitter metadata, the 1200 × 630 card, responsive image sources and CSS image paths are checked in the static export. AVIF copies are visually reviewed against the approved artwork.

Before release, independently verify the public store listings, actual availability and purchase terms before replacing Coming soon with download or purchase actions.
