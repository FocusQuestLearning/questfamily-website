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

/** Canonical Google Play destinations. They resolve once each production
 * listing is public; keep the website PR in draft until both are verified. */
export const SUMMERQUEST_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.focusquestlearning.summerquest'

export const QUIET_GROVE_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.focusquestlearning.mindfuljournal'
