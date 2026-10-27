import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-forest text-cream mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full max-w-xs">
            <div className="w-full max-w-[288px] rounded-2xl bg-cream p-4">
              <Image
                src="/images/the-quest-family-logo.webp"
                alt="The Quest Family logo — sunlit mountains, forest and river in a gold circle beside the name"
                width={768}
                height={256}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-cream/70 text-sm italic leading-snug text-center lg:text-left">
              Helping families rediscover the wonder<br />that's been there all along.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 flex-1 lg:justify-end">
            <div>
              <p className="text-amber font-semibold text-xs uppercase tracking-widest mb-3">Apps</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/summerquest/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Sun & Fern
                  </Link>
                </li>
                <li>
                  <Link href="/quietly-woven/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Quietly Woven
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-amber font-semibold text-xs uppercase tracking-widest mb-3">Support</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/support/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Help & Support
                  </Link>
                </li>
                <li>
                  <a href="mailto:support.questfamily@gmail.com" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    support.questfamily@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-amber font-semibold text-xs uppercase tracking-widest mb-3">Legal</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/quietly-woven/privacy/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Quietly Woven Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/quietly-woven/terms/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    Quietly Woven Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/50">
          <p>© {year} The Quest Family. All rights reserved.</p>
          <p className="text-xs italic">Made for Canadian families</p>
        </div>
      </div>
    </footer>
  )
}
