import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'AI Agents & Automation Systems Portfolio | ZYVONE',
  description: 'Explore autonomous AI agents, enterprise WhatsApp automation pipelines, and intelligent decision systems engineered for real-world operations by ZYVONE.',
  alternates: {
    canonical: 'https://zyvone.site/ai-agents',
  },
  openGraph: {
    title: 'AI Agents & Automation Systems Portfolio | ZYVONE',
    description: 'Explore autonomous AI agents, enterprise WhatsApp automation pipelines, and intelligent decision systems engineered for real-world operations by ZYVONE.',
    url: 'https://zyvone.site/ai-agents',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZYVONE AI Agents & Automation Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents & Automation Systems Portfolio | ZYVONE',
    description: 'Explore autonomous AI agents, enterprise WhatsApp automation pipelines, and intelligent decision systems engineered for real-world operations by ZYVONE.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function AIAgentsHubPage() {
  const agentProjects = projects.filter((p) => p.portfolioCategory === 'ai-agents')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://zyvone.site/ai-agents#webpage',
    url: 'https://zyvone.site/ai-agents',
    name: 'AI Agents & Automation Systems Portfolio | ZYVONE',
    description: 'Autonomous AI agents, conversational workflows, and enterprise automation infrastructure engineered by ZYVONE.',
    publisher: {
      '@id': 'https://zyvone.site/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: agentProjects.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://zyvone.site/work/${p.slug}`,
        name: p.title || p.name,
      })),
    },
  }

  const breadcrumbLd = {
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
        name: 'AI Agents',
        item: 'https://zyvone.site/ai-agents',
      },
    ],
  }

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[12px] text-[var(--text-tertiary)]">
        <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/work" className="hover:text-[var(--text-primary)] transition-colors">Work</Link>
        <span>/</span>
        <span className="text-[var(--accent)] font-medium">AI Agents &amp; Automation</span>
      </nav>

      {/* Header */}
      <div className="max-w-[var(--max-w-hero)] mb-12 md:mb-16">
        <span className="eyebrow-label block mb-4">AUTONOMOUS SYSTEMS</span>
        <h1
          className="font-sans font-bold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          AI Agents &amp; <span className="font-serif-accent">Automation.</span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Autonomous software workers, event-driven webhook pipelines, and conversational AI systems engineered to eliminate operational drag and execute 24/7.
        </p>
      </div>

      {/* Meta Bar */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border)]">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
          SHOWING {agentProjects.length} AUTONOMOUS SYSTEMS
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
          2026 VERIFIED AGENTIC INFRASTRUCTURE
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {agentProjects.map((project) => (
          <article
            key={project.slug}
            className="card-surface p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[var(--border-strong)] min-w-0"
          >
            <div>
              <div className="relative w-full aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] mb-5 min-w-0 border border-[var(--border)]">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  unoptimized={project.heroImage.endsWith('.svg')}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-0.5 rounded-full bg-[var(--bg-overlay)] backdrop-blur-md border border-[var(--border)] font-mono text-[10px] font-semibold text-[var(--accent)]">
                    2026 AGENT
                  </span>
                </div>
              </div>

              <h2 className="font-sans font-bold text-[20px] text-[var(--text-primary)] tracking-tight leading-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                <Link href={`/work/${project.slug}`}>
                  {project.name || project.shortTitle}
                </Link>
              </h2>

              <p className="eyebrow-label text-[11px] text-[var(--accent)] mb-3">
                {project.category}
              </p>

              <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.shortTagline}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-[11px] text-[var(--accent)] font-medium">
                {project.result}
              </span>
              <Link
                href={`/work/${project.slug}`}
                className="font-sans font-medium text-[13px] text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
              >
                <span>View System</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Relevant Service Capabilities Strip */}
      <section className="p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] mb-12">
        <div className="max-w-2xl mb-6">
          <span className="eyebrow-mono text-[11px] text-[var(--accent)] mb-2 block">AUTONOMOUS DISCIPLINES</span>
          <h2 className="font-sans font-bold text-[22px] md:text-[26px] text-[var(--text-primary)] mb-2">
            Related AI &amp; Automation Services
          </h2>
          <p className="font-sans text-[15px] text-[var(--text-secondary)]">
            Explore how ZYVONE designs and connects autonomous agentic logic into existing enterprise software and databases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/services/ai-agent-development"
            className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
          >
            <h3 className="font-sans font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
              AI Agent Development →
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              Multi-agent reasoning loops and autonomous decision workers for business operations.
            </p>
          </Link>
          <Link
            href="/services/ai-automation"
            className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
          >
            <h3 className="font-sans font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
              AI Automation →
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              End-to-end webhook pipelines connecting CRMs, databases, and communication channels.
            </p>
          </Link>
          <Link
            href="/services/internal-tools"
            className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
          >
            <h3 className="font-sans font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
              Internal Business Tools →
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              Operational command consoles, inventory sync engines, and team dashboards.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--border)]">
        <Link
          href="/work"
          className="font-sans font-medium text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2"
        >
          <span>← Back to All Work</span>
        </Link>
        <Link href="/contact" className="btn-primary">
          <span>Deploy an AI Agent</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
