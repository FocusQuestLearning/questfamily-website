import type { Metadata } from 'next'
import './globals.css'
import HeaderConditional from '@/components/HeaderConditional'
import FooterConditional from '@/components/FooterConditional'

export const metadata: Metadata = {
  title: 'The Quest Family — Helping Families Rediscover Wonder',
  description: "The Quest Family creates nature-first family adventure apps. Helping families rediscover the wonder that's been there all along.",
  keywords: 'family adventure, nature app, SummerQuest, Canadian families, outdoor exploration, kids nature',
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
