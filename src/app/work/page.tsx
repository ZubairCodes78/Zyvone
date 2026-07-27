'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { projects } from '@/lib/projects'
import { ProjectImage } from '@/components/ProjectImage'

export default function Work() {
  const workProjects = projects.map(p => ({
    num: p.id,
    industry: p.industry,
    name: p.title,
    shortName: p.shortTitle,
    outcome: p.overview,
    tag: p.tag,
    result: p.result,
    resultLabel: p.resultLabel,
    slug: p.slug,
    link: p.link,
  }))

  return (
    <main className="bg-primary-bg min-h-screen">
      {/* Header */}
      <section className="bg-primary-bg pt-32 pb-16 md:pb-24 px-6">
        <div className="max-w-[1360px] mx-auto">
          <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-4">Portfolio</p>
          <h1 className="font-sans font-bold text-[52px] md:text-[64px] text-white tracking-[-0.02em] leading-[1.1]">
            Selected Work
          </h1>
          <p className="font-sans text-[18px] text-white/50 max-w-[520px] mt-6">
            Real projects. Real results. No templates.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-primary-bg pb-20 md:pb-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="space-y-[120px]">
            {workProjects.map((project, i) => (
              <div key={i} ref={useReveal(i * 100)} className="rounded-[28px] overflow-hidden bg-[#0B1020] border border-white/6 p-12 hover:-translate-y-6 hover:shadow-2xl hover:shadow-black/50 hover:border-lime/20 transition-all duration-300">
                <div className="flex flex-col gap-12">
                  {/* Image - Full width */}
                  <div className="w-full">
                    {project.slug === 'toolmatic' && <ProjectImage src="/images/toolmatic.png" alt="Toolmatic" priority={i === 0} />}
                    {project.slug === 'pdfmaster' && <ProjectImage src="/images/pdfmaster.png" alt="PDFMaster" />}
                    {project.slug === 'cantt-dental-care' && <ProjectImage src="/images/cantt-dental-care.png" alt="Cantt Dental Care" />}
                    {project.slug === 'al-raheem-engineering' && <ProjectImage src="/images/al-raheem-engineering.png" alt="Al Raheem Engineering" />}
                  </div>

                  {/* Content - Full width */}
                  <div className="w-full flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                      <div>
                        <p className="font-sans text-[12px] font-medium text-lime uppercase tracking-[0.14em] mb-3">{project.industry}</p>
                        <h3 className="font-sans font-bold text-[36px] md:text-[48px] text-white tracking-[-0.02em] leading-[1.1]">
                          {project.shortName}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-6 py-3 bg-lime text-black font-sans font-bold text-[14px] uppercase tracking-wider rounded hover:bg-lime/90 transition-colors hover:translate-x-1"
                          >
                            View Live →
                          </a>
                        )}
                        {project.slug && (
                          <Link 
                            href={`/work/${project.slug}`} 
                            className="px-6 py-3 border border-white/20 text-white font-sans font-medium text-[14px] uppercase tracking-wider rounded hover:border-lime/50 hover:text-lime transition-colors hover:translate-x-1"
                          >
                            Case Study
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="font-sans text-[16px] text-white/50 leading-[1.6] mb-8">
                      {project.outcome}
                    </p>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-2">Industry</p>
                        <p className="font-sans text-[15px] text-white">{project.industry}</p>
                      </div>
                      <div>
                        <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-2">Year</p>
                        <p className="font-sans text-[15px] text-white">2024</p>
                      </div>
                      <div>
                        <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-2">Services</p>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px] text-white/70">UI/UX</span>
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px] text-white/70">Frontend</span>
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px] text-white/70">Backend</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-sans text-[11px] font-medium text-white/30 uppercase tracking-wider mb-2">Stack</p>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px] text-white/70">Next.js</span>
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px] text-white/70">TypeScript</span>
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px] text-white/70">Tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div ref={useReveal(400)} className="mt-16 rounded-[28px] bg-[#0B1020] border border-white/6 p-12 md:p-16 text-center">
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
    </main>
  )
}
