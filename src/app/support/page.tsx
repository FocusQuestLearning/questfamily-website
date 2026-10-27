import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Support | The Quest Family',
  description: 'Get help with Sun & Fern and Quietly Woven, including subscriptions, purchase restores and local data.',
}

export default function SupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14" aria-label="Support">
      {/* Header */}
      <div className="text-center mb-10">
        <Image src="/images/icon-signpost.webp" alt="" width={72} height={72} priority className="mx-auto mb-4 object-contain" />
        <h1 className="font-display text-4xl text-forest font-bold mb-3">We're Here to Help</h1>
        <p className="text-bark text-lg leading-relaxed max-w-xl mx-auto">
          The Quest Family is a small, family-run studio. If you run into any trouble 
          or have questions, please reach out.
        </p>
      </div>

      {/* Contact card */}
      <div className="nature-card bg-amber/5 border-amber/30 text-center mb-10">
        <h2 className="font-display text-xl text-forest font-bold mb-2">Email Support</h2>
        <p className="text-bark text-sm mb-4">
          Tell us which app you use and what you need help with.
        </p>
        <a
          href="mailto:support.questfamily@gmail.com"
          className="btn-primary inline-block max-w-full"
          aria-label="Email The Quest Family support team"
        >
          Email support
        </a>
        <p className="mt-4 text-sm text-bark break-words">support.questfamily@gmail.com</p>
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq">
        <h2 id="faq" className="font-display text-2xl text-forest font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is Sun & Fern?',
              a: 'Sun & Fern is a Canadian outdoor adventure app for families and K–8 learners. Guided by four storybook animal friends, children complete daily quests, discover wildlife, build a nature journal, and explore Canada coast to coast.',
            },
            {
              q: 'Is Sun & Fern free?',
              a: 'Sun & Fern includes free features and an optional Explorer Membership. The app shows which content is included and the store confirms the current plan, price and billing period before you purchase.',
            },
            {
              q: 'What devices does Sun & Fern support?',
              a: 'Sun & Fern is designed for phones and tablets. Use the download links on its app page to check current availability, compatible devices and operating-system requirements in your region.',
            },
            {
              q: 'Is Sun & Fern safe for my child?',
              a: 'Sun & Fern is designed for families exploring together. Adults should supervise children, permissions, purchases and outdoor activities. Journal entries and progress are saved on the device. Use a nickname for an explorer name and avoid entering identifying details about a child.',
            },
            {
              q: 'How do I cancel my Explorer Membership?',
              a: 'Use Manage Subscription in Sun & Fern Settings, or the subscription settings for the Apple or Google account used to purchase. Cancel before the next renewal. Access continues for the paid period confirmed by the store. Removing the app or resetting progress does not cancel a subscription.',
            },
            {
              q: 'How do I manage or cancel Quietly Woven Premium?',
              a: 'Use Settings → Manage subscription in Quietly Woven. Apple and Google Play purchases use the store account that purchased. For a browser purchase, sign in with the purchase email to use its management option; RevenueCat Billing manages browser subscriptions with Stripe processing payments. Cancel before renewal. Deleting an account, removing the app or clearing journal data does not cancel the subscription.',
            },
            {
              q: 'How do I restore a purchase?',
              a: 'For an Apple or Google Play purchase, use Restore Purchases in the app with the same store account. For a Quietly Woven browser purchase, sign in with the same verified email and choose Find my browser purchase. App Lock recovery is separate. Restoring membership does not restore a local journal or automatically transfer access between stores and browser billing.',
            },
            {
              q: 'How do I delete local journal data?',
              a: 'In Sun & Fern, delete individual journal entries or use Settings → Reset All Progress to remove the saved journal and progress from that device. In Quietly Woven, use Delete all journal data on the Privacy screen; export a journal backup first if you want a copy. These actions are permanent. We cannot remotely retrieve or erase writing stored only on your device. Separate exported copies or device backups are managed separately.',
            },
            {
              q: 'How do I request account or privacy-record deletion?',
              a: 'Email support.questfamily@gmail.com and say which app and records your request concerns. Sun & Fern’s local journal and progress do not require a family email account. Quietly Woven browser membership and App Lock recovery have separate records, so specify which you want removed. We may need to verify your request or retain records required by law. A deletion request does not cancel a subscription.',
            },
            {
              q: 'How do I request a refund?',
              a: 'For Apple or Google Play purchases, use that store’s refund process. For a Quietly Woven browser purchase, email support.questfamily@gmail.com. Cancelling renewal and requesting a refund are separate actions. Your applicable consumer rights continue to apply.',
            },
            {
              q: 'I found a bug or something isn\'t working. What should I do?',
              a: 'Email support.questfamily@gmail.com with the app name, what happened, your device type and operating-system version. For billing questions, say whether you purchased through Apple, Google Play or a browser. Do not send passwords, verification codes, full card numbers or private journal content.',
            },
            {
              q: 'Where can I follow The Quest Family?',
              a: 'We\'re a small team building something we love. The best way to follow along is to bookmark this site and check back for app launch news.',
            },
          ].map((item, i) => (
            <details
              key={i}
              className="nature-card group"
            >
              <summary className="font-display font-bold text-forest text-base cursor-pointer list-none flex justify-between items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest rounded-sm">
                {item.q}
                <span className="text-amber text-xl shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="text-bark text-sm leading-relaxed mt-3 pt-3 border-t border-amber/20">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Legal links */}
      <div className="mt-12 pt-8 border-t border-amber/20 text-center">
        <p className="text-bark/60 text-sm mb-4">Looking for our legal pages?</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
          <Link href="/privacy/" className="btn-outline text-sm px-6 py-2">
            Privacy Policy
          </Link>
          <Link href="/terms/" className="btn-outline text-sm px-6 py-2">
            Terms of Use
          </Link>
          <Link href="/quietly-woven/privacy/" className="btn-outline text-sm px-6 py-2">
            Quietly Woven Privacy
          </Link>
          <Link href="/quietly-woven/terms/" className="btn-outline text-sm px-6 py-2">
            Quietly Woven Terms
          </Link>
        </div>
      </div>
    </article>
  )
}
