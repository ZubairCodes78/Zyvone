import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import { FadeIn } from '@/components/premium'
import { Button } from '@/components/premium'
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
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#6B7280' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L4 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to work
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4F53C]/10 text-[#0D0B61] text-sm font-semibold mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {project.industry} · {project.tag}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-bold tracking-tight mb-6" style={{
              fontFamily: 'var(--font-sora), sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: '#0D0B61',
              lineHeight: 1.05,
            }}>
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl leading-relaxed max-w-[700px] mb-8" style={{
              fontFamily: 'var(--font-inter), sans-serif',
              color: '#6B7280',
            }}>
              {project.overview}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <p className="font-bold text-4xl" style={{ fontFamily: 'var(--font-sora), sans-serif', color: '#D4F53C' }}>
                  {project.result}
                </p>
                <p className="text-sm mt-1" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#9CA3AF' }}>
                  {project.resultLabel}
                </p>
              </div>

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D0B61]/10 border border-[#0D0B61]/20 text-sm font-semibold text-[#0D0B61] hover:bg-[#0D0B61]/15 transition-all" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  View live site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H5M11 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Visual */}
      <section className="px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn delay={0.5}>
            <div className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-12 md:p-16">
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xs font-semibold uppercase tracking-wider mb-8" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#4F8B8D' }}>
                  {project.slug === 'cantt-dental-care' && 'Healthcare / Local SEO'}
                  {project.slug === 'pdfmaster' && 'PDF Tools / Web Development'}
                  {project.slug === 'toolmatic' && 'AI Tools / Web Development'}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  {project.slug === 'cantt-dental-care' && (
                    <span className="font-bold text-7xl md:text-8xl" style={{ fontFamily: 'var(--font-sora), sans-serif', color: '#D4F53C', lineHeight: 1 }}>
                      #1
                    </span>
                  )}
                  {project.slug === 'pdfmaster' && (
                    <span className="font-bold text-7xl md:text-8xl" style={{ fontFamily: 'var(--font-sora), sans-serif', color: '#D4F53C', lineHeight: 1 }}>
                      50+
                    </span>
                  )}
                  {project.slug === 'toolmatic' && (
                    <>
                      <span className="font-bold text-5xl md:text-6xl" style={{ fontFamily: 'var(--font-sora), sans-serif', color: '#D4F53C', lineHeight: 1 }}>
                        Live
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </>
                  )}
                </div>

                <p className="text-base mb-12" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#9CA3AF' }}>
                  {project.slug === 'cantt-dental-care' && 'Local Google Ranking'}
                  {project.slug === 'pdfmaster' && 'Tools Built & Deployed'}
                  {project.slug === 'toolmatic' && 'Platform in Production'}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {project.slug === 'cantt-dental-care' && ['90 Days', '20+ Reviews', '98 PageSpeed'].map((stat) => (
                    <span key={stat} className="px-4 py-2 rounded-lg bg-white border border-[#4F8B8D] text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#9CA3AF' }}>
                      {stat}
                    </span>
                  ))}
                  {project.slug === 'pdfmaster' && ['0 Sign-ups', 'Client-side', 'Sub-3s Load'].map((stat) => (
                    <span key={stat} className="px-4 py-2 rounded-lg bg-white border border-[#4F8B8D] text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#9CA3AF' }}>
                      {stat}
                    </span>
                  ))}
                  {project.slug === 'toolmatic' && ['Next.js 14', 'Vercel Edge', 'SEO-Optimized'].map((stat) => (
                    <span key={stat} className="px-4 py-2 rounded-lg bg-white border border-[#4F8B8D] text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#9CA3AF' }}>
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto">
          {/* The Problem */}
          <FadeIn delay={0.6}>
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#4F8B8D' }}>
                The Problem
              </p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#6B7280' }}>
                {project.problem}
              </p>
            </div>
          </FadeIn>

          <div className="h-px bg-gray-200 mb-14" />

          {/* Our Approach */}
          <FadeIn delay={0.7}>
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#4F8B8D' }}>
                Our Approach
              </p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#6B7280' }}>
                {project.approach}
              </p>
            </div>
          </FadeIn>

          <div className="h-px bg-gray-200 mb-14" />

          {/* What We Built */}
          <FadeIn delay={0.8}>
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#4F8B8D' }}>
                What We Built
              </p>
              <ul className="space-y-3">
                {project.execution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F8B8D] mt-2 flex-shrink-0" />
                    <span className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#6B7280' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="h-px bg-gray-200 mb-14" />

          {/* Outcome */}
          <FadeIn delay={0.9}>
            <div className="p-8 rounded-2xl bg-[#0D0B61]/5 border border-[#0D0B61]/10 mb-14">
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#4F8B8D' }}>
                The Outcome
              </p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#0D0B61' }}>
                {project.outcome}
              </p>
            </div>
          </FadeIn>

          {/* Reflection */}
          <FadeIn delay={1.0}>
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#9CA3AF' }}>
                Zubair's Reflection
              </p>
              <p className="text-lg leading-relaxed italic" style={{ fontFamily: 'var(--font-sora), sans-serif', color: '#6B7280' }}>
                "{project.reflection}"
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto text-center pt-12 border-t border-gray-200">
          <FadeIn delay={1.1}>
            <p className="text-lg mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#6B7280' }}>
              Want a system like this for your business?
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Start a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
