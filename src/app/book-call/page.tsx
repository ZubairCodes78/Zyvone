'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

export default function BookCall() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg pt-52 pb-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">BOOK A CALL</p>
            <h1 className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              Free 15-minute<br />
              <span className="font-display italic text-lime">audit.</span>
            </h1>
            <p className="font-sans text-[19px] text-white/40 mt-6 max-w-lg leading-[1.75]">
              No pitch. No pressure. Just clarity on what's possible for your business.
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-primary-bg py-20 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()} className="max-w-[720px]">
            <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
              What to expect.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-sans font-bold text-[14px] text-lime">1</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[18px] text-white mb-1">We review your situation</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7]">
                    Zubair reviews your brief before the call. We don't waste time on basics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-sans font-bold text-[14px] text-lime">2</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[18px] text-white mb-1">We identify opportunities</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7]">
                    We find the systems that would have the biggest impact on your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-sans font-bold text-[14px] text-lime">3</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[18px] text-white mb-1">We give you a clear path</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7]">
                    You walk away with a clear understanding of what's possible and what it would take.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-brand py-24 px-6 text-center">
        <div className="max-w-[1360px] mx-auto">
          <h2 ref={useReveal()} className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] max-w-[640px] mx-auto"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Ready to book your audit?
          </h2>
          <p ref={useReveal(100)} className="font-sans text-[18px] text-text-secondary mt-4">
            Choose a time that works for you.
          </p>
          <div ref={useReveal(200)} className="mt-10">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-lime text-primary-bg font-semibold px-9 py-4 rounded-full hover:bg-lime-dim scale-[1.02] transition-all duration-200">
              Book via Calendly →
            </a>
          </div>
          <p ref={useReveal(300)} className="font-sans text-[13px] text-text-muted mt-6">
            Or reach out directly via WhatsApp for a faster response.
          </p>
          <div ref={useReveal(350)} className="mt-4">
            <a href="https://wa.me/923XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-primary font-semibold hover:underline">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary-bg py-28 px-6">
        <div className="max-w-[720px] mx-auto">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">FAQ</p>
            <h2 className="font-sans font-bold text-text-primary tracking-[-0.02em] leading-[1.1] mb-12"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
              Common questions.
            </h2>
          </div>

          <div className="space-y-6">
            <div ref={useReveal(100)} className="border-b border-line-dark pb-6">
              <h3 className="font-sans font-semibold text-[18px] text-text-primary mb-2">Is this a sales call?</h3>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.7]">
                No. This is an audit call. We review your situation and give you clarity.
                If there's a fit, we discuss next steps. If not, you still walk away with value.
              </p>
            </div>

            <div ref={useReveal(150)} className="border-b border-line-light pb-6">
              <h3 className="font-sans font-semibold text-[18px] text-text-primary mb-2">How long does the call take?</h3>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.7]">
                15 minutes. We respect your time. We'll cover what matters and end on time.
              </p>
            </div>

            <div ref={useReveal(200)} className="border-b border-line-light pb-6">
              <h3 className="font-sans font-semibold text-[18px] text-text-primary mb-2">Who should book this call?</h3>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.7]">
                Founders, CEOs, and decision-makers who are serious about building systems
                that scale their business without their constant involvement.
              </p>
            </div>

            <div ref={useReveal(250)} className="border-b border-line-light pb-6">
              <h3 className="font-sans font-semibold text-[18px] text-text-primary mb-2">What if we're not a fit?</h3>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.7]">
                We'll tell you upfront. We don't take projects we can't deliver on.
                You'll still get clarity on what you need, even if it's not with us.
              </p>
            </div>

            <div ref={useReveal(300)} className="border-b border-line-dark pb-6">
              <h3 className="font-sans font-semibold text-[18px] text-text-primary mb-2">Do I need to prepare anything?</h3>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.7]">
                Just fill out the brief form before booking. That's all we need to prepare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
