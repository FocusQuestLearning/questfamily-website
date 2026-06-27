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

const guides = [
  { name: 'FENNICK', role: 'Lead Explorer',   nameClass: 'text-[#c0461a]', roleClass: 'text-[#c0461a]/85' },
  { name: 'ARIA',    role: 'Nature Guide',     nameClass: 'text-[#2a6fa8]', roleClass: 'text-[#2a6fa8]/85' },
  { name: 'BIRCH',   role: 'Builder & Maker',  nameClass: 'text-[#1a3a1e]', roleClass: 'text-[#1a3a1e]/70' },
  { name: 'MOSS',    role: 'Water & Wetlands', nameClass: 'text-[#1a3a1e]', roleClass: 'text-[#1a3a1e]/70' },
]

const features = [
  { icon: '/images/icon-compass.png',    alt: 'Compass',    label: 'Complete gentle\noutdoor quests' },
  { icon: '/images/icon-binoculars.png', alt: 'Binoculars', label: 'Explore Canadian\nnature discoveries' },
  { icon: '/images/icon-book.png',       alt: 'Nature book', label: 'Learn about birds, plants,\ninsects, animals and more' },
  { icon: '/images/icon-leaf.png',       alt: 'Leaf',       label: 'Earn badges\nand Leaf Points' },
  { icon: '/images/icon-notebook.png',   alt: 'Journal',    label: 'Build a private\nfamily nature journal' },
  { icon: '/images/icon-signpost.png',   alt: 'Signpost',   label: 'Discover Canada by\nprovince and territory' },
]

/* Coming-Soon + guide cards — shared between desktop overlay and mobile strip */
function ComingSoonCard() {
  return (
    <div className="flex items-center gap-2.5 bg-cream/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md border border-amber/30 shrink-0">
      <span className="text-2xl leading-none select-none" aria-hidden="true">🍁</span>
      <div className="text-left">
        <p className="font-bold text-forest text-[11px] leading-tight">Coming Soon to</p>
        <p className="text-bark text-[11px] leading-tight">App Store &amp; Google Play</p>
      </div>
    </div>
  )
}

