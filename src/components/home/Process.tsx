import React from 'react'

const principles = [
  {
    num: '01',
    title: 'Systems over services',
    desc: 'We design for permanent operational leverage. We engineer assets that run without human fatigue, not disposable hourly tasks.',
  },
  {
    num: '02',
    title: 'Precision over volume',
    desc: 'We take a small number of high-stakes projects and go deep on architectural integrity, code quality, and performance.',
  },
  {
    num: '03',
    title: 'Outcome over output',
    desc: 'We measure success by what shifts in your business — automated workflows, sub-second latency, and compounding leverage.',
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto border-t border-[var(--border)]">
      <div className="max-w-[var(--max-w-hero)] mb-14">
        <span className="eyebrow-label block mb-3">HOW WE WORK</span>
        <h2
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.15]"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          We build systems that compound.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((item) => (
          <div
            key={item.num}
            className="card-surface p-7 md:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[14px] font-semibold text-[var(--accent)] block mb-4">
                {item.num}
              </span>
              <h3
                className="font-sans font-semibold text-[var(--text-primary)] tracking-tight mb-3"
                style={{ fontSize: 'var(--fs-h3)' }}
              >
                {item.title}
              </h3>
              <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.65]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
