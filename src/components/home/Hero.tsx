'use client'

import React from 'react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-[130px] md:pt-[170px] pb-16 md:pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <div className="max-w-[var(--max-w-hero)] mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <p className="eyebrow-label mb-6 text-[12px] opacity-0 stagger-1">
          DIGITAL PRODUCT STUDIO · SOFTWARE & SYSTEMS
        </p>

        {/* Headline — Two distinct type treatments stacked in tight lockup with staggered reveal */}
        <h1 className="flex flex-col items-center tracking-tight leading-[1.02] mb-6">
          <span
            className="font-sans font-bold text-[var(--text-primary)] block opacity-0 stagger-2"
            style={{ fontSize: 'var(--fs-display)' }}
          >
            We build
          </span>
          <span
            className="font-display-accent block mt-[-2px] md:mt-[-6px] opacity-0 stagger-3"
            style={{ fontSize: 'calc(var(--fs-display) * 1.05)' }}
          >
            infrastructure.
          </span>
        </h1>

        {/* Proof line + positioning core line */}
        <p className="max-w-[var(--max-w-text)] font-sans text-[var(--text-secondary)] leading-[1.6] mb-10 text-[16px] md:text-[18px] opacity-0 stagger-4">
          ZYVONE engineers software systems, web platforms, and automated digital infrastructure for founders. We build systems. Not deliverables.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 stagger-5">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            <span>Start a project</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/work" className="btn-ghost w-full sm:w-auto">
            <span>View our work</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
