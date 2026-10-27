import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use | The Quest Family',
  description: 'Terms for The Quest Family website and Sun & Fern, including purchases, cancellation and local data.',
}

const sections: LegalSection[] = [
  {
    id: 'scope',
    title: 'Using our website and Sun & Fern',
    body: <>
      <p>These terms cover The Quest Family website and Sun & Fern. By using these services, you agree to these terms. Quietly Woven has separate <Link href="/quietly-woven/terms/">Terms of Use</Link> and a <Link href="/quietly-woven/privacy/">Privacy Policy</Link>.</p>
      <p>Sun & Fern is for personal, non-commercial family use. A parent or guardian should supervise a child’s use and authorize purchases. Use the services lawfully and do not interfere with their operation or harm others.</p>
    </>,
  },
  {
    id: 'content',
    title: 'App content and your journal',
    body: <>
      <p>Our app content, including characters, illustrations, photography, quest text and badge designs, is owned by or licensed to The Quest Family. These terms give you permission to use that content within the app for its intended purpose. They do not transfer ownership or permit redistribution, except where the law or a separate licence allows it.</p>
      <p>You retain ownership of the journal entries and discovery notes you write. Sun & Fern saves these locally on your device. Using the app does not give us permission to publish your private writing.</p>
    </>,
  },
  {
    id: 'subscriptions',
    title: 'Explorer Membership and renewal',
    body: <>
      <p>Sun & Fern includes free features and an optional Explorer Membership. The purchase screen and app-store confirmation show the features, exact price, currency, billing period, applicable taxes and any offer terms before you pay. Availability can vary by platform and region.</p>
      <p>Purchases made in the Apple or Google Play app are billed through that store. An auto-renewing subscription renews at the disclosed interval unless cancelled before renewal under the store’s terms. Review any trial or introductory offer’s duration, renewal price and cancellation deadline on the purchase screen.</p>
      <p>For Quietly Woven’s mobile and browser membership options, read the <Link href="/quietly-woven/terms/#subscriptions">Quietly Woven subscription terms</Link>.</p>
    </>,
  },
  {
    id: 'cancel-restore-refunds',
    title: 'Cancellation, restores and refunds',
    body: <>
      <p>Use <em>Manage Subscription</em> in Sun & Fern Settings or the subscription settings for the Apple or Google account used to purchase. Cancellation stops future renewals; access continues for the paid period confirmed by the store.</p>
      <p>To restore eligible membership access, use <em>Restore Purchases</em> with the same store account. A purchase restore does not recover journal entries or progress saved only on a previous device.</p>
      <p>Removing the app, resetting its data or requesting data deletion does not cancel a subscription. Refund requests for app-store purchases follow Apple’s or Google Play’s process. Contact <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a> if you need help identifying where you purchased. Applicable consumer rights continue to apply.</p>
    </>,
  },
  {
    id: 'local-data',
    title: 'Your local data',
    body: <>
      <p>Sun & Fern does not provide a Quest Family cloud backup or sync service for your journal and progress. Resetting progress, clearing storage or removing the app can permanently remove local data. We cannot retrieve information stored only on your device.</p>
      <p>Our <Link href="/privacy/">Privacy Policy</Link> explains local storage, support messages, service providers and privacy requests.</p>
    </>,
  },
  {
    id: 'safety',
    title: 'Outdoor safety and educational content',
    body: <>
      <p>Adults should supervise outdoor activities, choose suitable locations and follow local rules, weather advice and access restrictions. Respect wildlife and private property. Nature descriptions and photographs are for learning; do not rely on an app to decide whether a plant, animal, food or activity is safe.</p>
      <p>We work to keep the services useful and accurate, but availability and content can contain errors or interruptions. To the extent permitted by applicable law, the services are provided as available, without a guarantee of uninterrupted access or error-free content.</p>
    </>,
  },
  {
    id: 'rights',
    title: 'Your legal rights',
    body: <>
      <p>Nothing in these terms excludes or limits a warranty, remedy, cancellation right, refund right or liability that cannot lawfully be excluded or limited. Any limitation applies only to the extent permitted by applicable law.</p>
      <p>Ontario law and the federal laws of Canada applicable there govern these terms, subject to any mandatory protections and rights available where you live. These terms do not require you to waive those protections.</p>
    </>,
  },
  {
    id: 'changes-contact',
    title: 'Changes and contact',
    body: <>
      <p>We will update this page and its date when the terms change, and give any notice or obtain any agreement required by applicable law. The terms shown when you purchase and applicable law govern your transaction.</p>
      <p>The Quest Family is based in Canada. Send questions about these terms or billing support to <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a>.</p>
    </>,
  },
]

export default function TermsPage() {
  return <LegalPage title="Terms of Use" sections={sections} summary="Please read these terms before using this website or Sun & Fern. Purchase details appear before you pay. Your mandatory consumer rights remain protected." />
}
