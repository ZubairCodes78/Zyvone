'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { projects } from '@/lib/projects'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export default function WorkPage() {
  const router = useRouter()

  const openModal = (slug: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    router.push(`/work/${slug}`, { scroll: false })
  }

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

      {/* Projects Section Header */}
      <div className="flex items-center justify-between pb-4 mb-10 border-b border-[var(--border)]">
        <span className="eyebrow-label text-[12px] font-bold tracking-wider text-[var(--accent)]">
          PROJECTS
        </span>
        <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
          CURRENT / 2026 WORK
        </span>
      </div>

      {/* Projects List */}
      <RevealWrapper>
        <div className="space-y-10 md:space-y-12">
          {projects.map((project) => (
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
                  {/* Project Metadata: ID / YEAR / CATEGORY */}
                  <div className="flex items-center gap-2 mb-2 font-mono text-[12px]">
                    <span className="font-semibold text-[var(--text-tertiary)]">{project.id}</span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="font-semibold text-[var(--accent)]">2026</span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">{project.category}</span>
                  </div>

                  <h2 className="font-sans font-semibold text-[24px] md:text-[28px] text-[var(--text-primary)] tracking-tight leading-tight mb-3 group-hover:text-[var(--accent)] transition-colors uppercase">
                    <Link href={`/work/${project.slug}`} onClick={(e) => openModal(project.slug, e)}>
                      {project.name || project.shortTitle}
                    </Link>
                  </h2>

                  <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65] mb-6">
                    {project.overview}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[var(--border-subtle)] mb-6 font-mono text-[11px] text-[var(--text-tertiary)]">
                    <div>Stack: {project.stack.slice(0, 2).join(', ')}</div>
                    <div>Architecture: {project.resultLabel}</div>
                  </div>

                  <div className="btn-row mt-1">
                    <Link
                      href={`/work/${project.slug}`}
                      onClick={(e) => openModal(project.slug, e)}
                      className="btn-primary"
                    >
                      <span>Case study</span>
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
