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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/summerquest-approved.jpg"
        alt="SummerQuest — Every Day is a New Quest. Helping families fall in love with Canada’s natural world."
        style={{
          width: '100%',
          maxWidth: '1024px',
          height: 'auto',
          display: 'block',
        }}
      />
    </div>
  )
}
