import { notFound } from 'next/navigation'
import Link from 'next/link'

const articles: Record<string, { title: string; date: string; content: string }> = {
  'why-systems-beat-services': {
    title: 'Why Systems Beat Services',
    date: 'JAN 15, 2025',
    content: `Most agencies sell you hours. Hours don't compound. Systems do. Here's why we take a different approach.

When you pay for services, you're paying for someone's time. That time is finite. It doesn't scale. It doesn't get better with repetition. It's a linear exchange: money for hours.

Systems are different. A system is designed to work without human intervention. Once built, it scales infinitely. It gets better with data. It compounds over time.

This is why ZYVONE focuses on systems, not services. We don't just build you a website. We build the infrastructure that makes your business run without you.`
  },
  'cost-of-manual-work': {
    title: 'The Cost of Manual Work',
    date: 'DEC 20, 2024',
    content: `Every hour spent on manual tasks is an hour not spent on growth. We break down the numbers.

The average business owner spends 20+ hours per week on manual tasks: data entry, follow-up emails, reporting, scheduling. That's 1,000 hours per year. At $100/hour, that's $100,000 of lost opportunity cost.

The solution isn't to work harder. It's to build systems that eliminate the manual layer entirely. AI automation, integrated workflows, smart scheduling — these aren't luxuries. They're necessities for any business that wants to scale.`
  },
  'ai-automation-where-to-start': {
    title: 'AI Automation: Where to Start',
    date: 'NOV 10, 2024',
    content: `Not every process should be automated. Here's how to identify the high-impact opportunities.

The mistake most businesses make is trying to automate everything at once. That's a recipe for failure. Instead, start with the processes that:

1. Are repetitive and rule-based
2. Take significant time
3. Have clear success metrics
4. Don't require complex judgment

Email follow-ups, data entry, reporting, scheduling — these are the low-hanging fruit. Automate these first, measure the impact, then move to more complex processes.`
  },
  'building-for-scale': {
    title: 'Building for Scale',
    date: 'OCT 05, 2024',
    content: `Architecture-first development. Why technical decisions made today determine your ability to scale tomorrow.

Most codebases are built for the present, not the future. They work fine when you have 100 users. They break at 10,000. They collapse at 100,000.

Building for scale means making architectural decisions before you need them. It means choosing technologies that can grow. It means designing systems that can handle 10x traffic without breaking.

This is why ZYVONE takes an architecture-first approach. We don't just build what you need today. We build what you'll need tomorrow.`
  }
}

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) notFound()

  return (
    <main className="bg-primary-bg min-h-screen">
      {/* Hero */}
      <section className="pt-52 pb-20 px-6">
        <div className="max-w-[760px] mx-auto">
          <p className="font-sans text-[11px] font-medium text-signal uppercase tracking-[0.14em] mb-6">{article.date}</p>
          <h1 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="prose prose-invert prose-lg">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-sans text-[18px] text-white/60 leading-[1.8] mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back to journal */}
          <div className="mt-16 pt-8 border-t border-line-dark">
            <Link href="/journal" className="font-sans text-signal hover:underline inline-flex items-center gap-2">
              ← Back to Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
