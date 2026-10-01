import Link from 'next/link'
import { QUIET_GROVE_GOOGLE_PLAY_URL, SUMMERQUEST_APP_URL } from '@/lib/constants'
import { BotanicalMark } from '@/components/quiet-grove/BotanicalMark'
import {
  AppleAppStoreComingSoon,
  DesktopComingSoon,
  GooglePlayButton,
} from '@/components/GooglePlayButton'

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
          Apps for the Moments That Matter
        </h1>
        <p className="text-bark text-lg leading-relaxed max-w-2xl mx-auto">
          The Quest Family creates thoughtful apps that help people explore, reflect and reconnect
          &mdash; from outdoor adventures together to quiet moments of your own.
        </p>
        <p className="text-meadow font-display italic text-xl mt-4">
          Nature. Reflection. Connection.
        </p>
        <div className="leaf-divider mt-6" aria-hidden="true">🍃</div>
      </section>

      {/* ── OUR APPS ── */}
      <section id="our-apps" className="max-w-3xl mx-auto px-4 pb-12 text-center scroll-mt-24" aria-label="Our apps">
        <span className="inline-block bg-amber/15 text-bark text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
          Our Apps
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-forest font-bold mb-4">
          Two ways to return to what matters.
        </h2>
        <p className="text-bark text-lg leading-relaxed max-w-2xl mx-auto">
          One invites families outside. One offers somewhere quiet within.
        </p>
      </section>

      {/* ── SUMMERQUEST FEATURE ── */}
      <section className="bg-parchment border-y border-amber/20 py-14" aria-label="SummerQuest — our featured app">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber/15 text-bark text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3">
              For Family Adventure
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
                <Link href={SUMMERQUEST_APP_URL} className="btn-outline">
                  Get SummerQuest
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
      <section className="max-w-5xl mx-auto px-4 py-14" aria-label="Why families love SummerQuest">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-forest font-bold mb-3">
            Why Families Love SummerQuest
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

      {/* ── THE QUIET GROVE FEATURE ── */}
      <section className="qg-home-feature relative isolate overflow-hidden border-y border-[#87724f]/40" aria-label="The Quiet Grove — mindful journal">
        <picture className="absolute inset-0 block" aria-hidden="true">
          <source
            media="(max-width: 640px)"
            srcSet="/the-quiet-grove/quiet-grove-forest-approved-mobile.jpg"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/the-quiet-grove/quiet-grove-forest-approved-desktop.jpg"
            alt=""
            width={1536}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(31,48,37,.58), rgba(31,48,37,.82))' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-24 text-center text-[#f8f2e6] flex flex-col items-center">
          <BotanicalMark color="#f8f2e6" size={56} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e6dcc2]">
            For Quiet Reflection
          </p>
          <h2 className="qg-home-serif mt-3 text-4xl md:text-6xl leading-tight">The Quiet Grove</h2>
          <p className="qg-home-serif italic text-xl md:text-2xl mt-1 text-[#efe6cf]">mindful journal</p>
          <p className="qg-home-serif mt-8 text-2xl md:text-3xl leading-snug max-w-2xl">
            Somewhere quiet to set down what you&rsquo;re carrying.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-[#f8f2e6]/95">
            A mindful journal for reflection, gratitude and quiet moments, with gentle rituals and writing
            that stays private on your own device.
          </p>
          <p className="qg-home-serif italic mt-5 text-lg text-[#efe6cf]">
            Come when you need it. Leave when you&rsquo;re ready. Return when you want.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
            <Link
              href="/the-quiet-grove/"
              className="inline-block rounded-full bg-[#f3eee2] px-8 py-3.5 font-semibold text-[#1f3025] shadow-md transition-colors hover:bg-[#e6dcc2]"
            >
              Enter The Quiet Grove &rarr;
            </Link>
            <GooglePlayButton
              appName="The Quiet Grove"
              href={QUIET_GROVE_GOOGLE_PLAY_URL}
              className="!bg-[#1f3025]/90 ring-1 ring-[#e6dcc2]/50 hover:!bg-[#294a37]"
            />
            <AppleAppStoreComingSoon
              appName="The Quiet Grove"
              className="ring-1 ring-[#e6dcc2]/35"
            />
            <DesktopComingSoon
              appName="The Quiet Grove"
              className="ring-1 ring-[#e6dcc2]/35"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#e6dcc2] max-w-xl">
            Android journal use currently requires no account. The paid desktop edition will be included
            with an active Quiet Grove Premium membership.
          </p>
        </div>
      </section>

      {/* ── TRUST / PRIVACY NOTE ── */}
      <section className="bg-forest text-cream py-12 px-4" aria-label="Privacy and trust commitment">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4" aria-hidden="true">🔒</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Your Privacy Comes First
          </h2>
          <p className="text-cream/80 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We are a small family-run team and we take your trust seriously. SummerQuest keeps family
            journals private, while The Quiet Grove stores personal journal content on your own device.
            We do not sell journal content or use it for advertising.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
            <Link
              href="/privacy/"
              className="inline-block rounded-full border-2 border-[#faf5e8] px-7 py-3 font-semibold text-[#faf5e8] transition-colors hover:bg-[#faf5e8] hover:text-[#1a3a1e]"
            >
              Website Privacy Policy
            </Link>
            <Link
              href="/the-quiet-grove/privacy/"
              className="inline-block rounded-full border-2 border-[#faf5e8] px-7 py-3 font-semibold text-[#faf5e8] transition-colors hover:bg-[#faf5e8] hover:text-[#1a3a1e]"
            >
              Quiet Grove Privacy
            </Link>
            <Link href="/support/" className="text-amber hover:text-cream transition-colors py-3 font-semibold">
              Contact Support &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center" aria-label="Explore The Quest Family apps">
        <h2 className="font-display text-3xl md:text-4xl text-forest font-bold mb-4">
          Where Will You Begin?
        </h2>
        <p className="text-bark text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Step outside together with SummerQuest, or step into somewhere quiet with The Quiet Grove.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={SUMMERQUEST_APP_URL} className="btn-primary text-lg px-8 py-4">
            Get SummerQuest &rarr;
          </Link>
          <Link
            href="/the-quiet-grove/"
            className="inline-block rounded-full bg-[#345b43] px-8 py-4 text-lg font-semibold text-[#fffaf0] shadow-md transition-colors hover:bg-[#294a37] active:scale-95"
          >
            Enter The Quiet Grove &rarr;
          </Link>
        </div>
        <p className="text-bark/60 text-sm mt-6 italic">
          &quot;Helping families rediscover the wonder that&rsquo;s been there all along.&quot;
        </p>
      </section>
    </>
  )
}
