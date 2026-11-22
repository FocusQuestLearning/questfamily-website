import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { QUIETLY_WOVEN_WEB_URL } from '@/lib/constants'
import { BotanicalMark } from '@/components/quiet-grove/BotanicalMark'

export const metadata: Metadata = {
  title: 'Quietly Woven — A Place for Your Thoughts | The Quest Family',
  description: 'A mindful journaling app for your thoughts, mood check-ins and gentle daily rituals. Explore Quietly Woven in your browser, at your own pace.',
  alternates: { canonical: 'https://thequestfamily.ca/quietly-woven/' },
  openGraph: {
    title: 'Quietly Woven — A Place for Your Thoughts',
    description: 'Somewhere quiet to set down what you’re carrying. Explore personal journaling, gentle prompts and daily rituals in your browser.',
    url: 'https://thequestfamily.ca/quietly-woven/',
    siteName: 'The Quest Family',
    type: 'website',
    images: [{
      url: 'https://thequestfamily.ca/quietly-woven/quietly-woven-share.png',
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: 'Quietly Woven — A Place for Your Thoughts. Mindful journaling by The Quest Family, over the approved sunlit forest.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quietly Woven — A Place for Your Thoughts',
    description: 'A Place for Your Thoughts. Discover a quiet place to reflect and grow, with private journaling and optional Premium.',
    images: [{
      url: 'https://thequestfamily.ca/quietly-woven/quietly-woven-share.png',
      alt: 'Quietly Woven — A Place for Your Thoughts. Mindful journaling by The Quest Family.',
    }],
  },
}

export default function QuietGrovePage() {
  return (
    <>
      <section className="qg-hero text-[#f8f2e6]" aria-label="Quietly Woven introduction">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start"><BotanicalMark color="#f8f2e6" size={40} /></div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#efe6cf]">A mindful journaling app</p>
            <h1 className="mt-4 text-4xl md:text-6xl leading-tight">Quietly Woven</h1>
            <p className="qg-serif italic text-xl md:text-2xl mt-2 text-[#efe6cf]">A Place for Your Thoughts</p>
            <p className="qg-serif mt-7 text-2xl md:text-3xl leading-snug max-w-xl mx-auto md:mx-0">
              Somewhere quiet to set down what you&rsquo;re carrying.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl text-[#f8f2e6]">
              Start with a gentle prompt, write in your own words, or check in with how you feel.
              There&rsquo;s no pressure to have everything figured out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center md:justify-start">
              <a href={QUIETLY_WOVEN_WEB_URL} className="qg-button qg-button-light">Open Quietly Woven <span aria-hidden="true">&rarr;</span></a>
              <Link href="#inside" className="py-3 text-[#efe6cf] underline underline-offset-4 hover:text-white">Take a look inside</Link>
            </div>
            <p className="mt-4 text-sm text-[#efe6cf]">Opens the free browser journal. <Link href="#availability" className="underline underline-offset-4">View Premium and mobile availability</Link></p>
          </div>
          <figure className="mx-auto w-full max-w-[300px] md:max-w-[310px]">
            <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#f3eee2] bg-[#f3eee2] shadow-2xl">
              <Image src="/quietly-woven/home-preview.webp" alt="Quietly Woven home screen with a daily writing prompt, a thought to sit with and a gentle ritual." width={941} height={2048} priority className="w-full h-auto" sizes="(max-width: 767px) 288px, 298px" />
            </div>
            <figcaption className="mt-4 text-center text-sm text-[#efe6cf]">A look inside the journal. Prompts change with the day.</figcaption>
          </figure>
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

        <ol className="mt-10 grid md:grid-cols-3 gap-8 border-y border-[#ddd6c8] py-8" aria-label="Three ways to begin">
          <li><span className="qg-step">01</span><h3 className="mt-3 text-xl">Find a starting point.</h3><p className="mt-3 leading-relaxed text-[#3b4a3f]">Choose a daily prompt, a guided reflection or a blank page.</p></li>
          <li><span className="qg-step">02</span><h3 className="mt-3 text-xl">Make room for your words.</h3><p className="mt-3 leading-relaxed text-[#3b4a3f]">Write a sentence or stay a little longer. Your own words set the pace.</p></li>
          <li><span className="qg-step">03</span><h3 className="mt-3 text-xl">Return when it feels right.</h3><p className="mt-3 leading-relaxed text-[#3b4a3f]">Revisit a reflection, notice your mood or make space for a small daily ritual.</p></li>
        </ol>

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          <section className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed] p-6 md:p-8" aria-labelledby="free-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64775f]">Personal journaling</p>
            <h3 id="free-heading" className="mt-3 text-2xl text-[#1f3025]">A place to begin.</h3>
            <p className="mt-4 text-base leading-relaxed text-[#3b4a3f]">A few words can be enough. Keep a thought, a feeling or a moment you want to remember.</p>
            <ul className="mt-5 list-disc pl-5 space-y-3 text-base leading-relaxed text-[#3b4a3f] marker:text-[#64775f]">
              <li>Personal journaling and gratitude.</li>
              <li>Mood check-ins and a daily writing prompt.</li>
              <li>Your own reflection questions.</li>
              <li>Three Ritual samples and five Reflection Library sample questions.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#c8b68c] bg-[#ece7da] p-6 md:p-8" aria-labelledby="premium-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#705c35]">Optional Quietly Woven Premium</p>
            <h3 id="premium-heading" className="mt-3 text-2xl text-[#1f3025]">Room to explore more.</h3>
            <p className="mt-4 text-base leading-relaxed text-[#3b4a3f]">Follow your curiosity with more ways to reflect and notice the patterns in your days.</p>
            <ul className="mt-5 list-disc pl-5 space-y-3 text-base leading-relaxed text-[#3b4a3f] marker:text-[#87724f]">
              <li>The complete collection of 114 Rituals.</li>
              <li>The full Reflection Library with 150 questions.</li>
              <li>A wider collection of quotes.</li>
              <li>Personal Insights, writing patterns and reflection themes.</li>
              <li>The Mood Calendar and 30-day mood history.</li>
            </ul>
            <p className="mt-6 pt-5 border-t border-[#c8b68c]/50 text-lg font-semibold leading-relaxed text-[#1f3025]">
              Canadian Premium pricing: $9.99/month or $79.99/year.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#4c5a4d]">
              Prices in CAD, before applicable taxes; the annual plan is billed once a year. Sign in with a verified email to choose a Premium plan in the browser. Final pricing, taxes and renewal terms are confirmed before purchase.
            </p>
            <Link href="#availability" className="inline-block mt-4 py-1 text-[#345b43] font-semibold underline underline-offset-4">
              Explore access options &rarr;
            </Link>
          </section>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-6 pb-14 md:pb-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl md:text-4xl text-center text-[#1f3025]">A few things to know</h2>
        <div className="mt-8 space-y-3">
          <details className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed]">
            <summary className="cursor-pointer rounded-2xl px-5 py-5 text-base font-semibold text-[#1f3025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b43]">
              What can I explore?
            </summary>
            <p className="px-5 pb-6 text-base leading-relaxed text-[#3b4a3f]">
              Begin with personal journaling, gratitude, mood check-ins, a daily writing prompt and your own
              reflection questions. The free selection includes three Rituals and five Reflection Library questions.
              The full collections, Mood Calendar and personal Insights require Premium.
            </p>
          </details>
          <details className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed]">
            <summary className="cursor-pointer rounded-2xl px-5 py-5 text-base font-semibold text-[#1f3025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b43]">
              What does Premium include?
            </summary>
            <p className="px-5 pb-6 text-base leading-relaxed text-[#3b4a3f]">
              Premium includes the complete Ritual collections, the full Reflection Library, a wider collection
              of quotes, personal Insights, the Mood Calendar and 30-day mood history. Canadian Premium pricing:
              CAD $9.99/month or $79.99/year, before applicable taxes. The annual plan is billed once a year.
              Sign in with a verified email to choose a Premium plan in the browser. Final pricing, taxes and renewal
              terms are shown before purchase.
            </p>
          </details>
          <details className="rounded-2xl border border-[#ddd6c8] bg-[#faf6ed]">
            <summary className="cursor-pointer rounded-2xl px-5 py-5 text-base font-semibold text-[#1f3025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b43]">
              Where is my writing stored?
            </summary>
            <p className="px-5 pb-6 text-base leading-relaxed text-[#3b4a3f]">
              Your entries, moods and personal questions are stored locally on your device. Quietly Woven
              does not upload your writing to our servers. A subscription does not create cloud backup or sync.
              In the browser edition, use the same browser and device to return to your entries; clearing site data can remove them.
            </p>
          </details>
        </div>
      </section>

      <section id="availability" className="bg-[#faf6ed] border-y border-[#ddd6c8] scroll-mt-24" aria-labelledby="availability-heading">
        <div className="max-w-5xl mx-auto px-5 md:px-6 py-14 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64775f]">Make a little space</p>
            <h2 id="availability-heading" className="mt-3 text-3xl md:text-4xl text-[#1f3025]">Your next quiet moment can start here.</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#3b4a3f]">
              Explore Quietly Woven in your browser. Choose a prompt, look around the journal and find a place to begin.
            </p>
            <a href={QUIETLY_WOVEN_WEB_URL} className="qg-button qg-button-dark mt-7">Open the browser journal <span aria-hidden="true">&rarr;</span></a>
            <p className="mt-4 text-sm leading-relaxed text-[#4c5a4d]">The free browser journal is available now. Sign in with a verified email for optional Premium.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <section className="rounded-2xl border border-[#ddd6c8] bg-[#f3eee2] p-6" aria-labelledby="apple-heading">
              <h3 id="apple-heading" className="text-xl text-[#1f3025]">iPhone &amp; iPad</h3>
              <p className="mt-3 leading-relaxed text-[#3b4a3f]">App Store download link coming soon.</p>
            </section>
            <section className="rounded-2xl border border-[#ddd6c8] bg-[#f3eee2] p-6" aria-labelledby="android-heading">
              <h3 id="android-heading" className="text-xl text-[#1f3025]">Android</h3>
              <p className="mt-3 leading-relaxed text-[#3b4a3f]">Google Play download link coming soon.</p>
            </section>
          </div>
          <p className="mt-7 text-center text-sm text-[#4c5a4d]">Looking for help? <Link href="/support/" className="py-2 underline underline-offset-4 text-[#345b43]">Contact The Quest Family</Link></p>
        </div>
      </section>

      <section className="bg-[#1f3025] text-[#f8f2e6]" aria-labelledby="journal-privacy-heading">
        <div className="max-w-2xl mx-auto px-6 py-14 md:py-16 text-center">
          <h2 id="journal-privacy-heading" className="text-2xl md:text-3xl">Your words stay on your device.</h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#efe6cf]">
            Your entries, moods and personal questions are stored locally. Quietly Woven does not upload
            your writing to our servers. A subscription does not create cloud backup or sync.
              In the browser edition, use the same browser and device to return to your entries; clearing site data can remove them.
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
