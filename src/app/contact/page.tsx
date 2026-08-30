'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  primaryNeed: string
  budgetNote: string
  message: string
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      primaryNeed: 'Build a software system',
      budgetNote: '$10k – $25k',
    },
  })

  const onSubmit: SubmitHandler<ContactFormData> = async () => {
    setStatus('sending')
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      {/* Header */}
      <section className="max-w-[var(--max-w-hero)] mb-16 md:mb-20 pb-10 border-b border-[var(--border)]">
        <span className="eyebrow-label block mb-4">START A PROJECT</span>
        <h1
          className="font-sans font-semibold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6"
          style={{ fontSize: 'var(--fs-h1)' }}
        >
          Let&apos;s build your{' '}
          <span className="font-serif italic font-normal text-[var(--accent)] inline-block">
            system.
          </span>
        </h1>
        <p className="font-sans text-[var(--text-secondary)] text-[17px] md:text-[19px] leading-[1.6]">
          Tell us about your project. Zubair reviews every inquiry personally and responds within 24 hours.
        </p>
      </section>

      {/* Grid Layout: Channels on Left | Form on Right */}
      <RevealWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (5/12): Direct Channels — email first, then WhatsApp at equal weight, then call */}
          <div className="lg:col-span-5 space-y-5">

            {/* Primary: Email */}
            <a
              href="mailto:zubair@zyvone.site"
              className="card-surface p-7 block group"
              aria-label="Email us at zubair@zyvone.site"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow-label text-[11px] text-[var(--accent)]">EMAIL — PRIMARY</span>
                <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors duration-200">↗</span>
              </div>
              <p className="font-sans font-semibold text-[18px] text-[var(--text-primary)] mb-1">
                zubair@zyvone.site
              </p>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Architecture consultations, RFPs, and strategic partnerships. Responses within 24 hours.
              </p>
            </a>

            {/* WhatsApp — equal weight, context: direct/Pakistan-friendly */}
            <a
              href="https://wa.me/923167697273"
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface p-7 block group"
              aria-label="Message on WhatsApp — +92 316 7697273"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow-label text-[11px] text-[var(--text-secondary)]">WHATSAPP / DIRECT MESSAGE</span>
                <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors duration-200">↗</span>
              </div>
              <p className="font-sans font-semibold text-[18px] text-[var(--text-primary)] mb-1">
                +92 316 7697273
              </p>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Quick questions, scope scoping, or Pakistan-based founders who prefer direct messaging.
              </p>
            </a>

            {/* Discovery Call */}
            <div className="card-surface p-7">
              <span className="eyebrow-label text-[11px] text-[var(--text-tertiary)] block mb-2">LIVE CALL</span>
              <p className="font-sans font-semibold text-[18px] text-[var(--text-primary)] mb-1">
                15-Min Discovery Call
              </p>
              <p className="font-sans text-[13px] text-[var(--text-secondary)] mb-4 leading-relaxed">
                Discuss system scope, data models, or timeline directly with the technical founders.
              </p>
              <Link
                href="/book-call"
                className="font-sans text-[13px] font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5 transition-colors duration-200"
              >
                <span>Book a time slot</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column (7/12): Intake Form */}
          <div className="lg:col-span-7 card-surface p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[rgba(200,237,53,0.1)] border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center mx-auto mb-4 font-mono font-bold text-[22px]">
                  ✓
                </div>
                <h2 className="font-sans font-semibold text-[24px] text-[var(--text-primary)] mb-2">
                  Inquiry Received
                </h2>
                <p className="font-sans text-[15px] text-[var(--text-secondary)] max-w-[420px] mx-auto">
                  Thank you. Zubair will review your system requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="eyebrow-label block mb-2 text-[11px]">
                      NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      className="form-field"
                      aria-required="true"
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <span id="contact-name-error" role="alert" className="font-mono text-[11px] text-[#ff5e6c] mt-1.5 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="eyebrow-label block mb-2 text-[11px]">
                      EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@company.com"
                      autoComplete="email"
                      className="form-field"
                      aria-required="true"
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Enter a valid email',
                        },
                      })}
                    />
                    {errors.email && (
                      <span id="contact-email-error" role="alert" className="font-mono text-[11px] text-[#ff5e6c] mt-1.5 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="eyebrow-label block mb-2 text-[11px]">
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      className="form-field"
                      {...register('phone')}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="eyebrow-label block mb-2 text-[11px]">
                      COMPANY / PROJECT
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Company or venture name"
                      autoComplete="organization"
                      className="form-field"
                      {...register('company')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-need" className="eyebrow-label block mb-2 text-[11px]">
                    WHAT ARE YOU BUILDING? *
                  </label>
                  <select
                    id="contact-need"
                    className="form-field"
                    aria-required="true"
                    {...register('primaryNeed', { required: true })}
                  >
                    <option value="Build a software system">Software system / platform</option>
                    <option value="AI & Workflow Automation">AI &amp; workflow automation</option>
                    <option value="Full-stack Web Application">Full-stack web application</option>
                    <option value="E-commerce & Commerce Systems">E-commerce &amp; commerce systems</option>
                    <option value="Digital Platform / SaaS">Digital platform / SaaS</option>
                    <option value="Other Technical Challenge">Other technical challenge</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-budget" className="eyebrow-label block mb-2 text-[11px]">
                    APPROXIMATE BUDGET RANGE *
                  </label>
                  <select
                    id="contact-budget"
                    className="form-field"
                    aria-required="true"
                    {...register('budgetNote', { required: true })}
                  >
                    <option value="$3k – $7k">$3,000 – $7,000 — MVP / validation scope</option>
                    <option value="$7k – $15k">$7,000 – $15,000 — Production-ready system</option>
                    <option value="$15k – $40k">$15,000 – $40,000 — Full-scale platform build</option>
                    <option value="$40k – $100k">$40,000 – $100,000 — Enterprise infrastructure</option>
                    <option value="$100k+">$100,000+ — Strategic long-term engagement</option>
                    <option value="Not sure yet">Not sure yet — let&apos;s scope it together</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="eyebrow-label block mb-2 text-[11px]">
                    PROJECT SCOPE &amp; OBJECTIVES *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe what you're building, the current bottlenecks, and your ideal timeline..."
                    className="form-field resize-none"
                    aria-required="true"
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    {...register('message', { required: 'Please describe your project' })}
                  />
                  {errors.message && (
                    <span id="contact-message-error" role="alert" className="font-mono text-[11px] text-[#ff5e6c] mt-1.5 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full py-4"
                  aria-disabled={status === 'sending'}
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Send Inquiry'}</span>
                  <span aria-hidden="true">→</span>
                </button>

                {/* Process note */}
                <div className="pt-2 text-center font-sans text-[13px] text-[var(--text-secondary)] space-y-1">
                  <p>We respond within 24 hours.</p>
                  <p>We ask 3 short follow-up questions.</p>
                  <p>If there&apos;s a fit, we send a proposal within a week.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
