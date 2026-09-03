'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { projects } from '@/lib/projects'

export function WorkShowcase() {
  const router = useRouter()

  // 4 cards in exact requested order: Toolmatic, Al Raheem Engineering, WearOmnia, Cantt Dental Care
  const selectedSlugs = ['toolmatic', 'al-raheem-engineering', 'wearomnia', 'cantt-dental-care']
  const showcaseProjects = selectedSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects

  const openModal = (slug: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    router.push(`/work/${slug}`, { scroll: false })
  }

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto border-t border-[var(--border)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <span className="eyebrow-label block mb-3">SELECTED WORK</span>
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.15]"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Built to run.
          </h2>
        </div>
        <Link
          href="/work"
          className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
        >
          <span>View all work</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* 4 Cards in 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {showcaseProjects.map((project) => (
          <div
            key={project.slug}
            className="card-surface p-5 sm:p-6 md:p-7 flex flex-col justify-between group cursor-pointer min-w-0"
            onClick={(e) => openModal(project.slug, e)}
          >
            <div>
              {/* Image with 1.02 hover zoom */}
              <div className="relative w-full aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] mb-5 sm:mb-6">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
                  unoptimized={project.heroImage.endsWith('.svg')}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[11px] font-semibold text-[var(--accent)]">
                    {project.result}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px]">
                <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">{project.year}</span>
                <span className="text-[var(--text-disabled)]">·</span>
                <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">{project.industry}</span>
              </div>

              <h3
                className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors"
                style={{ fontSize: 'var(--fs-h3)' }}
              >
                {project.name || project.shortTitle}
              </h3>

              <p className="font-sans text-[var(--text-secondary)] text-[14px] leading-relaxed mb-6 line-clamp-2">
                {project.overview}
              </p>
            </div>

            <div>
              {/* Technology Stack & Metadata */}
              <div className="pt-4 border-t border-[var(--border-subtle)] mb-5 space-y-2.5 min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-[var(--text-tertiary)] leading-relaxed">
                  <span className="text-[var(--text-secondary)] font-medium">Stack:</span>
                  <span>{project.stack.slice(0, 4).join(' · ')}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-tertiary)]">
                  <span>Industry: {project.category}</span>
                  <span className="text-[var(--accent)]">{project.resultLabel}</span>
                </div>
              </div>

              {/* CTA Row - Independent and comfortable */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <button
                  type="button"
                  onClick={(e) => openModal(project.slug, e)}
                  className="font-sans font-semibold text-[13px] text-[var(--accent)] hover:underline inline-flex items-center gap-1.5 cursor-pointer min-h-[36px] py-1"
                >
                  <span>Explore case study</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </button>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-sans text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 transition-colors min-h-[36px] py-1"
                  >
                    <span>View Live</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
