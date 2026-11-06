# Quietly Woven browser launch page — 2026-11-06

Prepared for the owner’s review. Do not merge or publish without the owner’s final approval.

## Visitor journey

The existing `/quietly-woven/` page and its legacy alias now explain the app with a genuine Home screenshot, a short three-step introduction, feature and Premium information, and two prominent links to the existing browser journal. The homepage’s Quietly Woven section links to the same browser destination. The approved forest, botanical mark, typography, colours and tagline are retained.

The canonical marketing address stays `https://thequestfamily.ca/quietly-woven/`. The owner reported purchasing quietlywovenapp.com during this task; public NS records confirm Cloudflare nameservers. Proposed redirect after approval: quietlywovenapp.com and www.quietlywovenapp.com → https://thequestfamily.ca/quietly-woven/ (HTTPS, permanent redirect, preserve query parameters). No registrar, DNS, hosting, app code, checkout or billing settings were changed.

## Availability evidence

- `https://quietly-woven.netlify.app/` returned HTTP 200 and displayed the real Home screen on 2026-11-06. Browser inspection opened the daily prompt and the reflection textbox. No journal entry was created and no purchase was tested.
- iOS app ID `6811666185` comes from the existing Mindful-Journal repository’s `artifacts/mobile/eas.json` (blob f0d455e79f6fcc9e9c7c55d13f7f0eaa6088ecac).
- Apple’s Canadian lookup returned zero results for that exact ID, and the Canadian public listing returned 404. App Store Connect requires owner sign-in. This does not determine the app’s approval state.
- Mobile store download links remain unavailable on the page. There is no invented store URL, price, free trial, launch date or promise of cloud sync.
- The browser journal already exposes the Home, prompt, mood and Premium information. Marketing does not promise all browser features are free or that purchase flow was verified.

## Assets

- `public/quietly-woven/home-preview.webp` is a compressed format conversion of the existing owner-provided `Quietly_Woven_02_Home_1206x2622.png`, actual size 941 × 2048. Original Library ID: libfile_fde3_f-113d522da5248191898a6c76a7dc8409_c541a6b439648191baeff73179db84d6. No UI elements or text were invented or retouched. The date and sample prompt are part of the screenshot; a caption identifies it as a look inside the journal.
- `public/quietly-woven/quietly-woven-share.png` is generated with the existing share-card script and approved forest/fonts. It now says Mindful Journaling. The old Coming Soon asset is preserved for existing references.
- No Runway credits, paid generation or new service was used.

## Validation

- Production build, TypeScript/Next checks and static export passed.
- 15 exported HTML documents and 604 internal references were checked, with no missing files or anchors. The canonical page has one H1.
- Desktop visual review passed: loaded Home screenshot, legible hero and button, feature anchor, FAQ disclosure and no horizontal overflow at a 1363px viewport.
- Narrow-screen visual review passed using 320px and 390px iframe viewports of the unchanged static export (305px and 375px content widths after scrollbars). Text and primary CTA fit, screenshot scales correctly, and neither document has horizontal overflow.
- Netlify deploy preview succeeded for implementation commit 7318f5e7cc2255e9e09198794ec3829b37b46fed. https://deploy-preview-8--thequestfamilyca.netlify.app/quietly-woven/ returned HTTP 200 with the correct app link and compressed Home screenshot.
- The local preview daemon does not support Next’s dev flags. QA uses an unchanged copy of the successful static export; application scripts and hosting config are unchanged.

## Before production

Review the preview and approve the website merge. Sign in to App Store Connect to verify iOS status and supply a public listing only when it resolves. No merge or production deploy is part of this checkpoint.
