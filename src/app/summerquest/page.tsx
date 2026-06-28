import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SummerQuest — Every Day is a New Quest',
  description: "Helping families fall in love with Canada’s natural world. Turn every walk, every weekend, and every moment outside into an unforgettable adventure.",
  openGraph: {
    title: 'SummerQuest',
    description: "Helping families fall in love with Canada’s natural world.",
    siteName: 'The Quest Family',
    type: 'website',
  },
}

/*
  The approved SummerQuest design is delivered as a single flat image, so the
  entire top navigation (logo, Home, SummerQuest, Support, Explore the App) is
  PAINTED INTO the artwork — none of it is real markup, and the global site
  Header is intentionally suppressed on this route. That is why every nav item
  appeared "dead": the user was clicking on a picture of a navbar.

  Fix: keep the approved artwork untouched and lay correctly-aligned,
  transparent clickable overlays over each real nav target. Coordinates are
  percentages of the image box, so they stay aligned at every screen size.
  "SummerQuest" is the current page, so it intentionally has no overlay.
  TODO: point the "Explore the App" overlay to the App Store / Google Play URL
  once those links exist.
*/
const NAV_OVERLAYS: {
  href: string
  label: string
  left: string
  top: string
  width: string
  height: string
}[] = [
  { href: '/',         label: 'The Quest Family — Home', left: '2.5%',  top: '0.6%', width: '26%',   height: '4.4%' },
  { href: '/',         label: 'Home',                    left: '54%',   top: '1.2%', width: '7.5%',  height: '3.2%' },
  { href: '/support/', label: 'Support',                 left: '74.5%', top: '1.2%', width: '7.5%',  height: '3.2%' },
  { href: '/',         label: 'Explore the App',         left: '82.5%', top: '0.8%', width: '16%',   height: '4%'   },
]

export default function SummerQuestPage() {
  return (
    <div
      style={{
        backgroundColor: '#2C4A2E',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: '1024px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/summerquest-approved.jpg"
          alt="SummerQuest — Every Day is a New Quest. Helping families fall in love with Canada’s natural world."
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        {NAV_OVERLAYS.map((o) => (
          <a
            key={o.label}
            href={o.href}
            aria-label={o.label}
            style={{
              position: 'absolute',
              left: o.left,
              top: o.top,
              width: o.width,
              height: o.height,
              display: 'block',
              zIndex: 2,
              background: 'transparent',
            }}
          />
        ))}
      </div>
    </div>
  )
}
