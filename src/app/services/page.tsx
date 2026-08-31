import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'Services & Engineering Disciplines — Software, SaaS & AI Systems',
  description:
    'Explore ZYVONE core engineering services: Web Development, Custom Software, SaaS Development, SaaS MVP Engineering, AI Systems, AI Automation, AI Agents, Business Systems, and E-commerce Platforms.',
  alternates: {
    canonical: 'https://zyvone.site/services',
  },
}

export interface ServiceCategory {
  num: string
  title: string
  href: string
  tag: string
  shortDesc: string
  problemsSolved: string
  whatWeBuild: string
  technologies: string[]
}

export const allServices: ServiceCategory[] = [
  {
    num: '01',
    title: 'Web Development',
    href: '/services/web-development',
    tag: 'PLATFORMS & APPS',
    shortDesc: 'Bespoke full-stack web applications, Next.js digital platforms, and high-converting storefronts built for sub-100ms load speeds and technical SEO supremacy.',
    problemsSolved: 'Eliminates bloated 4+ second legacy page load delays, brittle templates, and security vulnerabilities.',
    whatWeBuild: 'Custom Next.js platforms, digital flagships, headless CMS integrations, and responsive web applications.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'PostgreSQL'],
  },
  {
    num: '02',
    title: 'Custom Software Development',
    href: '/services/custom-software',
    tag: 'ENTERPRISE SYSTEMS',
    shortDesc: 'Tailored software architecture, industrial portals, custom web applications, and enterprise data pipelines engineered precisely to operational specs.',
    problemsSolved: 'Eliminates SaaS subscription sprawl, disconnected data silos, and rigid off-the-shelf software bottlenecks.',
    whatWeBuild: 'B2B machinery catalogs, custom enterprise software, automated data pipelines, and internal company portals.',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'REST & GraphQL'],
  },
  {
    num: '03',
    title: 'SaaS Development',
    href: '/services/saas-development',
    tag: 'CLOUD PLATFORMS',
    shortDesc: 'Scalable multi-tenant cloud platforms, automated subscription billing, user role management, and serverless edge computing.',
    problemsSolved: 'Eliminates fragile monolithic codebases, high server compute costs, and complex subscription billing bugs.',
    whatWeBuild: 'Multi-tenant SaaS products, subscription platforms, client-side WebAssembly tools, and cloud portals.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe API', 'WebAssembly'],
  },
  {
    num: '04',
    title: 'SaaS MVP Development',
    href: '/services/mvp-development',
    tag: 'STARTUP PRODUCT ENGINEERING',
    shortDesc: 'Rapid 4-6 week production-ready Minimum Viable Products for tech founders, engineered with clean architecture ready to pitch, validate, and scale.',
    problemsSolved: 'Eliminates 6-month budget-draining development cycles and unscalable prototypes that require a complete rewrite.',
    whatWeBuild: 'Foundational SaaS MVPs, billing-integrated software products, user authentication systems, and core feature sets.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Stripe', 'Vercel'],
  },
  {
    num: '05',
    title: 'AI Development',
    href: '/services/ai-development',
    tag: 'INTELLIGENCE & MODELS',
    shortDesc: 'Custom AI software, LLM model orchestration, vector RAG database pipelines, and domain-specific AI integrations.',
    problemsSolved: 'Eliminates superficial AI gimmicks and hallucinations by anchoring models to verified proprietary database knowledge.',
    whatWeBuild: 'Vector RAG search engines, custom LLM applications, intelligent data extraction layers, and fine-tuned APIs.',
    technologies: ['OpenAI API', 'Anthropic Claude', 'Python', 'TypeScript', 'Pinecone', 'Pgvector', 'LangChain'],
  },
  {
    num: '06',
    title: 'AI Automation',
    href: '/services/ai-automation',
    tag: 'WORKFLOW & TRIAGE',
    shortDesc: 'Autonomous workflow pipelines, intelligent lead triage, automated invoice extraction, and zero-friction operational routing.',
    problemsSolved: 'Eliminates 24+ hour lead response delays, human copy-paste errors, and costly manual clerical tasks.',
    whatWeBuild: 'Lead scoring engines, automated WhatsApp/SMS dispatchers, PDF document extractors, and webhook pipelines.',
    technologies: ['n8n', 'Make', 'Python', 'Node.js', 'WhatsApp API', 'OpenAI', 'PostgreSQL'],
  },
  {
    num: '07',
    title: 'AI Agent Development',
    href: '/services/ai-development#ai-agents',
    tag: 'AUTONOMOUS EXECUTORS',
    shortDesc: 'Multi-step autonomous agentic systems capable of evaluating complex conditions, querying databases, executing APIs, and updating records.',
    problemsSolved: 'Eliminates manual task handoffs and repetitive operational decisions requiring deterministic multi-step rules.',
    whatWeBuild: 'Autonomous customer triage agents, inventory reconciliation bots, and automated report compilers.',
    technologies: ['TypeScript', 'Python', 'LangChain', 'OpenAI Assistant API', 'Custom Node Workers'],
  },
  {
    num: '08',
    title: 'Business Systems',
    href: '/services/business-systems',
    tag: 'INTERNAL OPERATIONS',
    shortDesc: 'Custom administrative dashboards, internal operational portals, clinical intake engines, and automated quotation pipelines.',
    problemsSolved: 'Eliminates internal operational drag, unorganized email threads, and zero visibility into business throughput.',
    whatWeBuild: 'Custom admin control panels, patient acquisition infrastructure, machinery RFQ systems, and operational telemetry.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'WhatsApp API'],
  },
  {
    num: '09',
    title: 'AI Content Systems',
    href: '/services/ai-development#ai-content',
    tag: 'PRODUCTION PIPELINES',
    shortDesc: 'Programmatic asset generation, brand-aligned multi-channel content pipelines, and edge-computed publishing systems.',
    problemsSolved: 'Eliminates manual content formatting bottlenecks and slow publishing cadence across digital channels.',
    whatWeBuild: 'Programmatic SEO content generators, media asset pipelines, and automated multi-channel publishing tools.',
    technologies: ['Node.js', 'OpenAI API', 'Next.js App Router', 'Cloudflare Workers'],
  },
  {
    num: '10',
    title: 'Growth & Marketing Systems',
    href: '/services/web-development#growth',
    tag: 'ACQUISITION INFRASTRUCTURE',
    shortDesc: 'Deterministic customer acquisition funnels, local search supremacy engines, conversion UX, and automated analytics attribution.',
    problemsSolved: 'Eliminates low website conversion rates, local search invisibility, and unmeasured ad spend attribution.',
    whatWeBuild: 'High-converting landing pages, localized healthcare SEO engines, structured Schema.org markup, and analytics dashboards.',
    technologies: ['Next.js', 'Schema.org', 'Google Analytics 4', 'Conversion UX', 'Tailwind CSS'],
  },
  {
    num: '11',
    title: 'E-Commerce Development',
    href: '/services/ecommerce-development',
    tag: 'D2C & B2B COMMERCE',
    shortDesc: 'Direct-to-consumer luxury flagships, hybrid wholesale B2B trade portals, automated COD confirmation, and rapid variant sizing.',
    problemsSolved: 'Eliminates high cart abandonment, manual social DM order intake, and slow mobile catalog browsing.',
    whatWeBuild: 'D2C modest fashion storefronts, B2B cotton trade portals, single-page guest checkouts, and automated courier routing.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API', 'Shopify Storefront API', 'Vercel'],
  },
]

