import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'About',
  description: 'Built by founders. For founders. ZYVONE is a digital product studio with a specific point of view on how modern businesses should be built.',
  alternates: {
    canonical: 'https://zyvone.site/about',
  },
}

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Systems over deliverables',
      body: "We don't hand over a file and disappear. We design for long-term operational leverage.",
    },
    {
      num: '02',
      title: 'Engineering through design',
      body: 'Good design without engineering is decoration. We merge both disciplines into one product mindset.',
    },
    {
      num: '03',
      title: 'Speed as a feature',
      body: 'Sub-100ms page loads, instant API responses and zero-friction UX are requirements.',
    },
    {
      num: '04',
      title: 'Outcome over output',
      body: 'We measure success by what changes in your business — revenue, time recovered, systems running.',
    },
  ]

  const founders = [
    {
      name: 'Muhammad Zubair',
      role: 'Co-Founder — Strategy & Engineering',
      bio: 'Leads product architecture, technical strategy and client relationships. Focused on building software systems that compound over time.',
      initial: 'Z',
      links: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/zubaircodes/' },
        { label: 'X', url: 'https://x.com/zubaircodes78' },
        { label: 'GitHub', url: 'https://github.com/ZubairCodes78' },
      ],
    },
    {
      name: 'Hashir Ahmed',
      role: 'Co-Founder — Design & Systems',
      bio: 'Leads visual design, UX research and front-end engineering. Translates complex product problems into clear, elegant interfaces.',
      initial: 'H',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/co.founder.zyvone/' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hashir-ahmad327/' },
        { label: 'X', url: 'https://x.com/HashirAhmad327' },
      ],
    },
  ]

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Header */}
      <section className="max-w-[var(--max-w-hero)] mb-14 md:mb-20 pb-10 border-b border-[var(--border)]">
        <span className="eyebrow-mono block mb-4">ABOUT ZYVONE</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Built by founders.{' '}
          <span className="font-display-accent">
            For founders.
          </span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.7]">
          ZYVONE is not a typical agency. We are a digital product studio with a specific point of view on how modern businesses should be built.
        </p>
      </section>

      {/* Philosophy Section */}
      <RevealWrapper>
        <section className="max-w-[var(--max-w-text)] mb-20 md:mb-28">
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-6"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            We build systems.{' '}
            <span className="font-display-accent">
              Not deliverables.
            </span>
          </h2>
          <div className="space-y-6 font-sans text-[var(--text-secondary)] text-[16px] md:text-[17px] leading-[1.75]">
            <p>
              ZYVONE was founded by Zubair and Hashir — two builders who decided the agency model was broken. Agencies sell time. Time doesn&apos;t compound. Systems do.
            </p>
            <p>
              We take a small number of projects. We go deep on each one. We measure success by what changes in your business — not by what we deliver to your inbox.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* Founder Strip */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28">
          <span className="eyebrow-mono block mb-8">THE FOUNDERS</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="card-surface p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Consistent 48px avatar with shared lime border & glow */}
                    <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-semibold text-[18px] flex-shrink-0 shadow-[0_0_12px_var(--accent-shadow)]">
                      {founder.initial}
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-[18px] text-[var(--text-primary)]">
                        {founder.name}
                      </h3>
                      <p className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                {/* Link Pills */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  {founder.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] px-3 py-1 rounded-full border border-[var(--border)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* Principles */}
      <RevealWrapper>
        <section className="mb-24 md:mb-36">
          <span className="eyebrow-mono block mb-8">OUR PRINCIPLES</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item) => (
              <div
                key={item.num}
                className="card-surface p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[14px] font-semibold text-[var(--accent)] block mb-4">
                    {item.num}
                  </span>
                  <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* Bottom CTA */}
      <RevealWrapper>
        <div className="text-center pt-12 border-t border-[var(--border)]">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] text-[var(--text-primary)] mb-4">
            Ready to build systems?
          </h2>
          <p className="font-sans text-[16px] text-[var(--text-secondary)] mb-8 max-w-[480px] mx-auto">
            Let&apos;s evaluate your requirements and architect an enduring solution.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Work with us</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </RevealWrapper>
    </div>
  )
}
