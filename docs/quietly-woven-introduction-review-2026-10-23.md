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

The approved forest artwork, existing botanical mark, tagline and cream/forest/sage styling are retained. The introduction's forest overlay is stronger so the small cream text is easier to read. No new imagery, emoji, dependencies, app-source changes or billing changes are included.

The canonical page remains `/quietly-woven/`. The legacy `/the-quiet-grove/` route uses the same component. Existing legal and support routes remain linked.

## Verification

- `npm run build`: compilation, Next.js checks/types and static export pass.
- 13 exported HTML documents: 262 internal links and 47 image elements checked with no missing targets, anchors or image files.
- Both introduction routes have one H1, Coming soon metadata and no public app-preview, checkout or Google Play links.
- Browser review at 320px and 390px phone widths and a 1348px desktop content width: no horizontal overflow. Feature and launch anchors settle below the header. The homepage introduction button opens the correct page, and its narrow-phone label fits on one line.

Before release, independently verify the public store listings, actual availability and purchase terms before replacing Coming soon with download or purchase actions.
