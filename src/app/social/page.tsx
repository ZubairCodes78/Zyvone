import React from 'react'
import type { Metadata } from 'next'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { agencySocials, founderSocials, coFounderSocials } from '@/lib/socials'

export const metadata: Metadata = {
  title: 'Connect',
  description: 'Connect with ZYVONE agency and our founders across official channels.',
  alternates: {
    canonical: 'https://zyvone.site/social',
  },
}

export default function SocialPage() {
  const companySocials = [
    {
      name: 'Instagram',
      handle: '@zyvone.official',
      url: agencySocials.instagram,
      desc: 'Behind the scenes, updates, and culture.',
      action: 'Follow',
    },
    {
      name: 'X (Twitter)',
      handle: '@zyvone12',
      url: agencySocials.x,
      desc: 'Industry insights and quick thoughts.',
      action: 'Follow',
    },
    {
      name: 'LinkedIn',
      handle: 'ZYVONE Limited',
      url: agencySocials.linkedin,
      desc: 'Company announcements and case studies.',
      action: 'Connect',
    },
  ]

  const founders = [
    {
      name: founderSocials.name,
      role: `${founderSocials.role} — ${founderSocials.spec}`,
      avatarInitial: 'Z',
      channels: [
        { name: 'Instagram', handle: '@zubair.zyvone', url: founderSocials.instagram },
        { name: 'LinkedIn', handle: '/in/zubair-zyvone', url: founderSocials.linkedin },
        { name: 'X', handle: '@ZubairAttari37', url: founderSocials.x },
        { name: 'GitHub', handle: 'ZubairCodes78', url: founderSocials.github },
      ],
    },
    {
      name: coFounderSocials.name,
      role: `${coFounderSocials.role} — ${coFounderSocials.spec}`,
      avatarInitial: 'H',
      channels: [
        { name: 'Instagram', handle: '@co.founder.zyvone', url: coFounderSocials.instagram },
        { name: 'X', handle: '@HashirAhmad327', url: coFounderSocials.x },
        { name: 'LinkedIn', handle: '/in/hashir-ahmad327', url: coFounderSocials.linkedin },
      ],
    },
  ]

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Header */}
      <section className="max-w-[var(--max-w-hero)] mb-16 md:mb-24 pb-12 border-b border-[var(--border)]">
        <span className="eyebrow-mono block mb-4 text-[var(--accent)]">CONNECT</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-[-0.02em] leading-[1.05] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Connect with ZYVONE
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Follow our work, track product releases, and connect directly with the agency and founders.
        </p>
      </section>

      {/* Section A: ZYVONE Company Row */}
      <RevealWrapper>
        <section className="mb-20 md:mb-28">
          <span className="eyebrow-mono block mb-6 text-[var(--accent)]">
            ZYVONE OFFICIAL AGENCY CHANNELS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companySocials.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`ZYVONE ${channel.name}`}
                className="card-surface p-6 flex flex-col justify-between group hover:border-[var(--accent)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-sans font-semibold text-[18px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-[200ms]">
                      {channel.name}
                    </h3>
                    <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all duration-[200ms]">
                      ↗
                    </span>
                  </div>
                  <p className="font-mono text-[12px] text-[var(--accent)] mb-2">
                    {channel.handle}
                  </p>
                  <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {channel.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] font-sans text-[12px] font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-[200ms]">
                  {channel.action} channel →
                </div>
              </a>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* Section B: Founders */}
      <RevealWrapper>
        <section>
          <span className="eyebrow-mono block mb-6 text-[var(--accent)]">
            FOUNDERS &amp; LEADERSHIP
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="card-surface p-6 md:p-8 flex flex-col justify-between hover:border-[var(--accent)] transition-all duration-300"
              >
                <div>
                  {/* Avatar + Name + Role */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[var(--border)]">
                    <div className="w-11 h-11 rounded-full bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-semibold text-[16px] flex-shrink-0 shadow-[0_0_10px_var(--accent-shadow)]">
                      {founder.avatarInitial}
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-[16px] text-[var(--text-primary)] leading-tight">
                        {founder.name}
                      </h3>
                      <p className="font-mono text-[11px] text-[var(--accent)] uppercase font-medium mt-0.5">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Specific Channels */}
                  <div className="space-y-3">
                    {founder.channels.map((ch) => (
                      <a
                        key={ch.name}
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} ${ch.name}`}
                        className="p-3.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] flex items-center justify-between transition-colors duration-[200ms] group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-sans font-medium text-[13px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                            {ch.name}
                          </span>
                          <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                            {ch.handle}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                          Connect ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
