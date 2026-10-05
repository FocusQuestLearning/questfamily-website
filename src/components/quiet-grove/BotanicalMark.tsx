/**
 * Quietly Woven's established five-leaf botanical mark and sprig.
 *
 * Ported path-for-path from the app's code-native mark
 * (FocusQuestLearning/Mindful-Journal: artifacts/mobile/components/Botanical.tsx)
 * so the website uses the exact same drawing as the app. Do not redraw.
 */

type BotanicalProps = {
  color?: string
  size?: number
  className?: string
}

export function BotanicalMark({ color = '#f8f2e6', size = 72, className }: BotanicalProps) {
  return (
    <svg
      width={size}
      height={size * 1.34}
      viewBox="0 0 72 96"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 90C36 69 36 46 36 10" strokeWidth="2.4" />
        <path d="M36 9C25 20 24 31 36 42C48 31 47 20 36 9Z" strokeWidth="1.8" />
        <path d="M35 38C20 31 10 36 7 50C21 54 31 50 35 38Z" strokeWidth="1.8" />
        <path d="M37 38C52 31 62 36 65 50C51 54 41 50 37 38Z" strokeWidth="1.8" />
        <path d="M35 57C22 51 13 55 11 68C23 71 31 67 35 57Z" strokeWidth="1.8" />
        <path d="M37 57C50 51 59 55 61 68C49 71 41 67 37 57Z" strokeWidth="1.8" />
        <line x1="36" y1="15" x2="36" y2="37" strokeWidth="1.2" />
        <line x1="34" y1="39" x2="12" y2="48" strokeWidth="1.1" />
        <line x1="38" y1="39" x2="60" y2="48" strokeWidth="1.1" />
        <line x1="34" y1="58" x2="16" y2="66" strokeWidth="1.1" />
        <line x1="38" y1="58" x2="56" y2="66" strokeWidth="1.1" />
      </g>
    </svg>
  )
}

export function BotanicalSprig({ color = '#64775f', size = 30, className }: BotanicalProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28C16 20 16 12 16 4" strokeWidth="1.8" />
        <path d="M16 4C10 8 10 13 16 17C22 13 22 8 16 4Z" strokeWidth="1.5" />
        <path d="M15 15C8 12 4 15 4 21C10 23 14 20 15 15Z" strokeWidth="1.5" />
        <path d="M17 18C24 15 28 18 28 24C22 26 18 23 17 18Z" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
