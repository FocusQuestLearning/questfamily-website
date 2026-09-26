type GooglePlayButtonProps = {
  appName: string
  href: string
  className?: string
}

export function GooglePlayButton({ appName, href, className = '' }: GooglePlayButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get ${appName} on Google Play (opens in a new tab)`}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#17261d] px-6 py-3 text-left text-[#fffaf0] shadow-md transition-colors hover:bg-[#243b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8a96b] ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current">
        <path d="M5.3 3.4a1.4 1.4 0 0 0-.3.9v15.4c0 .3.1.6.3.9l9.1-8.6-9.1-8.6Zm10.2 9.7-2.3 2.2-6 5.7c.3.1.7 0 1-.2l10.4-5.9-3.1-1.8Zm3.8-2.1-3.7-2.1L8.2 3.2a1.4 1.4 0 0 0-1-.2l8.3 7.9 3.8 2.2c.8-.5.8-1.6 0-2.1Z" />
      </svg>
      <span>
        <span className="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#e6dcc2]">
          Get it on
        </span>
        <span className="block text-base font-semibold leading-tight">Google Play</span>
      </span>
    </a>
  )
}

type AppleComingSoonProps = {
  appName: string
  className?: string
}

export function AppleAppStoreComingSoon({ appName, className = '' }: AppleComingSoonProps) {
  return (
    <div
      role="status"
      aria-label={`${appName} is coming soon to the Apple App Store`}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#e6dcc2]/25 bg-[#17261d]/80 px-6 py-3 text-left text-[#fffaf0] ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current">
        <path d="M16.8 12.7c0-2.4 2-3.6 2.1-3.7a4.5 4.5 0 0 0-3.5-1.9c-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.3-.9A4.8 4.8 0 0 0 4.3 9.6c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.3 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9ZM14.4 5.5A4.4 4.4 0 0 0 15.5 2a4.5 4.5 0 0 0-3 1.7 4.2 4.2 0 0 0-1.1 3.2c1.1.1 2.2-.5 3-1.4Z" />
      </svg>
      <span>
        <span className="block text-[0.65rem] font-medium uppercase tracking-[0.14em] opacity-75">
          Coming soon to the
        </span>
        <span className="block text-base font-semibold leading-tight">Apple App Store</span>
      </span>
    </div>
  )
}
