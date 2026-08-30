'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/articles'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export default function JournalPage() {
  const featured = articles[0]
  const restArticles = articles.slice(1)

  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [cursorY, setCursorY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorY(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Header */}
      <section className="max-w-[var(--max-w-hero)] mb-16 md:mb-20 pb-10 border-b border-[var(--border)]">
        <span className="eyebrow-label block mb-4">JOURNAL</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Thinking in public.
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Observations, technical blueprints, and operational frameworks from engineering digital systems.
        </p>
      </section>

      {/* Featured Article Hero (Image + larger type) */}
      {featured && (
        <RevealWrapper>
          <section className="mb-20 md:mb-24">
            <div className="card-surface p-6 md:p-10 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Cover Image */}
                <div className="lg:col-span-7">
                  <Link href={`/journal/${featured.slug}`} className="block">
                    <div className="relative w-full aspect-[16/9] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg)]">
                      <Image
                        src={featured.heroImage}
                        alt={featured.title}
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </Link>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="eyebrow-label text-[11px] text-[var(--accent)]">{featured.category}</span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="font-mono text-[12px] text-[var(--text-tertiary)]">{featured.date}</span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="font-mono text-[12px] text-[var(--text-tertiary)]">{featured.readTime} min read</span>
                  </div>

                  <Link href={`/journal/${featured.slug}`}>
                    <h2
                      className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-tight mb-4 group-hover:text-[var(--accent)] transition-colors"
                      style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
                    >
                      {featured.title}
                    </h2>
                  </Link>

                  <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65] mb-8">
                    {featured.excerpt}
                  </p>

                  <div>
                    <Link
                      href={`/journal/${featured.slug}`}
                      className="btn-primary"
                    >
                      <span>Read essay</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>
      )}

      {/* Floating Cursor Y Follower Image (Desktop fine pointer only) */}
      <div
        className="pointer-preview hidden fixed right-12 z-30 w-[240px] h-[150px] rounded-[var(--radius-card)] overflow-hidden border border-[var(--border-strong)] shadow-2xl bg-[var(--bg)] pointer-events-none transition-opacity duration-[150ms] ease-out"
        style={{
          top: `${cursorY - 75}px`,
          opacity: hoveredImage ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {hoveredImage && (
          <Image
            src={hoveredImage}
            alt=""
            fill
            className="object-cover"
            sizes="240px"
          />
        )}
      </div>

      {/* Articles List */}
      <RevealWrapper>
        <section className="mb-20 md:mb-24">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border)]">
            <span className="eyebrow-label text-[11px]">ALL ESSAYS</span>
            <span className="font-mono text-[12px] text-[var(--text-tertiary)]">{articles.length} ESSAYS</span>
          </div>

          <div className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
            {restArticles.map((article) => (
              <div
                key={article.slug}
                onMouseEnter={() => setHoveredImage(article.heroImage)}
                onMouseLeave={() => setHoveredImage(null)}
                className="py-8 md:py-9 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                {/* Left / Main Column */}
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 max-w-[800px]">
                  {/* Thumbnail Image (Visible on mobile & stacked) */}
                  <div className="relative w-full sm:w-[160px] aspect-[16/10] sm:aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] flex-shrink-0">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="eyebrow-label text-[11px] text-[var(--accent)]">{article.category}</span>
                      <span className="text-[var(--text-disabled)]">·</span>
                      <span className="font-mono text-[11px] text-[var(--text-tertiary)]">{article.date}</span>
                      <span className="text-[var(--text-disabled)]">·</span>
                      <span className="font-mono text-[11px] text-[var(--text-tertiary)]">{article.readTime} min read</span>
                    </div>

                    <Link href={`/journal/${article.slug}`}>
                      <h3
                        className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: 'var(--fs-h3)' }}
                      >
                        {article.title}
                      </h3>
                    </Link>

                    <p className="font-sans text-[14px] text-[var(--text-secondary)] leading-relaxed line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/journal/${article.slug}`}
                      className="font-sans font-semibold text-[13px] text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Read essay</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* Dedicated CTA Band */}
      <RevealWrapper>
        <section className="text-center p-10 md:p-14 rounded-[var(--radius-card)] bg-[var(--bg-elevated)] border border-[var(--border)]">
          <h2 className="font-sans font-semibold text-[24px] md:text-[32px] text-[var(--text-primary)] mb-3 tracking-tight">
            Have something to build?
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] mb-8 max-w-[480px] mx-auto leading-relaxed">
            Let&apos;s talk about what you&apos;re trying to build and how to engineer it for leverage.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Start a conversation</span>
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </RevealWrapper>

      <style jsx global>{`
        @media (pointer: fine) and (min-width: 1024px) {
          .pointer-preview {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
