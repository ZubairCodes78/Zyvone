import React from 'react'
import Link from 'next/link'
import { founderSocials, coFounderSocials } from '@/lib/socials'

export function TeamTeaser() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto border-t border-[var(--border)]">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <span className="eyebrow-mono block mb-3 text-[var(--accent)]">
            THE PEOPLE BEHIND ZYVONE
          </span>
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.12]"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            BUILT BY PEOPLE.{' '}
            <span className="font-display-accent block sm:inline">
              DESIGNED FOR WHAT&apos;S NEXT.
            </span>
          </h2>
        </div>
        <Link
          href="/about"
          className="btn-ghost inline-flex items-center gap-2 self-start lg:self-auto group"
        >
          <span>Meet the team</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Founder Teaser Card */}
        <Link
          href="/about"
          className="card-surface p-6 md:p-8 flex items-center justify-between group transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-shadow)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-semibold text-[16px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              Z
            </div>
            <div>
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                {founderSocials.name}
              </h3>
              <p className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider">
                {founderSocials.role}
              </p>
            </div>
          </div>
          <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* Co-Founder Teaser Card */}
        <Link
          href="/about"
          className="card-surface p-6 md:p-8 flex items-center justify-between group transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-shadow)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-semibold text-[16px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <div>
              <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                {coFounderSocials.name}
              </h3>
              <p className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider">
                {coFounderSocials.role}
              </p>
            </div>
          </div>
          <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
