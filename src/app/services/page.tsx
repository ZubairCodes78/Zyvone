import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { services, ServicePillar } from '@/lib/services'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Services & Engineering Disciplines | Software, SaaS & AI | ZYVONE',
  description:
    'ZYVONE is a Digital Product Studio and Software & Technology Company based in Lahore, Pakistan. Explore our 15 core disciplines across Web Development, Mobile Apps, SaaS, AI Systems, Automation, and Product Design.',
  alternates: {
    canonical: 'https://zyvone.site/services',
  },
  openGraph: {
    title: 'Services & Engineering Disciplines | ZYVONE',
    description:
      'Digital product engineering, SaaS architectures, autonomous AI systems, and custom software infrastructure built in Lahore, Pakistan.',
    url: 'https://zyvone.site/services',
    siteName: 'ZYVONE',
  },
}

const pillars: {
  id: ServicePillar
  name: string
  label: string
  desc: string
}[] = [
  {
    id: 'BUILD',
    name: 'Build',
    label: 'PILLAR 01',
    desc: 'Digital products, scalable web applications, mobile apps, and rapid SaaS MVPs engineered from zero to production.',
  },
  {
    id: 'INTELLIGENCE',
    name: 'Intelligence',
    label: 'PILLAR 02',
    desc: 'Production AI systems, autonomous multi-step agents, cognitive workflow automation, and conversational pipelines.',
  },
  {
    id: 'ENGINEERING',
    name: 'Engineering',
    label: 'PILLAR 03',
    desc: 'Custom enterprise software, high-throughput APIs, internal operational dashboards, and mission-critical data pipelines.',
  },
  {
    id: 'PRODUCT',
    name: 'Product',
    label: 'PILLAR 04',
    desc: 'High-converting bespoke e-commerce platforms, checkout logistics automation, and tokenized UI/UX design systems.',
  },
]

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ZYVONE Engineering Services & Disciplines',
    description:
      'Core engineering disciplines provided by ZYVONE, a Digital Product Studio and Software & Technology Company based in Lahore, Pakistan.',
    itemListElement: services.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.title,
      url: `https://zyvone.site/services/${s.slug}`,
    })),
  }

  // Highlight 4 representative real 2026 projects
  const highlightedProjects = ['toolmatic', 'paletrix', 'dresiva', 'wearomnia']
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="max-w-[var(--max-w-hero)] mb-20 md:mb-28">
        <span className="eyebrow-mono block mb-4 text-[var(--accent)]">
          DISCIPLINES &amp; ARCHITECTURE
        </span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Software, Systems &amp; AI Engineering
        </h1>
        <p className="font-sans text-[18px] md:text-[22px] text-[var(--text-secondary)] leading-[1.6] max-w-[780px] mb-8">
          ZYVONE is a serious Digital Product Studio and Software &amp; Technology Company based in Lahore, Pakistan. We build permanent digital infrastructure, SaaS products, AI systems, automation, web applications, and mobile products for founders and forward-thinking businesses.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
          <Link href="/contact" className="btn-primary">
            <span>Start an engineering project →</span>
          </Link>
          <Link href="/work" className="btn-ghost">
            <span>View 2026 verified work</span>
          </Link>
        </div>
      </section>

      {/* 4 Pillars Summary Grid */}
      <section className="mb-24 md:mb-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[var(--border)]">
          <div>
            <span className="eyebrow-mono block mb-2 text-[var(--accent)]">THE 4 PILLARS</span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              Strategic Engineering Pillars
            </h2>
          </div>
          <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
            15 Specialized Disciplines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const count = services.filter((s) => s.pillar === pillar.id).length
            return (
              <div
                key={pillar.id}
                className="card-surface p-7 border border-[var(--border)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
                      {pillar.label}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                      {count} Disciplines
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-[20px] text-[var(--text-primary)] mb-3">
                    {pillar.name}
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-tertiary)]">
                  {services
                    .filter((s) => s.pillar === pillar.id)
                    .map((s) => s.title)
                    .slice(0, 3)
                    .join(' · ')}
                  {count > 3 ? '...' : ''}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Grouped Services by Pillar */}
      {pillars.map((pillar) => {
        const pillarServices = services.filter((s) => s.pillar === pillar.id)
        return (
          <section key={pillar.id} className="mb-24 md:mb-32">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-10 pb-4 border-b border-[var(--border)]">
              <div>
                <span className="eyebrow-mono block mb-1 text-[var(--accent)]">
                  {pillar.label}
                </span>
                <h2
                  className="font-sans font-semibold text-[var(--text-primary)] tracking-tight"
                  style={{ fontSize: 'var(--fs-h2)' }}
                >
                  {pillar.name} Disciplines
                </h2>
              </div>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] max-w-[460px]">
                {pillar.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillarServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-surface p-7 border border-[var(--border)] group hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[12px] text-[var(--accent)] font-semibold">
                        DISCIPLINE {service.disciplineNumber}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-tertiary)]">
                        {service.pillar}
                      </span>
                    </div>

                    <h3 className="font-sans font-semibold text-[20px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3">
                      {service.subtitle}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                        Key Deliverables
                      </span>
                      {service.whatWeBuild.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 font-sans text-[13px] text-[var(--text-secondary)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3.5 min-w-0">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border-subtle)] text-[var(--text-tertiary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1 font-mono text-[11px]">
                      <span className="text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                        Explore Discipline →
                      </span>
                      <span className="text-[var(--text-tertiary)] text-[10px] hidden sm:inline truncate max-w-[150px]">
                        {service.primaryKeyword}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      {/* Architectural Principles / Why ZYVONE */}
      <RevealWrapper>
        <section className="mb-24 md:mb-32 p-8 md:p-14 card-surface border border-[var(--border)] rounded-2xl">
          <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
            OUR ARCHITECTURAL CODE
          </span>
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-6 max-w-[700px]"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Engineering Standards We Never Compromise
          </h2>
          <p className="font-sans text-[16px] text-[var(--text-secondary)] max-w-[720px] mb-12 leading-relaxed">
            We operate as an elite engineering studio, not an offshore volume shop. Every line of code is written with long-term commercial intent, strict typing, and zero unnecessary dependencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <span className="font-mono text-[14px] text-[var(--accent)] font-semibold block mb-2">
                01 / PERFORMANCE
              </span>
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                Sub-100ms Edge Speed
              </h3>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Zero bloated page builders or heavy WordPress themes. Next.js server components and edge execution ensure instant response times globally.
              </p>
            </div>

            <div>
              <span className="font-mono text-[14px] text-[var(--accent)] font-semibold block mb-2">
                02 / OWNERSHIP
              </span>
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                100% Code &amp; IP Ownership
              </h3>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                You own all repository commits, architecture blueprints, database schemas, and intellectual property. No platform lock-in or recurring seat licenses.
              </p>
            </div>

            <div>
              <span className="font-mono text-[14px] text-[var(--accent)] font-semibold block mb-2">
                03 / RESILIENCE
              </span>
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                End-to-End Type Safety
              </h3>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Strict TypeScript, automated schema validation (Zod/Pydantic), and formal database migrations prevent breaking changes before they reach production.
              </p>
            </div>

            <div>
              <span className="font-mono text-[14px] text-[var(--accent)] font-semibold block mb-2">
                04 / DIRECT ACCESS
              </span>
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                Founder Collaboration
              </h3>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                No middleman project managers or outsourced junior contractors. You collaborate directly with principal engineers and technical founders in Lahore.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Real 2026 Work Showcase */}
      <RevealWrapper>
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow-mono block mb-2 text-[var(--accent)]">
                VERIFIED PROOF
              </span>
              <h2
                className="font-sans font-semibold text-[var(--text-primary)] tracking-tight"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                2026 Deployed Digital Products
              </h2>
            </div>
            <Link href="/work" className="btn-ghost self-start sm:self-auto text-[13px]">
              <span>View all 9 portfolio projects →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightedProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="card-surface p-7 border border-[var(--border)] group hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[var(--bg)] mb-6">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[11px] font-semibold text-[var(--accent)]">
                        {p.result}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
                      {p.year}
                    </span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)]">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-[22px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {p.name || p.shortTitle}
                  </h3>

                  <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-2">
                    {p.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--accent)]">
                  <span>{p.resultLabel}</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* Bottom CTA */}
      <RevealWrapper>
        <div className="text-center pt-16 pb-12 card-surface p-8 md:p-14 border border-[var(--border)] rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent pointer-events-none" />
          <span className="eyebrow-mono block mb-3 text-[var(--accent)]">COMMENCE WORK</span>
          <h2 className="font-sans font-semibold text-[26px] md:text-[38px] text-[var(--text-primary)] mb-4 tracking-tight max-w-[650px] mx-auto">
            Ready to engineer your next software system?
          </h2>
          <p className="font-sans text-[15px] md:text-[17px] text-[var(--text-secondary)] mb-8 max-w-[560px] mx-auto leading-relaxed">
            Schedule a technical consultation directly with ZYVONE principal engineers in Lahore. Transparent scoping, production code, and zero fluff.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link href="/contact" className="btn-primary">
              <span>Start an Engineering Consultation →</span>
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
