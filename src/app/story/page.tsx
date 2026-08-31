'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

const chapters = [
  {
    year: '2021',
    chapter: 'CHAPTER 01',
    title: 'Two friends. One laptop. Fiverr.',
    body: 'It started with necessity and curiosity. Zubair and Hashir were university friends with more ambition than capital. Fiverr was the initial launchpad — taking on small frontend fixes, debugging scripts, and rapid client prototypes.',
    image: '/images/story/chapter-1-freelance.svg',
  },
  {
    year: '2022',
    chapter: 'CHAPTER 02',
    title: 'Every project was a lesson we paid for.',
    body: 'The first year taught us how standard agency projects fail. We saw clients receive deliverables that broke as soon as traffic scaled. We realized that selling linear hours created fragile outputs rather than compounding leverage.',
    image: '/images/story/chapter-2-architecture.svg',
  },
  {
    year: '2023',
    chapter: 'CHAPTER 03',
    title: 'Stop selling time. Start building systems.',
    body: 'We made a deliberate architectural pivot: reject one-off disposable tasks and only engineer permanent digital infrastructure. We began implementing edge computing, automated pipelines, and full-stack custom solutions.',
    image: '/images/story/chapter-3-systems.svg',
  },
  {
    year: '2025',
    chapter: 'CHAPTER 04',
    title: 'The shift to enterprise software and platforms.',
    body: 'We scaled production with flagship platforms — Toolmatic, PDFMaster, healthcare systems for Cantt Dental Care, and industrial machinery catalogs for Al Raheem Engineering — validating our systems-first doctrine.',
    image: '/images/story/chapter-4-enterprise.svg',
  },
  {
    year: '2026',
    chapter: 'CHAPTER 05',
    title: 'ZYVONE — A digital company for serious builders.',
    body: 'ZYVONE stands as an integrated digital product studio. We partner with ambitious founders worldwide to design, engineer, and deploy the software systems, platforms, and commerce engines their businesses run on.',
    image: '/images/story/chapter-5-zyvone-range.svg',
  },
]

