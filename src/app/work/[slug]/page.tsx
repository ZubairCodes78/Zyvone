import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found | ZYVONE' }

  const pageTitle = project.seoTitle || `${project.name || project.shortTitle} — Case Study | ZYVONE`
  const pageDescription = project.seoDescription || project.overview

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `https://zyvone.site/work/${project.slug}` },
    openGraph: {
      title: `${project.title || project.name} | ZYVONE Case Study`,
      description: pageDescription,
      url: `https://zyvone.site/work/${project.slug}`,
      siteName: 'ZYVONE',
      images: [
        {
          url: `https://zyvone.site${project.heroImage}`,
          width: 1200,
          height: 675,
          alt: project.title || project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title || project.name} | ZYVONE Case Study`,
      description: pageDescription,
      images: [`https://zyvone.site${project.heroImage}`],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const isAppOrAgent = project.portfolioCategory === 'applications' || project.portfolioCategory === 'ai-agents'

  const breadcrumbSchema = {
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
        name: 'Work',
        item: 'https://zyvone.site/work',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.name || project.shortTitle,
        item: `https://zyvone.site/work/${project.slug}`,
      },
    ],
  }

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': isAppOrAgent ? 'SoftwareApplication' : 'CreativeWork',
    '@id': `https://zyvone.site/work/${project.slug}#case-study`,
    name: project.title || project.name,
    headline: project.shortTagline,
    description: project.seoDescription || project.overview,
    url: `https://zyvone.site/work/${project.slug}`,
    image: `https://zyvone.site${project.heroImage}`,
    dateCreated: '2026-01-01',
    datePublished: '2026-01-15',
    dateModified: '2026-02-28',
    inLanguage: 'en',
    creator: {
      '@id': 'https://zyvone.site/#organization',
    },
    publisher: {
      '@id': 'https://zyvone.site/#organization',
    },
    ...(isAppOrAgent
      ? {
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Cloud',
      }
      : {}),
    ...(project.link ? { sameAs: project.link } : {}),
  }

  return (
    <article className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Semantic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8 md:mb-10 flex items-center gap-2 font-mono text-[12px] text-[var(--text-tertiary)]">
        <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/work" className="hover:text-[var(--text-primary)] transition-colors">Work</Link>
        <span>/</span>
        <span className="text-[var(--accent)] font-medium truncate max-w-[200px] sm:max-w-none">
          {project.name || project.shortTitle}
        </span>
      </nav>

      {/* Header / Hero Section */}
      <header className="space-y-6 mb-12 md:mb-16">
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-[12px]">
          <span className="text-[var(--text-tertiary)]">CASE STUDY {project.id}</span>
          <span className="text-[var(--text-disabled)]">·</span>
          <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] font-semibold text-[var(--accent)]">
            2026 ARCHITECTURE
          </span>
          <span className="text-[var(--text-disabled)]">·</span>
          <span className="eyebrow-label text-[11px] text-[var(--text-secondary)]">{project.category}</span>
        </div>

        <h1
          className="font-sans font-bold text-[var(--text-primary)] tracking-tight leading-[1.08]"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          {project.title || project.name}
        </h1>

        <p className="font-sans text-[var(--text-secondary)] text-[18px] md:text-[21px] leading-[1.6] max-w-3xl">
          {project.shortTagline}
        </p>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] border border-[var(--border)] mt-8">
          <Image
            src={project.heroImage}
            alt={project.title || project.name}
            fill
            priority
            className="object-cover object-top"
            unoptimized={project.heroImage.endsWith('.svg')}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Quick Spec Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 md:p-6 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] mt-6">
          <div>
            <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-1">Delivered Outcome</span>
            <p className="font-sans text-[15px] font-bold text-[var(--accent)]">{project.result}</p>
          </div>
          <div>
            <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-1">Industry Focus</span>
            <p className="font-sans text-[14px] font-medium text-[var(--text-primary)] truncate">{project.industry}</p>
          </div>
          <div>
            <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-1">System Anatomy</span>
            <p className="font-mono text-[13px] font-medium text-[var(--text-secondary)] capitalize">{project.anatomy || 'System'}</p>
          </div>
          <div>
            <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-1">Live Endpoint</span>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
              >
                <span>Visit Site</span>
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="font-mono text-[13px] text-[var(--text-tertiary)]">Internal System</span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="space-y-12 md:space-y-16">
        {/* Section 01: Project Overview */}
        <section aria-labelledby="heading-overview" className="space-y-4">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
            01 // PROJECT OVERVIEW
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)]">
            <div className="md:col-span-2 space-y-3">
              <h2 id="heading-overview" className="font-sans text-[18px] md:text-[20px] font-bold text-[var(--text-primary)]">
                System Overview &amp; Capabilities
              </h2>
              <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-[var(--border)] pt-5 md:pt-0 md:pl-6">
              <div>
                <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-1">Target Audience</span>
                <p className="font-sans text-[14px] text-[var(--text-primary)] font-medium">
                  {project.targetAudience || project.industry}
                </p>
              </div>
              <div>
                <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-1">Architecture Category</span>
                <p className="font-sans text-[14px] text-[var(--accent)] font-semibold">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Challenge & Problem */}
        <section aria-labelledby="heading-challenge" className="space-y-4">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
            02 // THE BUSINESS PROBLEM &amp; CHALLENGE
          </span>
          <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] space-y-3">
            <h2 id="heading-challenge" className="font-sans text-[18px] md:text-[20px] font-bold text-[var(--text-primary)]">
              Operational Friction &amp; Limitations Before Engineering
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed">
              {project.challenge || project.problem}
            </p>
          </div>
        </section>

        {/* Section 03: Approach & Architecture */}
        <section aria-labelledby="heading-approach" className="space-y-4">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
            03 // TECHNICAL APPROACH &amp; ARCHITECTURE
          </span>
          <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] space-y-4">
            <h2 id="heading-approach" className="font-sans text-[18px] md:text-[20px] font-bold text-[var(--text-primary)]">
              How ZYVONE Architected the Solution
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed">
              {project.approach}
            </p>
            {project.whatWasBuilt && (
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)] block mb-2">Scope Delivered</span>
                <p className="font-sans text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  {project.whatWasBuilt}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 04: Core Features */}
        {project.coreFeatures && project.coreFeatures.length > 0 && (
          <section aria-labelledby="heading-features" className="space-y-4">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
              04 // CORE FUNCTIONALITY &amp; SYSTEM MODULES
            </span>
            <h2 id="heading-features" className="sr-only">Core System Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.coreFeatures.map((feat, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] space-y-2">
                  <h3 className="font-sans text-[15px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <span>{feat.title}</span>
                  </h3>
                  <p className="font-sans text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 05: Execution & Engineering Highlights */}
        <section aria-labelledby="heading-execution" className="space-y-4">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
            05 // ENGINEERING EXECUTION &amp; SPECIFICATIONS
          </span>
          <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] space-y-5">
            <h2 id="heading-execution" className="font-sans text-[18px] md:text-[20px] font-bold text-[var(--text-primary)]">
              Technical Implementation Details
            </h2>
            <ul className="space-y-3">
              {(project.engineeringHighlights || project.execution).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 font-sans text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-mono text-[12px] text-[var(--accent)] mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 06: Outcome & Impact */}
        <section aria-labelledby="heading-outcome" className="space-y-4">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
            06 // VERIFIED OUTCOME &amp; BUSINESS IMPACT
          </span>
          <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] space-y-4">
            <h2 id="heading-outcome" className="font-sans text-[18px] md:text-[20px] font-bold text-[var(--text-primary)]">
              Measurable Engineering Results
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed">
              {project.outcome}
            </p>
            {project.reflection && (
              <blockquote className="p-4 rounded-xl bg-[var(--bg-elevated)] border-l-2 border-[var(--accent)] text-[var(--text-primary)] font-sans italic text-[14px] sm:text-[15px] leading-relaxed">
                &ldquo;{project.reflection}&rdquo;
              </blockquote>
            )}
          </div>
        </section>

        {/* Section 07: Tech Stack & Disciplines */}
        <section aria-labelledby="heading-stack" className="space-y-4">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] block">
            07 // TECH STACK &amp; DISCIPLINES
          </span>
          <h2 id="heading-stack" className="sr-only">Technologies Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)]">
              <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-3">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] font-mono text-[12px] text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-6 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)]">
              <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-3">Integrated Disciplines</span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] font-mono text-[12px] text-[var(--accent)]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Next / Previous Project Switcher */}
      <nav aria-label="Adjacent Projects" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 mt-16 border-t border-[var(--border)]">
        <Link
          href={`/work/${prevProject.slug}`}
          className="p-5 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
        >
          <span className="font-mono text-[11px] text-[var(--text-tertiary)] block mb-1">← PREVIOUS CASE STUDY</span>
          <span className="font-sans font-bold text-[16px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {prevProject.name || prevProject.shortTitle}
          </span>
        </Link>
        <Link
          href={`/work/${nextProject.slug}`}
          className="p-5 rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all group sm:text-right"
        >
          <span className="font-mono text-[11px] text-[var(--text-tertiary)] block mb-1">NEXT CASE STUDY →</span>
          <span className="font-sans font-bold text-[16px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {nextProject.name || nextProject.shortTitle}
          </span>
        </Link>
      </nav>

      {/* Conversion CTA */}
      <div className="p-8 md:p-12 rounded-[var(--radius-card)] bg-[var(--bg-elevated)] border border-[var(--border)] mt-12 text-center space-y-4">
        <span className="eyebrow-mono text-[11px] text-[var(--accent)]">READY TO ENGINEER YOUR SYSTEM?</span>
        <h2 className="font-sans font-bold text-[24px] sm:text-[30px] text-[var(--text-primary)]">
          Build Permanent Leverage With ZYVONE
        </h2>
        <p className="font-sans text-[15px] sm:text-[17px] text-[var(--text-secondary)] max-w-xl mx-auto">
          We partner with founders and enterprise leaders to architect high-performance SaaS, AI pipelines, and digital products.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            <span>Start a Project</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/work" className="btn-ghost">
            <span>Back to All Work</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
