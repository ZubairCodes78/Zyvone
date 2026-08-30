import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
      <div className="max-w-[var(--max-w-content)] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Top Two-Row / Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border)]">
          {/* Left Block */}
          <div className="md:col-span-6 flex flex-col justify-start">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3 group focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded">
              <Image
                src="/favicon.png"
                alt="ZYVONE"
                width={28}
                height={28}
                className="transition-opacity group-hover:opacity-80"
              />
              <span className="font-sans font-bold text-[18px] tracking-[0.05em] text-[var(--text-primary)]">
                ZYVONE
              </span>
            </Link>
            <p className="font-sans text-[14px] text-[var(--text-tertiary)] max-w-[320px] leading-relaxed">
              Building systems. Not deliverables.
            </p>
          </div>

          {/* Right Block — Social Handles */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-start">
            <span className="eyebrow-mono mb-4 text-[11px]">Connect With Us</span>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://www.instagram.com/zyvone.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="ZYVONE Instagram"
              >
                <span>Instagram</span>
                <span className="text-[var(--text-tertiary)]">↗</span>
              </a>
              <a
                href="https://x.com/zyvone12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="ZYVONE X (formerly Twitter)"
              >
                <span>X</span>
                <span className="text-[var(--text-tertiary)]">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zyvone-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="ZYVONE LinkedIn"
              >
                <span>LinkedIn</span>
                <span className="text-[var(--text-tertiary)]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 py-10 border-b border-[var(--border)]">
          {/* Column A */}
          <div className="md:col-span-6">
            <span className="eyebrow-mono mb-4 block text-[11px]">Overview</span>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              <li>
                <Link href="/work" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/story" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/journal" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column B */}
          <div className="md:col-span-6 md:flex md:flex-col md:items-end">
            <div className="md:w-full md:max-w-[340px]">
              <span className="eyebrow-mono mb-4 block text-[11px] md:text-right">Company & Legal</span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5 md:justify-end">
                <li>
                  <Link href="/social" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Social
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="font-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[12px] text-[var(--text-tertiary)]">
          <p>© 2026 ZYVONE</p>
          <p>Made by ZYVONE internally.</p>
        </div>
      </div>
    </footer>
  )
}
