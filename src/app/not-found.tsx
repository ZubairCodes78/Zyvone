import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-[140px] md:pt-[200px] pb-32 px-6 md:px-12 text-center max-w-[var(--max-w-hero)] mx-auto flex flex-col items-center">
      <span className="eyebrow-mono mb-4 text-[12px] text-[var(--accent)]">
        404 // NOT FOUND
      </span>

      <h1
        className="font-sans font-semibold text-[var(--text-primary)] tracking-[-0.02em] leading-[1.05] mb-6"
        style={{ fontSize: 'var(--fs-h1)' }}
      >
        System Not Found
      </h1>

      <p className="font-sans text-[var(--text-secondary)] text-[16px] md:text-[18px] leading-relaxed max-w-[480px] mb-10">
        The requested system route does not exist or has been relocated to a new canonical address.
      </p>

      <div className="btn-row justify-center">
        <Link href="/" className="btn-primary">
          <span>Return to Homepage</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/capabilities" className="btn-ghost">
          <span>Explore Capabilities</span>
        </Link>
      </div>
    </div>
  )
}
