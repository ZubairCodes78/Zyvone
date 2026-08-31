'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { Project } from '@/lib/projects'

export interface ServiceProblem {
  problem: string
  solution: string
}

export interface ServiceCapability {
  title: string
  desc: string
}

export interface ServiceDetailProps {
  slug: string
  title: string
  eyebrow: string
  subtitle: string
  overview: string
  problems: ServiceProblem[]
  capabilities: ServiceCapability[]
  technologies: string[]
  relatedProjects: Project[]
  ctaText?: string
}

export function ServiceDetailView({
  slug,
  title,
  eyebrow,
  subtitle,
  overview,
  problems,
  capabilities,
  technologies,
  relatedProjects,
  ctaText = 'Start a project →',
}: ServiceDetailProps) {
  const canonicalUrl = `https://zyvone.site/services/${slug}`

  const jsonLd = [
    {
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
          name: 'Services',
          item: 'https://zyvone.site/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: canonicalUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      serviceType: title,
      provider: {
        '@type': 'Organization',
        name: 'ZYVONE',
        url: 'https://zyvone.site',
      },
      description: subtitle,
      url: canonicalUrl,
    },
  ]

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="max-w-[var(--max-w-hero)] mb-16 md:mb-24 pb-12 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 mb-4">
          <Link
            href="/services"
            className="eyebrow-mono text-[var(--accent)] hover:underline flex items-center gap-1"
          >
            ← SERVICES
          </Link>
          <span className="text-[var(--text-disabled)]">/</span>
          <span className="eyebrow-mono text-[var(--text-tertiary)]">{eyebrow}</span>
        </div>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          {title}
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[18px] md:text-[21px] leading-[1.6] max-w-[780px] mb-8">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="btn-primary">
            <span>{ctaText}</span>
          </Link>
          <Link href="/work" className="btn-ghost">
            <span>Explore verified work</span>
          </Link>
        </div>
      </section>

      {/* Overview & Positioning */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28">
          <div className="card-surface p-8 md:p-12 border border-[var(--border)]">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">THE APPROACH</span>
            <h2 className="font-sans font-semibold text-[22px] md:text-[28px] text-[var(--text-primary)] tracking-tight mb-4">
              What ZYVONE Builds in {title}
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] text-[var(--text-secondary)] leading-relaxed max-w-[840px]">
              {overview}
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* Problems Solved */}
      {problems.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-6 text-[var(--accent)]">
              OPERATIONAL FRICTION SOLVED
            </span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-10"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              The Problems We Eliminate
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((item, idx) => (
                <div key={idx} className="card-surface p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[12px] text-red-400/90 font-semibold uppercase tracking-wider mb-2">
                      PROBLEM #{idx + 1}
                    </div>
                    <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-3">
                      {item.problem}
                    </h3>
                    <div className="pt-4 border-t border-[var(--border-subtle)] font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                      <strong className="text-[var(--accent)] font-medium">ZYVONE Solution: </strong>
                      {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* Core Engineering Capabilities */}
      {capabilities.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-6 text-[var(--accent)]">ENGINEERING MODULES</span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-10"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              Core System Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="card-surface p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[12px] text-[var(--accent)] block mb-3 font-semibold">
                      0{i + 1}
                    </span>
                    <h3 className="font-sans font-semibold text-[18px] text-[var(--text-primary)] mb-2">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* Verified Stack */}
      {technologies.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28 p-8 md:p-10 card-surface border border-[var(--border)]">
            <span className="eyebrow-mono block mb-4 text-[var(--accent)]">TECHNICAL STACK</span>
            <h3 className="font-sans font-semibold text-[20px] md:text-[22px] text-[var(--text-primary)] mb-6">
              Technologies &amp; Architecture Standards
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[12px] px-4 py-2 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* Related Case Studies / Projects */}
      {relatedProjects.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="eyebrow-mono block mb-2 text-[var(--accent)]">VERIFIED PROOF</span>
                <h2
                  className="font-sans font-semibold text-[var(--text-primary)] tracking-tight"
                  style={{ fontSize: 'var(--fs-h2)' }}
                >
                  Deployed Systems &amp; Case Studies
                </h2>
              </div>
              <Link href="/work" className="btn-ghost self-start sm:self-auto">
                <span>View all portfolio →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="card-surface p-6 group hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[var(--bg)] mb-5">
                      <Image
                        src={p.heroImage}
                        alt={p.title}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">{p.year}</span>
                      <span className="text-[var(--text-disabled)]">·</span>
                      <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)]">{p.category}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-[20px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                      {p.name}
                    </h3>
                    <p className="font-sans text-[14px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                      {p.overview}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--accent)]">
                    <span>{p.result}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* Bottom CTA */}
      <RevealWrapper>
        <div className="text-center pt-14 pb-8 border-t border-[var(--border)]">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] text-[var(--text-primary)] mb-4">
            Ready to engineer your {title.toLowerCase()} system?
          </h2>
          <p className="font-sans text-[16px] text-[var(--text-secondary)] mb-8 max-w-[500px] mx-auto leading-relaxed">
            Discuss architectural specifications directly with ZYVONE founders. We build permanent digital infrastructure.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Work with ZYVONE →</span>
          </Link>
        </div>
      </RevealWrapper>
    </div>
  )
}
