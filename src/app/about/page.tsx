import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { agencySocials, founderSocials, coFounderSocials } from '@/lib/socials'

export const metadata: Metadata = {
  title: 'About ZYVONE — Digital Product Studio & Technology Company',
  description:
    'Built by founders. For founders. ZYVONE is a digital product studio and software technology company engineering SaaS products, AI applications, custom web systems, and digital infrastructure.',
  alternates: {
    canonical: 'https://zyvone.site/about',
  },
}

export default function AboutPage() {
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
          name: 'About',
          item: 'https://zyvone.site/about',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ZYVONE',
      url: 'https://zyvone.site',
      logo: 'https://zyvone.site/favicon.png',
      description:
        'ZYVONE is a digital product studio and software technology company building SaaS products, web applications, AI systems, and automated infrastructure.',
      founder: [
        {
          '@type': 'Person',
          name: founderSocials.name,
          jobTitle: founderSocials.role,
          sameAs: [
            founderSocials.instagram,
            founderSocials.linkedin,
            founderSocials.x,
            founderSocials.github,
          ],
        },
        {
          '@type': 'Person',
          name: coFounderSocials.name,
          jobTitle: coFounderSocials.role,
          sameAs: [
            coFounderSocials.instagram,
            coFounderSocials.x,
            coFounderSocials.linkedin,
          ],
        },
      ],
    },
  ]
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

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header — Company Positioning Statement */}
      <section className="max-w-[var(--max-w-hero)] mb-16 md:mb-24 pb-12 border-b border-[var(--border)]">
        <span className="eyebrow-mono block mb-4 text-[var(--accent)]">ABOUT ZYVONE</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Built by founders.{' '}
          <span className="font-display-accent block sm:inline">
            For founders.
          </span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[20px] leading-[1.7] max-w-[760px]">
          ZYVONE is a digital product studio and technology company. We engineer SaaS platforms, AI-powered applications, and custom web infrastructure with a systems-first point of view — built to scale, compound, and perform.
        </p>
      </section>

      {/* The People Behind ZYVONE */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28">
          <div className="mb-10">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">01 / LEADERSHIP</span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              THE PEOPLE BEHIND ZYVONE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Founder Card — MUHAMMAD ZUBAIR */}
            <div className="card-surface p-7 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_24px_rgba(200,237,53,0.08)]">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
                  <span className="font-mono text-[14px] font-semibold text-[var(--accent)]">
                    01
                  </span>
                  <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                    FOUNDER
                  </span>
                </div>

                <div className="flex items-start gap-4 md:gap-5 mb-6">
                  {/* Subtle scaling avatar container */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-bold text-[20px] md:text-[22px] flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.04] shadow-[0_0_12px_var(--accent-shadow)]">
                    Z
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-[20px] md:text-[22px] text-[var(--text-primary)] tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {founderSocials.name}
                    </h3>
                    <p className="font-mono text-[12px] font-medium text-[var(--accent)] uppercase tracking-wider mt-0.5">
                      {founderSocials.role}
                    </p>
                    <p className="font-sans text-[13px] text-[var(--text-tertiary)] mt-1 font-medium">
                      {founderSocials.spec}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8">
                  &ldquo;{founderSocials.description}&rdquo;
                </p>
              </div>

              {/* Social Icon Links */}
              <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-3">
                <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)]">
                  CONNECT DIRECTLY
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={founderSocials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Muhammad Zubair Instagram"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>Instagram</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={founderSocials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Muhammad Zubair LinkedIn"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>LinkedIn</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={founderSocials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Muhammad Zubair X"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>X</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={founderSocials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Muhammad Zubair GitHub"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>GitHub</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Co-Founder Card — HASHIR AHMAD */}
            <div className="card-surface p-7 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_24px_rgba(200,237,53,0.08)]">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
                  <span className="font-mono text-[14px] font-semibold text-[var(--accent)]">
                    02
                  </span>
                  <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                    CO-FOUNDER
                  </span>
                </div>

                <div className="flex items-start gap-4 md:gap-5 mb-6">
                  {/* Subtle scaling avatar container */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-bold text-[20px] md:text-[22px] flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.04] shadow-[0_0_12px_var(--accent-shadow)]">
                    H
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-[20px] md:text-[22px] text-[var(--text-primary)] tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {coFounderSocials.name}
                    </h3>
                    <p className="font-mono text-[12px] font-medium text-[var(--accent)] uppercase tracking-wider mt-0.5">
                      {coFounderSocials.role}
                    </p>
                    <p className="font-sans text-[13px] text-[var(--text-tertiary)] mt-1 font-medium">
                      {coFounderSocials.spec}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8">
                  &ldquo;{coFounderSocials.description}&rdquo;
                </p>
              </div>

              {/* Social Icon Links */}
              <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-3 mt-auto">
                <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)]">
                  CONNECT DIRECTLY
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={coFounderSocials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hashir Ahmad Instagram"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>Instagram</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={coFounderSocials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hashir Ahmad X"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>X</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={coFounderSocials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hashir Ahmad LinkedIn"
                    className="font-mono text-[12px] px-3.5 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center gap-1 group/link"
                  >
                    <span>LinkedIn</span>
                    <span className="text-[var(--text-tertiary)] group-hover/link:text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Entity Q&A Overview Section for AI Search & Search Engine Context */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28">
          <div className="mb-10">
            <span className="eyebrow-mono block mb-3 text-[var(--accent)]">02 / ENTITY OVERVIEW</span>
            <h2
              className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-3"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              ABOUT ZYVONE AT A GLANCE
            </h2>
            <p className="font-sans text-[15px] text-[var(--text-secondary)] max-w-[680px]">
              Explicit business entity overview structured for human review and search engine comprehension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-surface p-6 md:p-8">
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                What is ZYVONE?
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                ZYVONE is an integrated digital product studio and software technology company specializing in building digital infrastructure, SaaS products, custom web applications, AI systems, and automation.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                Who founded ZYVONE?
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                ZYVONE was founded by Muhammad Zubair (Founder &amp; Full-Stack SaaS &amp; AI Developer) and Hashir Ahmad (Co-Founder &amp; Marketing Strategist &amp; Web Developer).
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                What does ZYVONE build?
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                ZYVONE builds permanent digital infrastructure including SaaS platforms, multi-tenant cloud software, vector RAG search engines, AI workflow pipelines, D2C storefronts, B2B wholesale trade portals, and clinical patient acquisition engines.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                What core services does ZYVONE offer?
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                ZYVONE offers 11 core disciplines: Web Development, Custom Software Development, SaaS Development, SaaS MVP Engineering, AI Development, AI Automation, AI Agent Development, Business Systems, AI Content Systems, Growth Marketing, and E-commerce Platforms.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                What products and case studies has ZYVONE deployed?
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                Verified deployed platforms include WearOmnia (D2C Modest Apparel), Amin Raisat Hosiery (B2B Pure Cotton Trade Portal), Toolmatic (Edge Utilities System), PDFMaster (Client-Side Document Processing Suite), Cantt Dental Care (Patient Engine), and Al Raheem Engineering (Industrial Machinery Catalog).
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mb-2">
                Where does ZYVONE operate?
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                ZYVONE is headquartered in Pakistan and serves ambitious founders, tech startups, industrial manufacturers, and clinical practices globally across South Asia, North America, Europe, and the Middle East.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Agency Social Identity Section */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28 p-8 md:p-10 rounded-[var(--radius-card)] card-surface border border-[var(--border)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)] mb-8">
            <div>
              <span className="eyebrow-mono block mb-2 text-[var(--accent)]">
                AGENCY IDENTITY
              </span>
              <h3 className="font-sans font-semibold text-[22px] md:text-[26px] text-[var(--text-primary)] tracking-tight">
                {agencySocials.name}
              </h3>
              <p className="font-sans text-[14px] text-[var(--text-secondary)] mt-1">
                {agencySocials.tagline}
              </p>
            </div>
            <div className="font-mono text-[12px] text-[var(--accent)] px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] self-start md:self-auto">
              OFFICIAL CHANNELS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={agencySocials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZYVONE Official Instagram"
              className="p-5 rounded-lg bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200 flex items-center justify-between group"
            >
              <div>
                <span className="font-sans font-semibold text-[15px] text-[var(--text-primary)] block group-hover:text-[var(--accent)] transition-colors">
                  Instagram
                </span>
                <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                  {agencySocials.handle}
                </span>
              </div>
              <span className="font-mono text-[12px] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>

            <a
              href={agencySocials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZYVONE Official X"
              className="p-5 rounded-lg bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200 flex items-center justify-between group"
            >
              <div>
                <span className="font-sans font-semibold text-[15px] text-[var(--text-primary)] block group-hover:text-[var(--accent)] transition-colors">
                  X (Twitter)
                </span>
                <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                  @zyvone12
                </span>
              </div>
              <span className="font-mono text-[12px] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>

            <a
              href={agencySocials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZYVONE Official LinkedIn"
              className="p-5 rounded-lg bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200 flex items-center justify-between group"
            >
              <div>
                <span className="font-sans font-semibold text-[15px] text-[var(--text-primary)] block group-hover:text-[var(--accent)] transition-colors">
                  LinkedIn
                </span>
                <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                  ZYVONE Limited
                </span>
              </div>
              <span className="font-mono text-[12px] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </section>
      </RevealWrapper>

      {/* Principles */}
      <RevealWrapper>
        <section className="mb-24 md:mb-36">
          <span className="eyebrow-mono block mb-8 text-[var(--accent)]">OUR PRINCIPLES</span>
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
