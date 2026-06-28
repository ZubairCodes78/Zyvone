'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { projects } from '@/lib/projects'
import { ToolmaticVisual, PDFMasterVisual, CanttDentalVisual } from '@/components/ProjectVisuals'

export default function Work() {
  const workProjects = projects.map(p => ({
    num: p.id,
    industry: p.industry,
    name: p.title,
    outcome: p.overview,
    tag: p.tag,
    result: p.result,
    resultLabel: p.resultLabel,
    link: p.link,
    slug: p.slug,
  }))

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg pt-52 pb-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">WORK</p>
            <h1 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              Selected projects.
            </h1>
            <p className="font-sans text-[19px] text-white/40 mt-4">
              A curated record of thinking, not just delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-primary-bg pb-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="space-y-8">
            {workProjects.map((project, i) => (
              <div key={i} ref={useReveal(i * 100)} className="rounded-2xl overflow-hidden glass-card hover:border-lime/20 hover:translate-y-[-2px] transition-all duration-300">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-[60%] bg-surface h-[360px] relative overflow-hidden ${i % 2 === 0 ? '' : 'md:w-[40%]'}`}>
                    {project.slug === 'toolmatic' && <ToolmaticVisual height={360} />}
                    {project.slug === 'pdfmaster' && <PDFMasterVisual height={360} />}
                    {project.slug === 'cantt-dental-care' && <CanttDentalVisual height={360} />}
                    {!project.slug && (
                      <>
                        <span className="font-sans font-black text-white/4 absolute text-[200px] z-10">{project.num}</span>
                        <div className="w-full h-full bg-gradient-to-br from-primary-brand to-surface flex items-center justify-center">
                          {i % 4 === 0 && (
                            <svg width="120" height="120" viewBox="0 0 120 120">
                              <circle cx="60" cy="60" r="50" fill="none" stroke="#D4F53C" strokeWidth="2" opacity="0.3"/>
                              <circle cx="60" cy="60" r="30" fill="#D4F53C" opacity="0.2"/>
                              <circle cx="60" cy="60" r="10" fill="#D4F53C"/>
                            </svg>
                          )}
                          {i % 4 === 1 && (
                            <svg width="120" height="120" viewBox="0 0 120 120">
                              <rect x="20" y="20" width="80" height="80" fill="none" stroke="#D4F53C" strokeWidth="2" opacity="0.3"/>
                              <rect x="35" y="35" width="50" height="50" fill="#D4F53C" opacity="0.2"/>
                              <rect x="50" y="50" width="20" height="20" fill="#D4F53C"/>
                            </svg>
                          )}
                          {i % 4 === 2 && (
                            <svg width="120" height="120" viewBox="0 0 120 120">
                              <polygon points="60,20 100,80 20,80" fill="none" stroke="#D4F53C" strokeWidth="2" opacity="0.3"/>
                              <polygon points="60,40 80,70 40,70" fill="#D4F53C" opacity="0.2"/>
                              <polygon points="60,55 70,65 50,65" fill="#D4F53C"/>
                            </svg>
                          )}
                          {i % 4 === 3 && (
                            <svg width="120" height="120" viewBox="0 0 120 120">
                              <path d="M20,60 Q40,20 60,60 T100,60" fill="none" stroke="#D4F53C" strokeWidth="2" opacity="0.3"/>
                              <path d="M30,60 Q50,30 60,60 T90,60" fill="none" stroke="#D4F53C" strokeWidth="2" opacity="0.5"/>
                              <circle cx="60" cy="60" r="8" fill="#D4F53C"/>
                            </svg>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  <div className={`md:w-[40%] p-12 flex flex-col justify-center ${i % 2 === 0 ? '' : 'md:w-[60%]'}`}>
                    <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-3">{project.industry}</p>
                    <h3 className="font-sans font-bold text-[28px] text-white mb-3">{project.name}</h3>
                    <p className="font-sans text-[16px] text-white/50 leading-[1.7] mb-6 max-w-[340px]">
                      {project.outcome}
                    </p>
                    <p className="font-sans font-bold text-[48px] text-lime">{project.result}</p>
                    <p className="font-sans text-[13px] text-white/40 mt-1">{project.resultLabel}</p>
                    <div className="flex items-center gap-3 mt-6">
                      {project.slug ? (
                        <Link href={`/work/${project.slug}`} className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                          View case study →
                        </Link>
                      ) : (
                        <Link href="/contact" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                          View case study →
                        </Link>
                      )}
                      {project.link && (
                        <>
                          <span className="text-white/20">|</span>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-sans text-lime hover:gap-2 inline-flex items-center gap-1 transition-all">
                            View live →
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div ref={useReveal(600)} className="glass-card rounded-2xl p-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-10 mb-16">
            <div>
              <h3 className="font-sans font-bold text-[26px] text-text-primary">Have a project?</h3>
              <p className="font-sans text-[16px] text-text-secondary mt-1">Let's see if we're the right fit.</p>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[14px] px-7 py-3.5 rounded-full scale-[1.02] transition-all duration-200 whitespace-nowrap"
              style={{
                background: '#D4F53C',
                border: '1px solid #D4F53C',
                color: '#060B18',
                boxShadow: '0 4px 24px rgba(212,245,60,0.25)'
              }}>
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
