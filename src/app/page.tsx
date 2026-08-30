'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { projects } from '@/lib/projects'
import { ProjectImage } from '@/components/ProjectImage'

export default function Home() {
  const featuredSlugs = ['wearomnia', 'amin-raisat-hosiery', 'toolmatic', 'al-raheem-engineering']
  const featuredProjects = featuredSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg relative min-h-screen flex flex-col items-center justify-center pt-[180px] md:pt-[200px] pb-28 md:pb-32 px-6">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle, #D4F53C 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }} 
        />

        <div className="max-w-[920px] mx-auto text-center relative z-10">
          <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-6">
            Digital Company — Systems · Products · Experiences
          </p>

          <h1 
            className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(56px, 7.5vw, 96px)' }}
          >
            We build<br />
            <span className="font-display italic text-lime">infrastructure.</span>
          </h1>

          <p className="font-sans text-[17px] md:text-[19px] text-white/50 leading-[1.75] max-w-[580px] mx-auto">
            ZYVONE builds the systems, products, and digital experiences
            serious companies run on. Not deliverables — infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-10 w-full max-w-[420px] mx-auto">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] px-8 py-4 rounded-full transition-all duration-200 min-h-[48px] hover:scale-[1.02]"
              style={{
                background: '#D4F53C',
                border: '1px solid #D4F53C',
                color: '#060B18',
                boxShadow: '0 4px 24px rgba(212, 245, 60, 0.25)'
              }}
            >
              Start a project →
            </Link>
            <Link 
              href="/work"
              className="inline-flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:border-white/20 text-[14px] px-8 py-4 rounded-full transition-all duration-200 min-h-[48px] font-medium"
            >
              View our work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-lime/50 animate-pulse" />
          <p className="text-[10px] font-medium text-white/30 uppercase tracking-widest mt-2">scroll</p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-primary-bg py-28 md:py-36 px-6 border-t border-line-dark">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()} className="mb-14 md:mb-20">
            <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-3">SELECTED WORK</p>
            <h2 
              className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}
            >
              Built to last.
            </h2>
          </div>

          <div className="space-y-[96px] md:space-y-[120px]">
            {featuredProjects.map((project, i) => {
              if (!project) return null
              return (
                <div 
                  key={project.slug} 
                  ref={useReveal(i * 80)} 
                  className="rounded-[28px] overflow-hidden bg-[#0B1020] border border-white/6 p-6 md:p-12 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 hover:border-lime/20 transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-8 md:gap-12">
                    {/* Visual */}
                    <div className="w-full">
                      <ProjectImage 
                        src={project.heroImage} 
                        alt={project.title} 
                        priority={i === 0} 
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full flex flex-col justify-center">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <span className="font-sans text-[11px] md:text-[12px] font-medium text-lime uppercase tracking-[0.14em]">
                              {project.industry}
                            </span>
                            <span className="text-white/20">/</span>
                            <span className="font-sans text-[11px] md:text-[12px] font-medium text-white/40 uppercase tracking-[0.12em]">
                              {project.tag}
                            </span>
                          </div>
                          <h3 className="font-sans font-bold text-[28px] md:text-[36px] lg:text-[44px] text-white tracking-[-0.02em] leading-[1.1]">
                            {project.shortTitle}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="px-5 py-2.5 md:px-6 md:py-3 bg-lime text-black font-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider rounded-lg hover:bg-lime/90 transition-all hover:translate-x-0.5 shadow-md shadow-black/30"
                            >
                              View Live →
                            </a>
                          )}
                          <Link 
                            href={`/work/${project.slug}`} 
                            className="px-5 py-2.5 md:px-6 md:py-3 border border-white/20 text-white font-sans font-medium text-[13px] md:text-[14px] uppercase tracking-wider rounded-lg hover:border-lime/50 hover:text-lime transition-all hover:translate-x-0.5"
                          >
                            Case Study
                          </Link>
                        </div>
                      </div>

                      <p className="font-sans text-[15px] md:text-[16px] text-white/50 leading-[1.65] mb-6 md:mb-8 max-w-[1000px]">
                        {project.overview}
                      </p>

                      {/* Metadata */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-white/6">
                        <div>
                          <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Industry</p>
                          <p className="font-sans text-[13px] md:text-[14px] text-white font-medium">{project.industry}</p>
                        </div>
                        <div>
                          <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Year</p>
                          <p className="font-sans text-[13px] md:text-[14px] text-white font-medium">{project.year || '2024'}</p>
                        </div>
                        <div>
                          <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Services</p>
                          <div className="flex flex-wrap gap-1 md:gap-1.5">
                            {(project.services || ['UI/UX', 'Web Development']).map((srv, idx) => (
                              <span key={idx} className="px-2 py-0.5 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">
                                {srv}
                              </span>
                            ))}
                          </div>
                        </div>
                        {project.stack && project.stack.length > 0 && (
                          <div>
                            <p className="font-sans text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-wider mb-1.5 md:mb-2">Stack</p>
                            <div className="flex flex-wrap gap-1 md:gap-1.5">
                              {project.stack.map((stk, idx) => (
                                <span key={idx} className="px-2 py-0.5 md:py-1 rounded bg-white/5 border border-white/10 text-[11px] md:text-[12px] text-white/70">
                                  {stk}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div ref={useReveal(300)} className="text-center mt-16 md:mt-20">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 font-sans text-[15px] font-medium text-white/40 hover:text-white hover:border-lime/40 px-6 py-3 rounded-full border border-white/10 bg-white/5 transition-all"
            >
              Explore all portfolio projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-bg py-28 md:py-36 px-6 border-t border-line-dark">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal(400)} className="rounded-[28px] bg-[#0B1020] border border-white/6 p-10 md:p-16 text-center">
            <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-3">Initiative</p>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-white tracking-[-0.02em] mb-4">
              Want to work together?
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-white/50 mb-8 max-w-[520px] mx-auto leading-relaxed">
              We're always looking for interesting systems and products to architect. Let's build something enduring.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-lime text-black font-sans font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-lime/90 transition-all shadow-lg shadow-lime/20 hover:scale-[1.02] cursor-pointer">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
