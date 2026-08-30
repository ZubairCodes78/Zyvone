'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/articles'

export default function ArticleReadingClient({
  article,
  related,
}: {
  article: Article
  related: Article[]
}) {
  return (
    <div className="max-w-[var(--max-w-hero)] mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/journal"
          className="font-mono text-[12px] text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Header: Category chip + title (h1) + subtitle + byline + date + reading time */}
      <header className="mb-12 pb-8 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]">
            {article.category}
          </span>
          <span className="text-[var(--text-disabled)]">·</span>
          <span className="font-mono text-[12px] text-[var(--text-tertiary)]">{article.date}</span>
          <span className="text-[var(--text-disabled)]">·</span>
          <span className="font-mono text-[12px] text-[var(--text-tertiary)]">{article.readTime} min read</span>
        </div>

        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-[-0.02em] leading-[1.05] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          {article.title}
        </h1>

        <p className="font-sans text-[var(--text-secondary)] text-[18px] md:text-[20px] leading-[1.6]">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--border)]">
          <div className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center font-mono text-[12px] font-bold">
            Z
          </div>
          <div>
            <span className="font-sans font-semibold text-[13px] text-[var(--text-primary)] block">
              ZYVONE Engineering Team
            </span>
            <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
              Architecture & Systems Research
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image: 16/9 */}
      <div className="relative w-full aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border)] mb-14">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 840px) 100vw, 840px"
        />
      </div>

      {/* Body: Max-W-Text 720px */}
      <article className="max-w-[var(--max-w-text)] mx-auto space-y-8 mb-20">
        {article.content.map((sec, idx) => {
          if (sec.type === 'heading') {
            return (
              <h2
                key={idx}
                className="font-sans font-semibold text-[var(--text-primary)] tracking-[-0.015em] pt-8"
                style={{ fontSize: 'var(--fs-h3)' }}
              >
                {sec.content as string}
              </h2>
            )
          }

          if (sec.type === 'list' && Array.isArray(sec.content)) {
            return (
              <ul key={idx} className="space-y-3 py-2 pl-2">
                {sec.content.map((item, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-3 font-sans text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-[1.7]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          }

          if (sec.type === 'quote') {
            return (
              <div key={idx} className="my-10 p-6 rounded-xl bg-[var(--bg-elevated)] border-l-2 border-[var(--accent)]">
                <p className="font-serif italic text-[18px] md:text-[20px] text-[var(--text-primary)] leading-[1.5]">
                  &ldquo;{sec.content as string}&rdquo;
                </p>
              </div>
            )
          }

          return (
            <p key={idx} className="font-sans text-[16px] md:text-[17px] text-[var(--text-secondary)] leading-[1.75]">
              {sec.content as string}
            </p>
          )
        })}

        {/* Optional Pull Quote (1 max, serif italic) */}
        {article.pullQuote && (
          <div className="my-12 py-8 border-y border-[var(--border)] text-center px-4">
            <p className="font-serif italic text-[20px] md:text-[24px] text-[var(--text-primary)] leading-[1.45] max-w-[620px] mx-auto">
              &ldquo;{article.pullQuote}&rdquo;
            </p>
          </div>
        )}
      </article>

      {/* End-of-Article Author Card (compact) */}
      <div className="max-w-[var(--max-w-text)] mx-auto p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] mb-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--border-strong)] text-[var(--accent)] flex items-center justify-center font-mono font-bold text-[18px] flex-shrink-0">
            Z
          </div>
          <div>
            <h3 className="font-sans font-semibold text-[16px] text-[var(--text-primary)]">
              ZYVONE Engineering
            </h3>
            <p className="font-sans text-[13px] text-[var(--text-secondary)]">
              We design and ship digital systems, software infrastructure, and practical AI automation.
            </p>
          </div>
        </div>
        <Link href="/contact" className="btn-ghost text-[12px] whitespace-nowrap flex-shrink-0">
          <span>Discuss scope →</span>
        </Link>
      </div>

      {/* "Read next" 2-Up Grid */}
      {related.length > 0 && (
        <section className="pt-12 border-t border-[var(--border)]">
          <span className="eyebrow-mono block mb-6">READ NEXT</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.slice(0, 2).map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="p-6 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase text-[var(--accent)]">
                    <span>{rel.category}</span>
                    <span className="text-[var(--text-disabled)]">·</span>
                    <span className="text-[var(--text-tertiary)]">{rel.readTime} min read</span>
                  </div>
                  <h4 className="font-sans font-semibold text-[18px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="font-sans text-[13px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-sans text-[12px] text-[var(--accent)] inline-flex items-center gap-1.5">
                  <span>Read article</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
