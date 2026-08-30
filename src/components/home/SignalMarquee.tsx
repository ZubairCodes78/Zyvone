'use client'

import React from 'react'

// Minimal moving strip — capabilities signal
export function SignalMarquee() {
  const items = [
    'Digital Products',
    'Software Engineering',
    'AI Systems',
    'Web Experiences',
    'Automation',
    'Infrastructure',
    'Business Systems',
  ]

  return (
    <div
      className="border-y border-white/6 overflow-hidden select-none py-3.5"
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-white/28 uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-white/15 text-xs">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
