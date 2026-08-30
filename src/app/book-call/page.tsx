import { Reveal } from '@/components/ui/AnimationWrapper'

export default function BookCall() {
  const steps = [
    {
      num: '1',
      title: 'We review your situation',
      body: 'Zubair reviews your brief before the call. We don\'t waste time on basics.',
    },
    {
      num: '2',
      title: 'We identify opportunities',
      body: 'We find the systems that would have the biggest impact on your business.',
    },
    {
      num: '3',
      title: 'We give you a clear path',
      body: 'You walk away with a clear understanding of what\'s possible and what it would take.',
    },
  ]

  const faqs = [
    {
      q: 'Is this a sales call?',
      a: 'No. This is an audit call. We review your situation and give you clarity. If there\'s a fit, we discuss next steps. If not, you still walk away with value.',
    },
    {
      q: 'How long does the call take?',
      a: 'Fifteen minutes. We respect your time. We\'ll cover what matters and end on time.',
    },
    {
      q: 'Who should book this call?',
      a: 'Founders, CEOs, and decision-makers who are serious about building systems that scale their business without their constant involvement.',
    },
    {
      q: 'What if we\'re not a fit?',
      a: 'We\'ll tell you upfront. We don\'t take projects we can\'t deliver on. You\'ll still get clarity on what you need, even if it\'s not with us.',
    },
    {
      q: 'Do I need to prepare anything?',
      a: 'Just fill out the brief form before booking. That\'s all we need to prepare.',
    },
  ]

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-[#EDEDED] pt-32 md:pt-44 pb-28">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 max-w-[1360px] mx-auto pb-20 border-b border-white/7">
        <Reveal>
          <p className="font-sans text-[11px] font-medium text-[#EDEDED]/35 uppercase tracking-[0.2em] mb-6">
            Book a call
          </p>
          <h1
            className="font-sans font-semibold text-white tracking-[-0.03em] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(38px, 5.5vw, 72px)' }}
          >
            Free 15-minute<br />
            <span className="font-display italic text-white/75">audit.</span>
          </h1>
          <p className="font-sans text-[17px] sm:text-[19px] text-[#EDEDED]/45 max-w-lg leading-[1.75]">
            No pitch. No pressure. Just clarity on what&apos;s possible for your business.
          </p>
        </Reveal>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-[720px] mx-auto border-b border-white/7">
        <Reveal>
          <h2
            className="font-sans font-semibold text-white tracking-[-0.02em] leading-tight mb-10"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            What to expect.
          </h2>
        </Reveal>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="flex gap-5">
                <div className="w-7 h-7 rounded-full bg-[#C8ED35]/15 border border-[#C8ED35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-sans font-bold text-[13px] text-[#C8ED35]">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[16px] text-white mb-1">{step.title}</h3>
                  <p className="font-sans text-[15px] text-[#EDEDED]/45 leading-[1.7]">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-[1360px] mx-auto border-b border-white/7 text-center">
        <Reveal>
          <h2
            className="font-sans font-semibold text-white tracking-[-0.025em] mb-4"
            style={{ fontSize: 'clamp(24px, 3.5vw, 42px)' }}
          >
            Ready to book your audit?
          </h2>
          <p className="font-sans text-[16px] text-[#EDEDED]/45 mb-8">
            Choose a time that works for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full bg-[#C8ED35] text-[#0A0A0A] hover:bg-[#b8d92e] transition-colors"
            >
              Book via Calendly →
            </a>
            <a
              href="https://wa.me/923167697273"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#EDEDED]/50 hover:text-[#EDEDED]/90 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              Or message on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-[720px] mx-auto">
        <Reveal>
          <p className="font-sans text-[11px] font-medium text-[#EDEDED]/30 uppercase tracking-[0.2em] mb-8">
            FAQ
          </p>
          <h2
            className="font-sans font-semibold text-white tracking-[-0.02em] leading-tight mb-10"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Common questions.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/7">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="py-6">
                <h3 className="font-sans font-semibold text-[16px] text-white mb-2">{faq.q}</h3>
                <p className="font-sans text-[15px] text-[#EDEDED]/45 leading-[1.7]">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
