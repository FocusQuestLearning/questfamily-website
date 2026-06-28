import Link from 'next/link'
import { SUMMERQUEST_APP_URL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/*
        ── HERO PRELOAD ──
        Two preload hints — one per breakpoint tier — so the browser hoists
        the correct asset to <head> parse time regardless of viewport.
          • Desktop (≥1024px): wide 16:9 artwork for immersive full-bleed look
          • Mobile/Tablet (<1024px): original 3:2 artwork (unchanged)
      */}
      {/* Desktop wide hero preload */}
      <link
        rel="preload"
        as="image"
        media="(min-width: 1024px)"
        href="/images/hero-wide-1920.webp"
        imageSrcSet="/images/hero-wide-1280.webp 1280w, /images/hero-wide-1920.webp 1920w, /images/hero-wide-2560.webp 2560w, /images/hero-wide-3840.webp 3840w"
        imageSizes="100vw"
        fetchPriority="high"
        type="image/webp"
      />
      {/* Mobile/tablet original hero preload */}
      <link
        rel="preload"
        as="image"
        media="(max-width: 1023px)"
        href="/images/hero-1280.webp"
        imageSrcSet="/images/hero-768.webp 768w, /images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w"
        imageSizes="100vw"
        fetchPriority="high"
        type="image/webp"
      />

      {/* ── HERO ── */}
      <section aria-label="The Quest Family hero" className="w-full">
        <div className="relative w-full overflow-hidden flex justify-center bg-[#1a3a1e] lg:px-6">
          <picture>
            {/*
              Desktop (≥1024px): wide 16:9 master (5504×3072 px original; deployed up to 3840w).
              The wider aspect ratio lets the banner fill the browser width
              while naturally reducing vertical height — the entire artwork
              remains 100% visible with no cropping.
                Retina 1440p (1440×2 = 2880px)  → hero-wide-3840.webp  ✅
                4K display  (3840×1 = 3840px)   → hero-wide-3840.webp  ✅
                1440p std   (1440×1 = 1440px)   → hero-wide-1920.webp  ✅
                1280p std   (1280×1 = 1280px)   → hero-wide-1280.webp  ✅

              Mobile/Tablet (<1024px): original 3:2 artwork — unchanged.
                iPhone 15   (390×3  = 1170px)   → hero-1280.webp  ✅
                Android     (360×3  = 1080px)   → hero-1280.webp  ✅
                iPad        (768×2  = 1536px)   → hero-1920.webp  ✅
            */}

            {/* Desktop — wide 16:9 — WebP */}
            <source
              media="(min-width: 1024px)"
              type="image/webp"
              srcSet="/images/hero-wide-1280.webp 1280w, /images/hero-wide-1920.webp 1920w, /images/hero-wide-2560.webp 2560w, /images/hero-wide-3840.webp 3840w"
              sizes="100vw"
            />
            {/* Desktop — wide 16:9 — JPEG fallback */}
            <source
              media="(min-width: 1024px)"
              type="image/jpeg"
              srcSet="/images/hero-wide-1280.jpg 1280w, /images/hero-wide-1920.jpg 1920w, /images/hero-wide-2560.jpg 2560w"
              sizes="100vw"
            />

            {/* Mobile/Tablet — original 3:2 — WebP */}
            <source
              type="image/webp"
              srcSet="/images/hero-768.webp 768w, /images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w, /images/hero-2560.webp 2560w, /images/hero-3840.webp 3840w, /images/hero-5056.webp 5056w"
              sizes="100vw"
            />
            {/* Mobile/Tablet — original 3:2 — JPEG fallback */}
            <source
              type="image/jpeg"
              srcSet="/images/hero-768.jpg 768w, /images/hero-1280.jpg 1280w, /images/hero-1920.jpg 1920w, /images/hero-2560.jpg 2560w"
              sizes="100vw"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-1920.jpg"
              alt="The Quest Family — a family and their storybook animal guides walk hand-in-hand toward a golden Canadian wilderness sunset, with mountains, forest, and a homestead behind them. Signs read: Helping families rediscover the wonder that's been there all along."
              width={5056}
              height={3392}
              className="w-full h-auto object-contain block"
              fetchPriority="high"
            />
          </picture>

          {/* Hairline contrast scrim — lifts sign-text readability against bright sky.
              Extremely subtle: 12% black at base, fading to transparent over the
              lower 40% of the hero. Pointer-events off; no layout impact. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)' }}
          />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="max-w-3xl mx-auto px-4 py-14 text-center" aria-label="Our mission">
        <div className="leaf-divider" aria-hidden="true">🍃</div>
        <h1 className="font-display text-3xl md:text-4xl text-forest font-bold mt-4 mb-5 leading-snug">
          Where Every Day is an Adventure
        </h1>
        <p className="text-bark text-lg leading-relaxed max-w-2xl mx-auto">
          The Quest Family creates apps that encourage families to step outside, notice the world around them,
          and discover the wonder hiding in everyday moments — from a backyard garden to a Canadian wilderness trail.
        </p>
        <p className="text-meadow font-display italic text-xl mt-4">
          Storybook characters are guides. Nature is the teacher.
        </p>
        <div className="leaf-divider mt-6" aria-hidden="true">🍃</div>
      </section>

      {/* ── SUMMERQUEST FEATURE ── */}
      <section className="bg-parchment border-y border-amber/20 py-14" aria-label="SummerQuest — our featured app">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber/15 text-bark text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3">
              Our First App
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-bold mb-3">
              SummerQuest
            </h2>
            <p className="text-bark text-lg italic font-display">&quot;Every Day is a New Quest.&quot;</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-5">
              <p className="text-bark text-base leading-relaxed">
                SummerQuest is a Canadian outdoor adventure app for families and K&ndash;8 learners.
                Guided by four storybook friends &mdash; <strong className="text-forest">Fennick</strong>,{' '}
                <strong className="text-forest">Aria</strong>, <strong className="text-forest">Birch</strong>,
                and <strong className="text-forest">Moss</strong> &mdash; children explore local parks,
                discover wildlife, earn badges, and build a family nature journal.
              </p>
              <p className="text-bark text-base leading-relaxed">
                From coast to coast to coast, SummerQuest is growing into Canada&apos;s most
                comprehensive interactive nature and exploration library for children.
              </p>

              <ul className="space-y-2 text-bark">
                {[
                  '🧭 Complete gentle outdoor quests',
                  '🦊 Meet your four adventure guides',
                  '📖 Build a private family nature journal',
                  '🏅 Earn collectible badges & Leaf Points',
                  '🍁 Discover Canada by province & territory',
                  '🐦 Explore wildlife, trees, wildflowers & more',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link href="/summerquest/" className="btn-primary">
                  Learn About SummerQuest &rarr;
                </Link>
              </div>
            </div>

            {/* Feature icons grid */}
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: '🧭', title: 'Daily Quests', desc: 'Gentle outdoor adventures for every age' },
                { icon: '🌿', title: 'Nature Library', desc: "Canada's nature, coast to coast to coast" },
                { icon: '📔', title: 'Family Journal', desc: 'Private, yours forever, no pressure' },
                { icon: '🏅', title: 'Badges & Rewards', desc: 'Celebrate every discovery made together' },
              ].map((card) => (
                <div key={card.title} className="nature-card text-center">
                  <div className="text-3xl mb-2" aria-hidden="true">{card.icon}</div>
                  <h3 className="font-display font-bold text-forest text-sm mb-1">{card.title}</h3>
                  <p className="text-bark text-xs leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FAMILIES LOVE IT ── */}
      <section className="max-w-5xl mx-auto px-4 py-14" aria-label="Why families love The Quest Family apps">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-forest font-bold mb-3">
            Why Families Love It
          </h2>
          <p className="text-bark text-base max-w-xl mx-auto">
            Built around one simple question: would this naturally come up around the campfire?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🌲',
              title: 'Adventure First',
              desc: 'The app is the guide. The adventure is real life. We encourage families to put the phone away and go explore.',
            },
            {
              icon: '🇨🇦',
              title: 'Built for Canada',
              desc: 'Every quest, discovery, and guide reflects the real landscapes, wildlife, and seasons of Canada.',
            },
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'Family-Centred',
              desc: 'No pressure timers, no school-style testing, no stressful countdowns. Just gentle wonder and discovery.',
            },
            {
              icon: '🔒',
              title: 'Privacy & Safety',
              desc: 'Camera access is optional. Family journals are private. We collect only what we need — nothing more.',
            },
            {
              icon: '📚',
              title: 'Nature is the Teacher',
              desc: "Storybook characters inspire curiosity. Real Canadian nature photography teaches, connects, and amazes.",
            },
            {
              icon: '✨',
              title: 'Wonder Every Day',
              desc: '"I wonder what I\'ll discover next?" — not "I have another worksheet to finish." That\'s the feeling we build toward.',
            },
          ].map((card) => (
            <div key={card.title} className="nature-card">
              <div className="text-3xl mb-3" aria-hidden="true">{card.icon}</div>
              <h3 className="font-display font-bold text-forest text-base mb-2">{card.title}</h3>
              <p className="text-bark text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST / PRIVACY NOTE ── */}
      <section className="bg-forest text-cream py-12 px-4" aria-label="Privacy and trust commitment">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4" aria-hidden="true">🔒</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Your Family&apos;s Privacy Comes First
          </h2>
          <p className="text-cream/80 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We are a small family-run team and we take your trust seriously.
            SummerQuest is designed with children in mind — camera access is optional,
            journal entries stay private to your family, and we never sell your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy/" className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest">
              Read Our Privacy Policy
            </Link>
            <Link href="/support/" className="text-amber hover:text-cream transition-colors py-3 font-semibold">
              Contact Support &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center" aria-label="Get started with SummerQuest">
        <h2 className="font-display text-3xl md:text-4xl text-forest font-bold mb-4">
          Ready to Begin the Quest?
        </h2>
        <p className="text-bark text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          SummerQuest is coming soon to the App Store and Google Play.
          Follow along as we continue building Canada&apos;s greatest family adventure.
        </p>
        <Link href={SUMMERQUEST_APP_URL} className="btn-primary text-lg px-10 py-4">
          Explore SummerQuest &rarr;
        </Link>
        <p className="text-bark/60 text-sm mt-6 italic">
          &quot;From our little hobby farm to adventures around the world — every day is a new quest.&quot;
        </p>
      </section>
    </>
  )
}
