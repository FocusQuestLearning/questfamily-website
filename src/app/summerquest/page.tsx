import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SummerQuest — Every Day is a New Quest | The Quest Family',
  description:
    'SummerQuest is a Canadian outdoor adventure app for families. Complete quests, discover wildlife, earn badges, and explore Canada province by province.',
  openGraph: {
    title: 'SummerQuest — Every Day is a New Quest',
    description: "Helping families fall in love with Canada's natural world.",
    siteName: 'The Quest Family',
    type: 'website',
  },
}

const features = [
  { icon: '🧭', label: 'Complete gentle\noutdoor quests' },
  { icon: '🔭', label: 'Explore Canadian\nnature discoveries' },
  { icon: '📗', label: 'Learn about birds, plants,\ninsects, animals and more' },
  { icon: '🍁', label: 'Earn badges\nand Leaf Points' },
  { icon: '📒', label: 'Build a private family\nnature journal' },
  { icon: '🪧', label: 'Discover Canada by\nprovince and territory' },
]

const guides = [
  { name: 'FENNICK', role: 'Lead Explorer',    emoji: '🦊', nameClass: 'text-[#c05f1a]', roleClass: 'text-[#c05f1a]/80' },
  { name: 'ARIA',    role: 'Nature Guide',      emoji: '🦉', nameClass: 'text-[#2a6fa8]', roleClass: 'text-[#2a6fa8]/80' },
  { name: 'BIRCH',   role: 'Builder & Maker',   emoji: '🦫', nameClass: 'text-[#1a3a1e]', roleClass: 'text-[#1a3a1e]/70' },
  { name: 'MOSS',    role: 'Water & Wetlands',  emoji: '🐸', nameClass: 'text-[#1a3a1e]', roleClass: 'text-[#1a3a1e]/70' },
]

