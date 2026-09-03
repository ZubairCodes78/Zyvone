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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[10px] font-semibold text-[var(--accent)]">
                    2026
                  </span>
                </div>
              </div>

              {/* 2. Project Name */}
              <h3 className="font-sans font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[var(--text-primary)] tracking-tight leading-tight mb-1.5 group-hover:text-[var(--accent)] transition-colors uppercase">
                {project.name || project.shortTitle}
              </h3>

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
    </section>
  )
}
