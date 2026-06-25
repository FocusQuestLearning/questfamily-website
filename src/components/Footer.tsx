import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-forest text-cream mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-4 md:max-w-xs">
            <Image
              src="/images/logo-circle-sm.png"
              alt="The Quest Family logo — Fennick, Aria, Birch, and Moss adventure guides"
              width={72}
              height={72}
              className="rounded-full ring-2 ring-amber/40"
            />
            <div>
              <p className="font-display font-bold text-lg text-cream leading-tight">The Quest Family</p>
              <p className="text-cream/70 text-sm mt-1 italic leading-snug">
                Helping families rediscover the wonder<br />that's been there all along.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16 flex-1 md:justify-end">
            <div>
              <p className="text-amber font-semibold text-xs uppercase tracking-widest mb-3">Apps</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/summerquest/" className="text-cream/80 hover:text-amber transition-colors text-sm">
                    SummerQuest
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
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/50">
          <p>© {year} The Quest Family. All rights reserved.</p>
          <p className="text-xs italic">Made with 🍁 for Canadian families</p>
        </div>
      </div>
    </footer>
  )
}
