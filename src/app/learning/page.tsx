import Link from 'next/link'
import { QUEST_FAMILY_SLOGAN } from '@/lib/brand'

export const metadata = {
  title: 'The Quest Family Learning | The Quest Family',
  description: 'K–8 lessons, flexible daily and weekly schedules, and hands-on quests with North and Fennick. Children can read, listen, move, create, and return to completed work.',
}

export default function ProductPage() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <Link href="/#our-apps" className="text-forest underline underline-offset-4">Back to our apps</Link>
      <p className="mt-10 text-bark font-semibold">In development · By The Quest Family</p>
      <h1 className="font-display text-4xl md:text-5xl text-forest font-bold leading-tight mt-3">The Quest Family Learning</h1>
      <p className="text-bark text-lg leading-relaxed mt-6">K–8 lessons, flexible daily and weekly schedules, and hands-on quests with North and Fennick. Children can read, listen, move, create, and return to completed work.</p>
      <p className="text-meadow font-display italic text-xl mt-8">{QUEST_FAMILY_SLOGAN}</p>
      <p className="text-bark leading-relaxed mt-8">We’re preparing this app for families. Availability and purchase details will be shared when it is ready.</p>
      <Link href="/support/" className="btn-primary inline-block mt-8">Contact The Quest Family</Link>
    </section>
  )
}
