'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

/**
 * Renders the global site Footer everywhere EXCEPT on the /summerquest/ page,
 * which includes its own SummerQuest-branded footer.
 */
export default function FooterConditional() {
  const pathname = usePathname()
  if (pathname === '/summerquest' || pathname === '/summerquest/') return null
  return <Footer />
}
