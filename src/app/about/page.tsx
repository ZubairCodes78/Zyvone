'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg pt-52 pb-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">ABOUT ZYVONE</p>
            <h1 className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              Built by founders.<br />
              <span className="font-display italic text-lime">For founders.</span>
            </h1>
            <p className="font-sans text-[19px] text-white/45 mt-6 max-w-lg leading-[1.75]">
              ZYVONE is not a typical agency. We are a digital company
              with a specific point of view on how modern businesses should be built.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary-bg py-28 px-6">
        <div className="max-w-[720px] mx-auto">
          <div ref={useReveal()}>
            <h2 className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              We build systems. Not deliverables.
            </h2>
            <p className="font-sans text-[18px] text-text-secondary leading-[1.8] mb-6">
              ZYVONE was founded by Zubair and Hashir — two builders who decided that the
              agency model was broken. Agencies sell time. Time doesn't compound. Systems do.
            </p>
            <p className="font-sans text-[18px] text-text-secondary leading-[1.8]">
              We take a small number of projects. We go deep on each one. We measure success
              by what changes in your business — not by what we deliver to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-primary-bg py-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">THE TEAM</p>
            <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              The people behind the work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Zubair */}
            <div ref={useReveal(100)} className="glass-card rounded-2xl p-12">
              <div className="w-16 h-16 rounded-full bg-primary-brand flex items-center justify-center mb-6">
                <span className="font-sans font-bold text-[28px] text-lime">Z</span>
              </div>
              <h3 className="font-sans font-bold text-[24px] text-white mb-1">Muhammad Zubair</h3>
              <p className="font-sans text-[14px] text-white/40 mb-5">Founder — Web Development & AI Systems</p>
              <p className="font-sans text-[16px] text-white/55 leading-[1.75]">
                Zubair builds the systems. Obsessed with AI automation, web architecture,
                and making businesses run without their founders having to babysit them.
              </p>
            </div>

            {/* Hashir */}
            <div ref={useReveal(150)} className="glass-card rounded-2xl p-12">
              <div className="w-16 h-16 rounded-full bg-primary-brand flex items-center justify-center mb-6">
                <span className="font-sans font-bold text-[28px] text-lime">H</span>
              </div>
              <h3 className="font-sans font-bold text-[24px] text-white mb-1">Hashir</h3>
              <p className="font-sans text-[14px] text-white/40 mb-5">Co-Founder — Creative Strategy & Brand</p>
              <p className="font-sans text-[16px] text-white/55 leading-[1.75]">
                Hashir ensures everything ZYVONE builds doesn't just work — it looks and
                feels like something worth trusting. The creative force behind every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-secondary-bg py-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">HOW WE WORK</p>
            <h2 className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Our principles.
            </h2>
          </div>

          <div className="max-w-[680px]">
            {[
              {
                num: '01',
                title: 'Systems over services',
                body: 'We build things that run without your constant involvement. That\'s the only definition of leverage.'
              },
              {
                num: '02',
                title: 'Precision over volume',
                body: 'We take fewer projects and go deeper. Quality is incompatible with an assembly line.'
              },
              {
                num: '03',
                title: 'Founders, not account managers',
                body: 'You work with Zubair and Hashir directly. Not a team assembled after you sign.'
              },
              {
                num: '04',
                title: 'Outcome over output',
                body: 'We measure success by what changes in your business — revenue, time recovered, systems running.'
              },
            ].map((principle, i) => (
              <div key={i} ref={useReveal(i * 100)} className="flex gap-6 py-8 border-b border-line-dark">
                <p className="font-sans font-bold text-[13px] text-text-muted min-w-[32px]">{principle.num}</p>
                <div>
                  <h3 className="font-sans font-semibold text-[20px] text-text-primary mb-1.5">{principle.title}</h3>
                  <p className="font-sans text-[16px] text-text-secondary leading-[1.7]">{principle.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-brand py-24 px-6 text-center">
        <div className="max-w-[1360px] mx-auto">
          <h2 ref={useReveal()} className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Work with us.
          </h2>
          <p ref={useReveal(100)} className="font-sans text-[18px] text-text-secondary mt-3">
            Let's figure out if we're the right fit.
          </p>
          <div ref={useReveal(200)}>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[14px] px-9 py-4 rounded-full mt-8 scale-[1.02] transition-all duration-200"
              style={{
                background: '#D4F53C',
                border: '1px solid #D4F53C',
                color: '#060B18',
                boxShadow: '0 4px 24px rgba(212,245,60,0.25)'
              }}>
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
