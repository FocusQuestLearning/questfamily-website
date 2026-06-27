import type { Metadata } from 'next'
import Link from 'next/link'

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

const guides = [
  { name: 'FENNICK', role: 'Lead Explorer',   nameClass: 'text-[#c0461a]', roleClass: 'text-[#c0461a]/80' },
  { name: 'ARIA',    role: 'Nature Guide',     nameClass: 'text-[#2a6fa8]', roleClass: 'text-[#2a6fa8]/80' },
  { name: 'BIRCH',  role: 'Builder & Maker',  nameClass: 'text-[#1a3a1e]', roleClass: 'text-[#1a3a1e]/65' },
  { name: 'MOSS',   role: 'Water & Wetlands', nameClass: 'text-[#1a3a1e]', roleClass: 'text-[#1a3a1e]/65' },
]

const features = [
  { icon: '/images/icon-compass.png',    alt: 'Compass',    label: 'Complete gentle\noutdoor quests' },
  { icon: '/images/icon-binoculars.png', alt: 'Binoculars', label: 'Explore Canadian\nnature discoveries' },
  { icon: '/images/icon-book.png',       alt: 'Nature book', label: 'Learn about birds, plants,\ninsects, animals and more' },
  { icon: '/images/icon-leaf.png',       alt: 'Leaf',       label: 'Earn badges\nand Leaf Points' },
  { icon: '/images/icon-notebook.png',   alt: 'Journal',    label: 'Build a private\nfamily nature journal' },
  { icon: '/images/icon-signpost.png',   alt: 'Signpost',   label: 'Discover Canada by\nprovince and territory' },
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

        {/* Artwork container — green panel on mobile (text above), artwork fills desktop */}
        <div className="relative w-full overflow-hidden bg-[#1a3a1e] flex flex-col justify-end min-h-[34rem] sm:min-h-0">

          {/* Four guides from behind in the Canadian wilderness */}
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

          {/* Text overlay — positioned in sky zone above characters */}
          <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center text-center px-4 pt-6 sm:pt-[3%] md:pt-[3.5%] lg:pt-[3%]">
            <h1
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 7.2vw, 5rem)',
                color: '#1a3a1e',
                WebkitTextStroke: '0.5px rgba(139,94,20,0.4)',
                textShadow: '1px 1px 0 #8B6914, 2px 2px 0 #7a5a10, 0 4px 16px rgba(0,0,0,0.20)',
                letterSpacing: '-0.01em',
              }}
            >
              SummerQuest
            </h1>

            <div
              className="mt-[0.8%] sm:mt-[1%] px-4 sm:px-7 py-1 sm:py-2 rounded"
              style={{
                background: 'linear-gradient(135deg, #7c4e1c 0%, #5c3510 45%, #7c4e1c 100%)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(139,105,20,0.45)',
              }}
            >
              <p
                className="font-display italic font-bold text-[#faf5e8]"
                style={{
                  fontSize: 'clamp(0.75rem, 2.0vw, 1.3rem)',
                  textShadow: '0 1px 4px rgba(0,0,0,0.55)',
                  letterSpacing: '0.015em',
                }}
              >
                🍂 Every Day is a New Quest 🍂
              </p>
            </div>

            <p
              className="font-display font-bold text-[#faf5e8] leading-snug mt-[1%] max-w-[18rem] sm:max-w-[26rem]"
              style={{ fontSize: 'clamp(0.9rem, 2.3vw, 1.45rem)', textShadow: '0 1px 6px rgba(0,0,0,0.60)' }}
            >
              Helping families fall in love with Canada&apos;s natural world.
            </p>

            <p
              className="text-[#faf5e8]/85 leading-relaxed mt-[0.5%] max-w-[14rem] sm:max-w-[20rem]"
              style={{ fontSize: 'clamp(0.65rem, 1.3vw, 0.9rem)', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}
            >
              Turn every walk, every weekend, and every moment outside into an unforgettable adventure.
            </p>
          </div>
        </div>

        {/* ── GUIDE CARD STRIP ── cream band below the artwork */}
        <div
          className="border-b border-amber/20 py-3 md:py-4"
          style={{ background: 'linear-gradient(180deg, #f5ecd8 0%, #ede4cc 100%)' }}
        >
          <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
            <div className="flex items-stretch gap-2.5 md:gap-3 min-w-max md:min-w-0 md:w-full">

              {/* Coming Soon card */}
              <div className="flex items-center gap-2.5 bg-cream/90 rounded-xl px-4 py-2.5 shadow-sm border border-amber/25 flex-none min-w-[155px] md:flex-1">
                <span className="text-[1.6rem] leading-none select-none" aria-hidden="true">🍁</span>
                <div className="text-left">
                  <p className="font-bold text-forest text-xs leading-tight whitespace-nowrap">Coming Soon to</p>
                  <p className="text-bark/80 text-xs leading-tight whitespace-nowrap">App Store &amp; Google Play</p>
                </div>
              </div>

              {/* Guide cards */}
              {guides.map((g) => (
                <div
                  key={g.name}
                  className="flex flex-col items-center justify-center bg-cream/90 rounded-xl px-4 py-2.5 shadow-sm border border-amber/25 flex-none min-w-[120px] md:flex-1 text-center"
                >
                  <p className={`font-display font-bold text-base md:text-lg lg:text-xl tracking-wide leading-tight ${g.nameClass}`}>
                    {g.name}
                  </p>
                  <p className={`text-[11px] md:text-xs mt-1 leading-tight ${g.roleClass}`}>
                    {g.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT FAMILIES CAN DO ── */}
      <section
        aria-label="What families can do with SummerQuest"
        className="border-b border-amber/20 py-14 md:py-16 px-4"
        style={{ background: 'linear-gradient(180deg, #f3ecd8 0%, #ede4cc 100%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10 md:mb-12">
            <span className="text-meadow text-xl select-none" aria-hidden="true">🍃</span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-bold text-center">
              What Families Can Do
            </h2>
            <span className="text-meadow text-xl select-none" aria-hidden="true">🍃</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {features.map((f, i) => (
              <div
                key={f.alt}
                className={`flex flex-col items-center text-center gap-3 px-3 py-5 ${
                  i > 0 ? 'md:border-l md:border-bark/20' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.icon}
                  alt={f.alt}
                  width={128}
                  height={128}
                  className="w-20 h-20 object-contain drop-shadow-sm"
                  loading="lazy"
                />
                <p className="text-bark text-sm leading-snug font-medium max-w-[130px]">
                  {f.label.split('\n').map((line, j, arr) => (
                    <span key={j}>
                      {line}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MADE FOR FAMILIES + PRIVACY + DEVICE PREVIEW ── */}
      <section aria-label="SummerQuest values and app preview" className="bg-cream py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

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
            <p className="text-bark text-sm leading-relaxed mb-2">
              The heart of SummerQuest is simple:
            </p>
            <p className="font-display italic text-forest text-xl leading-snug mb-5">
              Storybook characters are guides.
              <br />
              Nature is the teacher.
            </p>
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
              <h2 className="font-display text-2xl text-forest font-bold">Privacy and Safety</h2>
              <span className="text-meadow text-base select-none" aria-hidden="true">🌿</span>
            </div>
            <p className="text-bark text-sm leading-relaxed mb-5">
              SummerQuest is built with family privacy in mind. Camera access is optional.
              Families choose whether to document discoveries, and journal entries are intended
              to remain private to the family unless a parent clearly chooses otherwise.
            </p>

            {/* Wooden contact sign */}
            <div
              className="rounded-xl p-5 border-2 shadow-md relative overflow-hidden"
              style={{
                borderColor: 'rgba(58,36,16,0.40)',
                backgroundImage:
                  'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.10) 100%), repeating-linear-gradient(90deg, #b07d45 0px, #a9763d 4px, #b58249 10px), linear-gradient(135deg, #b07d45 0%, #8a5a28 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20), 0 3px 10px rgba(58,36,16,0.25)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl select-none mt-0.5 flex-shrink-0" aria-hidden="true">✉️</span>
                <div>
                  <p className="text-[#2e1c0c] text-xs leading-relaxed font-medium mb-2">
                    For privacy questions, support, or account/data deletion requests, families
                    can contact:
                  </p>
                  <a
                    href="mailto:support@summerquest.ca"
                    className="text-[#13301a] font-bold text-sm hover:text-forest underline decoration-[#13301a]/30 underline-offset-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  >
                    support@summerquest.ca
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Device / App Preview ── */}
          <div className="text-center">
            <div className="relative mx-auto mb-6" style={{ maxWidth: '320px', minHeight: '230px' }}>

              {/* Tablet — Today's Quest (behind / left) */}
              <div
                className="rounded-[1.4rem] p-2 shadow-xl mr-auto"
                style={{ background: 'linear-gradient(150deg, #3a3a3a 0%, #1f1f1f 100%)', width: '80%' }}
              >
                <div
                  className="rounded-[1rem] overflow-hidden text-left"
                  style={{ background: 'linear-gradient(175deg, #cfe8d2 0%, #a8c9ae 100%)' }}
                >
                  <div className="px-3 pt-2.5 pb-1 flex items-center gap-1.5">
                    <span className="text-xs select-none" aria-hidden="true">🌿</span>
                    <p className="font-display font-bold text-forest text-[10px]">Today&apos;s Quest</p>
                  </div>
                  <div className="px-3 pb-3">
                    <div className="bg-white rounded-lg p-2 shadow-sm mb-1.5">
                      <div className="flex gap-2 items-start mb-1.5">
                        <span className="text-base select-none flex-shrink-0" aria-hidden="true">🐦</span>
                        <div>
                          <p className="font-bold text-forest text-[10px] leading-tight">Listen for a Bird</p>
                          <p className="text-bark/70 text-[8px] leading-snug mt-0.5">
                            Find a quiet spot outside and listen for birds. What can you hear?
                          </p>
                        </div>
                      </div>
                      <div
                        className="text-center py-1 rounded text-[8px] font-bold text-white"
                        style={{ background: '#2d5a32' }}
                        aria-hidden="true"
                      >
                        Start Quest
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <p className="font-bold text-forest text-[9px] mb-1.5">Your Progress</p>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm select-none" aria-hidden="true">🍁</span>
                          <div>
                            <p className="font-bold text-forest text-[9px] leading-none">1,250</p>
                            <p className="text-bark/55 text-[7px]">Leaf Points</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm select-none" aria-hidden="true">🏅</span>
                          <div>
                            <p className="font-bold text-forest text-[9px] leading-none">12</p>
                            <p className="text-bark/55 text-[7px]">Badges</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone — Discovery Library (in front / right, overlapping) */}
              <div
                className="absolute bottom-0 right-0 rounded-[1.1rem] p-1.5 shadow-2xl"
                style={{ background: 'linear-gradient(150deg, #3a3a3a 0%, #1f1f1f 100%)', width: '43%' }}
              >
                <div
                  className="rounded-[0.8rem] overflow-hidden text-left"
                  style={{ background: 'linear-gradient(175deg, #e8f3ff 0%, #cde0f5 100%)' }}
                >
                  <div className="px-2 pt-2 pb-1">
                    <p className="font-display font-bold text-forest text-[9px] leading-tight">Discovery Library</p>
                  </div>
                  <div className="px-1.5 pb-2 grid grid-cols-2 gap-1">
                    {[
                      { e: '🐦', n: 'Birds' },
                      { e: '🌸', n: 'Plants' },
                      { e: '🦋', n: 'Insects' },
                      { e: '🍄', n: 'Fungi' },
                    ].map((c) => (
                      <div key={c.n} className="bg-white rounded-md p-1 shadow-sm flex flex-col items-center">
                        <span className="text-base select-none leading-none" aria-hidden="true">{c.e}</span>
                        <p className="text-forest text-[7px] font-bold mt-0.5">{c.n}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-bark text-sm leading-relaxed mb-2 mt-2">
              SummerQuest is preparing for launch on mobile app stores.
            </p>
            <p className="font-display italic text-forest text-xl">
              Every day is a new quest.
            </p>
            <p className="text-amber mt-2 text-base select-none" aria-hidden="true">🍁</p>
          </div>
        </div>
      </section>

      {/* ── SUMMERQUEST FOOTER ── matches approved mockup */}
      <footer className="bg-[#1a3a1e]" aria-label="SummerQuest footer">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/70">
            {/* Left — legal nav */}
            <nav aria-label="Footer navigation" className="flex items-center gap-3">
              <Link
                href="/privacy/"
                className="hover:text-cream transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-cream/30">|</span>
              <Link
                href="/terms/"
                className="hover:text-cream transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Terms of Use
              </Link>
              <span aria-hidden="true" className="text-cream/30">|</span>
              <Link
                href="/support/"
                className="hover:text-cream transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Support
              </Link>
            </nav>

            {/* Center — maple leaf */}
            <span className="text-lg select-none text-amber/70" aria-hidden="true">🍁</span>

            {/* Right — copyright */}
            <p className="text-cream/50 text-xs">
              © 2026 SummerQuest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
