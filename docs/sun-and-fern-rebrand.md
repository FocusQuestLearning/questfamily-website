# Sun & Fern website rebrand

Prepared from approved main `a895030e7f4b807edfcc7292b6089c51f7aef390` for the existing website PR #4. Supersedes the older draft scope that introduced unpublished product placeholders. The final change only concerns the former SummerQuest app and its matching website references.

Approved identity: **Sun & Fern — Wild Adventures. Wonderful Discoveries. — By The Quest Family**.

The product page now uses real responsive HTML headings, navigation and feature text alongside the rebranded approved character scene. The earlier full-page raster painted the old name and navigation into an image; it is retained as an unused original. Header/footer links, download page, metadata, FAQ and existing legal-page references use the new name. Legal obligations and billing policies are not rewritten.

Preserve `/summerquest/`, `/get-summerquest/`, the existing Google Play package URL, production domains, Quest Family parent logo, Quietly Woven pages and all other products. NatureQuest is not renamed.

Validation executed: `npm run build` passed, including TypeScript validation and 14 static routes. Exported Home, product, download, support, privacy and terms pages were inspected for visible brand text. The matching approved parent-brand assets remain present.

Pending: hosted preview, browser/mobile layout and keyboard review, actual store availability/name update. The existing Next 14.2.5 dependency emitted an installer security notice; no framework upgrade is included in this branding change.

No merge, production deploy, domain change, paid service or store update. Follow the Quest Family workflow: Implement → Preview → Test → Fix → Approve → Merge. Coordinate with app PR [SummerQuest #80](https://github.com/FocusQuestLearning/SummerQuest/pull/80).
