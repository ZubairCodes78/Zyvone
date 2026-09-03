'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { Project } from '@/lib/projects'
import { ServiceApproachStep, ServiceCapability, ServiceFAQ, ServiceProblem } from '@/lib/services'

export interface ServiceDetailProps {
  slug: string
  title: string
  eyebrow: string
  primaryKeyword?: string
  subtitle: string
  overview: string
  whatWeBuild?: string[]
  problems: ServiceProblem[]
  capabilities: ServiceCapability[]
  approach?: ServiceApproachStep[]
  technologies: string[]
  relatedProjects: Project[]
  faqs?: ServiceFAQ[]
  ctaText?: string
}

export function ServiceDetailView({
  slug,
  title,
  eyebrow,
  primaryKeyword,
  subtitle,
  overview,
  whatWeBuild = [],
  problems,
  capabilities,
  approach = [],
  technologies,
  relatedProjects,
  faqs = [],
  ctaText = 'Start a project →',
}: ServiceDetailProps) {
  const canonicalUrl = `https://zyvone.site/services/${slug}`
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index))
  }

  // Schema.org Structured Data
  const jsonLd: Record<string, unknown>[] = [
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
      name: `${title} - ZYVONE`,
      serviceType: title,
      provider: {
        '@type': 'Organization',
        name: 'ZYVONE',
        url: 'https://zyvone.site',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressCountry: 'PK',
        },
      },
      description: subtitle,
      url: canonicalUrl,
    },
  ]

  if (faqs.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  return (
    <div className="pt-[130px] md:pt-[170px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: Eyebrow + Breadcrumb & SECTION 2: H1 & SECTION 3: Intro & SECTION 4: Dual CTAs */}
      <section className="max-w-[var(--max-w-hero)] mb-16 md:mb-24 pb-12 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 mb-5">
          <Link
            href="/services"
            className="eyebrow-mono text-[var(--accent)] hover:underline flex items-center gap-1 text-[11px]"
          >
            ← ALL SERVICES
          </Link>
          <span className="text-[var(--text-disabled)]">/</span>
          <span className="eyebrow-mono text-[var(--text-tertiary)] text-[11px]">{eyebrow}</span>
        </div>

        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          {title}
        </h1>

        <p className="font-sans text-[var(--text-secondary)] text-[18px] md:text-[21px] leading-[1.6] max-w-[800px] mb-8">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="btn-primary">
            <span>{ctaText}</span>
          </Link>
          <Link href="/work" className="btn-ghost">
            <span>Explore 2026 Work →</span>
          </Link>
        </div>
      </section>

      {/* Overview Card */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28">
          <div className="card-surface p-8 md:p-12 border border-[var(--border)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <span className="eyebrow-mono block mb-2 text-[var(--accent)]">OUR COMMITMENT</span>
                <h2 className="font-sans font-semibold text-[22px] md:text-[28px] text-[var(--text-primary)] tracking-tight">
                  How ZYVONE Delivers in {title}
                </h2>
              </div>
              {primaryKeyword && (
                <span className="font-mono text-[11px] px-3 py-1.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--text-tertiary)] self-start">
                  Discipline: {primaryKeyword}
                </span>
              )}
            </div>
            <p className="font-sans text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-relaxed max-w-[840px]">
              {overview}
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* SECTION 5: What We Build (Tangible Deliverables) */}
      {whatWeBuild.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">DELIVERABLES</span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-8"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              What We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item, idx) => (
                <div
                  key={idx}
                  className="card-surface p-6 border border-[var(--border)] flex items-start gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[11px] text-[var(--text-tertiary)] block mb-1">
                      DELIVERABLE 0{idx + 1}
                    </span>
                    <p className="font-sans font-medium text-[15px] text-[var(--text-primary)] leading-snug">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* SECTION 6: Operational Friction Solved */}
      {problems.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
              OPERATIONAL FRICTION SOLVED
            </span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-10"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              The Friction We Eliminate
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((item, idx) => (
                <div
                  key={idx}
                  className="card-surface p-7 md:p-8 flex flex-col justify-between border border-[var(--border)]"
                >
                  <div>
                    <div className="font-mono text-[11px] text-red-400 font-semibold uppercase tracking-wider mb-2">
                      Friction #{idx + 1}
                    </div>
                    <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-4 leading-snug">
                      {item.problem}
                    </h3>
                    <div className="pt-4 border-t border-[var(--border-subtle)] font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                      <strong className="text-[var(--accent)] font-medium block mb-1">
                        ZYVONE Solution:
                      </strong>
                      {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* SECTION 7: Core System Capabilities */}
      {capabilities.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
              SYSTEM CAPABILITIES
            </span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-10"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              Core Architectural Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="card-surface p-6 flex flex-col justify-between border border-[var(--border)]">
                  <div>
                    <span className="font-mono text-[11px] text-[var(--accent)] block mb-3 font-semibold">
                      CAPABILITY 0{i + 1}
                    </span>
                    <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
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

      {/* SECTION 8: 7-Step Phased Development Approach */}
      {approach.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
              ENGINEERING METHODOLOGY
            </span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-4"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              Our 7-Step Development Approach
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] max-w-[700px] mb-10 leading-relaxed">
              We execute in disciplined, transparent engineering cycles with continuous feedback, verifiable milestones, and zero architectural surprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {approach.map((stepItem) => (
                <div
                  key={stepItem.step}
                  className="card-surface p-6 border border-[var(--border)] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[12px] text-[var(--accent)] font-semibold block mb-2">
                      STEP {stepItem.step}
                    </span>
                    <h3 className="font-sans font-semibold text-[16px] text-[var(--text-primary)] mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* SECTION 9: Verified Technical Stack */}
      {technologies.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28 p-8 md:p-10 card-surface border border-[var(--border)]">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
              TECHNICAL STACK &amp; STANDARDS
            </span>
            <h3 className="font-sans font-semibold text-[20px] md:text-[24px] text-[var(--text-primary)] mb-6">
              Verified Production Technologies
            </h3>
            <p className="font-sans text-[14px] text-[var(--text-secondary)] mb-6 max-w-[650px] leading-relaxed">
              We use battle-tested, type-safe primitives that prioritize deterministic execution, security compliance, and long-term maintainability.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[12px] px-4 py-2 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* SECTION 10: Relevant 2026 Work / Deployed Systems */}
      {relatedProjects.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="eyebrow-mono block mb-2 text-[var(--accent)]">
                  RELEVANT WORK
                </span>
                <h2
                  className="font-sans font-semibold text-[var(--text-primary)] tracking-tight"
                  style={{ fontSize: 'var(--fs-h2)' }}
                >
                  2026 Deployed Systems &amp; Case Studies
                </h2>
              </div>
              <Link href="/work" className="btn-ghost self-start sm:self-auto text-[13px]">
                <span>View all portfolio →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="card-surface p-6 group hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between border border-[var(--border)]"
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
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[10px] font-semibold text-[var(--accent)]">
                          {p.result}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">{p.year}</span>
                      <span className="text-[var(--text-disabled)]">·</span>
                      <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)]">{p.category}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-[20px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                      {p.name || p.shortTitle}
                    </h3>
                    <p className="font-sans text-[14px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                      {p.overview}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--accent)]">
                    <span>{p.resultLabel}</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore Case Study →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* SECTION 11: Buyer FAQs (Interactive Accordion with FAQPage Schema) */}
      {faqs.length > 0 && (
        <RevealWrapper>
          <section className="mb-20 md:mb-28">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-4"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              Buyer &amp; Architecture FAQs
            </h2>
            <p className="font-sans text-[15px] text-[var(--text-secondary)] max-w-[650px] mb-8 leading-relaxed">
              Transparent answers regarding development timelines, source code ownership, technology stacks, and ongoing technical support.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx
                return (
                  <div
                    key={fIdx}
                    className="card-surface border border-[var(--border)] rounded-lg overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <h3 className="font-sans font-semibold text-[16px] md:text-[17px] text-[var(--text-primary)]">
                        {faq.question}
                      </h3>
                      <span className="font-mono text-[18px] text-[var(--accent)] flex-shrink-0 transition-transform duration-200">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-[var(--border-subtle)]">
                        <p className="font-sans text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* SECTION 12: Final High-Converting Founder CTA */}
      <RevealWrapper>
        <div className="text-center pt-16 pb-12 border-t border-[var(--border)] card-surface p-8 md:p-14 border border-[var(--border)] rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent pointer-events-none" />
          <span className="eyebrow-mono block mb-3 text-[var(--accent)]">GET STARTED</span>
          <h2 className="font-sans font-semibold text-[26px] md:text-[36px] text-[var(--text-primary)] mb-4 tracking-tight max-w-[650px] mx-auto">
            Ready to engineer your {title.toLowerCase()} system?
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] mb-8 max-w-[540px] mx-auto leading-relaxed">
            Discuss technical specifications directly with ZYVONE founders in Lahore. We build permanent digital infrastructure with full code ownership.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Start a Project with ZYVONE →</span>
            </Link>
            <Link href="/work" className="btn-ghost">
              <span>Explore All 2026 Work</span>
            </Link>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
