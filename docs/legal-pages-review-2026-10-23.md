# Website privacy, terms and support review

Prepared October 23, 2026. This is a website copy proposal based on source inspection, not a legal opinion or certification of the published apps. Keep it on a review branch until the owner approves publication. Do not merge, deploy production, enable billing, purchase a domain or submit a trademark application as part of this change.

## Result

- `/privacy/` covers the website and SummerQuest, with local storage, support correspondence, hosting, purchases, external image requests and privacy-request instructions.
- `/terms/` covers the website and SummerQuest, with store billing, renewal, cancellation, restore limitations and mandatory consumer rights.
- `/quietly-woven/privacy/` and its existing `/the-quiet-grove/privacy/` alias describe browser email membership, RevenueCat Billing with Stripe, separate App Lock recovery, necessary session storage and the local journal.
- New `/quietly-woven/terms/` explains mobile and browser subscription management without promising cross-platform purchase transfer or journal sync.
- Support answers distinguish local journal deletion, account/recovery-record deletion, subscription cancellation and refunds. The Quietly Woven landing page and site footer link to its terms.

Existing artwork, brand identities, app code, subscription configuration and production hosting settings are outside this change. The page dates describe the proposed policy revision; they do not prove deployment or acceptance of the terms.

## Evidence reviewed

| Area | Source and finding |
| --- | --- |
| Website | `FocusQuestLearning/questfamily-website` at `b6c966fab050064d3a515973a645142f32541dec`: Next.js static export; no family registration, checkout form or added analytics scripts. Netlify configuration is already present. |
| SummerQuest local data | `FocusQuestLearning/SummerQuest` at `6d80be5aa54121672c29b691e24e3940f4078a92`, `artifacts/mobile/context/AppContext.tsx`: AsyncStorage saves explorer name, region, journal, discoveries, typed discovery location and progress. Settings exposes individual/local reset and store purchase controls. |
| SummerQuest purchases | Same revision, `context/SubscriptionContext.tsx` and mobile package metadata: Apple/Google in-app purchasing, not Quietly Woven’s RevenueCat browser flow. |
| SummerQuest images | Same revision, `app/discovery/[id].tsx` and `constants/imageHeaders.ts`: remote image fallback can make network requests. Local journal storage does not imply that every app asset is offline. |
| Quietly Woven accounts | `FocusQuestLearning/Mindful-Journal` at `0407ed73c714af3da2223850267557db7e559660`, `docs/quietly-woven-web-checkout.md`, mobile privacy and membership libraries: Neon Auth email OTP, an opaque account ID for RevenueCat, and a separate App Lock recovery registration. None syncs the journal. |
| Quietly Woven billing | Same revision, billing runtime, subscription policy and mobile terms: RevenueCat Billing owns browser subscriptions and uses Stripe; Apple/Google handle native purchases. An active entitlement determines Premium access. Browser live billing is gated by configuration. |
| Quietly Woven recovery | Same revision, API recovery runtime/store: email, device identifier, credential digest and temporary challenge/rate-limit records; no journal or PIN payload. Provider settings and production operation still need verification. |
| Content counts | No fixed Free Ritual count is published in this change. The separate, unmerged Quietly Woven PR #42 proposes seven Free Rituals; older source/terms counts must not override that approved direction. |

Source observations do not establish which binaries or production configuration are currently deployed. The policies must be reconciled with the release being published.

## Required review before publication or live checkout

1. **Operator identity and seller disclosures.** Verify the legal operator, Ontario registration where required, and the business address/contact disclosures needed for the actual sale. A CRA business number alone does not verify an Ontario business-name registration. Do not invent or expose a home address. Have the operator supply the appropriate business contact details for final terms and checkout.
2. **Consumer contract and checkout.** Review the final terms against the actual Ontario/Canadian sales flow and any other markets served. Confirm pre-purchase disclosures, consent, the transaction record provided to the customer, cancellation and refund handling. These pages do not establish enforceability by themselves.
3. **Production billing.** Confirm the production membership/auth environment, RevenueCat live offering and entitlement, prices/currency/renewal intervals, portal links, purchase restoration, provider receipts and refund support. No real purchase, paid build or billing-setting change was performed for this copy review. Do not create a second direct Stripe subscription flow alongside RevenueCat Billing.
4. **Taxes.** Confirm registration obligations and how taxes are disclosed and collected for the actual business. No tax setting was enabled and no registration status is asserted here.
5. **Privacy operations.** Verify the actual hosting/database/email processors, processing locations, retention schedule and the working process for access, correction and deletion of membership and recovery records. Local deletion, server-record deletion and subscription cancellation are separate operations. Confirm store privacy labels/Data Safety disclosures against the released builds.
6. **SummerQuest permissions.** Its manifest declares camera, photo and location permissions/dependencies, while inspected journal/progress code stores text locally. A full permission/use review on the release build is still needed. This change avoids the old blanket claim that no location information is handled and does not advertise an unverified camera feature.
7. **Naming and rights.** This proposal does not clear any name, slogan, image, font, character or third-party content licence. Complete the separate clearance findings and asset-rights review before a public rebrand. The older website PR #4 contains a different naming direction and remains separate; do not treat it as the latest approval. The learning-app naming conflict remains unresolved.

## Validation

- `npm run build` passes, including Next.js type checking and static generation of the new terms route.
- The export check covers seven relevant pages: exactly one H1 each, no duplicate IDs, and 169 internal links/fragments resolving.
- Browser QA uses the built static export. The managed supervisor’s injected Vite-style flags are incompatible with the existing Next.js dev script, so the same supervisor serves an isolated copy of the export for QA; application development scripts are unchanged.
- Desktop checks cover Quietly Woven terms/privacy and section navigation. Mobile iframe viewports at 320 and 390 pixels have no horizontal document overflow for the privacy, terms and support pages checked. Subscription and local-deletion FAQ panels open with mouse and keyboard.
- This is a content, navigation and layout check. It does not test purchases, account deletion, production email delivery, store review compliance or security of the apps. Existing dependency versions are unchanged.
