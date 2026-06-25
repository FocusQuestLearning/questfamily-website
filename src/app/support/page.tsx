import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support | The Quest Family',
  description: 'Get help with SummerQuest and The Quest Family apps. Contact our support team.',
}

export default function SupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14" aria-label="Support">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4" aria-hidden="true">🌿</div>
        <h1 className="font-display text-4xl text-forest font-bold mb-3">We're Here to Help</h1>
        <p className="text-bark text-lg leading-relaxed max-w-xl mx-auto">
          The Quest Family is a small, family-run studio. If you run into any trouble 
          or have questions, please reach out — we genuinely want to help.
        </p>
      </div>

      {/* Contact card */}
      <div className="nature-card bg-amber/5 border-amber/30 text-center mb-10">
        <div className="text-3xl mb-3" aria-hidden="true">✉️</div>
        <h2 className="font-display text-xl text-forest font-bold mb-2">Email Support</h2>
        <p className="text-bark text-sm mb-4">
          We aim to respond within 2–3 business days.
        </p>
        <a
          href="mailto:support.questfamily@gmail.com"
          className="btn-primary inline-block"
          aria-label="Email The Quest Family support team"
        >
          support.questfamily@gmail.com
        </a>
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq">
        <h2 id="faq" className="font-display text-2xl text-forest font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is SummerQuest?',
              a: 'SummerQuest is a Canadian outdoor adventure app for families and K–8 learners. Guided by four storybook animal friends, children complete daily quests, discover wildlife, build a nature journal, and explore Canada coast to coast.',
            },
            {
              q: 'Is SummerQuest free?',
              a: 'Yes! SummerQuest offers a generous free tier: 15 quests, 35 discoveries, a full Nature Journal, Family Campfire, Leaf Points, and the ability to browse all provinces. An optional Explorer Membership unlocks all content and future updates.',
            },
            {
              q: 'What devices does SummerQuest support?',
              a: 'SummerQuest is a mobile-first app, designed for phones and tablets. It will be available on iOS (App Store) and Android (Google Play). Coming soon — check back for launch announcements.',
            },
            {
              q: 'Is SummerQuest safe for my child?',
              a: 'Absolutely. Camera access is optional, journal entries are private to your family, we never sell data, and all wildlife photography shows living animals in natural habitats — no distressing content.',
            },
            {
              q: 'How do I cancel my Explorer Membership?',
              a: 'Subscriptions are managed through the Apple App Store or Google Play. To cancel, open your device\'s app store subscription settings and cancel from there. You will retain access until the end of your current billing period.',
            },
            {
              q: 'How do I delete my account or request data removal?',
              a: 'Email us at support.questfamily@gmail.com and we will process your deletion request promptly, typically within 5–7 business days.',
            },
            {
              q: 'I found a bug or something isn\'t working. What should I do?',
              a: 'Please email us at support.questfamily@gmail.com with a description of what happened, your device type, and operating system version. We\'ll investigate and get back to you as soon as possible.',
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
              <summary className="font-display font-bold text-forest text-base cursor-pointer list-none flex justify-between items-center gap-4">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/privacy/" className="btn-outline text-sm px-6 py-2">
            Privacy Policy
          </Link>
          <Link href="/terms/" className="btn-outline text-sm px-6 py-2">
            Terms of Use
          </Link>
        </div>
      </div>
    </article>
  )
}
