'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { ToolmaticVisual, PDFMasterVisual, CanttDentalVisual } from '@/components/ProjectVisuals'

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-primary-bg relative min-h-screen flex flex-col items-center justify-center pt-[200px] pb-32 px-6">
        {/* Subtle dot grid texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #D4F53C 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
        
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">
            Digital Company — Systems · Products · Experiences
          </p>
          
          <h1 className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(64px, 8vw, 100px)' }}>
            We build<br />
            <span className="font-display italic text-lime">infrastructure.</span>
          </h1>
          
          <p className="font-sans text-[19px] text-white/50 leading-[1.75] max-w-[560px] mx-auto">
            ZYVONE builds the systems, products, and digital experiences
            serious companies run on. Not deliverables — infrastructure.
          </p>
          
          <div className="flex gap-4 justify-center mt-10">
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[14px] px-7 py-3.5 rounded-full scale-[1.02] transition-all duration-200"
              style={{
                background: '#D4F53C',
                border: '1px solid #D4F53C',
                color: '#060B18',
                boxShadow: '0 4px 24px rgba(212,245,60,0.25)'
              }}>
              Start a project →
            </Link>
            <Link href="/work"
              className="border border-glass-border text-white/70 hover:text-white hover:border-glass-hover text-[14px] px-7 py-3.5 rounded-full transition-all duration-200">
              View our work
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-white/0 to-lime/50 animate-pulse" />
          <p className="text-[10px] text-white/30 uppercase tracking-widest mt-2">scroll</p>
        </div>
      </section>

      {/* SECTION 2 — MARQUEE TRUST BAR */}
      <section className="border-y border-line-dark bg-secondary-bg py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-sans text-[14px] font-medium text-white/25 uppercase tracking-widest">TECHCORP</span>
              <span className="text-lime">◆</span>
              <span className="font-sans text-[14px] font-medium text-white/25 uppercase tracking-widest">DATAFLOW</span>
              <span className="text-lime">◆</span>
              <span className="font-sans text-[14px] font-medium text-white/25 uppercase tracking-widest">CLOUDBASE AI</span>
              <span className="text-lime">◆</span>
              <span className="font-sans text-[14px] font-medium text-white/25 uppercase tracking-widest">GROWTHCO</span>
              <span className="text-lime">◆</span>
              <span className="font-sans text-[14px] font-medium text-white/25 uppercase tracking-widest">NEXUS LABS</span>
              <span className="text-lime">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — SELECTED WORK */}
      <section className="bg-primary-bg py-32 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-4">SELECTED WORK</p>
            <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Built to last.
            </h2>
          </div>

          <div className="space-y-8">
            {/* Work Card 1 - Toolmatic */}
            <div ref={useReveal(100)} className="rounded-2xl overflow-hidden glass-card hover:border-lime/20 hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60%] bg-surface h-[360px] relative overflow-hidden">
                  <ToolmaticVisual height={360} />
                </div>
                <div className="md:w-[40%] p-12 flex flex-col justify-center">
                  <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-3">AI Tools Platform</p>
                  <h3 className="font-sans font-bold text-[28px] text-white mb-3">Toolmatic — AI Tools Platform</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7] mb-6 max-w-[340px]">
                    Built a complete platform of free AI SEO tools and calculators. Live and growing.
                  </p>
                  <p className="font-sans font-bold text-[48px] text-lime">Live</p>
                  <p className="font-sans text-[13px] text-white/40 mt-1">Platform</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Link href="/work/toolmatic" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View case study →
                    </Link>
                    <span className="text-white/20">|</span>
                    <a href="https://toolmatic.site" target="_blank" rel="noopener noreferrer" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View live →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Card 2 - PDFMaster */}
            <div ref={useReveal(200)} className="rounded-2xl overflow-hidden glass-card hover:border-lime/20 hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-[40%] bg-surface h-[360px] relative overflow-hidden">
                  <PDFMasterVisual height={360} />
                </div>
                <div className="md:w-[60%] p-12 flex flex-col justify-center">
                  <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-3">PDF & Document Tools</p>
                  <h3 className="font-sans font-bold text-[28px] text-white mb-3">PDFMaster — Document Suite</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7] mb-6 max-w-[340px]">
                    Full suite of PDF tools — merge, split, compress, convert. No sign-up. Instant.
                  </p>
                  <p className="font-sans font-bold text-[48px] text-lime">50+</p>
                  <p className="font-sans text-[13px] text-white/40 mt-1">Tools Built</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Link href="/work/pdfmaster" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View case study →
                    </Link>
                    <span className="text-white/20">|</span>
                    <a href="https://pdfmaster.site" target="_blank" rel="noopener noreferrer" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View live →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Card 3 - Cantt Dental Care */}
            <div ref={useReveal(300)} className="rounded-2xl overflow-hidden glass-card hover:border-lime/20 hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60%] bg-surface h-[360px] relative overflow-hidden">
                  <CanttDentalVisual height={360} />
                </div>
                <div className="md:w-[40%] p-12 flex flex-col justify-center">
                  <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-3">Healthcare</p>
                  <h3 className="font-sans font-bold text-[28px] text-white mb-3">Cantt Dental Care</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7] mb-6 max-w-[340px]">
                    Clinic website with appointment system and full local SEO. Ranking #1 locally.
                  </p>
                  <p className="font-sans font-bold text-[48px] text-lime">#1</p>
                  <p className="font-sans text-[13px] text-white/40 mt-1">Local Ranking</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Link href="/work/cantt-dental-care" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View case study →
                    </Link>
                    <span className="text-white/20">|</span>
                    <a href="https://canttdentalcare.com" target="_blank" rel="noopener noreferrer" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View live →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={useReveal(400)} className="text-center mt-16">
            <Link href="/work" className="font-sans text-[15px] font-medium text-white/40 hover:text-white transition-colors">
              See all work →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE BUILD */}
      <section id="services" className="bg-secondary-bg py-32 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-4">WHAT WE BUILD</p>
            <h2 className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Four capabilities. One company.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Service Card 1 */}
            <div ref={useReveal(100)} className="glass-card rounded-2xl p-10 hover:border-lime/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:translate-y-[-3px] transition-all duration-300">
              <p className="font-sans font-bold text-[13px] text-text-muted mb-6">01</p>
              <h3 className="font-sans font-bold text-[22px] text-text-primary mb-3">AI Automation</h3>
              <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mb-8 max-w-[320px]">
                Replace the manual layer in your business with intelligent systems that run 24/7.
              </p>
              <Link href="/services/automation" className="font-sans text-lime font-semibold text-[13px] hover:underline">
                Explore →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div ref={useReveal(150)} className="glass-card rounded-2xl p-10 hover:border-lime/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:translate-y-[-3px] transition-all duration-300">
              <p className="font-sans font-bold text-[13px] text-text-muted mb-6">02</p>
              <h3 className="font-sans font-bold text-[22px] text-text-primary mb-3">Web Development</h3>
              <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mb-8 max-w-[320px]">
                Architecture-first websites that convert, rank, and scale. Not templates.
              </p>
              <Link href="/services/web" className="font-sans text-lime font-semibold text-[13px] hover:underline">
                Explore →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div ref={useReveal(200)} className="glass-card rounded-2xl p-10 hover:border-lime/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:translate-y-[-3px] transition-all duration-300">
              <p className="font-sans font-bold text-[13px] text-text-muted mb-6">03</p>
              <h3 className="font-sans font-bold text-[22px] text-text-primary mb-3">AI Content</h3>
              <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mb-8 max-w-[320px]">
                Full content pipelines: strategy, creation, distribution — automated and on-brand.
              </p>
              <Link href="/services/content" className="font-sans text-lime font-semibold text-[13px] hover:underline">
                Explore →
              </Link>
            </div>

            {/* Service Card 4 */}
            <div ref={useReveal(250)} className="glass-card rounded-2xl p-10 hover:border-lime/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:translate-y-[-3px] transition-all duration-300">
              <p className="font-sans font-bold text-[13px] text-text-muted mb-6">04</p>
              <h3 className="font-sans font-bold text-[22px] text-text-primary mb-3">Growth & Marketing</h3>
              <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mb-8 max-w-[320px]">
                Multi-channel lead generation systems that compound over time.
              </p>
              <Link href="/services/marketing" className="font-sans text-lime font-semibold text-[13px] hover:underline">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE ZYVONE DIFFERENCE */}
      <section className="bg-primary-bg py-32 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()} className="max-w-[760px] mx-auto text-center mb-20">
            <p className="font-display italic text-white/70 leading-[1.4]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Very few companies build infrastructure instead of deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Typical Agency */}
            <div ref={useReveal(100)} className="glass-card rounded-2xl p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <p className="font-sans text-[11px] font-medium text-white/20 uppercase tracking-widest">TYPICAL AGENCY</p>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-sans text-white/20">×</span>
                  <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Sells you a website that needs constant updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-sans text-white/20">×</span>
                  <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Disappears after launch</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-sans text-white/20">×</span>
                  <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Measures success by deliverables, not outcomes</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-sans text-white/20">×</span>
                  <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Requires your daily involvement to function</span>
                </li>
              </ul>
            </div>

            {/* ZYVONE */}
            <div ref={useReveal(150)} className="glass-card border border-lime/20 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{
                background: 'radial-gradient(circle, rgba(212,245,60,0.4) 0%, transparent 70%)'
              }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-widest">ZYVONE</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-sans text-lime">→</span>
                    <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Builds systems that run without your intervention</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-sans text-lime">→</span>
                    <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Stays — monitoring, refining, supporting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-sans text-lime">→</span>
                    <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Measures success by what changes in your business</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-sans text-lime">→</span>
                    <span className="font-sans text-white/70 text-[15px] leading-[1.7]">Gives you leverage, not dependency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOUNDER VOICE */}
      <section className="bg-secondary-bg py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <div ref={useReveal()} className="glass-card rounded-3xl p-14">
            <p className="font-display text-text-muted/20 leading-[1] mb-4" style={{ fontSize: '100px' }}>"</p>
            <blockquote className="font-sans text-text-primary leading-[1.6] mb-10"
              style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}>
              Most agencies sell you hours. Hours don't compound.<br />
              We build systems. Systems compound forever.
            </blockquote>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-brand flex items-center justify-center">
                <span className="font-sans font-bold text-[18px] text-lime">Z</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-sans font-semibold text-[16px] text-text-primary">Muhammad Zubair</p>
                <div className="w-px h-4 line-light" />
                <p className="font-sans text-[14px] text-text-secondary">Founder, ZYVONE</p>
              </div>
            </div>
            <div className="h-[2px] w-[80px] bg-lime" />
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROOF */}
      <section className="bg-primary-bg py-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
            {[
              { num: '50+', label: 'Systems built' },
              { num: '100+', label: 'Clients served' },
              { num: '300%', label: 'Avg lead increase' },
              { num: '40hrs', label: 'Saved per client weekly' },
              { num: '24hrs', label: 'Our response guarantee' },
            ].map((stat, i) => (
              <div key={i} ref={useReveal(i * 50)} className="text-center py-8 border-r border-line-dark last:border-r-0">
                <p className="font-sans font-bold text-lime"
                  style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
                  {stat.num}
                </p>
                <p className="font-sans text-[14px] text-white/45 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7.5 — TESTIMONIALS */}
      <section className="bg-secondary-bg py-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()} className="text-center mb-16">
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-4">TESTIMONIALS</p>
            <h2 className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              What clients say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: "ZYVONE didn't just build our website — they built a system that actually brings us patients. The local SEO work alone was worth 10x what we paid.",
                name: "Dr. Ahmed",
                role: "Owner, Cantt Dental Care"
              },
              {
                quote: "The automation system they built eliminated 22 hours of manual work every week. We went from drowning in admin to actually growing the business.",
                name: "Sarah K.",
                role: "HR Director"
              },
              {
                quote: "Fast, professional, and they actually understand what 'done' means. No endless revisions — they deliver what works on the first try.",
                name: "Michael R.",
                role: "SaaS Founder"
              }
            ].map((testimonial, i) => (
              <div key={i} ref={useReveal(i * 100)} className="glass-card rounded-2xl p-10">
                <p className="font-display text-text-muted/20 leading-[1] mb-6" style={{ fontSize: '48px' }}>&quot;</p>
                <blockquote className="font-sans text-text-primary leading-[1.7] mb-8 text-[17px]">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-brand flex items-center justify-center">
                    <span className="font-sans font-bold text-[16px] text-lime">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[15px] text-text-primary">{testimonial.name}</p>
                    <p className="font-sans text-[13px] text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="bg-primary-brand py-28 px-6">
        <div className="max-w-[1360px] mx-auto text-center">
          <h2 ref={useReveal()} className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] max-w-[640px] mx-auto"
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Ready to build infrastructure — not deliverables?
          </h2>
          <p ref={useReveal(100)} className="font-sans text-[18px] text-text-secondary mt-4">
            Book a free 15-minute audit. No pitch. Just clarity.
          </p>
          <div ref={useReveal(200)} className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link href="/book-call"
              className="bg-lime text-primary-bg font-semibold px-8 py-4 rounded-full hover:bg-lime-dim scale-[1.02] transition-all duration-200">
              Book your free audit →
            </Link>
            <Link href="/work"
              className="border border-glass-border text-text-primary px-8 py-4 rounded-full hover:border-glass-hover transition-all duration-200">
              View our work
            </Link>
          </div>
          <p ref={useReveal(300)} className="font-sans text-[12px] text-text-muted mt-6">
            No commitment. No contract until you're ready.
          </p>
        </div>
      </section>
    </>
  )
}