export default function StoryPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeChapterIdx, setActiveChapterIdx] = useState(0)

  const timelineRef = useRef<HTMLDivElement>(null)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScroll = useCallback(() => {
    const section = timelineRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    // Progress calculation strictly bounded between top threshold (180px) and end of section
    const topThreshold = 180
    const scrollableDistance = rect.height - viewportHeight * 0.4
    const scrolled = topThreshold - rect.top
    const progress = Math.min(Math.max(scrolled / (scrollableDistance || 1), 0), 1)
    setScrollProgress(progress)

    // Active chapter determination based on card center distance to viewport focus line
    const focusY = viewportHeight * 0.38
    let minDistance = Infinity
    let activeIdx = 0

    chapterRefs.current.forEach((ref, idx) => {
      if (!ref) return
      const cardRect = ref.getBoundingClientRect()
      const cardCenter = cardRect.top + cardRect.height / 2
      const dist = Math.abs(cardCenter - focusY)
      if (dist < minDistance) {
        minDistance = dist
        activeIdx = idx
      }
    })

    setActiveChapterIdx(activeIdx)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToChapter = (idx: number) => {
    const ref = chapterRefs.current[idx]
    if (ref) {
      const y = ref.getBoundingClientRect().top + window.scrollY - 160
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Header */}
      <section className="max-w-[var(--max-w-hero)] mb-12 md:mb-16 pb-8 border-b border-[var(--border)]">
        <span className="eyebrow-mono block mb-4">OUR STORY</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          From college friends to{' '}
          <span className="font-display-accent">digital company.</span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.7]">
          The real story — no success theater, no manufactured origin myth. Just what actually happened and what we learned building systems.
        </p>
      </section>

      {/* Timeline Section with Non-Overlapping Vertical Side Rail */}
      <section ref={timelineRef} className="relative mb-20 md:mb-28">
        
        {/* Main Layout: Rail Column + Chapter Cards Column */}
        <div className="flex gap-6 lg:gap-12 relative">

          {/* ── DESKTOP: Vertical Side Rail Column (Width: 100px) ────────────────── */}
          <div className="hidden lg:block w-[100px] flex-shrink-0 relative select-none" aria-hidden="true">
            <div className="sticky top-[170px] py-2">
              <div className="relative flex flex-col items-start justify-between h-[360px]">
                
                {/* Fixed Vertical Line Track (positioned at left: 72px) */}
                <div className="absolute top-3 bottom-3 left-[72px] -translate-x-1/2 w-[2px] bg-[var(--border-strong)] rounded-full z-0" />

                {/* Real-time Lime Progress Fill Line */}
                <div
                  className="absolute top-3 left-[72px] -translate-x-1/2 w-[2px] bg-[var(--accent)] rounded-full z-0 story-timeline-fill"
                  style={{ height: `calc(${scrollProgress * 100}% * 0.93)` }}
                />

                {/* Year Nodes Array */}
                {chapters.map((ch, idx) => {
                  const nodeRatio = idx / (chapters.length - 1)
                  const isPassed = scrollProgress >= nodeRatio && idx <= activeChapterIdx
                  const isActive = activeChapterIdx === idx

                  return (
                    <div
                      key={ch.year}
                      onClick={() => scrollToChapter(idx)}
                      className="relative z-10 flex items-center w-full cursor-pointer group py-1"
                    >
                      {/* Left Column: Year Text Label (52px wide, right-aligned, 20px gap to line) */}
                      <div className="w-[52px] text-right pr-4">
                        <span
                          className="font-mono text-[13px] font-semibold transition-all duration-300 inline-block"
                          style={{
                            color: isActive
                              ? 'var(--accent)'
                              : isPassed
                              ? 'var(--accent)'
                              : 'var(--text-tertiary)',
                            opacity: isActive ? 1 : isPassed ? 0.75 : 0.35,
                          }}
                        >
                          {ch.year}
                        </span>
                      </div>

                      {/* Right Column: Centered Dot over the Line (40px wide container, center at 72px) */}
                      <div className="w-[40px] flex items-center justify-center">
                        <div
                          className="rounded-full story-dot flex-shrink-0"
                          style={{
                            width: isActive ? '16px' : '8px',
                            height: isActive ? '16px' : '8px',
                            background: isActive
                              ? 'var(--accent)'
                              : isPassed
                              ? 'var(--accent)'
                              : 'var(--border-strong)',
                            border: isActive ? '3px solid var(--bg)' : 'none',
                            boxShadow: isActive
                              ? '0 0 0 4px rgba(200,237,53,0.18), 0 0 16px rgba(200,237,53,0.38)'
                              : 'none',
                            transition: 'width 300ms ease, height 300ms ease, background 300ms ease, box-shadow 300ms ease',
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ── MOBILE: Left-Edge Vertical Progress Line ──────────────────── */}
          <div className="lg:hidden absolute left-1.5 top-2 bottom-2 w-[2px] pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-[var(--border-strong)] rounded-full" />
            <div
              className="absolute top-0 left-0 w-[2px] bg-[var(--accent)] rounded-full story-timeline-fill"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* ── Chapter Cards Column ──────────────────────────────────────── */}
          <div className="flex-1 space-y-10 md:space-y-12 pl-6 lg:pl-0">
            {chapters.map((ch, idx) => {
              const isImageLeft = idx % 2 === 1
              const isActive = activeChapterIdx === idx

              return (
                <div
                  key={ch.year}
                  ref={(el) => { chapterRefs.current[idx] = el }}
                >
                  <RevealWrapper delay={idx * 55}>
                    <div className="card-surface p-6 md:p-10">

                      {/* Desktop 2-Column Grid Inside Card */}
                      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
                        <div className={`lg:col-span-8 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className="font-mono text-[15px] font-semibold transition-colors duration-300"
                              style={{ color: 'var(--accent)', opacity: isActive ? 1 : 0.65 }}
                            >
                              {ch.year}
                            </span>
                            <span className="text-[var(--text-disabled)]">/</span>
                            <span className="eyebrow-mono text-[11px] text-[var(--text-tertiary)]">{ch.chapter}</span>
                          </div>
                          <h2
                            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-4"
                            style={{ fontSize: 'var(--fs-h3)' }}
                          >
                            {ch.title}
                          </h2>
                          <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.75]">
                            {ch.body}
                          </p>
                        </div>

                        {ch.image && (
                          <div className={`lg:col-span-4 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                            <div className="relative aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] border border-[var(--border)]">
                              <Image
                                src={ch.image}
                                alt={`${ch.year} — ${ch.chapter}`}
                                fill
                                className="object-cover object-top transition-transform duration-[250ms] ease-out hover:scale-[1.02]"
                                sizes="(max-width: 1024px) 100vw, 320px"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Mobile Stacked Layout */}
                      <div className="lg:hidden">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="font-mono text-[14px] font-semibold"
                            style={{ color: 'var(--accent)', opacity: isActive ? 1 : 0.6, transition: 'opacity 300ms ease-out' }}
                          >
                            {ch.year}
                          </span>
                          <span className="text-[var(--text-disabled)] text-sm">/</span>
                          <span className="eyebrow-mono text-[10px] text-[var(--text-tertiary)]">{ch.chapter}</span>
                        </div>

                        {ch.image && (
                          <div className="relative w-full aspect-[16/9] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)] border border-[var(--border)] mb-4">
                            <Image
                              src={ch.image}
                              alt={`${ch.year} — ${ch.chapter}`}
                              fill
                              className="object-cover object-top"
                              sizes="100vw"
                            />
                          </div>
                        )}

                        <h2
                          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-3"
                          style={{ fontSize: 'var(--fs-h3)' }}
                        >
                          {ch.title}
                        </h2>
                        <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-[1.75]">
                          {ch.body}
                        </p>
                      </div>

                    </div>
                  </RevealWrapper>
                </div>
              )
            })}
          </div>

        </div>

      </section>

      {/* Founder Quote & Bottom CTA */}
      <RevealWrapper>
        <section className="text-center p-10 md:p-14 rounded-[var(--radius-card)] bg-[var(--bg-elevated)] border border-[var(--border)]">
          <p className="font-sans text-[20px] md:text-[24px] text-[var(--text-primary)] mb-4 max-w-[620px] mx-auto leading-[1.4]">
            &ldquo;The story isn&apos;t finished. This is just where we are.&rdquo;
          </p>
          <p className="eyebrow-mono text-[11px] text-[var(--text-tertiary)] mb-8 font-semibold">
            — MUHAMMAD ZUBAIR, FOUNDER
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Build with us</span>
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </RevealWrapper>

      <style jsx global>{`
        .story-timeline-fill {
          will-change: height;
          transform: translateZ(0);
        }
        .story-dot {
          will-change: width, height, box-shadow;
          transform: translateZ(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .story-timeline-fill {
            transition: none !important;
            will-change: auto;
          }
          .story-dot {
            transition: none !important;
            width: 8px !important;
            height: 8px !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  )
}
