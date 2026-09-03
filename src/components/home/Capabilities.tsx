import React from 'react'
import Link from 'next/link'

export const serviceCards = [
  {
    num: '01',
    title: 'Digital Product & SaaS Engineering',
    pillar: 'BUILD',
    desc: 'Bespoke full-stack web applications, Flutter mobile apps, multi-tenant SaaS platforms, and rapid production MVPs built in Next.js.',
    href: '/services/web-development',
    tag: 'PILLAR 01 · BUILD',
    stack: 'Next.js · Flutter · TypeScript · PostgreSQL · Vercel',
  },
  {
    num: '02',
    title: 'AI Systems & Agent Automation',
    pillar: 'INTELLIGENCE',
    desc: 'Production AI models, autonomous tool-calling agents, cognitive workflow automation, and enterprise WhatsApp triage pipelines.',
    href: '/services/ai-development',
    tag: 'PILLAR 02 · INTELLIGENCE',
    stack: 'OpenAI · Anthropic · LangGraph · Python · Vector RAG',
  },
  {
    num: '03',
    title: 'Custom Software & Internal Tools',
    pillar: 'ENGINEERING',
    desc: 'Bespoke enterprise software, high-throughput REST/GraphQL APIs, operational cockpits, and mission-critical data pipelines.',
    href: '/services/custom-software-development',
    tag: 'PILLAR 03 · ENGINEERING',
    stack: 'Node.js · Python · FastAPI · Docker · PostgreSQL · Redis',
  },
  {
    num: '04',
    title: 'Commerce & Product Design',
    pillar: 'PRODUCT',
    desc: 'High-converting custom e-commerce storefronts, automated COD logistics pipelines, and tokenized Figma-to-code UI/UX design systems.',
    href: '/services/ecommerce-development',
    tag: 'PILLAR 04 · PRODUCT',
    stack: 'Headless Shopify · Tailwind CSS · Figma · Logistics APIs',
  },
]

export function Capabilities() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto border-t border-[var(--border)] scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <span className="eyebrow-label block mb-3">CAPABILITIES &amp; SERVICES</span>
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.15]"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            What we build.
          </h2>
        </div>
        <Link
          href="/services"
          className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
        >
          <span>View all 15 services</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceCards.map((card) => (
          <Link
            key={card.num}
            href={card.href}
            className="card-surface p-6 sm:p-7 md:p-8 flex flex-col justify-between group hover:border-[var(--border-strong)] transition-all duration-200 min-w-0"
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

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3 min-w-0">
              <span className="font-mono text-[12px] text-[var(--text-tertiary)] leading-relaxed">
                {card.stack}
              </span>
              <div className="pt-0.5">
                <span className="font-sans text-[13px] font-medium text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  Explore discipline →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
