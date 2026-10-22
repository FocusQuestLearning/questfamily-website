import Link from 'next/link'
import { QUEST_FAMILY_SLOGAN } from '@/lib/brand'

export const metadata = {
  title: 'Maple Discoveries | The Quest Family',
  description: 'Canadian nature lessons, a field guide, and outdoor discoveries for curious families. Explore trees, birds, wildflowers, and the small things you notice along the way.',
}

export default function ProductPage() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <Link href="/#our-apps" className="text-forest underline underline-offset-4">Back to our apps</Link>
      <p className="mt-10 text-bark font-semibold">In development · By The Quest Family</p>
      <h1 className="font-display text-4xl md:text-5xl text-forest font-bold leading-tight mt-3">Maple Discoveries</h1>
      <p className="text-bark text-lg leading-relaxed mt-6">Canadian nature lessons, a field guide, and outdoor discoveries for curious families. Explore trees, birds, wildflowers, and the small things you notice along the way.</p>
      <p className="text-meadow font-display italic text-xl mt-8">{QUEST_FAMILY_SLOGAN}</p>
      <p className="text-bark leading-relaxed mt-8">We’re preparing this app for families. Availability and purchase details will be shared when it is ready.</p>
      <Link href="/support/" className="btn-primary inline-block mt-8">Contact The Quest Family</Link>
    </section>
  )
}
