import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SummerQuest — Every Day is a New Quest | The Quest Family',
  description: 'SummerQuest is a Canadian outdoor adventure app for families. Complete quests, discover wildlife, earn badges, and explore Canada coast to coast.',
}

export default function SummerQuestPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-forest text-cream py-14 px-4 text-center" aria-label="SummerQuest introduction">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-amber/20 text-amber text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            The Quest Family · App No. 1
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 text-cream">
            SummerQuest
          </h1>
          <p className="font-display italic text-amber text-xl md:text-2xl mb-5">
            "Every Day is a New Quest."
          </p>
          <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
            A nature-based family adventure app that turns everyday moments outside
            into meaningful discoveries — built for Canadian families, coast to coast to coast.
          </p>
        </div>
      </section>

      {/* ── PROMO IMAGE ── */}
      <section className="max-w-2xl mx-auto px-4 py-10" aria-label="SummerQuest app preview">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber/20">
          <Image
            src="/images/summerquest-promo.webp"
            alt="SummerQuest app overview — showing Fennick, Aria, Birch, and Moss adventure guides in a Canadian wilderness scene, alongside the app's 'What Families Can Do' features: quests, discoveries, journal, badges, province exploration, and privacy-first design"
            width={1000}
            height={1500}
            className="w-full h-auto"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
        <p className="text-center text-bark/60 text-sm mt-3 italic">
          SummerQuest — coming soon to App Store &amp; Google Play
        </p>
      </section>

      {/* ── WHAT IS SUMMERQUEST ── */}
      <section className="max-w-3xl mx-auto px-4 py-10" aria-label="What is SummerQuest">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-forest font-bold mb-3">What is SummerQuest?</h2>
          <div className="leaf-divider" aria-hidden="true">🍃</div>
        </div>
        <div className="space-y-5 text-bark text-base leading-relaxed">
          <p>
            SummerQuest is a Canadian outdoor adventure app designed for families and children in kindergarten 
            through Grade 8. It combines the warmth of storybook characters with the depth of real Canadian 
            nature to create an experience that feels less like an educational app and more like a 
            genuine adventure.
          </p>
          <p className="font-display italic text-forest text-lg text-center py-2">
            "I wonder what I'll discover next?"
          </p>
          <p>
            Every day brings a new quest — a gentle outdoor challenge that encourages children and families 
            to step outside, pay attention, and notice the incredible world around them. 
            From a common robin to a rare boreal owl, from a garden butterfly to a 
            woodland mushroom — every discovery belongs in your family's nature journal.
          </p>
        </div>
      </section>

      {/* ── BUILT FOR CANADIAN FAMILIES ── */}
      <section className="bg-parchment border-y border-amber/20 py-12 px-4" aria-label="Built for Canadian families">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl text-forest font-bold mb-2">🇨🇦 Built for Canadian Families</h2>
            <p className="text-bark text-base max-w-xl mx-auto">
              From the Atlantic coast to the Pacific, from the Prairies to the Arctic — 
              SummerQuest celebrates all of Canada's incredible natural heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: '🌲',
                title: 'Coast to Coast to Coast',
                desc: 'Growing into Canada\'s most comprehensive nature and exploration library, covering every province and territory.',
              },
              {
                icon: '🦅',
                title: 'Real Canadian Wildlife',
                desc: 'Living animals in their natural habitats — birds in flight, fish spawning, caribou migrating. Nature as it truly is.',
              },
              {
                icon: '🌿',
                title: 'Real Nature Photography',
                desc: 'Storybook art inspires wonder. Real photography teaches. Every discovery card features authentic Canadian nature.',
              },
              {
                icon: '🏕️',
                title: 'Parks, Trails & Wild Places',
                desc: 'Designed for your backyard, local park, provincial park, or a national wilderness adventure.',
              },
            ].map((card) => (
              <div key={card.title} className="nature-card flex gap-4">
                <div className="text-3xl shrink-0 mt-1" aria-hidden="true">{card.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-forest text-base mb-1">{card.title}</h3>
                  <p className="text-bark text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDES ── */}
      <section className="max-w-5xl mx-auto px-4 py-12" aria-label="Your adventure guides">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-forest font-bold mb-2">Meet Your Adventure Guides</h2>
          <p className="text-bark text-base max-w-xl mx-auto">
            Four storybook friends who love the outdoors as much as you do.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: '🦊', name: 'Fennick', role: 'Lead Explorer', desc: 'Parks, trails & landmarks' },
            { emoji: '🦉', name: 'Aria', role: 'Nature Guide', desc: 'Wildlife & nature discoveries' },
            { emoji: '🦫', name: 'Birch', role: 'Builder & Maker', desc: 'Heritage, traditions & care' },
            { emoji: '🐸', name: 'Moss', role: 'Water & Wetlands', desc: 'Aquatic life & water worlds' },
          ].map((guide) => (
            <div key={guide.name} className="nature-card text-center py-6">
              <div className="text-5xl mb-3" aria-hidden="true">{guide.emoji}</div>
              <h3 className="font-display font-bold text-forest text-base">{guide.name}</h3>
              <p className="text-amber text-xs font-bold uppercase tracking-wide mt-1">{guide.role}</p>
              <p className="text-bark text-xs mt-2 leading-snug">{guide.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-forest text-cream py-12 px-4" aria-label="SummerQuest features">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-2 text-cream">What Families Can Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '🧭', title: 'Daily Quests', desc: 'Fresh gentle outdoor challenges every day, designed for all ages and all seasons.' },
              { icon: '🔍', title: 'Nature Discoveries', desc: 'Birds, plants, insects, animals, fungi, trees, weather — Canada\'s full natural library.' },
              { icon: '📔', title: 'Family Journal', desc: 'A private nature journal that belongs to your family. Document discoveries, thoughts, and memories.' },
              { icon: '🏅', title: 'Badges & Leaf Points', desc: 'Celebrate every discovery. Earn beautiful collectible badges as you explore.' },
              { icon: '🗺️', title: 'Province Books', desc: 'Explore and discover Canada province by province and territory by territory.' },
              { icon: '🔥', title: 'Family Campfire', desc: 'A shared space for your family to celebrate discoveries together.' },
            ].map((f) => (
              <div key={f.title} className="bg-white/10 rounded-xl p-5">
                <div className="text-3xl mb-2" aria-hidden="true">{f.icon}</div>
                <h3 className="font-display font-bold text-cream text-sm mb-1">{f.title}</h3>
                <p className="text-cream/75 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY / FAMILY FIRST ── */}
      <section className="max-w-3xl mx-auto px-4 py-12" aria-label="Safety and family-first design">
        <div className="nature-card border-meadow/40 text-center">
          <div className="text-4xl mb-4" aria-hidden="true">🛡️</div>
          <h2 className="font-display text-2xl text-forest font-bold mb-3">Safety &amp; Family First</h2>
          <div className="space-y-3 text-bark text-sm leading-relaxed max-w-lg mx-auto text-left">
            <p>✅ <strong>No pressure timers</strong> — no school-style testing or stressful countdowns</p>
            <p>✅ <strong>Camera access is optional</strong> — families choose whether to document discoveries</p>
            <p>✅ <strong>Private journals</strong> — journal entries stay within your family unless you choose otherwise</p>
            <p>✅ <strong>No data selling</strong> — your family's information is never sold to third parties</p>
            <p>✅ <strong>Child-safe imagery</strong> — only living animals in natural habitats; no distressing content</p>
            <p>✅ <strong>Screen-time aware</strong> — SummerQuest encourages families to put the phone away and go explore</p>
          </div>
          <p className="text-bark/60 text-xs italic mt-4">
            For privacy questions or data deletion requests, contact{' '}
            <a href="mailto:support.questfamily@gmail.com" className="text-amber hover:underline">
              support.questfamily@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ── APP STORE BUTTONS ── */}
      <section className="max-w-3xl mx-auto px-4 py-10 text-center" aria-label="Download SummerQuest">
        <h2 className="font-display text-2xl text-forest font-bold mb-2">Coming Soon</h2>
        <p className="text-bark text-base mb-8">SummerQuest is preparing for launch on mobile app stores.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* App Store placeholder */}
          <div
            className="flex items-center gap-3 bg-forest text-cream px-7 py-4 rounded-2xl opacity-70 cursor-not-allowed select-none w-52"
            aria-label="App Store — coming soon"
            role="img"
          >
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs text-cream/60">Coming to</p>
              <p className="font-bold text-sm">App Store</p>
            </div>
          </div>
          {/* Google Play placeholder */}
          <div
            className="flex items-center gap-3 bg-forest text-cream px-7 py-4 rounded-2xl opacity-70 cursor-not-allowed select-none w-52"
            aria-label="Google Play — coming soon"
            role="img"
          >
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5v-17c0-1.1 1.02-1.65 1.75-1L20,12 4.75,21.5C4.02,22.15 3,21.6 3,20.5zM16.95,12L5,5.45V18.55L16.95,12z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs text-cream/60">Coming to</p>
              <p className="font-bold text-sm">Google Play</p>
            </div>
          </div>
        </div>
        <p className="text-bark/50 text-xs mt-5 italic">App store availability to be announced. Check back soon.</p>
      </section>

      {/* ── FREE TIER INFO ── */}
      <section className="bg-parchment border-y border-amber/20 py-10 px-4" aria-label="Free and Explorer membership tiers">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl text-forest font-bold mb-6">Free to Begin. More to Explore.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            <div className="nature-card">
              <h3 className="font-display font-bold text-forest text-lg mb-3">🌱 Free Forever</h3>
              <ul className="space-y-2 text-bark text-sm">
                <li>✓ First 15 quests</li>
                <li>✓ First 35 discoveries</li>
                <li>✓ Full Nature Journal access</li>
                <li>✓ Family Campfire</li>
                <li>✓ Browse all provinces</li>
                <li>✓ Leaf Points &amp; badges</li>
              </ul>
            </div>
            <div className="nature-card border-amber/40 bg-amber/5">
              <h3 className="font-display font-bold text-amber text-lg mb-3">🗺️ Explorer Membership</h3>
              <ul className="space-y-2 text-bark text-sm">
                <li>✓ All quests unlocked</li>
                <li>✓ All discoveries unlocked</li>
                <li>✓ Full badge collection</li>
                <li>✓ Complete province books</li>
                <li>✓ All future content updates</li>
                <li>✓ Support the Quest Family 🍁</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-3xl mx-auto px-4 py-14 text-center" aria-label="Get SummerQuest">
        <p className="font-display italic text-forest text-2xl mb-6">
          "Every day is a new quest."
        </p>
        <Link href="/support/" className="btn-outline">
          Questions? Contact Support →
        </Link>
      </section>
    </>
  )
}
