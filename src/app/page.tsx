import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section aria-label="The Quest Family hero" className="w-full">
        <div className="relative w-full overflow-hidden flex justify-center bg-[#1a3a1e]">
          <picture>
            {/* WebP — served to all modern browsers (97%+ support) */}
            <source
              type="image/webp"
              srcSet="/images/hero-768.webp 768w, /images/hero-1280.webp 1280w, /images/hero-1536.webp 1536w"
              sizes="(min-width: 1536px) 1536px, 100vw"
            />
            {/* JPEG fallback — legacy browsers */}
            <source
              type="image/jpeg"
              srcSet="/images/hero-768.jpg 768w, /images/hero-1280.jpg 1280w, /images/hero-1536.jpg 1536w"
              sizes="(min-width: 1536px) 1536px, 100vw"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-1536.jpg"
              alt="The Quest Family — a family and their storybook animal guides walk hand-in-hand toward a golden Canadian wilderness sunset, with mountains, forest, and a homestead behind them. Text reads: Helping families rediscover the wonder that\'s been there all along."
              width={1536}
              height={1024}
              className="w-full h-auto object-contain block"
              style={{ maxWidth: '1536px' }}
            />
          </picture>
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
            <p className="text-bark text-lg italic font-display">"Every Day is a New Quest."</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-5">
              <p className="text-bark text-base leading-relaxed">
                SummerQuest is a Canadian outdoor adventure app for families and K–8 learners. 
                Guided by four storybook friends — <strong className="text-forest">Fennick</strong>, 
                <strong className="text-forest"> Aria</strong>, <strong className="text-forest">Birch</strong>, 
                and <strong className="text-forest"> Moss</strong> — children explore local parks, 
                discover wildlife, earn badges, and build a family nature journal.
              </p>
              <p className="text-bark text-base leading-relaxed">
                From coast to coast to coast, SummerQuest is growing into Canada's most 
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
                  Learn About SummerQuest →
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
              desc: 'Storybook characters inspire curiosity. Real Canadian nature photography teaches, connects, and amazes.',
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
            Your Family's Privacy Comes First
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
              Contact Support →
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
          Follow along as we continue building Canada's greatest family adventure.
        </p>
        <Link href="/summerquest/" className="btn-primary text-lg px-10 py-4">
          Explore SummerQuest →
        </Link>
        <p className="text-bark/60 text-sm mt-6 italic">
          "From our little hobby farm to adventures around the world — every day is a new quest."
        </p>
      </section>
    </>
  )
}
