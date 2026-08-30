import React from 'react'
import Link from 'next/link'

export const serviceCards = [
  {
    num: '01',
    title: 'AI Automation',
    desc: 'LLM orchestration, programmatic workflows, autonomous agents, and internal RAG pipelines.',
    href: '/services/automation',
    tag: 'INTELLIGENCE & FLOWS',
    stack: 'OpenAI · Anthropic · n8n · Vector DB',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Bespoke full-stack web applications, SaaS infrastructure, and digital flagships engineered for scale.',
    href: '/services/web',
    tag: 'PLATFORMS & APPS',
    stack: 'Next.js · TypeScript · Postgres · Vercel',
  },
  {
    num: '03',
    title: 'AI Content Systems',
    desc: 'Programmatic asset generation, brand-aligned multi-channel pipelines, and automated publishing.',
    href: '/services/content',
    tag: 'PRODUCTION ENGINE',
    stack: 'Automated Pipelines · Edge AI',
  },
  {
    num: '04',
    title: 'Growth & Marketing Systems',
    desc: 'Deterministic acquisition funnels, local SEO supremacy engines, and automated lead triage.',
    href: '/services/marketing',
    tag: 'ACQUISITION INFRASTRUCTURE',
    stack: 'Conversion UX · Schema · Analytics',
  },
]

export function Capabilities() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto border-t border-[var(--border)] scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <span className="eyebrow-label block mb-3">CAPABILITIES</span>
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.15]"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            What we build.
          </h2>
        </div>
        <p className="font-sans text-[14px] text-[var(--text-secondary)] max-w-[320px]">
          Four core disciplines combined into cohesive software systems.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceCards.map((card) => (
          <Link
            key={card.num}
            href={card.href}
            className="card-surface p-7 md:p-8 flex flex-col justify-between group hover:border-[var(--border-strong)] transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] font-semibold text-[var(--accent)]">
                  {card.num}
                </span>
                <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)]">
                  {card.tag}
                </span>
              </div>

              <h3
                className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors"
                style={{ fontSize: 'var(--fs-h3)' }}
              >
                {card.title}
              </h3>

              <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65] mb-6">
                {card.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
                {card.stack}
              </span>
              <span className="font-sans text-[13px] font-medium text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                Explore discipline →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