export default function ServicesPage() {
  const jsonLd = {
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
    ],
  }

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="max-w-[var(--max-w-hero)] mb-16 md:mb-24 pb-12 border-b border-[var(--border)]">
        <span className="eyebrow-mono block mb-4 text-[var(--accent)]">
          ZYVONE SERVICES &amp; CAPABILITIES
        </span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          We Build Digital Infrastructure.
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[18px] md:text-[21px] leading-[1.6]">
          ZYVONE is a digital product studio and software technology company. Explore our 11 core engineering disciplines — from SaaS products and AI automation pipelines to custom business systems and high-speed web applications.
        </p>
      </div>

      {/* 11 Services Topical Grid */}
      <RevealWrapper>
        <div className="space-y-12 md:space-y-16">
          {allServices.map((service) => (
            <div
              key={service.num}
              id={service.href.replace('/services/', '').replace('#', '-')}
              className="card-surface p-7 md:p-10 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Left Side: Service Details */}
                <div className="lg:w-8/12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[14px] font-bold text-[var(--accent)]">
                      {service.num}
                    </span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  <h2 className="font-sans font-semibold text-[24px] md:text-[28px] text-[var(--text-primary)] tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors">
                    <Link href={service.href}>{service.title}</Link>
                  </h2>

                  <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-subtle)] text-[13px] font-sans">
                    <div>
                      <strong className="text-[var(--accent)] font-mono text-[11px] uppercase block mb-1">
                        Problems Solved:
                      </strong>
                      <p className="text-[var(--text-secondary)]">{service.problemsSolved}</p>
                    </div>
                    <div>
                      <strong className="text-[var(--accent)] font-mono text-[11px] uppercase block mb-1">
                        What ZYVONE Builds:
                      </strong>
                      <p className="text-[var(--text-secondary)]">{service.whatWeBuild}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Stack + Link CTA */}
                <div className="lg:w-4/12 flex flex-col justify-between pt-6 lg:pt-0 lg:border-l lg:border-[var(--border-subtle)] lg:pl-8">
                  <div>
                    <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)] block mb-3">
                      VERIFIED TECH STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="btn-primary inline-flex items-center justify-between w-full"
                  >
                    <span>Explore {service.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>

      {/* Bottom Consultation Box */}
      <RevealWrapper>
        <div className="mt-20 md:mt-28 flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 md:p-12 rounded-[var(--radius-card)] card-surface border border-[var(--border)]">
          <div>
            <span className="eyebrow-mono text-[11px] text-[var(--accent)] block mb-2">CUSTOM SYSTEM REQUIREMENT</span>
            <h3 className="font-sans font-semibold text-[22px] md:text-[26px] text-[var(--text-primary)] mb-2 tracking-tight">
              Have a complex software specification?
            </h3>
            <p className="font-sans text-[15px] text-[var(--text-secondary)] max-w-[540px]">
              Discuss technical architecture, data models, and project timelines directly with ZYVONE founders.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0 self-start sm:self-auto">
            <span>Work with us →</span>
          </Link>
        </div>
      </RevealWrapper>
    </div>
  )
}
