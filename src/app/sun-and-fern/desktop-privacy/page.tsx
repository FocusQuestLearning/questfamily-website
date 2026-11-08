import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Sun & Fern Desktop Privacy | The Quest Family',
  description: 'Privacy for Sun & Fern browser sign-in, desktop membership and local journal data.',
  alternates: { canonical: '/sun-and-fern/desktop-privacy/' },
}

const sections: LegalSection[] = [
  { id: 'scope', title: 'The browser edition', body: <>
    <p>This page covers Sun &amp; Fern’s browser edition, including its current testing preview. The Quest Family is based in Canada. Contact <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a> about privacy. The <Link href="/privacy/">Sun &amp; Fern mobile and website privacy policy</Link> explains the Apple and Google Play editions and this information website.</p>
    <p>A parent or guardian should manage the membership account and authorize purchases. Use the adult’s email rather than a child’s email or identifying information.</p>
  </> },
  { id: 'account', title: 'Sign-in and membership recovery', body: <>
    <p>Desktop membership uses an email account provided through Neon Auth. A one-time code verifies your email. Neon processes your email address, account identifier, sign-in and session information so you can sign in and recover membership access. Sign-in requires access to that email account.</p>
    <p>RevenueCat receives an account identifier to associate billing and membership status with your desktop account. The billing flow also receives your purchase email for receipts and membership management. Signing in recovers eligible desktop membership access; it does not recover a deleted local journal or automatically unlock an Apple or Google Play membership.</p>
  </> },
  { id: 'payments', title: 'Payments and subscription records', body: <>
    <p>RevenueCat Billing manages desktop subscriptions, with Stripe processing payments. These providers process the payment, transaction, billing contact and location information needed for checkout, applicable taxes, receipts, fraud prevention, renewals, cancellation and refunds. Full payment-card details are entered into the payment provider’s secure form; they are not stored in your Sun &amp; Fern journal.</p>
    <p>We use membership and transaction status to provide access and help with billing questions. Sandbox transactions in the testing preview do not move real money.</p>
    <ul>
      <li><a href="https://neon.com/privacy-policy" rel="noopener noreferrer">Neon Privacy Policy</a></li>
      <li><a href="https://www.revenuecat.com/privacy/" rel="noopener noreferrer">RevenueCat Privacy Policy</a></li>
      <li><a href="https://stripe.com/privacy" rel="noopener noreferrer">Stripe Privacy Policy</a></li>
    </ul>
  </> },
  { id: 'local-data', title: 'Your journal and adventure progress', body: <>
    <p>Your explorer profile, journal entries, discoveries, quests, badges and points stay in this browser’s local storage. The membership account does not upload, back up or sync this information to Neon or RevenueCat.</p>
    <p>Clearing site data, using a different browser or computer, or using private browsing can leave this local information unavailable or permanently remove it. Membership recovery restores access, not local writing or progress. Use a nickname and avoid putting a child’s identifying details in the app or support messages.</p>
  </> },
  { id: 'hosting', title: 'Hosting, security and retention', body: <>
    <p>Netlify hosts the browser edition and processes network information needed to deliver and secure it, such as IP address, requested page, browser information and request time. External image hosts receive network information when their images are requested. See <a href="https://www.netlify.com/privacy/" rel="noopener noreferrer">Netlify’s Privacy Policy</a>.</p>
    <p>Authentication, billing and support records are retained as needed to operate the service, resolve requests and meet applicable recordkeeping obligations. Providers may process data outside Canada. The current desktop authentication service is hosted in the United States. No storage or transmission method guarantees complete security.</p>
    <p>We do not sell your personal information or use your private journal for advertising. Do not send passwords, sign-in codes, full card numbers or journal content to support.</p>
  </> },
  { id: 'choices', title: 'Your choices and privacy requests', body: <>
    <p>Manage or cancel a desktop subscription through Manage Desktop Membership. Deleting an account, clearing browser data or making a privacy request does not cancel a subscription. You can request access, correction or deletion of account, billing or support records by emailing <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a>. Specify Sun &amp; Fern Desktop and the records concerned. We may need to verify your request or retain records required by law.</p>
    <p>You can delete individual local journal entries or reset local progress through the app. Resetting is permanent. We cannot retrieve or remotely erase journal data held only in your browser. Separate exports or device backups are managed separately.</p>
    <p>We will update this policy and provide notice or obtain consent where required when practices change. Read the <Link href="/sun-and-fern/desktop-terms/">desktop membership terms</Link> for billing and cancellation details.</p>
  </> },
]

export default function DesktopPrivacyPage() {
  return <LegalPage title="Sun & Fern Desktop Privacy" updated="November 8, 2026" sections={sections} summary="Desktop membership uses a verified email and billing account. Your journal and adventure progress stay in this browser." />
}
