'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { projects } from '@/lib/projects'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

type YearFilter = 'ALL' | '2026'

export default function WorkPage() {
  const router = useRouter()
  const [filter, setFilter] = useState<YearFilter>('ALL')

  const openModal = (slug: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    router.push(`/work/${slug}`, { scroll: false })
  }

  const filteredProjects = useMemo(() => {
    return projects
  }, [])

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
      <div className="max-w-[var(--max-w-hero)] mb-12 md:mb-16">
        <span className="eyebrow-label block mb-4">PORTFOLIO</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Work
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Software infrastructure, high-performance web systems, and digital platforms engineered to compound.
        </p>
      </div>

      {/* Editorial Year Filter */}
      <div className="flex items-center gap-8 md:gap-10 pb-6 mb-14 border-b border-[var(--border)]">
        {(['ALL', '2026'] as YearFilter[]).map((tab) => {
          const isSelected = filter === tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`relative pb-2 font-mono text-[13px] md:text-[14px] tracking-wider transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'font-bold text-[var(--accent)]'
                  : 'font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>{tab}</span>
              {isSelected && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--accent)] transition-all duration-200" />
              )}
            </button>
          )
        })}
      </div>

      {/* Project Grid / Sections with Filter Animation */}
      <RevealWrapper>
        <div key={filter} className="space-y-20 md:space-y-28 animate-filter-fade">
          <section>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[var(--border)]">
              <span className="font-mono text-[20px] font-bold text-[var(--accent)]">2026</span>
              <span className="eyebrow-label text-[11px] text-[var(--text-secondary)]">
                Active Systems, Platforms &amp; Digital Infrastructure
              </span>
            </div>

            <div className="space-y-10 md:space-y-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="card-surface p-6 md:p-8 transition-all duration-200 group cursor-pointer"
                  onClick={(e) => openModal(project.slug, e)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual: Image 7/12 */}
                    <div className="lg:col-span-7 relative aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)]">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[11px] font-semibold text-[var(--accent)]">
                          {project.result}
                        </span>
                      </div>
                    </div>

                    {/* Copy & Structured Metadata: 5/12 */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      {/* Project Metadata: YEAR / PROJECT NAME / CATEGORY */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[12px] font-semibold text-[var(--accent)]">2026</span>
                        <span className="text-[var(--text-disabled)]">·</span>
                        <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">{project.category}</span>
                      </div>

                      <h2
                        className="font-sans font-semibold text-[24px] md:text-[28px] text-[var(--text-primary)] tracking-tight leading-tight mb-3 group-hover:text-[var(--accent)] transition-colors uppercase"
                      >
                        {project.name || project.shortTitle}
                      </h2>

                      <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65] mb-6">
                        {project.overview}
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[var(--border-subtle)] mb-6 font-mono text-[11px] text-[var(--text-tertiary)]">
                        <div>Stack: {project.stack.slice(0, 2).join(', ')}</div>
                        <div>Architecture: {project.resultLabel}</div>
                      </div>

                      <div className="btn-row mt-1">
                        <button
                          type="button"
                          onClick={(e) => openModal(project.slug, e)}
                          className="btn-primary"
                        >
                          <span>Case study</span>
                          <span aria-hidden="true">→</span>
                        </button>
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
          </section>
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

      <style jsx global>{`
        @keyframes filterFade {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-filter-fade {
          animation: filterFade 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
