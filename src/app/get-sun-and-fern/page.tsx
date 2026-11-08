import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AppleAppStoreComingSoon, GooglePlayButton } from '@/components/GooglePlayButton'
import { SUN_AND_FERN_GOOGLE_PLAY_URL } from '@/lib/constants'

// Enable only after the Canadian public listing resolves to Sun & Fern.
const APP_STORE_PUBLIC = false
const APP_STORE_URL = 'https://apps.apple.com/ca/app/id6798818268'

export const metadata: Metadata = {
  title: 'Get Sun & Fern | The Quest Family',
  description:
    'Find Sun & Fern for Android, check iPhone and iPad availability, and learn about Explorer Membership.',
  alternates: { canonical: '/get-sun-and-fern/' },
  openGraph: {
    url: '/get-sun-and-fern/',
    title: 'Get Sun & Fern',
    description: 'Download Sun & Fern for Android on Google Play.',
    siteName: 'The Quest Family',
    type: 'website',
  },
}

export default function GetSunAndFernPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-center" aria-label="Get Sun & Fern">
      <Image
        src="/images/icon-compass.webp"
        alt=""
        width={96}
        height={96}
        className="mx-auto mb-5 object-contain"
        priority
      />
      <span className="inline-block bg-amber/15 text-bark text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
        Android · iPhone · iPad
      </span>

      <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4 leading-tight">
        Take Sun & Fern Outside
      </h1>

      <p className="text-bark text-lg leading-relaxed max-w-xl mx-auto mb-10">
        Explore Canadian quests and discoveries with Fennick, Aria, Birch, and Moss.
        Choose your platform below and check the store listing before your
        family&apos;s first adventure.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8">
        <GooglePlayButton appName="Sun & Fern" href={SUN_AND_FERN_GOOGLE_PLAY_URL} />
        {APP_STORE_PUBLIC ? (
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Download Sun & Fern on the Apple App Store (opens in a new tab)"
            className="btn-primary min-h-14 inline-flex items-center justify-center px-6 py-3">
            Download on the Apple App Store
          </a>
        ) : (
          <AppleAppStoreComingSoon
            appName="Sun & Fern"
            className="!border-forest/20 !bg-forest/5 !text-forest"
          />
        )}
      </div>

      <div className="nature-card bg-forest/5 border-forest/20 max-w-xl mx-auto mb-10 text-left">
        <h2 className="font-display text-xl font-bold text-forest mb-3">Choose your Explorer Membership</h2>
        <p className="text-bark leading-relaxed">
          Sun &amp; Fern is free to download. Optional Explorer Membership is
          CAD $9.99 per month or CAD $79.99 per year in Canada. Both plans unlock
          the same broader adventure library.
          Purchases take place inside the app through Google Play on Android or Apple on iPhone
          and iPad when available. Your store confirms the available plans, local price, taxes
          and renewal terms before you pay. Manage or cancel through the store account used to purchase.
        </p>
      </div>

      <p className="text-bark/70 text-sm leading-relaxed max-w-lg mx-auto mb-10">
        The Sun &amp; Fern update is in review on Google Play, so the store may still display
        the earlier SummerQuest name while the update is processed.
        the iPhone and iPad download link will be available here when its public listing is ready.
      </p>

      {/* Secondary navigation */}
      <div className="mt-4 pt-8 border-t border-amber/20 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/sun-and-fern/" className="btn-outline text-sm px-6 py-2">
          Learn About Sun & Fern
        </Link>
        <Link href="/support/" className="btn-outline text-sm px-6 py-2">
          Contact Support
        </Link>
      </div>
    </article>
  )
}
