'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-forest sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="The Quest Family — Home">
          <Image
            src="/images/logo-circle-sm.png"
            alt="The Quest Family circular logo — Fennick, Aria, Birch, and Moss with a compass"
            width={48}
            height={48}
            className="rounded-full ring-2 ring-amber/40 group-hover:ring-amber transition-all duration-200"
            priority
          />
          <span className="font-display text-cream font-bold text-lg leading-tight hidden sm:block">
            The Quest Family
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/" className="text-cream/90 hover:text-amber transition-colors duration-200 font-medium text-sm">
            Home
          </Link>
          <Link href="/summerquest/" className="text-cream/90 hover:text-amber transition-colors duration-200 font-medium text-sm">
            SummerQuest
          </Link>
          <Link href="/support/" className="text-cream/90 hover:text-amber transition-colors duration-200 font-medium text-sm">
            Support
          </Link>
          <Link
            href="/summerquest/#explore-app"
            className="bg-amber text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-bark transition-colors duration-200 shadow"
          >
            Explore the App →
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-forest border-t border-white/10 px-4 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          <Link href="/" className="text-cream/90 hover:text-amber py-2 font-medium" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/summerquest/" className="text-cream/90 hover:text-amber py-2 font-medium" onClick={() => setMenuOpen(false)}>
            SummerQuest
          </Link>
          <Link href="/support/" className="text-cream/90 hover:text-amber py-2 font-medium" onClick={() => setMenuOpen(false)}>
            Support
          </Link>
          <Link
            href="/summerquest/#explore-app"
            className="bg-amber text-white font-semibold px-5 py-3 rounded-full hover:bg-bark transition-colors text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Explore SummerQuest →
          </Link>
        </nav>
      )}
    </header>
  )
}
