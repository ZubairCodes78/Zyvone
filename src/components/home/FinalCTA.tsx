import React from 'react'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-[var(--max-w-content)] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
        <div className="max-w-[640px]">
          <span className="eyebrow-label block mb-3">BUILD WITH ZYVONE</span>
          <h2
            className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-4"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Serious about building systems that compound?
          </h2>
          <p className="font-sans text-[16px] text-[var(--text-secondary)] leading-[1.6]">
            We architect, engineer, and deploy software platforms and automated digital infrastructure that eliminate operational drag and scale without limits.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            <span>Start a project</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/story" className="btn-ghost w-full sm:w-auto">
            <span>Read our story</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
