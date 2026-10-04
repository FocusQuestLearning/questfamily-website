import type { Metadata } from 'next'
import Link from 'next/link'
import { BotanicalMark, BotanicalSprig } from '@/components/quiet-grove/BotanicalMark'

/*
 * Quietly Woven — A Place for Your Thoughts: public Privacy Policy.
 *
 * Every statement below was checked against the current app source
 * (FocusQuestLearning/Mindful-Journal, main). If the app's data handling
 * changes, update this page to match the app — not the other way round.
 */

const PRIVACY_EMAIL = 'support.questfamily@gmail.com'
const LAST_UPDATED = 'October 4, 2026'

export const metadata: Metadata = {
  title: 'Privacy Policy — Quietly Woven',
  description: 'Privacy Policy for Quietly Woven — A Place for Your Thoughts, an app by The Quest Family.',
  alternates: { canonical: '/quietly-woven/privacy/' },
}

type Section = { id: string; title: string; body: React.ReactNode }

const sections: Section[] = [
  {
    id: 'overview',
    title: 'What information Quietly Woven handles',
    body: (
      <>
        <p>Quietly Woven handles only what you choose to write or select inside the app:</p>
        <ul>
          <li>journal entries and reflections you write;</li>
          <li>moods you log;</li>
          <li>your answers to guided reflection questions;</li>
          <li>personal questions you create;</li>
          <li>a simple note of when you last opened the app, used only to show a gentle welcome back after time away.</li>
        </ul>
        <p>
          The app does not ask for your name, phone number, age, contacts, photos or location. If you choose App Lock, it asks for a recovery email address and verifies it before enabling the lock.
        </p>
      </>
    ),
  },
  {
    id: 'storage',
    title: 'Journal data and device storage',
    body: (
      <>
        <p>
          Your journal entries, moods, reflection answers and personal questions are stored locally in the app&rsquo;s storage on your device.
          Quietly Woven does not upload your journal entries, moods, answers or personal questions
          to our servers, and we cannot see or read them.
        </p>
        <p>
          Quietly Woven does not provide cloud backup or sync. Your journal is not copied to another device
          automatically.
        </p>
      </>
    ),
  },
  {
    id: 'accounts',
    title: 'Accounts',
    body: <p>Quietly Woven does not have user accounts. There is no account sign-up or login. Optional App Lock email verification registers a recovery address for that device; it does not create a journal account or cloud backup.</p>,
  },
  {
    id: 'app-lock',
    title: 'Optional App Lock and email recovery',
    body: (
      <>
        <p>
          App Lock is optional. You can choose a PIN or supported device biometrics. Setup verifies a recovery email
          before enabling the lock. If you forget the PIN or cannot use biometrics, a fresh email code lets you choose a
          new PIN while keeping the journal on your device.
        </p>
        <p>
          The recovery service processes your recovery email address, a random device registration identifier,
          a digest of the device recovery credential, and temporary verification and abuse-prevention records.
          It uses a keyed digest of the request network address for rate limits. Hosting and email providers may
          also process network and delivery information needed to operate the service.
          The recovery API never receives your PIN, journal entries, moods, answers or personal questions.
        </p>
        <p>
          Verification codes expire after ten minutes, allow a limited number of attempts and can be used once.
          Codes are stored as keyed digests by the recovery API; the email provider processes the delivered message.
          Recovery addresses are used for App Lock verification and recovery, not marketing.
        </p>
      </>
    ),
  },
  {
    id: 'purchases',
    title: 'Purchases and subscriptions',
    body: (
      <>
        <p>
          Quietly Woven Premium is an optional monthly or annual subscription. Core journaling does not
          require a purchase.
        </p>
        <p>
          Payments are processed entirely by <strong>Apple (App Store)</strong> or <strong>Google (Google Play)</strong>,
          using your store account. We never receive your payment-card details.
        </p>
      </>
    ),
  },
  {
    id: 'revenuecat',
    title: 'RevenueCat',
    body: (
      <>
        <p>
          The app uses <strong>RevenueCat</strong>, a subscription-management service, to show available
          subscription options, process purchases and restores through the App Store or Google Play, and confirm
          whether Premium is active.
        </p>
        <p>
          The app connects to RevenueCat when it starts, whether or not you ever make a purchase, so it can check
          subscription status. RevenueCat uses an anonymous app user identifier; the app does not send your name,
          email or journal content to RevenueCat. RevenueCat, Apple and Google may process purchase, transaction,
          device and diagnostic information under their own privacy policies:
        </p>
        <ul>
          <li><a href="https://www.revenuecat.com/privacy/" rel="noopener noreferrer">RevenueCat Privacy Policy</a></li>
          <li><a href="https://www.apple.com/legal/privacy/" rel="noopener noreferrer">Apple Privacy Policy</a></li>
          <li><a href="https://policies.google.com/privacy" rel="noopener noreferrer">Google Privacy Policy</a></li>
        </ul>
      </>
    ),
  },
  {
    id: 'analytics',
    title: 'Analytics, tracking and advertising',
    body: (
      <p>
        Quietly Woven does not include analytics, crash-reporting, advertising or tracking tools.
        It shows no ads, and we do not use your information for advertising or sell it.
      </p>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party services',
    body: (
      <p>
        For subscriptions, the app communicates with RevenueCat and the Apple App Store or Google Play.
        Optional email recovery also uses an API host, a PostgreSQL database provider and an authorized email
        provider to register recovery addresses, check verification codes and deliver recovery messages.
        These services receive recovery details, not journal content. The app&rsquo;s typefaces
        and images are built into the app and are not loaded from outside services.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Data sharing',
    body: (
      <>
        <p>We do not share, sell or rent your journal content, because it stays on your device.</p>
        <p>
          If you choose <em>Export journal backup</em>, the app opens your device&rsquo;s share options so you can
          send a copy of your journal, including your personal questions, wherever you choose. What happens to that copy
          then depends on where you send it.
        </p>
      </>
    ),
  },
  {
    id: 'permissions',
    title: 'Device permissions',
    body: (
      <p>
        Quietly Woven does not request access to your camera, microphone, location, photos or files.
        It uses the internet for subscription services and optional email recovery, and may use your device&rsquo;s vibration
        for gentle haptic feedback when you save. If you choose biometric App Lock, the operating system handles fingerprint
        or Face ID authentication. Quietly Woven receives the authentication result and does not receive or store biometric templates.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention and deletion',
    body: (
      <>
        <p>Your journal stays on your device until you remove it. You can:</p>
        <ul>
          <li>delete individual entries in the app;</li>
          <li>
            use <em>Delete all journal data</em> on the in-app Privacy screen to permanently remove every saved
            reflection, mood and personal question from that device;
          </li>
          <li>clear the app&rsquo;s storage or uninstall the app, which removes all of its locally stored data.</li>
        </ul>
        <p>
          Because there is no cloud backup, deleted data and data removed by uninstalling cannot be recovered by us.
          Export a backup first if you want to keep a copy.
        </p>
        <p>
          Verified recovery registrations are retained until you request deletion through the contact address below.
          Clearing app storage or uninstalling removes the device&rsquo;s local recovery credential, but does not automatically
          delete the server registration. Expired pending challenges and old rate-limit records are cleared during daily
          maintenance. Abandoned unverified registrations become eligible for deletion after 24 hours.
        </p>
        <p>
          Subscription records held by Apple, Google or RevenueCat are kept under their own policies.
          Subscriptions are managed or cancelled in your App Store or Google Play subscription settings.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Your journal is protected by your device and its operating-system security. Optional App Lock adds a PIN or device
        biometrics to control opening the app. Native lock credentials use operating-system secure storage; the browser
        stores a salted PIN digest. App Lock does not separately encrypt your journal entries. Recovery uses HTTPS and
        one-time codes with expiry, attempt limits and resend limits. We recommend using a device passcode and keeping
        your operating system up to date.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children\u2019s privacy',
    body: (
      <p>
        Quietly Woven does not ask for a name or age, and journal content stays on the device. If optional App Lock is used,
        a recovery email address and device registration are processed as described above. A parent or guardian can use
        the contact address below for questions or a recovery-registration deletion request.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        If the way Quietly Woven handles information changes, we will update this page and the
        &ldquo;Last updated&rdquo; date above.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions or privacy requests can be sent to The Quest Family at{' '}
        <a href={`mailto:${PRIVACY_EMAIL}?subject=Quietly%20Woven%20Privacy`}>{PRIVACY_EMAIL}</a>.
      </p>
    ),
  },
]

export default function QuietGrovePrivacyPage() {
  return (
    <>
      <header className="bg-[#345b43] text-[#f8f2e6]">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
          <BotanicalMark color="#f8f2e6" size={44} />
          <p className="qg-serif mt-4 text-lg">
            Quietly Woven <span className="italic text-[#e6dcc2]">&mdash; A Place for Your Thoughts</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#e6dcc2]">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <article className="qg-legal max-w-3xl mx-auto px-5 md:px-6 py-12 md:py-16" aria-label="Quietly Woven Privacy Policy">
        <div className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed] p-6 md:p-8">
          <p className="qg-serif text-xl md:text-2xl text-[#1f3025] !leading-snug">Your journal belongs to you.</p>
          <p className="mt-3">
            This policy explains how Quietly Woven, an app by The Quest Family, handles
            information. Your writing stays on your device. There are no user accounts, ads, analytics or trackers.
            Optional App Lock uses a verified email address to help you recover access without erasing your journal.
          </p>
        </div>

        <nav aria-label="Policy sections" className="mt-10">
          <p className="qg-serif text-lg text-[#1f3025] mb-3">Contents</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 list-decimal list-inside">
            {sections.map((s) => (
              <li key={s.id} className="!text-base">
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24">
              <h2 id={`${s.id}-h`} className="text-2xl text-[#1f3025] mb-4">
                {i + 1}. {s.title}
              </h2>
              <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">{s.body}</div>
            </section>
          ))}
        </div>

        <div className="flex flex-col items-center mt-16 gap-4 text-center">
          <BotanicalSprig color="#64775f" size={36} />
          <Link href="/quietly-woven/" className="qg-serif text-[#345b43] hover:text-[#87724f]">
            Return to Quietly Woven &rarr;
          </Link>
        </div>
      </article>
    </>
  )
}

