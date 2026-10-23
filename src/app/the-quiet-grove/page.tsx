import type { Metadata } from 'next'
import Link from 'next/link'
import { BotanicalMark } from '@/components/quiet-grove/BotanicalMark'

export const metadata: Metadata = {
  title: 'Quietly Woven — A Place for Your Thoughts | The Quest Family',
  description: 'Coming soon: a quiet place to reflect and grow. Discover Quietly Woven’s private journal, gentle prompts and optional Premium collections.',
  alternates: { canonical: 'https://thequestfamily.ca/quietly-woven/' },
  openGraph: {
    title: 'Quietly Woven — A Place for Your Thoughts',
    description: 'Coming soon. A quiet place to reflect and grow, with private journaling, gentle prompts and optional Premium.',
    url: 'https://thequestfamily.ca/quietly-woven/',
    siteName: 'The Quest Family',
    type: 'website',
    images: [{
      url: 'https://thequestfamily.ca/quietly-woven/quietly-woven-coming-soon.png',
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: 'Quietly Woven — A Place for Your Thoughts. Coming soon from The Quest Family, over the approved sunlit forest.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quietly Woven — Coming soon',
    description: 'A Place for Your Thoughts. Discover a quiet place to reflect and grow, with private journaling and optional Premium.',
    images: [{
      url: 'https://thequestfamily.ca/quietly-woven/quietly-woven-coming-soon.png',
      alt: 'Quietly Woven — A Place for Your Thoughts. Coming soon from The Quest Family.',
    }],
  },
}

export default function QuietGrovePage() {
  return (
    <>
      <section className="qg-hero text-[#f8f2e6]" aria-label="Quietly Woven introduction">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20 flex flex-col items-center text-center">
          <BotanicalMark color="#f8f2e6" size={40} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#efe6cf]">Coming soon</p>
          <h1 className="mt-4 text-4xl md:text-6xl leading-tight">Quietly Woven</h1>
          <p className="qg-serif italic text-lg md:text-2xl mt-2 text-[#efe6cf]">A Place for Your Thoughts</p>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl text-[#f8f2e6]">
            Write what&rsquo;s on your mind, check in with how you feel, and make a little room for yourself.
          </p>
          <Link href="#inside" className="mt-8 inline-block rounded-full bg-[#f3eee2] px-8 py-3.5 font-semibold text-[#1f3025] shadow-md transition-colors hover:bg-[#e6dcc2]">
            See what&rsquo;s coming &rarr;
          </Link>
          <Link href="#availability" className="mt-5 py-1 text-sm text-[#efe6cf] underline underline-offset-4 hover:text-white">
            View launch plans
          </Link>
        </div>
      </section>

      <section id="inside" className="max-w-5xl mx-auto px-5 md:px-6 py-14 md:py-20 scroll-mt-24" aria-labelledby="inside-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="inside-heading" className="text-3xl md:text-4xl text-[#1f3025]">A quiet place to reflect and grow.</h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#3b4a3f]">
            Some days call for a few words. Others need a little guidance. Begin with your journal,
            a mood check-in or a gentle prompt, and choose what feels useful to you.
          </p>
          <p className="qg-serif italic mt-6 text-xl text-[#345b43]">
            Come when you need it. Leave when you&rsquo;re ready. Return when you want.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          <section className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed] p-6 md:p-8" aria-labelledby="free-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64775f]">Free mobile journal at launch</p>
            <h3 id="free-heading" className="mt-3 text-2xl text-[#1f3025]">A place to begin.</h3>
            <p className="mt-4 text-base leading-relaxed text-[#3b4a3f]">A few words can be enough. Keep a thought, a feeling or a moment you want to remember.</p>
            <ul className="mt-5 list-disc pl-5 space-y-3 text-base leading-relaxed text-[#3b4a3f] marker:text-[#64775f]">
              <li>Personal journaling and gratitude.</li>
              <li>Mood check-ins and a daily writing prompt.</li>
              <li>Your own reflection questions.</li>
              <li>A small selection of Rituals and reflection content.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#c8b68c] bg-[#ece7da] p-6 md:p-8" aria-labelledby="premium-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#705c35]">Optional Quietly Woven Premium</p>
            <h3 id="premium-heading" className="mt-3 text-2xl text-[#1f3025]">Room to explore more.</h3>
            <p className="mt-4 text-base leading-relaxed text-[#3b4a3f]">Follow your curiosity with more ways to reflect and notice the patterns in your days.</p>
            <ul className="mt-5 list-disc pl-5 space-y-3 text-base leading-relaxed text-[#3b4a3f] marker:text-[#87724f]">
              <li>The complete Ritual collections.</li>
              <li>The full Reflection Library.</li>
              <li>A wider collection of quotes.</li>
              <li>Personal Insights, writing patterns and reflection themes.</li>
              <li>30-day mood history.</li>
            </ul>
            <p className="mt-6 pt-5 border-t border-[#c8b68c]/50 text-sm leading-relaxed text-[#4c5a4d]">
              Monthly or annual membership. The exact price, billing period and renewal terms will be shown before purchase.
            </p>
            <Link href="#availability" className="inline-block mt-4 py-1 text-[#345b43] font-semibold underline underline-offset-4">
              View launch plans &rarr;
            </Link>
          </section>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-6 pb-14 md:pb-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl md:text-4xl text-center text-[#1f3025]">Questions before launch</h2>
        <div className="mt-8 space-y-3">
          <details className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed]">
            <summary className="cursor-pointer rounded-2xl px-5 py-5 text-base font-semibold text-[#1f3025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b43]">
              What will be free?
            </summary>
            <p className="px-5 pb-6 text-base leading-relaxed text-[#3b4a3f]">
              At launch, the free mobile journal will include personal journaling, gratitude, mood check-ins,
              a daily writing prompt and your own reflection questions. You&rsquo;ll also have a small selection
              of Rituals and reflection content. Premium will be optional.
            </p>
          </details>
          <details className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed]">
            <summary className="cursor-pointer rounded-2xl px-5 py-5 text-base font-semibold text-[#1f3025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b43]">
              What does Premium include?
            </summary>
            <p className="px-5 pb-6 text-base leading-relaxed text-[#3b4a3f]">
              Premium will include the complete Ritual collections, the full Reflection Library, a wider collection
              of quotes, personal Insights and 30-day mood history. Monthly or annual membership will be optional,
              with the exact price and renewal terms shown before purchase.
            </p>
          </details>
          <details className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed]">
            <summary className="cursor-pointer rounded-2xl px-5 py-5 text-base font-semibold text-[#1f3025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b43]">
              Where will my writing be stored?
            </summary>
            <p className="px-5 pb-6 text-base leading-relaxed text-[#3b4a3f]">
              Your entries, moods and personal questions will be stored locally on your device. Quietly Woven
              will not upload your writing to our servers. A subscription will not create cloud backup or sync.
            </p>
          </details>
        </div>
      </section>

      <section id="availability" className="bg-[#faf6ed] border-y border-[#ddd6c8] scroll-mt-24" aria-labelledby="availability-heading">
        <div className="max-w-5xl mx-auto px-5 md:px-6 py-14 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="availability-heading" className="text-3xl md:text-4xl text-[#1f3025]">Your quiet place is on its way.</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#3b4a3f]">
              Quietly Woven is coming soon. We&rsquo;re preparing the mobile and desktop editions;
              launch details will be shared here.
            </p>
          </div>
          <div className="mt-9 grid md:grid-cols-3 gap-6">
            <section className="rounded-2xl border border-[#ddd6c8] bg-[#f3eee2] p-6" aria-labelledby="android-heading">
              <h3 id="android-heading" className="text-xl text-[#1f3025]">Android</h3>
              <p className="mt-3 text-base leading-relaxed text-[#3b4a3f]">Coming soon</p>
            </section>
            <section className="rounded-2xl border border-[#ddd6c8] bg-[#f3eee2] p-6" aria-labelledby="apple-heading">
              <h3 id="apple-heading" className="text-xl text-[#1f3025]">iPhone &amp; iPad</h3>
              <p className="mt-3 text-base leading-relaxed text-[#3b4a3f]">Coming soon</p>
            </section>
            <section className="rounded-2xl border border-[#ddd6c8] bg-[#f3eee2] p-6" aria-labelledby="desktop-heading">
              <h3 id="desktop-heading" className="text-xl text-[#1f3025]">Desktop browser</h3>
              <p className="mt-3 text-base leading-relaxed text-[#3b4a3f]">Coming soon with Premium access</p>
            </section>
          </div>
          <div className="mt-9 text-center">
            <Link href="/support/" className="inline-block py-2 text-[#345b43] font-semibold underline underline-offset-4">
              A question before launch? Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1f3025] text-[#f8f2e6]" aria-labelledby="journal-privacy-heading">
        <div className="max-w-2xl mx-auto px-6 py-14 md:py-16 text-center">
          <h2 id="journal-privacy-heading" className="text-2xl md:text-3xl">Your words will stay on your device.</h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#efe6cf]">
            Your entries, moods and personal questions will be stored locally. Quietly Woven will not upload
            your writing to our servers. A subscription will not create cloud backup or sync.
          </p>
          <Link href="/quietly-woven/privacy/" className="inline-block mt-6 py-2 text-[#f8f2e6] underline underline-offset-4 hover:text-[#e6dcc2]">
            Read Quietly Woven&rsquo;s Privacy Policy &rarr;
          </Link>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-10 text-center text-sm text-[#4c5a4d]" aria-label="About Quietly Woven">
        <p>Quietly Woven is made by <Link href="/" className="underline underline-offset-4 hover:text-[#345b43]">The Quest Family</Link>.</p>
        <nav aria-label="Quietly Woven terms and support" className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link href="/quietly-woven/terms/" className="underline underline-offset-4">Terms of Use</Link>
          <Link href="/support/" className="underline underline-offset-4">Support</Link>
        </nav>
      </section>
    </>
  )
}
