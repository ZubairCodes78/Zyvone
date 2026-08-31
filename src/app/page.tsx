import React from 'react'
import { Hero } from '@/components/home/Hero'
import { Capabilities } from '@/components/home/Capabilities'
import { WorkShowcase } from '@/components/home/WorkShowcase'
import { Process } from '@/components/home/Process'
import { TeamTeaser } from '@/components/home/TeamTeaser'
import { FinalCTA } from '@/components/home/FinalCTA'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZYVONE',
    url: 'https://zyvone.site',
    description:
      'ZYVONE is a digital product studio and software technology company building SaaS products, web applications, AI systems, and automated infrastructure.',
    publisher: {
      '@type': 'Organization',
      name: 'ZYVONE',
      url: 'https://zyvone.site',
      logo: 'https://zyvone.site/favicon.png',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* SECTION 01 — HERO */}
      <Hero />

      {/* SECTION 02 — CAPABILITIES */}
      <RevealWrapper>
        <Capabilities />
      </RevealWrapper>

      {/* SECTION 03 — SELECTED WORK */}
      <RevealWrapper>
        <WorkShowcase />
      </RevealWrapper>

      {/* SECTION 04 — PROCESS / PHILOSOPHY */}
      <RevealWrapper>
        <Process />
      </RevealWrapper>

      {/* SECTION 05 — TEAM */}
      <RevealWrapper>
        <TeamTeaser />
      </RevealWrapper>

      {/* SECTION 06 — FINAL CTA */}
      <RevealWrapper>
        <FinalCTA />
      </RevealWrapper>
    </>
  )
}
