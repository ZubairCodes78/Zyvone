'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { projects } from '@/lib/projects'
import { ProjectImage } from '@/components/ProjectImage'

export default function Work() {
  return (
    <main className="bg-primary-bg min-h-screen">
      {/* Header */}
      <section className="bg-primary-bg pt-32 pb-16 md:pb-24 px-6">
        <div className="max-w-[1360px] mx-auto">
          <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-4">Portfolio</p>
          <h1 className="font-sans font-bold text-[52px] md:text-[64px] text-white tracking-[-0.02em] leading-[1.1]">
            Selected Work
          </h1>
          <p className="font-sans text-[18px] text-white/50 max-w-[580px] mt-6 leading-relaxed">
            Real systems, digital products, and e-commerce experiences built for enduring performance. No templates.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-primary-bg pb-20 md:pb-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="space-y-[96px] md:space-y-[120px]">
            {projects.map((project, i) => (
              <div 
                key={project.slug} 
                ref={useReveal(i * 75)} 
                className="rounded-[28px] overflow-hidden bg-[#0B1020] border border-white/6 p-6 md:p-12 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 hover:border-lime/20 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-8 md:gap-12">
                  {/* Image - Full width */}
                  <div className="w-full">
                    <ProjectImage 
                      src={project.heroImage} 
                      alt={project.title} 
                      priority={i < 2} 
                    />
                  </div>

                  {/* Content - Full width */}
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
                        <h2 className="font-sans font-bold text-[28px] md:text-[36px] lg:text-[44px] text-white tracking-[-0.02em] leading-[1.1]">
                          {project.shortTitle}
                        </h2>
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
                        {project.slug && (
                          <Link 
                            href={`/work/${project.slug}`} 
                            className="px-5 py-2.5 md:px-6 md:py-3 border border-white/20 text-white font-sans font-medium text-[13px] md:text-[14px] uppercase tracking-wider rounded-lg hover:border-lime/50 hover:text-lime transition-all hover:translate-x-0.5"
                          >
                            Case Study
                          </Link>
                        )}
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
            ))}
          </div>

          {/* CTA Card */}
          <div ref={useReveal(200)} className="mt-20 md:mt-24 rounded-[28px] bg-[#0B1020] border border-white/6 p-10 md:p-16 text-center">
            <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-3">Initiative</p>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-white tracking-[-0.02em] mb-4">
              Want to build something serious?
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-white/50 mb-8 max-w-[540px] mx-auto leading-relaxed">
              We collaborate with ambitious founders and companies to build enduring web systems, platforms, and e-commerce experiences.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-lime text-black font-sans font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-lime/90 transition-all shadow-lg shadow-lime/20 hover:scale-[1.02] cursor-pointer">
                Start a conversation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
