import Link from 'next/link'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | The Quest Family',
}


export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 px-4 text-center">
      <Image
        src="/images/logo-circle-sm.png"
        alt="The Quest Family logo"
        width={72}
        height={72}
        className="rounded-full ring-2 ring-amber/40 mb-6"
      />
      <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-2">
        404 — Page Not Found
      </p>
      <h1 className="font-display text-3xl md:text-4xl text-forest font-bold mb-4">
        This path leads off the map.
      </h1>
      <p className="text-bark text-lg max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on the trail.
      </p>
      <Link
        href="/"
        className="inline-block bg-amber text-white font-semibold px-7 py-3 rounded-full hover:bg-bark transition-colors duration-200 shadow"
      >
        ← Back to Home
      </Link>
    </div>
  )
}
