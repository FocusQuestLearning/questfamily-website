import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Quest Family',
  description: 'How The Quest Family website and SummerQuest handle information, local app data and privacy requests.',
}

const sections: LegalSection[] = [
  {
    id: 'scope',
    title: 'Who this policy covers',
    body: <>
      <p>The Quest Family is a family-run studio based in Canada. This policy covers this website and SummerQuest. Privacy questions and requests can be sent to <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a>.</p>
      <p>Quietly Woven has a separate <Link href="/quietly-woven/privacy/">Privacy Policy</Link> explaining its local journal, optional App Lock recovery and browser subscription account.</p>
    </>,
  },
  {
    id: 'website',
    title: 'Visiting this website',
    body: <>
      <p>This website provides information about our apps and links to app stores. It has no family-account registration or payment form. We have not added advertising trackers or analytics scripts to this website.</p>
      <p>Our website host, Netlify, processes the network information needed to deliver and secure pages, such as your IP address, requested page, browser information and request time. See <a href="https://www.netlify.com/privacy/" rel="noopener noreferrer">Netlify’s Privacy Policy</a>. Opening an app-store or other external link takes you to a service with its own privacy practices.</p>
    </>,
  },
  {
    id: 'summerquest',
    title: 'SummerQuest information on your device',
    body: <>
      <p>SummerQuest saves your explorer name, chosen region, completed quests, discoveries, badges, points, activity dates and journal entries in the app’s local storage on your device. You can also type an optional note about where you found a discovery. That note is saved with your discovery record.</p>
      <p>The current app does not require a family email account or provide a Quest Family cloud backup or sync service for this information. We do not receive your local journal entries or progress through those app features.</p>
      <p>Use a nickname for an explorer name, especially when a child uses the app. Avoid putting a child’s full name, home address or other identifying details in discovery notes or support messages. You can review and change app permissions in your device settings.</p>
    </>,
  },
  {
    id: 'purchases',
    title: 'SummerQuest purchases and external content',
    body: <>
      <p>Optional Explorer Membership purchases and restores use Apple’s App Store or Google Play, depending on where you purchased. The store processes payment and transaction information; the app uses purchase status to determine membership access. The app does not receive your full payment-card number.</p>
      <p>Some nature images can load from external image hosts. When an image is requested, that host receives network information such as your IP address and the image requested. This is separate from the journal and progress saved on your device.</p>
      <ul>
        <li><a href="https://www.apple.com/legal/privacy/" rel="noopener noreferrer">Apple Privacy Policy</a></li>
        <li><a href="https://policies.google.com/privacy" rel="noopener noreferrer">Google Privacy Policy</a></li>
      </ul>
    </>,
  },
  {
    id: 'support',
    title: 'When you contact us',
    body: <>
      <p>If you email support, we receive your email address, message and anything you attach. We use this information to answer your question, investigate the issue and handle your request. Email delivery and storage are provided through our support email service.</p>
      <p>Send only what is needed to explain the issue. We do not need your password, verification code, full card number or private journal to help with a billing question. We do not sell your personal information or use private journal content for advertising.</p>
    </>,
  },
  {
    id: 'families',
    title: 'Families and children',
    body: <>
      <p>SummerQuest is intended for families exploring together. Parents and guardians should supervise children’s app use, outdoor activities, permissions and purchases. The app’s local journal and progress features do not require a child’s email address or a public profile.</p>
      <p>A parent or guardian can contact us about information sent to support by a child or to make a privacy request. We may ask for enough information to verify a request without collecting unnecessary details about the child.</p>
    </>,
  },
  {
    id: 'storage',
    title: 'Storage, security and retention',
    body: <>
      <p>Your device and operating-system security protect SummerQuest’s local storage. Keep your device secure and current. A purchase restore restores eligible membership access; it does not restore a lost local journal or progress.</p>
      <p>Support correspondence is kept as needed to resolve the request and meet applicable recordkeeping obligations. Hosting, email and app-store providers keep their service records under their own policies. Service providers may process information outside Canada, where it may be subject to that country’s laws.</p>
      <p>No storage or transmission method can guarantee complete security. SummerQuest does not provide separate encryption of journal entries or a cloud backup service.</p>
    </>,
  },
  {
    id: 'choices',
    title: 'Your choices and privacy requests',
    body: <>
      <ul>
        <li><strong>SummerQuest journal:</strong> delete an individual entry in the journal, or use <em>Reset All Progress</em> in Settings to remove the app’s saved journal and progress from that device. Resetting is permanent.</li>
        <li><strong>Device storage:</strong> clearing app storage or removing the app can permanently remove local information. Any separate device backups or copies you have made are managed separately.</li>
        <li><strong>Membership:</strong> manage or cancel it through the store where you purchased. Resetting progress, removing the app or emailing a privacy request does not cancel a subscription.</li>
        <li><strong>Information we hold:</strong> contact support to request access, correction or deletion, withdraw consent where applicable, or raise a privacy concern. We will explain any verification needed and any information we must retain under applicable law.</li>
      </ul>
      <p>We cannot remotely retrieve or erase a journal stored only on your device. Please do not send us the journal itself to request deletion.</p>
    </>,
  },
  {
    id: 'changes',
    title: 'Changes and contact',
    body: <>
      <p>We will update this page and its date when these practices change, and provide any additional notice or consent required by applicable law.</p>
      <p>Contact The Quest Family at <a href="mailto:support.questfamily@gmail.com?subject=Privacy%20request">support.questfamily@gmail.com</a> for privacy questions or requests.</p>
    </>,
  },
]

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} summary="SummerQuest saves your journal and progress on your device. This website, support email and app-store purchases each handle different information. The sections below explain those differences." />
}
