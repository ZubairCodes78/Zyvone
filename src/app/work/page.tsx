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

  const tabs: {
    key: 'all' | 'websites' | 'applications' | 'ai-agents'
    label: string
    mobileLabel?: string
    count: number
  }[] = [
    { key: 'all', label: 'ALL WORK', count: counts.all },
    { key: 'websites', label: 'WEBSITES', count: counts.websites },
    { key: 'applications', label: 'APPLICATIONS', count: counts.applications },
    { key: 'ai-agents', label: 'AI AUTOMATION & AGENTS', mobileLabel: 'AI / AGENTS', count: counts['ai-agents'] },
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
      <nav aria-label="Portfolio categories" className="mb-8 md:mb-10 pb-0 md:pb-4 md:border-b md:border-[var(--border)]">
        {/* Contained single responsive container on mobile; clean horizontal row on desktop */}
        <div className="w-full p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] md:w-auto md:p-0 md:rounded-none md:bg-transparent md:border-0">
          <div className="grid grid-cols-2 gap-1.5 md:flex md:flex-wrap md:items-center md:gap-2">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  aria-pressed={isActive}
                  aria-label={`${tab.label}, ${tab.count} projects`}
                  className={`font-mono text-[11px] min-[360px]:text-[12px] sm:text-[13px] px-2.5 sm:px-4 py-2.5 sm:py-2 rounded-xl md:rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 min-h-[44px] md:min-h-[40px] w-full md:w-auto select-none ${
                    isActive
                      ? 'bg-[var(--accent)] text-[#0a0a0a] font-bold shadow-[0_0_16px_rgba(212,245,60,0.2)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border)]'
                  }`}
                >
                  <span className="truncate">
                    {tab.mobileLabel ? (
                      <>
                        <span className="inline md:hidden">{tab.mobileLabel}</span>
                        <span className="hidden md:inline">{tab.label}</span>
                      </>
                    ) : (
                      tab.label
                    )}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium flex-shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#0a0a0a]/20 text-[#0a0a0a]'
                        : 'bg-black/30 md:bg-[var(--bg-surface)] text-[var(--text-tertiary)] border border-white/5'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Section Sub-Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
          SHOWING {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
          ALL 2026 VERIFIED ARCHITECTURE
        </span>
      </div>

      {/* Projects Grid: 2-Column Minimal Visual Previews */}
      <RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="card-surface p-5 sm:p-6 md:p-7 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-[var(--border-strong)] min-w-0"
              onClick={(e) => openModal(project.slug, e)}
            >
              <div>
                {/* 1. Project Visual (Dominant Element) */}
                <div className="relative w-full aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] mb-5 min-w-0">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-[300ms] ease-out group-hover:scale-[1.03]"
                    unoptimized={project.heroImage.endsWith('.svg')}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[10px] font-semibold text-[var(--accent)]">
                      2026
                    </span>
                  </div>
                </div>

                {/* 2. Project Name */}
                <h2 className="font-sans font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[var(--text-primary)] tracking-tight leading-tight mb-1.5 group-hover:text-[var(--accent)] transition-colors uppercase">
                  <Link href={`/work/${project.slug}`} onClick={(e) => openModal(project.slug, e)}>
                    {project.name || project.shortTitle}
                  </Link>
                </h2>

                {/* 3. Category */}
                <p className="eyebrow-label text-[11px] text-[var(--accent)] mb-2.5">
                  {project.category}
                </p>

                {/* 4. Short Tagline */}
                <p className="font-sans text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-[1.6]">
                  {project.shortTagline}
                </p>
              </div>

              {/* 5. Explore CTA */}
              <div className="pt-5 mt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="font-sans font-medium text-[13px] text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>Explore project</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
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
