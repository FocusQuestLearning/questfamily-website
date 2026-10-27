import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SUMMERQUEST_APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sun & Fern — Wild Adventures. Wonderful Discoveries.',
  description: 'Explore Canadian nature with Fennick, Aria, Birch and Moss. Outdoor quests, wildlife discoveries and a family Nature Journal. By The Quest Family.',
  openGraph: {
    title: 'Sun & Fern',
    description: 'Wild Adventures. Wonderful Discoveries. By The Quest Family.',
    siteName: 'The Quest Family', type: 'website',
    images: [{ url: 'https://thequestfamily.ca/images/sun-and-fern-hero.jpg', width: 1949, height: 807, alt: 'Sun & Fern with Fennick, Aria, Birch and Moss in the Canadian wilderness' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sun & Fern', description: 'Wild Adventures. Wonderful Discoveries. By The Quest Family.', images: ['https://thequestfamily.ca/images/sun-and-fern-hero.jpg'] },
}

const features = [
  { title: 'A quest to get you outside', copy: 'Choose an adventure, follow a guide and notice something new on your next walk.', icon: 'compass' },
  { title: 'Canada, one discovery at a time', copy: 'Explore provinces and territories, wildlife, trees, wildflowers and the places they call home.', icon: 'binoculars' },
  { title: 'A journal of your own', copy: 'Keep a few words about what you noticed. Reopen your entries and remember your family’s adventures.', icon: 'notebook' },
  { title: 'Discoveries worth keeping', copy: 'Build your collections, earn badges and carry your progress into your next adventure.', icon: 'leaf' },
]

export default function SummerQuestPage() {
  return (
    <article className="bg-cream text-bark">
      <section className="bg-forest text-cream">
        <div className="max-w-6xl mx-auto">
          <Image src="/images/sun-and-fern-hero.jpg" alt="Fennick, Aria, Birch and Moss beside a Canadian lake, with the Sun & Fern wooden sign" width={1949} height={807} priority sizes="(max-width: 1152px) 100vw, 1152px" className="w-full h-auto" />
        </div>
        <div className="max-w-3xl mx-auto px-5 py-10 md:py-14 text-center">
          <p className="text-sm tracking-widest uppercase mb-3">By The Quest Family</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Sun &amp; Fern</h1>
          <p className="font-display text-xl md:text-2xl mb-5">Wild Adventures. Wonderful Discoveries.</p>
          <p className="text-cream/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">A little curiosity can turn a familiar trail into a whole new adventure. Explore Canadian nature together with Fennick, Aria, Birch and Moss.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href={SUMMERQUEST_APP_URL} className="btn-primary">Explore the app</Link>
            <Link href="/support/" className="rounded-full border border-cream/50 px-7 py-3 text-cream font-semibold hover:bg-white/10">Help for families</Link>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 py-12 md:py-16" aria-labelledby="adventure-heading">
        <h2 id="adventure-heading" className="font-display font-bold text-3xl text-forest text-center mb-9">Make room for a little wonder.</h2>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
          {features.map(feature => (
            <div key={feature.title} className="nature-card p-6">
              <Image src={'/images/icon-' + feature.icon + '.webp'} width={64} height={64} alt="" className="mb-4 object-contain" />
              <h3 className="font-display text-xl font-bold text-forest mb-3">{feature.title}</h3>
              <p className="leading-relaxed">{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-parchment border-y border-amber/20 px-5 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="font-display text-3xl font-bold text-forest">Your familiar adventures, a new name.</h2>
          <p className="leading-relaxed">Sun &amp; Fern is the new name for SummerQuest. It is the same app, with the same four guides, Canadian adventures, journal, collections and Explorer Membership. Update your existing installation to keep your discoveries with you.</p>
          <p className="text-sm leading-relaxed">Begin with free preview quests and discoveries. An optional annual Explorer Membership opens the wider adventure library. The store shows the current local price before you confirm. The Apple App Store edition is coming soon.</p>
          <Link href={SUMMERQUEST_APP_URL} className="btn-primary inline-block">Find your next adventure</Link>
        </div>
      </section>
    </article>
  )
}