function GuideCard({ g }: { g: (typeof guides)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center bg-cream/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md border border-amber/30 shrink-0 min-w-[100px]">
      <p className={`font-display font-bold text-sm tracking-wide leading-tight ${g.nameClass}`}>{g.name}</p>
      <p className={`text-[11px] mt-0.5 leading-tight ${g.roleClass}`}>{g.role}</p>
    </div>
  )
}

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
        <div className="relative w-full overflow-hidden bg-[#1a3a1e] flex flex-col justify-end min-h-[34rem] sm:min-h-0">

          {/* Artwork — four guides from behind in the Canadian wilderness */}
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

          {/* Text overlay — green panel (mobile) / text-on-sky (desktop) */}
          <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center text-center px-4 pt-8 sm:pt-[4%] md:pt-[4.5%] lg:pt-[4%]">
            <h1
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 5rem)',
                color: '#1a3a1e',
                WebkitTextStroke: '0.5px rgba(139,94,20,0.4)',
                textShadow: '1px 1px 0 #8B6914, 2px 2px 0 #7a5a10, 0 4px 16px rgba(0,0,0,0.20)',
                letterSpacing: '-0.01em',
              }}
            >
              SummerQuest
            </h1>

            <div
              className="mt-[1%] sm:mt-[1.2%] px-4 sm:px-7 py-1 sm:py-2 rounded"
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

            <p
              className="font-display font-bold text-[#faf5e8] leading-snug mt-[1.3%] max-w-[18rem] sm:max-w-[28rem]"
              style={{ fontSize: 'clamp(0.9rem, 2.4vw, 1.5rem)', textShadow: '0 1px 6px rgba(0,0,0,0.60)' }}
            >
              Helping families fall in love with Canada&apos;s natural world.
            </p>

            <p
              className="text-[#faf5e8]/85 leading-relaxed mt-[0.7%] max-w-[15rem] sm:max-w-[22rem]"
              style={{ fontSize: 'clamp(0.65rem, 1.4vw, 0.95rem)', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}
            >
              Turn every walk, every weekend, and every moment outside into an unforgettable adventure.
            </p>
          </div>

          {/* Guide + Coming Soon cards — overlaid across the bottom of the hero (desktop) */}
          <div className="hidden lg:flex absolute bottom-[3.5%] inset-x-[3%] z-20 items-stretch justify-between gap-2">
            <ComingSoonCard />
            {guides.map((g) => (
              <GuideCard key={g.name} g={g} />
            ))}
          </div>
        </div>

        {/* Guide + Coming Soon cards — strip below hero (mobile / tablet) */}
        <div className="lg:hidden bg-cream border-b border-amber/20 py-4 px-4">
          <div className="overflow-x-auto">
            <div className="flex items-stretch gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
              <ComingSoonCard />
              {guides.map((g) => (
                <GuideCard key={g.name} g={g} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT FAMILIES CAN DO ── */}
      <section
        aria-label="What families can do with SummerQuest"
        className="border-b border-amber/20 py-14 px-4"
        style={{ background: 'linear-gradient(180deg, #f3ecd8 0%, #ede4cc 100%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
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
                className={`flex flex-col items-center text-center gap-3 px-3 py-4 ${
                  i > 0 ? 'md:border-l md:border-bark/15' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.icon}
                  alt={f.alt}
                  width={128}
                  height={128}
                  className="w-16 h-16 object-contain drop-shadow-sm"
                  loading="lazy"
                />
                <p className="text-bark text-xs sm:text-sm leading-snug font-medium max-w-[140px]">
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
            <p className="text-bark text-sm leading-relaxed mb-3">
              The heart of SummerQuest is simple:
            </p>
            <p className="font-display italic text-forest text-lg leading-snug mb-5">
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
                borderColor: 'rgba(58,36,16,0.45)',
                backgroundImage:
                  'linear-gradient(180deg, rgba(255,255,255,0.10), rgba(0,0,0,0.12)), repeating-linear-gradient(90deg, #b07d45 0px, #a9763d 4px, #b48049 9px), linear-gradient(135deg, #b07d45, #8a5a28)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 3px 10px rgba(58,36,16,0.30)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl select-none mt-0.5" aria-hidden="true">✉️</span>
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
            <div className="relative mx-auto mb-6" style={{ maxWidth: '320px' }}>

              {/* Tablet — Today's Quest */}
              <div
                className="rounded-[1.4rem] p-2 shadow-xl mr-auto"
                style={{ background: 'linear-gradient(150deg, #3a3a3a, #1f1f1f)', width: '82%' }}
              >
                <div
                  className="rounded-[1rem] overflow-hidden text-left"
                  style={{ background: 'linear-gradient(170deg, #cfe8d2 0%, #aacdaf 100%)' }}
                >
                  <div className="px-3 pt-3 pb-1 flex items-center gap-1.5">
                    <span className="text-sm select-none" aria-hidden="true">🌿</span>
                    <p className="font-display font-bold text-forest text-[11px]">Today&apos;s Quest</p>
                  </div>
                  <div className="px-3 pb-3">
                    <div className="bg-white rounded-lg p-2 shadow-sm mb-1.5">
                      <div className="flex gap-2 items-start mb-1.5">
                        <span className="text-base select-none" aria-hidden="true">🐦</span>
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
                      <p className="font-bold text-forest text-[9px] mb-1">Your Progress</p>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm select-none" aria-hidden="true">🍁</span>
                          <div>
                            <p className="font-bold text-forest text-[9px] leading-none">1,250</p>
                            <p className="text-bark/60 text-[7px]">Leaf Points</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm select-none" aria-hidden="true">🏅</span>
                          <div>
                            <p className="font-bold text-forest text-[9px] leading-none">12</p>
                            <p className="text-bark/60 text-[7px]">Badges</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone — Discovery Library (overlapping, front-right) */}
              <div
                className="absolute bottom-0 right-0 rounded-[1.1rem] p-1.5 shadow-2xl"
                style={{ background: 'linear-gradient(150deg, #3a3a3a, #1f1f1f)', width: '44%' }}
              >
                <div
                  className="rounded-[0.8rem] overflow-hidden text-left"
                  style={{ background: 'linear-gradient(170deg, #eaf4ff 0%, #cfe3f5 100%)' }}
                >
                  <div className="px-2 pt-2 pb-1">
                    <p className="font-display font-bold text-forest text-[9px] leading-tight">Discovery Library</p>
                  </div>
                  <div className="px-2 pb-2 grid grid-cols-2 gap-1">
                    {[
                      { e: '🐦', n: 'Birds' },
                      { e: '🌸', n: 'Plants' },
                      { e: '🦋', n: 'Insects' },
                      { e: '🍄', n: 'Fungi' },
                    ].map((c) => (
                      <div key={c.n} className="bg-white rounded p-1 shadow-sm flex flex-col items-center">
                        <span className="text-sm select-none" aria-hidden="true">{c.e}</span>
                        <p className="text-forest text-[7px] font-bold mt-0.5">{c.n}</p>
                      </div>
                    ))}
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
