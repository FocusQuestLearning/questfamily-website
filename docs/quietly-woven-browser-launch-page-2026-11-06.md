# Quietly Woven browser launch page — 2026-11-06

Published with the owner’s explicit approval (“yes i approve”) on 2026-11-06. Website publication and the new domain redirect are complete.

## Visitor journey

The existing `/quietly-woven/` page and its legacy alias now explain the app with a genuine Home screenshot, a short three-step introduction, feature and Premium information, and two prominent links to the existing browser journal. The homepage’s Quietly Woven section links to the same browser destination. The approved forest, botanical mark, typography, colours and tagline are retained.

The canonical marketing address stays `https://thequestfamily.ca/quietly-woven/`. The purchased brand address `https://quietlywovenapp.com/` and its `www` counterpart now redirect to this page. The existing Netlify production site was updated and only the new domain’s Cloudflare DNS/redirect configuration was changed. App code, checkout, billing, registration settings and unrelated domains were not changed.

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

## Production publication and domain verification

- Owner explicitly approved both publishing the reviewed page and connecting the new domain, including www.
- PR #8 merged to main at `bf98d6666b1ba989cab7dec0fbbd893d2cd1d48c`, from reviewed head `e6222ce47347129cc68dbe1b445c3f806c15554e`.
- Production `https://thequestfamily.ca/quietly-woven/` returns HTTP 200 and contains the real Home preview and `Open Quietly Woven` link to `https://quietly-woven.netlify.app/`.
- Cloudflare: added proxied A records `@` and `www` pointing to `192.0.2.1`, TTL Auto, following Cloudflare’s documented redirect-only configuration. The domain had no DNS records before this change.
- Enabled Single Redirect `Quietly Woven launch page`, rule ID `8792ccb084654a7086885e5f9e70f016`. Exact match: `(http.host eq "quietlywovenapp.com") or (http.host eq "www.quietlywovenapp.com")`. Static target: `https://thequestfamily.ca/quietly-woven/`. Status 301. Preserve query string enabled.
- Verified all four HTTP/HTTPS and apex/www combinations. Each returned a single 301 to the correct HTTPS page, then HTTP 200 with the new content. HTTPS certificate verification passed with the default Python trust settings. Test parameters `utm_source=launch_check&utm_campaign=quietly_woven` survived the redirect unchanged.
- Opened `https://quietlywovenapp.com/` in the owner’s connected browser and visually confirmed the published hero and primary app button. Left the page open as the deliverable.

## Outstanding mobile availability

Sign in to App Store Connect to verify iOS status and supply a public listing only when it resolves. The website and browser journal are live; this checkpoint does not certify a mobile-store launch or subscription purchase test.

## Owner-requested accuracy and Premium audit

On November 6, the owner confirmed $9.99/month and $79.99/year, requested an accuracy audit, and explicitly required Premium content to stay Premium. The source and recorded provider currency are CAD. The website now labels these as Canadian preview prices because a current provider transaction has not been verified.

The live browser app's Premium purchase controls were disabled, and its old October 24 deployment (`195ba56`) exposed the Mood Calendar to free visitors. Mindful-Journal main `44e4dc1` already contains the required Calendar gate and fixed free samples. Browser correction PR #50 brings the tested protections forward, aligns preview prices, and explains unavailable purchases. No billing-provider price or existing subscription was changed.

Website copy now discloses unavailable browser Premium purchases beside the primary journey and pricing. Free access is explicitly three Ritual samples and five Reflection Library questions. Premium includes all 114 Rituals, all 150 Library questions, the Mood Calendar, wider quotes, personal Insights and 30-day mood history. The existing genuine screenshot contains no price and remains labelled as an example.

Source validation: all 113 app source tests passed, including fixed samples across dates, direct-question links, Calendar gating during free/checking/error states, confirmed expiry, and preserved saved writing. Full app CI and deployed-browser acceptance are tracked in https://github.com/FocusQuestLearning/Mindful-Journal/pull/50. The actual provider checkout/restore/receipt flow and native device tests remain unverified by this website audit.