export default function SummerQuestPage() {
  return (
    <>
      {/* ── HERO IMAGE PRELOAD ── */}
      <link
        rel="preload"
        as="image"
        href="/images/sq-hero-1280.webp"
        imageSrcSet="/images/sq-hero-768.webp 768w, /images/sq-hero-1280.webp 1280w, /images/sq-hero-1920.webp 1920w"
        imageSizes="100vw"
        fetchPriority="high"
        type="image/webp"
      />

      {/* ── HERO ── */}
      <section aria-label="SummerQuest hero" className="w-full">
        <div className="relative w-full overflow-hidden bg-[#1a3a1e]">

          {/* Artwork — guides from behind in Canadian wilderness */}
          <picture>
            <source
              type="image/webp"
              srcSet="/images/sq-hero-768.webp 768w, /images/sq-hero-1280.webp 1280w, /images/sq-hero-1920.webp 1920w"
              sizes="100vw"
            />
            <source
              type="image/jpeg"
              srcSet="/images/sq-hero-1280.jpg 1280w, /images/sq-hero-1920.jpg 1920w"
              sizes="100vw"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sq-hero-1920.jpg"
              alt="Fennick, Aria, Birch, and Moss — four storybook animal guides — standing together from behind on a rocky overlook, gazing out across a breathtaking Canadian wilderness of mountains, alpine lake, forest, and golden sky."
              width={1920}
              height={1080}
              className="w-full h-auto object-contain block"
              fetchPriority="high"
            />
          </picture>

          {/* Text overlay — positioned in the sky / upper portion of artwork */}
          <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center text-center px-4 pt-[4%] sm:pt-[5%] md:pt-[6%] lg:pt-[7%]">

            {/* ── SummerQuest wordmark ── */}
            <h1
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 7.5vw, 5.5rem)',
                color: '#1a3a1e',
                WebkitTextStroke: '0.5px rgba(139,94,20,0.4)',
                textShadow:
                  '1px 1px 0 #8B6914, 2px 2px 0 #7a5a10, 0 4px 16px rgba(0,0,0,0.20)',
                letterSpacing: '-0.01em',
              }}
            >
              SummerQuest
            </h1>

            {/* ── Wooden plank tagline ── */}
            <div
              className="mt-[1.2%] sm:mt-[1.5%] px-4 sm:px-7 py-1 sm:py-2 rounded"
              style={{
                background: 'linear-gradient(135deg, #7c4e1c 0%, #5c3510 45%, #7c4e1c 100%)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(139,105,20,0.45)',
              }}
            >
              <p
                className="font-display italic font-bold text-[#faf5e8]"
                style={{
                  fontSize: 'clamp(0.75rem, 2.0vw, 1.35rem)',
                  textShadow: '0 1px 4px rgba(0,0,0,0.55)',
                  letterSpacing: '0.015em',
                }}
              >
                🍂 Every Day is a New Quest 🍂
              </p>
            </div>

            {/* ── Headline ── */}
            <p
              className="font-display font-bold text-[#faf5e8] leading-snug mt-[1.5%] max-w-[18rem] sm:max-w-[28rem]"
              style={{
                fontSize: 'clamp(0.9rem, 2.4vw, 1.5rem)',
                textShadow: '0 1px 6px rgba(0,0,0,0.60)',
              }}
            >
              Helping families fall in love with Canada&apos;s natural world.
            </p>

            {/* ── Subtext ── */}
            <p
              className="text-[#faf5e8]/85 leading-relaxed mt-[0.8%] max-w-[15rem] sm:max-w-[22rem]"
              style={{
                fontSize: 'clamp(0.65rem, 1.4vw, 0.95rem)',
                textShadow: '0 1px 4px rgba(0,0,0,0.55)',
              }}
            >
              Turn every walk, every weekend,
              and every moment outside into an
              unforgettable adventure.
            </p>
          </div>
        </div>
      </section>

      {/* ── GUIDE STRIP ── */}
      <section
        aria-label="Adventure guides and coming soon"
        className="bg-cream border-b border-amber/20 py-4 px-4"
      >
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="flex items-stretch gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">

            {/* Coming Soon card */}
            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-amber/20 shrink-0">
              <span className="text-2xl select-none" aria-hidden="true">🍁</span>
              <div>
                <p className="font-bold text-forest text-xs leading-tight">Coming Soon to</p>
                <p className="text-bark text-xs leading-tight">App Store &amp; Google Play</p>
              </div>
            </div>

            {/* Guide name cards */}
            {guides.map((g) => (
              <div
                key={g.name}
                className="flex flex-col items-center justify-center bg-white rounded-xl px-5 py-3 shadow-sm border border-amber/20 shrink-0 min-w-[108px]"
              >
                <span className="text-xl mb-0.5 select-none" aria-hidden="true">{g.emoji}</span>
                <p className={`font-display font-bold text-sm tracking-wide ${g.nameClass}`}>
                  {g.name}
                </p>
                <p className={`text-xs mt-0.5 ${g.roleClass}`}>{g.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT FAMILIES CAN DO ── */}
      <section
        aria-label="What families can do with SummerQuest"
        className="bg-parchment border-b border-amber/20 py-12 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-1" aria-hidden="true">
              <span className="text-meadow text-lg">🍃</span>
              <span className="text-meadow text-lg">🌿</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-bold">
              What Families Can Do
            </h2>
            <div className="flex items-center justify-center gap-3 mt-1" aria-hidden="true">
              <span className="text-meadow text-lg">🌿</span>
              <span className="text-meadow text-lg">🍃</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4">
            {features.map((f) => (
              <div key={f.icon} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-amber/20"
                  style={{ background: 'linear-gradient(145deg, #fdf6e0 0%, #ede0c4 100%)' }}
                  aria-hidden="true"
                >
                  <span className="text-3xl">{f.icon}</span>
                </div>
                <p className="text-bark text-xs sm:text-sm leading-snug font-medium max-w-[120px]">
                  {f.label.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < f.label.split('\n').length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MADE FOR FAMILIES + PRIVACY + APP PREVIEW ── */}
      <section aria-label="SummerQuest values and app preview" className="bg-cream py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* ── Made for Families ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-meadow text-base select-none" aria-hidden="true">🌿</span>
              <h2 className="font-display text-2xl text-forest font-bold">Made for Families</h2>
              <span className="text-meadow text-base select-none" aria-hidden="true">🌿</span>
            </div>
            <p className="text-bark text-sm leading-relaxed mb-3">
              SummerQuest is designed to feel warm, calm, and encouraging. There are no pressure
              timers, no school-style testing, and no stressful countdowns.
            </p>
            <p className="text-bark text-sm leading-relaxed mb-3">
              The heart of SummerQuest is simple:
            </p>
            <p className="font-display italic text-forest text-lg leading-snug mb-5">
              Storybook characters are guides.
              <br />
              Nature is the teacher.
            </p>
            {/* Guides artwork thumbnail */}
            <div className="rounded-2xl overflow-hidden border border-amber/20 shadow-sm">
              <picture>
                <source type="image/webp" srcSet="/images/sq-hero-768.webp" />
                <source type="image/jpeg" srcSet="/images/sq-hero-1280.jpg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sq-hero-1280.jpg"
                  alt="All four SummerQuest guides looking out at the Canadian wilderness together"
                  width={768}
                  height={432}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* ── Privacy and Safety ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-meadow text-base select-none" aria-hidden="true">🌿</span>
              <h2 className="font-display text-2xl text-forest font-bold">Privacy &amp; Safety</h2>
              <span className="text-meadow text-base select-none" aria-hidden="true">🌿</span>
            </div>
            <p className="text-bark text-sm leading-relaxed mb-5">
              SummerQuest is built with family privacy in mind. Camera access is optional.
              Families choose whether to document discoveries, and journal entries are intended
              to remain private to the family unless a parent clearly chooses otherwise.
            </p>

            {/* Contact card */}
            <div
              className="rounded-2xl p-5 border border-amber/30 shadow-sm"
              style={{
                background: 'linear-gradient(145deg, #fdf2dc, #f5e4b8)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 8px rgba(107,66,38,0.12)',
              }}
            >
              <p className="text-bark text-xs leading-relaxed text-center mb-3">
                For privacy questions, support, or account/data deletion requests, families
                can contact:
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg select-none" aria-hidden="true">✉️</span>
                <a
                  href="mailto:support@summerquest.ca"
                  className="text-amber font-bold text-sm hover:text-bark transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  support@summerquest.ca
                </a>
              </div>
            </div>
          </div>

          {/* ── Device / App Preview ── */}
          <div className="text-center">
            {/* Stylised in-app screen preview */}
            <div
              className="rounded-3xl overflow-hidden border-4 shadow-lg mb-5"
              style={{
                borderColor: '#1a3a1e',
                background: 'linear-gradient(160deg, #eaf5ea 0%, #d4ebd4 100%)',
              }}
            >
              <div className="p-4 text-left">
                {/* Today's Quest mock */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base select-none" aria-hidden="true">🌿</span>
                  <p className="font-display font-bold text-forest text-xs">Today&apos;s Quest</p>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm mb-2">
                  <div className="flex gap-3 items-start mb-2">
                    <span className="text-xl select-none" aria-hidden="true">🐦</span>
                    <div>
                      <p className="font-bold text-forest text-xs">Listen for a Bird</p>
                      <p className="text-bark/70 text-[11px] mt-0.5 leading-snug">
                        Find a quiet spot outside and listen for birds. What can you hear?
                      </p>
                    </div>
                  </div>
                  <div
                    className="text-center py-1 rounded-lg text-xs font-bold text-white"
                    style={{ background: '#2d5a32' }}
                    aria-hidden="true"
                  >
                    Start Quest
                  </div>
                </div>
                {/* Progress row */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm">
                  <p className="font-bold text-forest text-[11px] mb-1.5">Your Progress</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base select-none" aria-hidden="true">🍁</span>
                      <div>
                        <p className="font-bold text-forest text-[11px]">1,250</p>
                        <p className="text-bark/60 text-[10px]">Leaf Points</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base select-none" aria-hidden="true">🏅</span>
                      <div>
                        <p className="font-bold text-forest text-[11px]">12</p>
                        <p className="text-bark/60 text-[10px]">Badges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-bark text-sm leading-relaxed mb-2">
              SummerQuest is preparing for launch on mobile app stores.
            </p>
            <p className="font-display italic text-forest text-xl">
              Every day is a new quest.
            </p>
            <p className="text-meadow mt-2 select-none" aria-hidden="true">🍁</p>
          </div>
        </div>
      </section>
    </>
  )
}
