/**
 * Single source of truth for the Sun & Fern app destination.
 *
 * This points to the on-site download page so visitors can see platform
 * availability, purchase information and support links in one place.
 *
 * Used by:
 *   - Homepage final CTA "Explore Sun & Fern →"
 *   - Sun & Fern page "Explore the App" overlay
 */
export const SUN_AND_FERN_APP_URL = '/get-sun-and-fern/'

/** The public introduction page, rather than an app launch or checkout. */
export const QUIETLY_WOVEN_INFO_URL = '/quietly-woven/'

/** Verify public listing and regional availability before showing a download CTA.
 * A configured package URL is not evidence that its store listing is public. */
// Preserve the published package identifier for existing installations.
export const SUN_AND_FERN_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.focusquestlearning.summerquest'

export const QUIET_GROVE_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.focusquestlearning.mindfuljournal'

/** Existing browser app, verified on 2026-11-06. Store links remain gated on public availability. */
export const QUIETLY_WOVEN_WEB_URL = 'https://quietly-woven.netlify.app/'
