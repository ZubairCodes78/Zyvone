'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { ProjectImage } from '@/components/ProjectImage'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg relative min-h-screen flex flex-col items-center justify-center pt-[200px] pb-32 px-6">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #D4F53C 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-6">
            Digital Company — Systems · Products · Experiences
          </p>

          <h1 className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(64px, 8vw, 100px)' }}>
            We build<br />
            <span className="font-display italic text-lime">infrastructure.</span>
          </h1>

          <p className="font-sans text-[18px] text-white/50 leading-[1.75] max-w-[560px] mx-auto">
            ZYVONE builds the systems, products, and digital experiences
            serious companies run on. Not deliverables — infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 w-full max-w-[400px] mx-auto">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] px-7 py-4 rounded-full scale-[1.02] transition-all duration-200 min-h-[48px]"
              style={{
                background: '#D4F53C',
                border: '1px solid #D4F53C',
                color: '#060B18',
                boxShadow: '0 4px 24px rgba(212,245,60,0.25)'
              }}>
              Start a project →
            </Link>
            <Link href="/work"
              className="inline-flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:border-white/20 text-[14px] px-7 py-4 rounded-full transition-all duration-200 min-h-[48px]">
              View our work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-white/0 to-lime/50 animate-pulse" />
          <p className="text-[10px] text-white/30 uppercase tracking-widest mt-2">scroll</p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-primary-bg py-32 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-4">SELECTED WORK</p>
            <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Built to last.
            </h2>
          </div>

          <div className="space-y-[120px]">
            {/* Toolmatic */}
            <div ref={useReveal(100)} className="rounded-[28px] overflow-hidden bg-[#0B1020] border border-white/6 p-6 md:p-12 hover:-translate-y-6 hover:shadow-2xl hover:shadow-black/50 hover:border-lime/20 transition-all duration-300">
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="w-full">
                  <ProjectImage src="/images/toolmatic.png" alt="Toolmatic" priority />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
                    <div>
                      <p className="font-sans text-[11px] md:text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-2 md:mb-3">AI Tools Platform</p>
                      <h3 className="font-sans font-bold text-[28px] md:text-[36px] lg:text-[48px] text-white tracking-[-0.02em] leading-[1.1]">
                        Toolmatic
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <a href="https://toolmatic.site" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-lime text-black font-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider rounded hover:bg-lime/90 transition-colors hover:translate-x-1">
                        View Live →
                      </a>
                      <Link href="/work/toolmatic" className="px-5 py-2.5 md:px-6 md:py-3 border border-white/20 text-white font-sans font-medium text-[13px] md:text-[14px] uppercase tracking-wider rounded hover:border-lime/50 hover:text-lime transition-colors hover:translate-x-1">
                        Case Study
                      </Link>
                    </div>
                  </div>

                  <p className="font-sans text-[15px] md:text-[16px] text-white/50 leading-[1.6] mb-6 md:mb-8">
                    A modern AI tools discovery platform designed to help users explore, compare, and access the best AI applications through a fast, premium experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Industry</p>
                      <p className="font-sans text-[14px] md:text-[15px] text-white">AI Tools Platform</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Year</p>
                      <p className="font-sans text-[14px] md:text-[15px] text-white">2024</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Services</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">UI/UX</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Frontend</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Backend</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Stack</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Next.js</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">TypeScript</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PDFMaster */}
            <div ref={useReveal(200)} className="rounded-[28px] overflow-hidden bg-[#0B1020] border border-white/6 p-6 md:p-12 hover:-translate-y-6 hover:shadow-2xl hover:shadow-black/50 hover:border-lime/20 transition-all duration-300">
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="w-full">
                  <ProjectImage src="/images/pdfmaster.png" alt="PDFMaster" />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
                    <div>
                      <p className="font-sans text-[11px] md:text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-2 md:mb-3">PDF & Document Suite</p>
                      <h3 className="font-sans font-bold text-[28px] md:text-[36px] lg:text-[48px] text-white tracking-[-0.02em] leading-[1.1]">
                        PDFMaster
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <a href="https://pdfmaster.site" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-lime text-black font-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider rounded hover:bg-lime/90 transition-colors hover:translate-x-1">
                        View Live →
                      </a>
                      <Link href="/work/pdfmaster" className="px-5 py-2.5 md:px-6 md:py-3 border border-white/20 text-white font-sans font-medium text-[13px] md:text-[14px] uppercase tracking-wider rounded hover:border-lime/50 hover:text-lime transition-colors hover:translate-x-1">
                        Case Study
                      </Link>
                    </div>
                  </div>

                  <p className="font-sans text-[15px] md:text-[16px] text-white/50 leading-[1.6] mb-6 md:mb-8">
                    A complete PDF toolkit featuring merge, split, compress, convert, and editing tools with a modern SaaS experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Industry</p>
                      <p className="font-sans text-[14px] md:text-[15px] text-white">PDF & Document Tools</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Year</p>
                      <p className="font-sans text-[14px] md:text-[15px] text-white">2024</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Services</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">UI/UX</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Frontend</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Backend</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Stack</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Next.js</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">TypeScript</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cantt Dental Care */}
            <div ref={useReveal(300)} className="rounded-[28px] overflow-hidden bg-[#0B1020] border border-white/6 p-6 md:p-12 hover:-translate-y-6 hover:shadow-2xl hover:shadow-black/50 hover:border-lime/20 transition-all duration-300">
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="w-full">
                  <ProjectImage src="/images/cantt-dental-care.png" alt="Cantt Dental Care" />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
                    <div>
                      <p className="font-sans text-[11px] md:text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-2 md:mb-3">Healthcare Website</p>
                      <h3 className="font-sans font-bold text-[28px] md:text-[36px] lg:text-[48px] text-white tracking-[-0.02em] leading-[1.1]">
                        Cantt Dental Care
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <a href="https://canttdentalcare.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-lime text-black font-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider rounded hover:bg-lime/90 transition-colors hover:translate-x-1">
                        View Live →
                      </a>
                      <Link href="/work/cantt-dental-care" className="px-5 py-2.5 md:px-6 md:py-3 border border-white/20 text-white font-sans font-medium text-[13px] md:text-[14px] uppercase tracking-wider rounded hover:border-lime/50 hover:text-lime transition-colors hover:translate-x-1">
                        Case Study
                      </Link>
                    </div>
                  </div>

                  <p className="font-sans text-[15px] md:text-[16px] text-white/50 leading-[1.6] mb-6 md:mb-8">
                    A premium dental clinic website focused on appointment booking, patient trust, and local SEO with a clean healthcare experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Industry</p>
                      <p className="font-sans text-[14px] md:text-[15px] text-white">Healthcare</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Year</p>
                      <p className="font-sans text-[14px] md:text-[15px] text-white">2024</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Services</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">UI/UX</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Frontend</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Local SEO</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Stack</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Next.js</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">TypeScript</span>
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">Tailwind</span>
                      </div>
                    </div>
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

      {/* CTA */}
      <section className="bg-primary-bg py-32 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal(500)} className="rounded-[28px] bg-[#0B1020] border border-white/6 p-12 md:p-16 text-center">
            <h2 className="font-sans font-bold text-[40px] md:text-[48px] text-white tracking-[-0.02em] mb-4">
              Want to work together?
            </h2>
            <p className="font-sans text-[18px] text-white/50 mb-8 max-w-[520px] mx-auto">
              We're always looking for interesting projects. Let's build something great.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-lime text-black font-sans font-bold text-[14px] uppercase tracking-wider rounded hover:bg-lime/90 transition-colors">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
