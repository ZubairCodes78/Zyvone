'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

export default function Journal() {
  const articles = [
    {
      date: 'JAN 15, 2025',
      title: 'Why Systems Beat Services',
      excerpt: 'Most agencies sell you hours. Hours don\'t compound. Systems do. Here\'s why we take a different approach.',
      slug: 'why-systems-beat-services'
    },
    {
      date: 'DEC 20, 2024',
      title: 'The Cost of Manual Work',
      excerpt: 'Every hour spent on manual tasks is an hour not spent on growth. We break down the numbers.',
      slug: 'cost-of-manual-work'
    },
    {
      date: 'NOV 10, 2024',
      title: 'AI Automation: Where to Start',
      excerpt: 'Not every process should be automated. Here\'s how to identify the high-impact opportunities.',
      slug: 'ai-automation-where-to-start'
    },
    {
      date: 'OCT 05, 2024',
      title: 'Building for Scale',
      excerpt: 'Architecture-first development. Why technical decisions made today determine your ability to scale tomorrow.',
      slug: 'building-for-scale'
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg pt-52 pb-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">JOURNAL</p>
            <h1 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              Thinking in public.
            </h1>
            <p className="font-sans text-[19px] text-white/40 mt-4">
              What we're learning about building systems, not deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-primary-bg py-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="space-y-8">
            {articles.map((article, i) => (
              <div key={i} ref={useReveal(i * 100)} className="border-b border-line-dark pb-8 last:border-b-0">
                <p className="font-sans text-[13px] text-white/30 mb-2">{article.date}</p>
                <h3 className="font-sans font-bold text-[26px] text-white mb-2">{article.title}</h3>
                <p className="font-sans text-[17px] text-white/50 leading-[1.7] mb-4 max-w-2xl">
                  {article.excerpt}
                </p>
                <Link href={`/journal/${article.slug}`} className="font-sans text-lime hover:underline">
                  Read article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-bg py-24 px-6 text-center">
        <div className="max-w-[1360px] mx-auto">
          <h2 ref={useReveal()} className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] max-w-[640px] mx-auto"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Want to build systems?
          </h2>
          <p ref={useReveal(100)} className="font-sans text-[18px] text-text-secondary mt-4">
            Let's figure out what's possible for your business.
          </p>
          <div ref={useReveal(200)} className="mt-10">
            <Link href="/contact"
              className="inline-block bg-lime text-primary-bg font-semibold px-9 py-4 rounded-full hover:bg-lime-dim scale-[1.02] transition-all duration-200">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
