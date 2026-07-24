import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.shortTitle,
    description: project.overview,
    alternates: { canonical: `https://zyvone.site/work/${project.slug}` },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="bg-primary-bg min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <RevealWrapper>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium mb-6 text-text-secondary hover:text-lime transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L4 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to work
            </Link>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-glow border border-lime/20 mb-6">
              <span className="font-inter text-xs font-semibold uppercase tracking-wider text-lime">
                {project.industry}
              </span>
              <span className="text-lime/30">·</span>
              <span className="font-inter text-xs font-semibold uppercase tracking-wider text-lime">
                {project.tag}
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.15] mb-6">
              {project.title}
            </h1>
          </RevealWrapper>

          <RevealWrapper delay={300}>
            <p className="font-inter text-lg text-text-secondary leading-relaxed max-w-[700px] mb-8">
              {project.overview}
            </p>
          </RevealWrapper>

          <RevealWrapper delay={400}>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-lime-glow border border-lime/20">
                  <p className="font-sora font-bold text-3xl text-lime leading-none tracking-tight">
                    {project.result}
                  </p>
                </div>
                <div>
                  <p className="font-inter text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {project.resultLabel}
                  </p>
                </div>
              </div>

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime text-primary-bg font-semibold text-sm hover:bg-lime/90 transition-all">
                  View live site
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Project Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-[1000px] mx-auto">
          <RevealWrapper delay={500}>
            <div className="rounded-2xl bg-surface border border-line-dark p-8 md:p-12">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-glow border border-lime/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest text-lime">
                    {project.slug === 'cantt-dental-care' && 'Healthcare / Local SEO'}
                    {project.slug === 'pdfmaster' && 'PDF Tools / Web Development'}
                    {project.slug === 'toolmatic' && 'AI Tools / Web Development'}
                    {project.slug === 'al-raheem-engineering' && 'Manufacturing / Machinery'}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  {project.slug === 'cantt-dental-care' && (
                    <span className="font-sora font-bold text-6xl md:text-7xl text-lime leading-none tracking-tight">
                      #1
                    </span>
                  )}
                  {project.slug === 'pdfmaster' && (
                    <span className="font-sora font-bold text-6xl md:text-7xl text-lime leading-none tracking-tight">
                      50+
                    </span>
                  )}
                  {project.slug === 'toolmatic' && (
                    <>
                      <span className="font-sora font-bold text-4xl md:text-5xl text-lime leading-none tracking-tight">
                        Live
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </>
                  )}
                  {project.slug === 'al-raheem-engineering' && (
                    <>
                      <span className="font-sora font-bold text-4xl md:text-5xl text-lime leading-none tracking-tight">
                        Live
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </>
                  )}
                </div>

                <p className="font-inter text-lg font-medium mb-10 text-text-primary">
                  {project.slug === 'cantt-dental-care' && 'Local Google Ranking'}
                  {project.slug === 'pdfmaster' && 'Tools Built & Deployed'}
                  {project.slug === 'toolmatic' && 'Platform in Production'}
                  {project.slug === 'al-raheem-engineering' && 'Professional Website'}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {project.slug === 'cantt-dental-care' && ['90 Days', '20+ Reviews', '98 PageSpeed'].map((stat) => (
                    <div key={stat} className="px-4 py-2 rounded-lg bg-glass-surface border border-glass-border">
                      <span className="font-inter text-sm font-medium text-text-primary">{stat}</span>
                    </div>
                  ))}
                  {project.slug === 'pdfmaster' && ['0 Sign-ups', 'Client-side', 'Sub-3s Load'].map((stat) => (
                    <div key={stat} className="px-4 py-2 rounded-lg bg-glass-surface border border-glass-border">
                      <span className="font-inter text-sm font-medium text-text-primary">{stat}</span>
                    </div>
                  ))}
                  {project.slug === 'toolmatic' && ['Next.js 14', 'Vercel Edge', 'SEO-Optimized'].map((stat) => (
                    <div key={stat} className="px-4 py-2 rounded-lg bg-glass-surface border border-glass-border">
                      <span className="font-inter text-sm font-medium text-text-primary">{stat}</span>
                    </div>
                  ))}
                  {project.slug === 'al-raheem-engineering' && ['Corporate', 'Portfolio', 'SEO'].map((stat) => (
                    <div key={stat} className="px-4 py-2 rounded-lg bg-glass-surface border border-glass-border">
                      <span className="font-inter text-sm font-medium text-text-primary">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto">
          {/* The Problem */}
          <RevealWrapper delay={600}>
            <div className="mb-14">
              <p className="font-inter text-xs font-semibold uppercase tracking-wider mb-4 text-text-secondary">
                The Problem
              </p>
              <p className="font-inter text-lg leading-relaxed text-text-secondary">
                {project.problem}
              </p>
            </div>
          </RevealWrapper>

          <div className="h-px bg-line-dark mb-14" />

          {/* Our Approach */}
          <RevealWrapper delay={700}>
            <div className="mb-14">
              <p className="font-inter text-xs font-semibold uppercase tracking-wider mb-4 text-text-secondary">
                Our Approach
              </p>
              <p className="font-inter text-lg leading-relaxed text-text-secondary">
                {project.approach}
              </p>
            </div>
          </RevealWrapper>

          <div className="h-px bg-line-dark mb-14" />

          {/* What We Built */}
          <RevealWrapper delay={800}>
            <div className="mb-14">
              <p className="font-inter text-xs font-semibold uppercase tracking-wider mb-6 text-text-secondary">
                What We Built
              </p>
              <ul className="space-y-3">
                {project.execution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 flex-shrink-0" />
                    <span className="font-inter text-base leading-relaxed text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>

          <div className="h-px bg-line-dark mb-14" />

          {/* Outcome */}
          <RevealWrapper delay={900}>
            <div className="p-8 rounded-2xl bg-lime-glow border border-lime/20 mb-14">
              <p className="font-inter text-xs font-semibold uppercase tracking-wider mb-4 text-text-secondary">
                The Outcome
              </p>
              <p className="font-inter text-lg leading-relaxed text-text-primary">
                {project.outcome}
              </p>
            </div>
          </RevealWrapper>

          {/* Reflection */}
          <RevealWrapper delay={1000}>
            <div className="p-8 rounded-2xl bg-surface border border-line-dark">
              <p className="font-inter text-xs font-semibold uppercase tracking-wider mb-4 text-text-muted">
                Zubair's Reflection
              </p>
              <p className="font-sora text-lg leading-relaxed italic text-text-secondary">
                "{project.reflection}"
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto text-center pt-12 border-t border-line-dark">
          <RevealWrapper delay={1100}>
            <p className="font-inter text-lg mb-6 text-text-secondary">
              Want a system like this for your business?
            </p>
            <Link href="/contact">
              <Button variant="primary" size="large">
                Start a project
              </Button>
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </main>
  )
}
