import React from 'react'
import { Hero } from '@/components/home/Hero'
import { Capabilities } from '@/components/home/Capabilities'
import { WorkShowcase } from '@/components/home/WorkShowcase'
import { Process } from '@/components/home/Process'
import { TeamTeaser } from '@/components/home/TeamTeaser'
import { FinalCTA } from '@/components/home/FinalCTA'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export default function Home() {
  return (
    <>
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
