import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { Button } from '@/components/ui/Button'
import { ProjectImage } from '@/components/ProjectImage'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.shortTitle} — Case Study`,
    description: project.overview,
    alternates: { canonical: `https://zyvone.site/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ZYVONE Case Study`,
      description: project.overview,
      url: `https://zyvone.site/work/${project.slug}`,
      siteName: 'ZYVONE',
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="bg-primary-bg min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <RevealWrapper>
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm font-semibold mb-8 text-white/50 hover:text-white transition-colors group"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:-translate-x-1">
                <path d="M10 3L4 8L10 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all work
            </Link>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-lime">
                {project.industry}
              </span>
              <span className="text-white/20">·</span>
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-white/40">
                {project.tag}
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.12] mb-6">
              {project.title}
            </h1>
          </RevealWrapper>

          <RevealWrapper delay={300}>
            <p className="font-sans text-base sm:text-lg text-white/50 leading-relaxed max-w-[760px] mb-8">
              {project.overview}
            </p>
          </RevealWrapper>

          {/* Project Highlights & Live Link */}
          <RevealWrapper delay={400}>
            <div className="flex flex-wrap items-center gap-5 pt-4 pb-2">
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-sans font-bold text-2xl text-lime leading-none tracking-tight">
                    {project.result}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-white/40">
                    {project.resultLabel}
                  </p>
                </div>
              </div>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lime text-black font-bold text-sm hover:bg-lime/90 transition-all shadow-md shadow-black/40 hover:translate-x-0.5"
                >
                  View live project
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </RevealWrapper>

          {/* Meta Details Strip */}
          <RevealWrapper delay={450}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/6">
              <div>
                <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1">Industry</p>
                <p className="font-sans text-sm font-medium text-white">{project.industry}</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1">Year</p>
                <p className="font-sans text-sm font-medium text-white">{project.year || '2024'}</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1">Services</p>
                <p className="font-sans text-sm font-medium text-white">{(project.services || ['UI/UX', 'Web Dev']).join(', ')}</p>
              </div>
              {project.stack && project.stack.length > 0 && (
                <div>
                  <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1">Stack</p>
                  <p className="font-sans text-sm font-medium text-white">{project.stack.join(', ')}</p>
                </div>
              )}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Project Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-[1000px] mx-auto">
          <RevealWrapper delay={500}>
            <ProjectImage src={project.heroImage} alt={project.title} className="w-full" />
          </RevealWrapper>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto">
          {/* The Problem */}
          <RevealWrapper delay={600}>
            <div className="mb-14">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] mb-4 text-lime">
                The Challenge
              </p>
              <p className="font-sans text-lg leading-relaxed text-white/60">
                {project.problem}
              </p>
            </div>
          </RevealWrapper>

          <div className="h-px bg-white/6 mb-14" />

          {/* Our Approach */}
          <RevealWrapper delay={700}>
            <div className="mb-14">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] mb-4 text-lime">
                Our Approach & Architecture
              </p>
              <p className="font-sans text-lg leading-relaxed text-white/60">
                {project.approach}
              </p>
            </div>
          </RevealWrapper>

          <div className="h-px bg-white/6 mb-14" />

          {/* What We Built */}
          <RevealWrapper delay={800}>
            <div className="mb-14">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] mb-6 text-lime">
                What We Engineered
              </p>
              <ul className="space-y-3.5">
                {project.execution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-lime mt-2.5 flex-shrink-0" />
                    <span className="font-sans text-base leading-relaxed text-white/60">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>

          <div className="h-px bg-white/6 mb-14" />

          {/* Outcome */}
          <RevealWrapper delay={900}>
            <div className="p-8 md:p-10 rounded-2xl bg-[#0B1020] border border-white/6 mb-14">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] mb-4 text-lime">
                The Outcome
              </p>
              <p className="font-sans text-lg leading-relaxed text-white/80">
                {project.outcome}
              </p>
            </div>
          </RevealWrapper>

          {/* Reflection */}
          <RevealWrapper delay={1000}>
            <div className="p-8 md:p-10 rounded-2xl bg-[#0B1020] border border-white/6 shadow-sm">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] mb-4 text-white/40">
                Zubair's Reflection
              </p>
              <p className="font-sans text-lg leading-relaxed italic text-white/80">
                "{project.reflection}"
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Next Project Navigation */}
      {nextProject && (
        <section className="px-6 pb-16">
          <div className="max-w-[760px] mx-auto">
            <Link 
              href={`/work/${nextProject.slug}`}
              className="block p-8 rounded-2xl bg-[#0B1020] border border-white/6 hover:border-lime/30 hover:shadow-lg hover:shadow-black/50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-wider mb-1">
                    Next Project
                  </p>
                  <h3 className="font-sans font-bold text-2xl text-white group-hover:text-lime transition-colors">
                    {nextProject.shortTitle}
                  </h3>
                  <p className="font-sans text-sm text-white/40 mt-1">
                    {nextProject.tag} · {nextProject.industry}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:translate-x-1 group-hover:bg-lime group-hover:text-black transition-all flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto text-center pt-12 border-t border-white/6">
          <RevealWrapper delay={1100}>
            <p className="font-sans text-lg mb-6 text-white/50">
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
