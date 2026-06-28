/**
 * Single source of truth for the SummerQuest app destination.
 *
 * Today this points to the on-site "Get SummerQuest" page, which clearly
 * states the app is coming soon to the App Store and Google Play. Every
 * "Explore the App" / "Explore SummerQuest" CTA routes here so the label's
 * promise (go get the app) is honoured instead of dead-ending or reloading.
 *
 * TODO: When the App Store / Google Play listings are live, replace this with
 * the store URL — every CTA below updates automatically from this one line.
 *
 * Used by:
 *   - Header "Explore the App →" (desktop + mobile)
 *   - Homepage final CTA "Explore SummerQuest →"
 *   - SummerQuest page "Explore the App" overlay
 */
export const SUMMERQUEST_APP_URL = '/get-summerquest/'
