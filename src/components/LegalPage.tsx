import type { ReactNode } from 'react'

export type LegalSection = { id: string; title: string; body: ReactNode }

export default function LegalPage({ title, summary, sections }: {
  title: string
  summary: ReactNode
  sections: LegalSection[]
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14 [&_a]:underline [&_a]:underline-offset-4 [&_a]:break-words" aria-label={title}>
      <header className="text-center mb-10">
        <h1 className="font-display text-4xl text-forest font-bold mb-2">{title}</h1>
        <p className="text-bark text-sm italic">The Quest Family · Last updated: October 23, 2026</p>
      </header>
      <div className="nature-card bg-amber/5 border-amber/30 mb-8">
        <p className="text-bark leading-relaxed">{summary}</p>
      </div>
      <nav aria-label={title + ' sections'} className="mb-10 text-forest">
        <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-3 list-decimal list-inside">
          {sections.map(section => <li key={section.id}><a href={'#' + section.id}>{section.title}</a></li>)}
        </ol>
      </nav>
      <div className="space-y-10 text-bark leading-relaxed">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} aria-labelledby={section.id + '-heading'} className="scroll-mt-24">
            <h2 id={section.id + '-heading'} className="font-display text-xl text-forest font-bold mb-4 border-b border-amber/20 pb-2">{index + 1}. {section.title}</h2>
            <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3">{section.body}</div>
          </section>
        ))}
      </div>
    </article>
  )
}
