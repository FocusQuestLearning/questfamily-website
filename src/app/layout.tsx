import type { Metadata } from 'next'
import './globals.css'
import HeaderConditional from '@/components/HeaderConditional'
import FooterConditional from '@/components/FooterConditional'

export const metadata: Metadata = {
  title: 'The Quest Family — Helping Families Rediscover Wonder',
  description: 'The Quest Family creates thoughtful apps for exploration, reflection and everyday life, including Sun & Fern and Quietly Woven.',
  keywords: 'family adventure, nature app, mindful journal, Sun & Fern, Quietly Woven, Canadian families, outdoor exploration, reflection',
  icons: {
    icon: [{ url: '/images/the-quest-family-icon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/images/the-quest-family-icon-180.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'The Quest Family',
    description: "Helping families rediscover the wonder that's been there all along.",
    siteName: 'The Quest Family',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream">
        <HeaderConditional />
        <main className="flex-1">
          {children}
        </main>
        <FooterConditional />
      </body>
    </html>
  )
}
