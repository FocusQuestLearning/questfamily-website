import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Sun & Fern Desktop Membership Terms | The Quest Family',
  description: 'Desktop Explorer Membership pricing, renewal, cancellation and access for Sun & Fern.',
  alternates: { canonical: '/sun-and-fern/desktop-terms/' },
}

const sections: LegalSection[] = [
  { id: 'scope', title: 'Desktop Explorer Membership', body: <>
    <p>These terms supplement the <Link href="/terms/">Sun &amp; Fern Terms of Use</Link> for the browser edition. The Quest Family is a Canadian studio. A parent or guardian should supervise children’s use and authorize purchases. Public desktop billing is not available while checkout is labelled Sandbox or Test checkout.</p>
    <p>Monthly and annual desktop memberships provide the same full quest and discovery library. The browser edition is separate from the Apple and Google Play editions. A purchase through one billing system does not currently transfer membership access to another.</p>
  </> },
  { id: 'subscriptions', title: 'Prices, renewal and payment', body: <>
    <p>The approved Canadian desktop plans are CAD $9.99 each month or CAD $79.99 each year, before applicable taxes. The annual plan is charged once per year upfront. Checkout confirms the selected plan, currency, final total and renewal terms before purchase.</p>
    <p>RevenueCat Billing manages the desktop membership and Stripe processes payment. A subscription renews automatically at the disclosed rate and interval until cancelled. Any trial, introductory offer or price change must be disclosed under its applicable terms; no trial is promised by these terms.</p>
    <p>A testing preview labelled Sandbox or Test checkout uses test transactions and does not charge real money. A successful sandbox test is not a paid production membership.</p>
  </> },
  { id: 'manage', title: 'Manage, cancel and recover membership', body: <>
    <p>Sign in using the same verified email to recover eligible desktop access. Use Manage Desktop Membership to view the billing portal and cancel future renewals. The portal may verify your purchase email separately. Cancel before the next renewal; access continues for the paid period confirmed by the billing provider.</p>
    <p>Signing out, deleting an account, clearing browser data or removing the app does not cancel the subscription. For billing or refund help, contact <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a> with your purchase email and the fact that it is a Sun &amp; Fern desktop purchase. Do not send full card numbers or sign-in codes. Cancellation and a refund request are separate actions; applicable consumer rights remain protected.</p>
    <p>Apple and Google Play purchases continue to use their original store’s purchase, restore, cancellation and refund processes.</p>
  </> },
  { id: 'journal', title: 'Local journal and progress', body: <>
    <p>Journal entries and adventure progress are stored locally in your browser. The membership account does not provide cloud backup or sync of writing, badges or progress across browsers, computers or mobile apps. Restoring membership restores eligible access, not deleted local data.</p>
    <p>Read the <Link href="/sun-and-fern/desktop-privacy/">desktop privacy policy</Link> for account, hosting, billing and privacy-request information.</p>
  </> },
  { id: 'rights', title: 'Your rights and contact', body: <>
    <p>Nothing in these terms limits rights, remedies or liabilities that cannot lawfully be limited. Ontario law and applicable federal Canadian law govern, subject to mandatory protections where you live. The terms shown when you purchase and applicable law govern the transaction.</p>
    <p>We will update this page and provide notice or obtain agreement where required when terms change. Contact <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a> with questions.</p>
  </> },
]

export default function DesktopTermsPage() {
  return <LegalPage title="Sun & Fern Desktop Membership Terms" updated="November 8, 2026" sections={sections} summary="CAD $9.99 monthly or CAD $79.99 yearly, plus applicable taxes. Browser membership is currently separate from Apple and Google Play membership." />
}
