'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { projects } from '@/lib/projects'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export default function WorkPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'websites' | 'applications' | 'ai-agents'>('all')

  const openModal = (slug: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    router.push(`/work/${slug}`, { scroll: false })
  }

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.portfolioCategory === activeCategory)

  const counts = {
    all: projects.length,
    websites: projects.filter((p) => p.portfolioCategory === 'websites').length,
    applications: projects.filter((p) => p.portfolioCategory === 'applications').length,
    'ai-agents': projects.filter((p) => p.portfolioCategory === 'ai-agents').length,
  }

  const tabs: { key: 'all' | 'websites' | 'applications' | 'ai-agents'; label: string; count: number }[] = [
    { key: 'all', label: 'ALL WORK', count: counts.all },
    { key: 'websites', label: 'WEBSITES', count: counts.websites },
    { key: 'applications', label: 'APPLICATIONS', count: counts.applications },
    { key: 'ai-agents', label: 'AI AUTOMATION & AGENTS', count: counts['ai-agents'] },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zyvone.site',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Work',
        item: 'https://zyvone.site/work',
      },
    ],
  }

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="max-w-[var(--max-w-hero)] mb-10 md:mb-14">
        <span className="eyebrow-label block mb-4">SELECTED WORK</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Work
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          A curated selection of digital products, software, systems and digital experiences.
        </p>
      </div>

      {/* Category Navigation Tabs */}
      <div className="mb-10 pb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 max-w-full">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key)}
                className={`font-mono text-[12px] sm:text-[13px] px-3.5 sm:px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 min-h-[40px] flex-shrink-0 ${
                  isActive
                    ? 'bg-[var(--accent)] text-[#0a0a0a] font-bold shadow-[0_0_16px_rgba(212,245,60,0.2)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border)]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#0a0a0a]/20 text-[#0a0a0a]' : 'bg-[var(--bg-surface)] text-[var(--text-tertiary)]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Section Sub-Header */}
      <div className="flex items-center justify-between pb-3 mb-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
          SHOWING {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
          ALL 2026 VERIFIED ARCHITECTURE
        </span>
      </div>

      {/* Projects List */}
      <RevealWrapper>
        <div className="space-y-10 md:space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="card-surface p-5 sm:p-7 md:p-8 transition-all duration-200 group cursor-pointer min-w-0"
              onClick={(e) => openModal(project.slug, e)}
            >
              {/* Mobile Header (Visible only on < lg) */}
              <div className="block lg:hidden mb-4 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[12px]">
                  <span className="font-semibold text-[var(--text-tertiary)]">{project.id}</span>
                  <span className="text-[var(--text-disabled)]">·</span>
                  <span className="font-semibold text-[var(--accent)]">2026</span>
                  <span className="text-[var(--text-disabled)]">·</span>
                  <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">{project.category}</span>
                </div>

                <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] text-[var(--text-primary)] tracking-tight leading-tight mb-2.5 group-hover:text-[var(--accent)] transition-colors uppercase">
                  <Link href={`/work/${project.slug}`} onClick={(e) => openModal(project.slug, e)}>
                    {project.name || project.shortTitle}
                  </Link>
                </h2>

                <p className="font-sans text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-[1.6]">
                  {project.overview}
                </p>

                {/* Mobile Workflow Sequence (If available) */}
                {project.workflowSequence && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                    {project.workflowSequence.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)]">
                          {step}
                        </span>
                        {idx < project.workflowSequence!.length - 1 && (
                          <span className="text-[var(--text-tertiary)]" aria-hidden="true">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop 12-Col Grid & Mobile Media / Bottom section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-w-0">
                {/* Visual: Image (7/12 on lg) */}
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] min-w-0">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
                    unoptimized={project.heroImage.endsWith('.svg')}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[11px] font-semibold text-[var(--accent)]">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Copy & Structured Metadata (5/12 on lg) */}
                <div className="lg:col-span-5 flex flex-col justify-center min-w-0">
                  {/* Desktop Header (Hidden on < lg) */}
                  <div className="hidden lg:block min-w-0">
                    <div className="flex items-center gap-2 mb-2 font-mono text-[12px]">
                      <span className="font-semibold text-[var(--text-tertiary)]">{project.id}</span>
                      <span className="text-[var(--text-disabled)]">·</span>
                      <span className="font-semibold text-[var(--accent)]">2026</span>
                      <span className="text-[var(--text-disabled)]">·</span>
                      <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">{project.category}</span>
                    </div>

                    <h2 className="font-sans font-semibold text-[26px] md:text-[28px] text-[var(--text-primary)] tracking-tight leading-tight mb-3 group-hover:text-[var(--accent)] transition-colors uppercase">
                      <Link href={`/work/${project.slug}`} onClick={(e) => openModal(project.slug, e)}>
                        {project.name || project.shortTitle}
                      </Link>
                    </h2>

                    <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65] mb-4">
                      {project.overview}
                    </p>

                    {/* Desktop Workflow Sequence (If available) */}
                    {project.workflowSequence && (
                      <div className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                        {project.workflowSequence.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)]">
                              {step}
                            </span>
                            {idx < project.workflowSequence!.length - 1 && (
                              <span className="text-[var(--text-tertiary)]" aria-hidden="true">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies & Metadata */}
                  <div className="pt-4 lg:pt-4 border-t border-[var(--border-subtle)] mb-5 lg:mb-6 space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-[var(--text-tertiary)] leading-relaxed">
                      <span className="text-[var(--text-secondary)] font-medium">Stack:</span>
                      <span>{project.stack.join(' · ')}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-tertiary)]">
                      <span>Architecture:</span>
                      <span className="text-[var(--accent)]">{project.resultLabel}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link
                      href={`/work/${project.slug}`}
                      onClick={(e) => openModal(project.slug, e)}
                      className="btn-primary"
                    >
                      <span>{project.portfolioCategory === 'ai-agents' ? 'Explore system' : 'Case study'}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-ghost"
                      >
                        <span>Live site</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>

      {/* Bottom Link to Capabilities */}
      <div className="flex justify-end pt-12 mt-16 border-t border-[var(--border)]">
        <Link
          href="/#services"
          className="font-sans font-medium text-[15px] text-[var(--accent)] hover:underline inline-flex items-center gap-2"
        >
          <span>Explore our capabilities</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
