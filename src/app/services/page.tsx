import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceCards } from '@/components/home/Capabilities'

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description: 'Explore ZYVONE disciplines: AI Automation, Web Development, AI Content Systems, and Growth & Marketing Infrastructure.',
  alternates: {
    canonical: 'https://zyvone.site/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <div className="max-w-[var(--max-w-hero)] mb-16 md:mb-20">
        <span className="eyebrow-label block mb-4">SERVICES & CAPABILITIES</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          What we build.
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Explore our specialized engineering disciplines, from custom software and web applications to autonomous AI pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {serviceCards.map((card) => (
          <Link
            key={card.num}
            href={card.href}
            className="card-surface p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--border-strong)] transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[14px] font-semibold text-[var(--accent)]">
                  {card.num}
                </span>
                <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)]">
                  {card.tag}
                </span>
              </div>

              <h2
                className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors"
                style={{ fontSize: 'var(--fs-h3)' }}
              >
                {card.title}
              </h2>

              <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65] mb-6">
                {card.desc}
              </p>
            </div>

            <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
                {card.stack}
              </span>
              <span className="font-sans text-[13px] font-medium text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                View discipline →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)]">
        <div>
          <h3 className="font-sans font-semibold text-[20px] text-[var(--text-primary)] mb-2">
            Have a custom requirement?
          </h3>
          <p className="font-sans text-[15px] text-[var(--text-secondary)]">
            We architect bespoke software systems tailored to your operational specifications.
          </p>
        </div>
        <Link href="/contact" className="btn-primary flex-shrink-0">
          <span>Start a conversation →</span>
        </Link>
      </div>
    </div>
  )
}
