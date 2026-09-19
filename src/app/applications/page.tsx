import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Web & Mobile Applications Portfolio | ZYVONE',
  description: 'Explore custom web applications, client-side digital tools, and interactive software products engineered for extreme performance by ZYVONE.',
  alternates: {
    canonical: 'https://zyvone.site/applications',
  },
  openGraph: {
    title: 'Web & Mobile Applications Portfolio | ZYVONE',
    description: 'Explore custom web applications, client-side digital tools, and interactive software products engineered for extreme performance by ZYVONE.',
    url: 'https://zyvone.site/applications',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZYVONE Applications Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & Mobile Applications Portfolio | ZYVONE',
    description: 'Explore custom web applications, client-side digital tools, and interactive software products engineered for extreme performance by ZYVONE.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function ApplicationsHubPage() {
  const appProjects = projects.filter((p) => p.portfolioCategory === 'applications')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://zyvone.site/applications#webpage',
    url: 'https://zyvone.site/applications',
    name: 'Web & Mobile Applications Portfolio | ZYVONE',
    description: 'Custom web applications, digital tools, and interactive software products engineered by ZYVONE.',
    publisher: {
      '@id': 'https://zyvone.site/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: appProjects.map((p, idx) => ({
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
        name: 'Applications',
        item: 'https://zyvone.site/applications',
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
        <span className="text-[var(--accent)] font-medium">Applications</span>
      </nav>

      {/* Header */}
      <div className="max-w-[var(--max-w-hero)] mb-12 md:mb-16">
        <span className="eyebrow-label block mb-4">PORTFOLIO DISCIPLINE</span>
        <h1
          className="font-sans font-bold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Web &amp; Mobile <span className="font-serif-accent">Applications.</span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Interactive software products, responsive utility engines, and dedicated business applications built with deterministic frame pacing and modern edge runtimes.
        </p>
      </div>

      {/* Meta Bar */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border)]">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
          SHOWING {appProjects.length} VERIFIED APPLICATIONS
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
          2026 PRODUCTION RUNTIME
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {appProjects.map((project) => (
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
                    2026
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
              <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                {project.result}
              </span>
              <Link
                href={`/work/${project.slug}`}
                className="font-sans font-medium text-[13px] text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
              >
                <span>Case Study</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Relevant Service Capabilities Strip */}
      <section className="p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] mb-12">
        <div className="max-w-2xl mb-6">
          <span className="eyebrow-mono text-[11px] text-[var(--accent)] mb-2 block">ASSOCIATED DISCIPLINES</span>
          <h2 className="font-sans font-bold text-[22px] md:text-[26px] text-[var(--text-primary)] mb-2">
            Related Application Engineering Services
          </h2>
          <p className="font-sans text-[15px] text-[var(--text-secondary)]">
            ZYVONE provides full-lifecycle engineering for web applications, SaaS MVPs, and custom business platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/services/web-application-development"
            className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
          >
            <h3 className="font-sans font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
              Web Application Development →
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              Edge-rendered, real-time reactive web software engineered on Next.js.
            </p>
          </Link>
          <Link
            href="/services/saas-mvp-development"
            className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
          >
            <h3 className="font-sans font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
              SaaS MVP Development →
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              Scoping and rapid engineering of scalable multi-tenant SaaS platforms.
            </p>
          </Link>
          <Link
            href="/services/custom-software-development"
            className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
          >
            <h3 className="font-sans font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
              Custom Software Development →
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              Bespoke digital architecture replacing off-the-shelf software compromises.
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
          <span>Build Your Application</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
