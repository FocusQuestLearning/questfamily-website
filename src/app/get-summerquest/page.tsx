import type { Metadata } from 'next'
import Link from 'next/link'
import { AppleAppStoreComingSoon, GooglePlayButton } from '@/components/GooglePlayButton'
import { SUMMERQUEST_GOOGLE_PLAY_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Get SummerQuest | The Quest Family',
  description:
    'Download SummerQuest for Android on Google Play. Explore free and choose an optional Explorer Membership inside the app.',
  openGraph: {
    title: 'Get SummerQuest',
    description: 'Download SummerQuest for Android on Google Play.',
    siteName: 'The Quest Family',
    type: 'website',
  },
}

export default function GetSummerQuestPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-center" aria-label="Get SummerQuest">
      <div className="text-5xl mb-4" aria-hidden="true">🧭</div>

      <span className="inline-block bg-amber/15 text-bark text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
        Android App
      </span>

      <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4 leading-tight">
        Take SummerQuest Outside
      </h1>

      <p className="text-bark text-lg leading-relaxed max-w-xl mx-auto mb-10">
        Download SummerQuest from Google Play and begin with a free collection of
        quests and discoveries. Fennick, Aria, Birch, and Moss are ready for your
        family&apos;s first adventure.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8">
        <GooglePlayButton appName="SummerQuest" href={SUMMERQUEST_GOOGLE_PLAY_URL} />
        <AppleAppStoreComingSoon
          appName="SummerQuest"
          className="!border-forest/20 !bg-forest/5 !text-forest"
        />
      </div>

      <div className="nature-card bg-forest/5 border-forest/20 max-w-xl mx-auto mb-10 text-left">
        <h2 className="font-display text-xl font-bold text-forest mb-3">Start free. Choose more when you&rsquo;re ready.</h2>
        <p className="text-bark leading-relaxed">
          SummerQuest includes a free preview. The optional annual Explorer Membership unlocks the
          broader adventure library and is purchased securely inside the app through Google Play.
          Google Play shows the final price before you confirm, and you can manage or cancel the
          membership from your Google Play subscriptions.
        </p>
      </div>

      <p className="text-bark/70 text-sm leading-relaxed max-w-lg mx-auto mb-10">
        Android families can use Google Play. The Apple App Store edition is in preparation.
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
