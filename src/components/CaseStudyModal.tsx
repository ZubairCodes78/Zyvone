'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { projects, Project } from '@/lib/projects'

export default function CaseStudyModal() {
  return (
    <React.Suspense fallback={null}>
      <CaseStudyModalContent />
    </React.Suspense>
  )
}

function CaseStudyModalContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  // Detect project slug from pathname (/work/[slug]) or query param (?project=[slug])
  let activeSlug: string | null = null
  if (pathname.startsWith('/work/')) {
    const slugFromPath = pathname.replace('/work/', '').split('/')[0]
    if (slugFromPath && projects.some((p) => p.slug === slugFromPath)) {
      activeSlug = slugFromPath
    }
  } else if (searchParams.get('project')) {
    activeSlug = searchParams.get('project')
  }

  const [displaySlug, setDisplaySlug] = useState<string | null>(activeSlug)
  const [contentKey, setContentKey] = useState(0)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const savedScrollPosition = useRef<number>(0)

  // Sync activeSlug with displaySlug and manage scroll position capture/restore
  useEffect(() => {
    if (activeSlug) {
      if (!displaySlug) {
        previousActiveElement.current = document.activeElement as HTMLElement
        savedScrollPosition.current = window.scrollY
        document.body.style.overflow = 'hidden'
      }
      queueMicrotask(() => {
        setDisplaySlug(activeSlug)
        setContentKey((k) => k + 1)
      })
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else if (displaySlug) {
      document.body.style.overflow = ''
      queueMicrotask(() => {
        setDisplaySlug(null)
      })
      if (savedScrollPosition.current) {
        window.scrollTo({ top: savedScrollPosition.current, behavior: 'instant' })
      }
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [activeSlug, displaySlug])

  const closeModal = useCallback(() => {
    document.body.style.overflow = ''
    setDisplaySlug(null)

    if (savedScrollPosition.current) {
      window.scrollTo({ top: savedScrollPosition.current, behavior: 'instant' })
    }

    if (previousActiveElement.current) {
      previousActiveElement.current.focus()
    }

    if (pathname.startsWith('/work/')) {
      router.replace('/work', { scroll: false })
    } else {
      router.replace(pathname, { scroll: false })
    }
  }, [pathname, router])

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && displaySlug) {
        e.preventDefault()
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [displaySlug, closeModal])

  // Mobile swipe down to close
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollRef.current && scrollRef.current.scrollTop <= 0) {
      setTouchStartY(e.touches[0].clientY)
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY !== null) {
      const touchEndY = e.changedTouches[0].clientY
      if (touchEndY - touchStartY > 80) {
        closeModal()
      }
      setTouchStartY(null)
    }
  }

  if (!displaySlug) return null

  const projectIndex = projects.findIndex((p) => p.slug === displaySlug)
  const project: Project | undefined = projectIndex !== -1 ? projects[projectIndex] : undefined

  // Looping navigation
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  const navigateToProject = (slug: string) => {
    setDisplaySlug(slug)
    setContentKey((k) => k + 1)
    if (pathname.startsWith('/work/')) {
      router.replace(`/work/${slug}`, { scroll: false })
    } else {
      router.replace(`${pathname}?project=${slug}`, { scroll: false })
    }
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6"
    >
      {/* Backdrop: ~70% black + light blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[6px] cursor-pointer transition-opacity duration-200"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Container: Max-Width 900px, Max-Height 85vh on Desktop / Fullscreen Sheet on Mobile */}
      <div
        className="relative w-full h-[100dvh] md:h-[85vh] md:max-w-[900px] md:max-h-[85vh] bg-[var(--bg-surface)] border-t md:border border-[var(--border)] rounded-t-[20px] md:rounded-[18px] shadow-2xl flex flex-col overflow-hidden z-10 animate-modal-entrance"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sticky Header Bar with Title & Close (X) button */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 md:px-7 py-3.5 md:py-4 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-0 z-20">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <h2 id="modal-project-title" className="font-sans font-semibold text-[16px] md:text-[18px] text-[var(--text-primary)] truncate">
              {project?.name || project?.shortTitle}
            </h2>
            <span className="text-[var(--text-disabled)] flex-shrink-0">/</span>
            <span className="eyebrow-label text-[11px] text-[var(--text-secondary)] flex-shrink-0 truncate">
              {project?.year} · {project?.category}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {project?.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[var(--accent)] hover:underline"
              >
                <span>Live project</span>
                <span>↗</span>
              </a>
            )}
            <button
              onClick={closeModal}
              aria-label="Close case study modal"
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[var(--border)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-5 md:p-8 space-y-8 md:space-y-9 focus:outline-none"
          tabIndex={0}
        >
          {project ? (
            <div key={`modal-content-${contentKey}`} className="space-y-8 md:space-y-9 animate-fade">
              {/* 1. Hero Image */}
              <div className="relative w-full aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] border border-[var(--border)]">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover object-top"
                  unoptimized={project.heroImage.endsWith('.svg')}
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>

              {/* Workflow Pipeline (For AI Systems & Applications) */}
              {project.workflowSequence && project.workflowSequence.length > 0 && (
                <div className="p-4 md:p-5 rounded-[var(--radius-card)] bg-[var(--bg)] border border-[var(--border)] min-w-0">
                  <span className="eyebrow-label text-[10px] text-[var(--accent)] block mb-3 font-semibold tracking-wider">
                    SYSTEM WORKFLOW &amp; EXECUTION PIPELINE
                  </span>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    {project.workflowSequence.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2.5 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium">
                          {step}
                        </span>
                        {sIdx < project.workflowSequence!.length - 1 && (
                          <span className="text-[var(--accent)] font-bold" aria-hidden="true">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Metadata Grid Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 p-4 md:p-5 rounded-[var(--radius-card)] bg-[var(--bg)] border border-[var(--border)] min-w-0">
                <div className="min-w-0">
                  <p className="eyebrow-label text-[10px] text-[var(--text-tertiary)] mb-1">Industry</p>
                  <p className="font-sans text-[13px] md:text-[14px] font-medium text-[var(--text-primary)] truncate">{project.industry}</p>
                </div>
                <div className="min-w-0">
                  <p className="eyebrow-label text-[10px] text-[var(--text-tertiary)] mb-1">Year</p>
                  <p className="font-sans text-[13px] md:text-[14px] font-medium text-[var(--accent)] font-mono">{project.year}</p>
                </div>
                <div className="min-w-0 col-span-2 sm:col-span-1">
                  <p className="eyebrow-label text-[10px] text-[var(--text-tertiary)] mb-1">Services</p>
                  <p className="font-sans text-[13px] md:text-[14px] font-medium text-[var(--text-primary)] leading-tight">{project.services.join(', ')}</p>
                </div>
                <div className="min-w-0">
                  <p className="eyebrow-label text-[10px] text-[var(--text-tertiary)] mb-1">Result</p>
                  <p className="font-sans text-[13px] md:text-[14px] font-semibold text-[var(--accent)]">{project.result}</p>
                </div>
              </div>

              {/* Capabilities List (If available) */}
              {project.capabilitiesList && project.capabilitiesList.length > 0 && (
                <div>
                  <span className="eyebrow-label text-[11px] text-[var(--accent)] block mb-3 font-semibold">
                    KEY CAPABILITIES &amp; DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.capabilitiesList.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 p-2.5 rounded bg-[var(--bg)] border border-[var(--border-subtle)] font-sans text-[13px] text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Challenge & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <span className="eyebrow-label text-[11px] text-[var(--accent)] block mb-2 font-semibold">THE CHALLENGE</span>
                  <p className="font-sans text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-[1.7]">
                    {project.challenge || project.problem}
                  </p>
                </div>

                <div>
                  <span className="eyebrow-label text-[11px] text-[var(--accent)] block mb-2 font-semibold">OUR APPROACH</span>
                  <p className="font-sans text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-[1.7]">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* 4. What We Engineered */}
              <div>
                <span className="eyebrow-label text-[11px] text-[var(--accent)] block mb-3 font-semibold">WHAT WE ENGINEERED</span>
                <ul className="space-y-2.5">
                  {project.execution.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Outcome & Reflection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 md:p-6 rounded-[var(--radius-card)] bg-[var(--bg)] border border-[var(--border)]">
                  <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-2">OUTCOME</span>
                  <p className="font-sans text-[13px] md:text-[14px] text-[var(--text-primary)] leading-[1.7]">
                    {project.outcome}
                  </p>
                </div>

                <div className="p-5 md:p-6 rounded-[var(--radius-card)] bg-[var(--bg)] border border-[var(--border)] border-l-2 border-l-[var(--accent)]">
                  <span className="eyebrow-label text-[10px] text-[var(--text-tertiary)] block mb-2">REFLECTION</span>
                  <p className="font-serif italic text-[14px] md:text-[15px] text-[var(--text-primary)] leading-[1.6]">
                    &ldquo;{project.reflection}&rdquo;
                  </p>
                </div>
              </div>

              {/* 6. Technology Stack */}
              <div className="pb-2">
                <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)] block mb-3">TECHNOLOGY STACK</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[12px] px-3 py-1.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-[var(--text-tertiary)]">
              <p>Project not found.</p>
            </div>
          )}
        </div>

        {/* Persistent Bottom Bar: Fixed Previous & Next Controls (Always Visible) */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 md:px-7 py-2.5 md:py-3 border-t border-[var(--border)] bg-[var(--bg-surface)] font-mono text-[12px] z-20 min-h-[52px]">
          <button
            onClick={() => navigateToProject(prevProject.slug)}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer py-2 px-1 min-h-[44px]"
            aria-label={`Previous project: ${prevProject.name || prevProject.shortTitle}`}
          >
            <span aria-hidden="true">←</span>
            <span className="hidden sm:inline">{prevProject.name || prevProject.shortTitle}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <span className="font-mono text-[11px] text-[var(--text-tertiary)] px-2">
            {projectIndex + 1} / {projects.length}
          </span>

          <button
            onClick={() => navigateToProject(nextProject.slug)}
            className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold transition-colors cursor-pointer py-2 px-1 min-h-[44px]"
            aria-label={`Next project: ${nextProject.name || nextProject.shortTitle}`}
          >
            <span className="hidden sm:inline">{nextProject.name || nextProject.shortTitle}</span>
            <span className="sm:hidden">Next</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalEntrance {
          from {
            opacity: 0;
            transform: scale(0.97) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-entrance {
          animation: modalEntrance 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInContent {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fadeInContent 180ms ease-out forwards;
        }
      `}</style>
    </div>
  )
}
