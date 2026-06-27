'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

/**
 * Renders the global site Header everywhere EXCEPT on the /summerquest/ page,
 * which ships its own complete design (nav is part of the approved artwork).
 */
export default function HeaderConditional() {
  const pathname = usePathname()
  if (pathname === '/summerquest' || pathname === '/summerquest/') return null
  return <Header />
}
