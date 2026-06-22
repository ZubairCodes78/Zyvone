'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  heroIcon?: React.ReactNode
  sections: Array<{
    title: string
    content: string
    icon?: React.ReactNode
  }>
  cta?: {
    text: string
    link: string
  }
}

export default function ServicePage({
  title,
  subtitle,
  description,
  heroIcon,
  sections,
  cta
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg pt-52 pb-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">{subtitle}</p>
            <h1 className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              {title}
            </h1>
            <p className="font-sans text-[19px] text-white/45 mt-6 max-w-lg leading-[1.75]">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-primary-bg py-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <div key={i} ref={useReveal(i * 100)} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  {section.icon && (
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                      {section.icon}
                    </div>
                  )}
                  <h3 className="font-sans font-bold text-[24px] text-white">{section.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="font-sans text-[18px] text-white/55 leading-[1.8]">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="bg-primary-brand py-24 px-6 text-center">
          <div className="max-w-[1360px] mx-auto">
            <h2 ref={useReveal()} className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] max-w-[640px] mx-auto"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Ready to get started?
            </h2>
            <div ref={useReveal(100)} className="mt-10">
              <Link href={cta.link}
                className="inline-block bg-lime text-primary-bg font-semibold px-9 py-4 rounded-full hover:bg-lime-dim scale-[1.02] transition-all duration-200">
                {cta.text}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
