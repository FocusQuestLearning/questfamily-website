import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get SummerQuest | The Quest Family',
  description:
    'SummerQuest is coming soon to the App Store and Google Play. Follow along for launch news from The Quest Family.',
  openGraph: {
    title: 'Get SummerQuest',
    description: 'SummerQuest is coming soon to the App Store and Google Play.',
    siteName: 'The Quest Family',
    type: 'website',
  },
}

export default function GetSummerQuestPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-center" aria-label="Get SummerQuest">
      <div className="text-5xl mb-4" aria-hidden="true">🧭</div>

      <span className="inline-block bg-amber/15 text-bark text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
        Launching Soon
      </span>

      <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4 leading-tight">
        SummerQuest is Coming Soon
      </h1>

      <p className="text-bark text-lg leading-relaxed max-w-xl mx-auto mb-10">
        We&apos;re putting the finishing touches on SummerQuest. It will be available
        on the <strong className="text-forest">App Store</strong> and{' '}
        <strong className="text-forest">Google Play</strong> very soon — guided by
        Fennick, Aria, Birch, and Moss, ready for your family&apos;s first adventure.
      </p>

      {/* Store availability — coming soon placeholders (no live store links yet) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <div
          className="nature-card bg-forest/5 border-forest/20 flex items-center justify-center gap-3 px-8 py-4"
          role="status"
          aria-label="Apple App Store — coming soon"
        >
          <span className="text-2xl" aria-hidden="true">🍎</span>
          <span className="text-left">
            <span className="block text-bark/60 text-xs uppercase tracking-wide">Coming soon to</span>
            <span className="block font-display font-bold text-forest">App Store</span>
          </span>
        </div>
        <div
          className="nature-card bg-forest/5 border-forest/20 flex items-center justify-center gap-3 px-8 py-4"
          role="status"
          aria-label="Google Play — coming soon"
        >
          <span className="text-2xl" aria-hidden="true">▶️</span>
          <span className="text-left">
            <span className="block text-bark/60 text-xs uppercase tracking-wide">Coming soon to</span>
            <span className="block font-display font-bold text-forest">Google Play</span>
          </span>
        </div>
      </div>

      <p className="text-bark/70 text-base leading-relaxed max-w-lg mx-auto mb-10">
        Want to know the moment it launches? Bookmark this site and check back —
        we&apos;ll post launch news here first.
      </p>

      {/* Secondary navigation */}
      <div className="mt-4 pt-8 border-t border-amber/20 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/summerquest/" className="btn-outline text-sm px-6 py-2">
          Learn About SummerQuest
        </Link>
        <Link href="/support/" className="btn-outline text-sm px-6 py-2">
          Contact Support
        </Link>
      </div>
    </article>
  )
}
