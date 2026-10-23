import type { Metadata } from 'next'
import Link from 'next/link'
import { BotanicalMark, BotanicalSprig } from '@/components/quiet-grove/BotanicalMark'

export const metadata: Metadata = {
  title: 'Terms of Use — Quietly Woven',
  description: 'Quietly Woven terms for Premium subscriptions, cancellation, restoring purchases and your local journal.',
  alternates: { canonical: '/quietly-woven/terms/' },
}

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: 'using-quietly-woven',
    title: 'Using Quietly Woven',
    body: <>
      <p>Quietly Woven is a reflection and journaling app by The Quest Family, a studio based in Canada. These terms cover Quietly Woven and its Premium membership. By using the app, you agree to these terms. Please use it lawfully and respect the rights of others. A parent or guardian should supervise a child’s use and authorize purchases.</p>
      <p>You keep ownership of your writing. The app’s original content and artwork are owned by or licensed to The Quest Family. You may use them within the app for personal use; these terms do not transfer ownership or permit redistribution, except where the law or a separate licence allows it.</p>
    </>,
  },
  {
    id: 'subscriptions',
    title: 'Premium subscriptions',
    body: <>
      <p>Premium is offered as a monthly or annual auto-renewing subscription. It includes the complete Rituals, Reflection Library and personal Insights. Core journaling in the mobile app remains free. The browser edition’s membership requirements, available features and plans are shown before purchase.</p>
      <p>The final purchase screen confirms the exact price, currency, billing period and applicable taxes before you pay. Any offer has the terms shown with that offer. Availability can vary by platform and region.</p>
      <p>Mobile purchases are billed through Apple’s App Store or Google Play. Where browser purchasing is available, RevenueCat Billing manages the subscription and Stripe processes payment. Subscriptions renew automatically unless cancelled before the next renewal under the applicable billing provider’s terms.</p>
    </>,
  },
  {
    id: 'cancellation',
    title: 'Managing or cancelling a subscription',
    body: <>
      <p>Use <em>Settings → Manage subscription</em> in the app. For an Apple or Google Play purchase, you can also use that store’s subscription settings with the account you used to purchase. For a browser purchase, sign in with the purchase email to access the subscription management option.</p>
      <p>Cancellation stops future renewals. Premium access continues for the paid period confirmed by the billing provider. Removing the app, signing out, deleting journal data or requesting account deletion does not cancel a subscription.</p>
      <p>If you cannot access the management option, email <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a> for help. Do not include a verification code, password, full card number or private journal content.</p>
    </>,
  },
  {
    id: 'restore',
    title: 'Finding a purchase again',
    body: <>
      <p>For an Apple or Google Play purchase, use <em>Restore purchases</em> in the mobile app with the same store account. For a browser purchase, sign in with the same verified email and use <em>Find my browser purchase</em>.</p>
      <p>A restore checks eligible Premium access. App Lock recovery is separate and cannot restore a purchase. A purchase does not automatically transfer between Apple, Google Play and browser billing; check the supported access shown for your platform or contact support before purchasing again.</p>
    </>,
  },
  {
    id: 'billing-help',
    title: 'Billing questions and refunds',
    body: <>
      <p>For browser billing questions or refund requests, email <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a>. For Apple or Google Play purchases, use that store’s refund process. A cancellation and a refund are separate requests.</p>
      <p>Nothing in these terms removes a refund, cancellation or other consumer right provided by applicable law. The terms and disclosures shown when you purchase also apply to that transaction.</p>
    </>,
  },
  {
    id: 'journal',
    title: 'Your journal and account',
    body: <>
      <p>Journal entries, moods, reflection answers and personal questions stay in local storage on your device. Quietly Woven does not provide a cloud backup or sync service for them. Premium membership, browser sign-in and App Lock recovery do not back up or transfer your writing.</p>
      <p>Use <em>Export journal backup</em> if you want to keep a copy before clearing storage or changing devices. Deleting data or removing the app can permanently remove your local journal; we cannot retrieve writing stored only on your device. Any exported copies or separate device backups are managed separately.</p>
      <p>Read the <Link href="/quietly-woven/privacy/">Quietly Woven Privacy Policy</Link> for account information, App Lock recovery, security, providers and privacy requests.</p>
    </>,
  },
  {
    id: 'rights',
    title: 'Availability and your legal rights',
    body: <>
      <p>We work to keep Quietly Woven available and useful, but interruptions and errors can occur. To the extent permitted by applicable law, it is provided as available, without a guarantee of uninterrupted or error-free operation.</p>
      <p>Nothing in these terms excludes or limits a warranty, remedy or liability that cannot lawfully be excluded or limited. Ontario law and the federal laws of Canada applicable there govern these terms, subject to the mandatory protections and rights available where you live.</p>
    </>,
  },
  {
    id: 'contact',
    title: 'Changes and contact',
    body: <>
      <p>We will update this page and its date when these terms change, and give any notice or obtain any agreement required by applicable law.</p>
      <p>Contact The Quest Family at <a href="mailto:support.questfamily@gmail.com">support.questfamily@gmail.com</a> with questions about these terms or your subscription.</p>
    </>,
  },
]

export default function QuietlyWovenTermsPage() {
  return (
    <>
      <header className="bg-[#345b43] text-[#f8f2e6]">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
          <BotanicalMark color="#f8f2e6" size={44} />
          <p className="qg-serif mt-4 text-lg">Quietly Woven <span className="italic text-[#e6dcc2]">— A Place for Your Thoughts</span></p>
          <h1 className="mt-3 text-3xl md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-sm text-[#e6dcc2]">Last updated: October 23, 2026</p>
        </div>
      </header>
      <article className="qg-legal max-w-3xl mx-auto px-5 md:px-6 py-12 md:py-16 [&_a]:break-words" aria-label="Quietly Woven Terms of Use">
        <div className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed] p-6 md:p-8">
          <p className="qg-serif text-xl md:text-2xl text-[#1f3025] !leading-snug">A little clarity, before you choose.</p>
          <p className="mt-3">These terms explain membership, renewal and your local journal. Your purchase confirmation shows the final plan details, and your mandatory consumer rights remain protected.</p>
        </div>
        <nav aria-label="Quietly Woven terms sections" className="mt-10">
          <p className="qg-serif text-lg text-[#1f3025] mb-3">Contents</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-3 list-decimal list-inside">
            {sections.map(section => <li key={section.id} className="!text-base"><a href={'#' + section.id}>{section.title}</a></li>)}
          </ol>
        </nav>
        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={section.id + '-heading'} className="scroll-mt-24">
              <h2 id={section.id + '-heading'} className="text-2xl text-[#1f3025] mb-4">{index + 1}. {section.title}</h2>
              <div className="space-y-4">{section.body}</div>
            </section>
          ))}
        </div>
        <div className="flex flex-col items-center mt-16 gap-4 text-center">
          <BotanicalSprig color="#64775f" size={36} />
          <Link href="/quietly-woven/privacy/">Quietly Woven Privacy Policy</Link>
          <Link href="/quietly-woven/" className="qg-serif">Return to Quietly Woven →</Link>
        </div>
      </article>
    </>
  )
}
