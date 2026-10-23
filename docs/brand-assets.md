# The Quest Family brand assets

On 2026-10-23 the owner confirmed that the mountain, river and sunrise artwork made for Stripe on 2026-10-22 is the umbrella brand identity. The existing four-guide character badge is reserved for SummerQuest and other apps using those characters.

## Umbrella identity

| Asset | Use |
| --- | --- |
| `assets/brand/the-quest-family-approved-logo.png` | Exact approved full logo master: landscape circle beside The Quest Family lettering. |
| `assets/brand/the-quest-family-approved-circle-icon.png` | Exact approved circular icon master, including everything in the gold circle. |
| `public/images/the-quest-family-icon.webp` | Optimised 192 × 192 copy for the shared header and 404 page. |
| `public/images/the-quest-family-logo.webp` | Optimised 768 × 256 copy for the shared footer; shown on cream so its green lettering stays readable. |
| `public/images/the-quest-family-icon-32.png` | Website browser icon. |
| `public/images/the-quest-family-icon-180.png` | Apple touch icon. |

The header keeps The Quest Family name visible on phones beside the compact landscape icon. The footer uses the complete approved wordmark without clipping or recolouring it. These assets identify the umbrella business across the shared website, including Quietly Woven's introduction, legal and support pages.

The original masters are copied byte-for-byte. Web copies preserve composition, aspect ratio and transparency. No new artwork is generated and no Stripe settings are changed.

### Source and integrity

- Full logo: `The_Quest_Family_Approved_Logo.png`; SHA-256 `40b1dd4189b415ba4b1306421996afc2879afc1382d54d9baa9d661ad1397096`.
- Circular icon: `The_Quest_Family_Circle_Icon.png`; SHA-256 `a091a006585379830e520982ec993447e6e80137f31663c56a556280a853b625`.

## Character badge

`public/images/logo-circle-sm.png` is retained unchanged for SummerQuest and other apps featuring Fennick, Aria, Birch and Moss. It is not the umbrella identity and must not be reintroduced in the shared website header, footer, browser icons or generic 404 page.

Preserved badge SHA-256: `28b034e77f42d95dd62bfcbdf358827eb46aa9a70f20c5ac1202305c0e8ca99a`.

The approved SummerQuest illustrations, promotional page and character artwork remain available in their existing locations.

## Verification

- Production build, Next.js checks/types and static export pass.
- All 13 exported HTML documents use the new browser/touch icons. Shared output contains 26 approved brand image placements and no character badges. All 262 internal links and referenced image/icon files resolve.
- Both approved masters and the reserved character badge match their source hashes.
- Browser review at 320px, 390px, 768px and 1024px: logo proportions are preserved and there is no horizontal overflow. The phone menu remains usable with the brand name visible.
- The footer keeps the full wordmark on cream and places link columns beneath it until the desktop breakpoint, preserving readable logo size on tablets.
