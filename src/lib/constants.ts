/**
 * Single source of truth for the SummerQuest app destination.
 *
 * This points to the on-site download page so visitors can see platform
 * availability, purchase information and support links in one place.
 *
 * Used by:
 *   - Homepage final CTA "Explore SummerQuest →"
 *   - SummerQuest page "Explore the App" overlay
 */
export const SUMMERQUEST_APP_URL = '/get-summerquest/'

/** The public introduction page, rather than an app launch or checkout. */
export const QUIETLY_WOVEN_INFO_URL = '/quietly-woven/'

/** Verify public listing and regional availability before showing a download CTA.
 * A configured package URL is not evidence that its store listing is public. */
export const SUMMERQUEST_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.focusquestlearning.summerquest'

export const QUIET_GROVE_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.focusquestlearning.mindfuljournal'
