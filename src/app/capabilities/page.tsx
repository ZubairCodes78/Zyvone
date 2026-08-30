import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'Six disciplines. Combined into a single system per project. ZYVONE digital capabilities and systems engineering.',
  alternates: {
    canonical: 'https://zyvone.site/capabilities',
  },
}

const detailedDisciplines = [
  {
    num: '01',
    title: 'Digital Platforms',
    desc: 'SaaS, internal tools, public products. Built to run without you.',
    bullets: [
      'Multi-tenant cloud architecture & database modeling',
      'Autonomous client portals with role-based access control',
      'Edge compute pipelines with sub-second global response times',
    ],
    stack: 'Next.js · TypeScript · Postgres · Supabase · Vercel',
    status: 'In market',
  },
  {
    num: '02',
    title: 'AI & Automation',
    desc: 'Practical AI. Agents, automations, internal RAG, workflows.',
    bullets: [
      'Deterministic extraction and categorization pipelines',
      'Proprietary retrieval-augmented generation (RAG) knowledge systems',
      'Autonomous multi-agent webhook execution & integration flows',
    ],
    stack: 'OpenAI · Anthropic · n8n · Make · Vector DB',
    status: 'Active',
  },
  {
    num: '03',
    title: 'Web Applications',
    desc: 'Serious web apps. Architecturally sound, designed to scale.',
    bullets: [
      'Contract-first full-stack TypeScript engineering',
      'Optimistic UI mutations and offline-first state synchronization',
      'Strict WCAG 2.2 AA accessibility and Core Web Vitals optimization',
    ],
    stack: 'Next.js · TypeScript · Postgres · Edge runtime',
    status: 'In market',
  },
  {
    num: '04',
    title: 'E-commerce',
    desc: 'Premium commerce. From product detail to checkout to operations.',
    bullets: [
      'Headless commerce architecture with friction-free checkout',
      'Automated multi-variant bundling & localized Cash on Delivery (COD)',
      'Real-time WhatsApp support routing and inventory management',
    ],
    stack: 'Next.js · Shopify Hydrogen · Stripe · Medusa',
    status: 'In market',
  },
  {
    num: '05',
    title: 'Business Systems',
    desc: 'Internal systems, ops tools, dashboards.',
    bullets: [
      'Custom administrative control centers and operational consoles',
      'Automated invoicing, reconciliation, and audit reporting',
      'Legacy software migration and unified API orchestration',
    ],
    stack: 'React · Node · REST/GraphQL · Postgres',
    status: 'Active',
  },
  {
    num: '06',
    title: 'Infrastructure',
    desc: 'Pipelines, deployments, observability.',
    bullets: [
      'CI/CD zero-downtime deployment pipelines with rollback guarantees',
      'Containerized microservices and edge worker caching networks',
      'Real-time telemetry, structured log aggregation, and error monitoring',
    ],
    stack: 'Vercel · Docker · GitHub Actions · Datadog',
    status: 'Active',
  },
]

export default function CapabilitiesPage() {
  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Header */}
      <div className="max-w-[var(--max-w-hero)] mb-16 md:mb-24">
        <span className="eyebrow-mono block mb-4">CAPABILITIES</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-[-0.02em] leading-[1.05] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          What we build.
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Six disciplines. Combined into a single system per project.
        </p>
      </div>

      {/* Expanded Disciplines List */}
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)] mb-20 md:mb-28">
        {detailedDisciplines.map((item) => (
          <div
            key={item.num}
            className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-start group"
          >
            {/* Num + Title + Status */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[16px] font-semibold text-[var(--accent)]">
                  {item.num}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  {item.status}
                </span>
              </div>
              <h2
                className="font-sans font-semibold text-[var(--text-primary)] tracking-[-0.015em]"
                style={{ fontSize: 'var(--fs-h3)' }}
              >
                {item.title}
              </h2>
            </div>

            {/* Description & 3 Sub-bullets */}
            <div className="md:col-span-5 space-y-4">
              <p className="font-sans text-[var(--text-primary)] text-[16px] leading-[1.6]">
                {item.desc}
              </p>
              <ul className="space-y-2 pt-2">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="md:col-span-3 md:text-right">
              <span className="eyebrow-mono block text-[10px] text-[var(--text-tertiary)] mb-1">Architecture Stack</span>
              <span className="font-mono text-[13px] text-[var(--text-secondary)] leading-relaxed block">
                {item.stack}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 md:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)]">
        <div>
          <h3 className="font-sans font-semibold text-[20px] md:text-[24px] text-[var(--text-primary)] mb-2">
            Not sure where you fit in?
          </h3>
          <p className="font-sans text-[15px] text-[var(--text-secondary)]">
            We review requirements directly and determine the right system architecture for your scope.
          </p>
        </div>
        <Link href="/contact" className="btn-ghost whitespace-nowrap flex-shrink-0">
          <span>Start a conversation</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
