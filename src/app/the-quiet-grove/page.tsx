import type { Metadata } from 'next'
import Link from 'next/link'
import { BotanicalMark, BotanicalSprig } from '@/components/quiet-grove/BotanicalMark'

export const metadata: Metadata = {
  title: 'The Quiet Grove — mindful journal | The Quest Family',
  description: 'The Quiet Grove — a mindful journal for reflection, gratitude & quiet moments. From The Quest Family.',
  alternates: { canonical: '/the-quiet-grove/' },
}

export default function QuietGrovePage() {
  return (
    <>
      {/* Hero — approved Quiet Grove forest imagery */}
      <section className="qg-hero text-[#f8f2e6]" aria-label="The Quiet Grove">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <BotanicalMark color="#f8f2e6" size={64} />
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight">The Quiet Grove</h1>
          <p className="qg-serif italic text-lg md:text-2xl mt-2 text-[#efe6cf]">mindful journal</p>
          <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-xl text-[#f8f2e6]/95">
            A mindful journal for reflection, gratitude &amp; quiet moments.
          </p>
        </div>
      </section>

      {/* Philosophy — wording taken from the app&apos;s own About the Grove screen */}
      <section className="max-w-2xl mx-auto px-6 py-16 md:py-20 text-center" aria-label="Why The Quiet Grove is different">
        <h2 className="text-3xl md:text-4xl text-[#1f3025]">Somewhere quiet to set down what you&rsquo;re carrying.</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#3b4a3f]">
          <p className="qg-serif italic text-xl md:text-2xl text-[#345b43]">
            Come when you need it. Leave when you&rsquo;re ready. Return when you want.
          </p>
          <p>
            Not every day needs something from you. Some days are meant for reflection.
            Some are meant simply to be lived.
          </p>
          <p>
            The Quiet Grove will be here whenever you&rsquo;re ready &mdash; no pressure,
            no expectations, no shoulds.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <BotanicalSprig color="#64775f" size={40} />
        </div>
      </section>

      {/* Privacy summary + link */}
      <section className="bg-[#faf6ed] border-y border-[#ddd6c8]" aria-label="Your journal belongs to you">
        <div className="max-w-2xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl md:text-3xl text-[#1f3025]">Your journal belongs to you</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3b4a3f]">
            Your reflections, moods and personal questions are saved on your own device.
            There is no account to create, and The Quiet Grove does not upload your writing to our servers.
          </p>
          <Link
            href="/the-quiet-grove/privacy/"
            className="inline-block mt-8 px-7 py-3 rounded-full bg-[#345b43] text-[#fffaf0] font-semibold hover:bg-[#294a37] transition-colors"
          >
            Read The Quiet Grove Privacy Policy
          </Link>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-12 text-center text-sm text-[#627064]" aria-label="About">
        <p>
          The Quiet Grove is made by{' '}
          <Link href="/" className="underline underline-offset-2 hover:text-[#87724f]">The Quest Family</Link>.
        </p>
      </section>
    </>
  )
}
