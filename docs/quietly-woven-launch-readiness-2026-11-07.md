# Quietly Woven website launch readiness — November 7, 2026

Continued the existing website/browser launch work while the owner's laptop was occupied with the Sun & Fern Google Play update. No connected-browser tab, saved writing, membership, billing flag, native build, store submission, tax registration or payment was changed.

## Current result

The published introduction and free browser journal are available. The paid browser launch remains on hold. This continuation adds a small website correction for review: both Canadian price previews now explicitly say **before applicable taxes**, matching the browser app's already-published disclosure. Approved CAD9.99/month and CAD79.99/year prices, Premium boundaries, existing artwork and unavailable-purchase notices are retained.

Website source reviewed: `d9d5b5c0bba22de028a3042df95130eaaf8ae094`.
App source reviewed: `a9fa0b3541964bf44ba899e1334eb686933e6563`.

The current application evidence is [the November 6 provider continuation](https://github.com/FocusQuestLearning/Mindful-Journal/blob/a9fa0b3541964bf44ba899e1334eb686933e6563/docs/quietly-woven-provider-fixes-2026-11-06.md), including its final PR #53 sections. Older unchecked items and earlier failure reports must be read against that newer evidence.

## Fresh public HTTP checks

Performed November 7, 2026, using ordinary HTTPS requests with certificate verification. These are HTTP/content checks, not a fresh interactive browser or device acceptance run.

| Check | Observed result |
| --- | --- |
| `quietlywovenapp.com` and `www`, HTTP and HTTPS | Final HTTP200 at the correct HTTPS Quietly Woven page; supplied tracking query values preserved |
| Canonical introduction | HTTP200; one H1; current Quietly Woven name; correct browser-journal link |
| Canadian previews | CAD9.99/month and CAD79.99/year; annual billing explanation and browser-purchase-unavailable notice present |
| Marketing content boundaries | 114 Premium Rituals, 150 Premium Library questions and local-only writing disclosure present |
| Mobile availability | No App Store/Google Play purchase or download link on this product page |
| Product Privacy, Terms and Support | Each returns HTTP200 |
| Home preview and sharing artwork | HTTP200 with the expected WebP/PNG content type |
| App Settings, Calendar and direct paid-question route | HTTP200 app shell; HTTP success alone does not demonstrate the interactive Premium gate |
| Anonymous production session, no Origin or exact app Origin | HTTP200, JSON `null`, `Cache-Control: no-store` |
| Anonymous production session, mismatched Origin | HTTP403, `Cache-Control: no-store`; request rejected |

The published landing page lacked an explicit applicable-tax notice in its pricing card and pricing FAQ. This branch corrects those two locations; the correction is not claimed as published merely because it exists in source.

## Source validation

- Production build, Next.js type validation and static export pass.
- Both exported product routes (`/quietly-woven/` and `/the-quiet-grove/`) contain exactly two visible applicable-tax disclosures, the approved monthly/yearly prices, fixed free sample descriptions, full Premium counts and the unavailable-browser-purchase notice.
- Each export retains one H1, both correct browser-journal buttons, Privacy/Terms/Support links and the local-storage explanation. Neither adds a mobile store download link.
- `git diff --check` passes. No dependency changes or new runtime/test code are included. The correction is text only and adds no layout elements; no fresh visual or real-device pass is claimed.

## Preserve completed acceptance

The latest application report already records the following successful November 6 checks. They were recovered, not repeated in this continuation:

- Single-account production desktop OTP sign-in, reload persistence, sign-out and free Calendar restriction.
- Annual and monthly sandbox checkout and receipt delivery; monthly renewal, customer portal, cancellation, paid-period access and expiry.
- Required terms consent, declined payment and unfinished/cancelled card authentication with no premature Premium access.
- Ontario sandbox tax display: monthly CAD9.99 + CAD1.30 HST = CAD11.29; annual CAD79.99 + CAD10.40 HST = CAD90.39.
- Taxed annual sandbox purchase, readable invoice/receipt PDFs, full refund, Premium revocation, matching tax reversal and preservation of a synthetic Premium-era reflection after the refund.
- PR #53's published signed-in/unavailable Settings wording, app tax disclosure and preview-auth origin fallback.

Neon Auth email webhooks remain off because this application uses the provider's built-in email delivery. This is separate from RevenueCat/Stripe subscription processing; do not enable unrelated email webhook switches to attempt to unlock Premium.

## Remaining acceptance

| Item | Remaining work |
| --- | --- |
| Production mobile browser | Real-device sign-in, reload persistence, sign-out and free/Premium isolation; desktop responsive-width checks do not close this |
| Second production account | The prior tab awaited an owner-entered OTP. That November 6 code is stale; resume with one fresh code when the owner can use the tab. Do not retrieve, record or copy codes into Git |
| Production billing | Confirm the exact live gateway and remaining live acceptance before enabling checkout; keep production checkout closed meanwhile |
| Connected Stripe access | Account enumeration still exposes only Brilliant Brains Sandbox, not the Quietly Woven live gateway. Do not substitute that account or create another billing catalogue; the earlier live-dashboard/tax results remain recorded in the provider report |
| Provider renewal copy | App copy explains tax, but RevenueCat's portal renewal sentence remains provider-controlled |
| Content provenance | Full quotation provenance/publication-rights review remains open; the seven prior attribution corrections do not certify all 47 quotations |
| Native/store launch | Genuine Apple subscription review screenshots and the remaining native purchase/restore, security and accessibility acceptance are separate outstanding work |

The website's free browser introduction can remain available with accurate availability copy. The paid launch must not be described as complete from these public checks or from the successful sandbox purchases alone.
