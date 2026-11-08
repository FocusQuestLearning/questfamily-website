# Sun & Fern launch links and payment checkpoint — 7 November 2026 (Toronto)

Continue PR #12; do not recreate either store app, upload Android 20, or resubmit version 21.

## Completed Google download-price correction

The live existing app's App pricing page still showed Paid, Canada CAD 29.99. The owner explicitly requested an immediate correction to free download. Changed Make your app free, saved, and confirmed Google's permanent paid-to-free warning. The resulting page explicitly states: **Your app is available for free on Google Play, and can't be changed to paid.** This is a saved console result, not an unconfirmed edit. Public storefront caching may lag.

- Existing app: `4972402322309405514`; developer `4907006233982116467`.
- Package remains `com.focusquestlearning.summerquest`.
- [Saved console evidence](evidence/sun-and-fern-google-free-2026-11-07.png).
- Membership prices were not edited: approved Canada CAD 9.99/month and CAD 79.99/year, equal access.
- The supplied `Sun_Fern_Google_Play_Submission_Completed_2026-11-07.txt` records all eight Production/Alpha21 and listing/declaration changes submitted, in review, managed publishing off. The current console Home independently showed Sun & Fern, Changes in review. No repeat submission or binary build was performed.

## Website changes and verification

- Continue the existing download page and original Google package link.
- Replace the stale paid-download warning after the actual free-download correction.
- State both approved Canadian membership prices and equal access; purchases remain in the native Apple/Google app, with final localized price/tax/renewal terms confirmed by the store.
- Retain the prepared Apple app6798818268 link behind its existing public-availability flag. An HTTP check of `https://apps.apple.com/ca/app/id6798818268` returned 404 in this continuation. Do not enable a broken public download button or withdraw Apple's submission.
- Existing public Google package URL returned HTTP200 and the older SummerQuest title, consistent with the rebrand still in review.
- Before publication, the live website download page returned HTTP200, showed Apple coming soon, and lacked the two membership prices.
- Next.js production build/type checks passed; 16 static pages generated. This verifies the site build, not an actual native transaction.

## Payment integration boundary

The submitted banner-only mobile source `c24f835e24af7df1ef18c99635317d3f18e4f7be` uses `react-native-iap`12.16.4 and direct StoreKit2/Google Play entitlement checks. No RevenueCat SDK or Stripe unlock path is present in that implementation. App Review notes independently describe direct StoreKit2 and no external iOS checkout.

The connected Stripe account The Quest Family (`acct_1TBK8G2I73ZcCQNK`), live mode, returned 18 active CAD prices with expanded product names; none was Sun & Fern, SummerQuest or Explorer Membership, and none matched the approved CAD9.99/month or CAD79.99/year plans. This is limited to that active CAD catalogue; it does not establish an account-wide absence of products in other currencies or accounts.

The connected Neon account lists only `quiet-grove-recovery`. That is a separate app; no schema or data was changed. The existing website support content associates RevenueCat Billing/Stripe with Quietly Woven browser purchases.

Do not add a Sun & Fern Stripe charge link that the submitted native apps cannot redeem. A new unified web/mobile billing flow would need the correct RevenueCat project, product/entitlement and customer identity mapping, native integration, renewal/cancellation/refund handling, applicable tax configuration and actual test purchase/unlock/restore evidence. It is not completed by changing a website button. No payment was charged and no RevenueCat/Stripe/Neon configuration was changed in this checkpoint.

## RevenueCat account inspection

The existing signed-in RevenueCat dashboard listed FocusQuest, project-o212bhDd and The Quiet Grove. FocusQuest's Apps page contains Android/iOS `com.focusquest.mobile`; project-o212bhDd has no app configurations; The Quiet Grove's Apps page contains Android/iOS `com.focusquestlearning.mindfuljournal`. No Sun & Fern/SummerQuest app configuration was found in these accessible projects. The Quiet Grove overview showed Quietly Woven Web Billing transactions with Sandbox data selected; these are not Sun & Fern or production payment proof. Existing populated projects report no permission to add app configurations. No keys were revealed and no configuration was changed.
