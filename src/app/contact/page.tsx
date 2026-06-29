'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormData {
  name:    string
  email:   string
  phone:   string
  company: string
  service: string
  budget:  string
  message: string
}

// IMPORTANT: Keep the same Google Apps Script URL that currently exists in the codebase
// Find it with: grep -r "script.google" . --include="*.ts" --include="*.tsx" --include="*.js"
const FORM_ENDPOINT = 'YOUR_EXISTING_GOOGLE_APPS_SCRIPT_URL' // Replace with actual URL from codebase

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputBase = {
    width: '100%',
    background: 'rgba(13,27,75,0.4)',
    border: '1px solid rgba(79,142,247,0.15)',
    borderRadius: '12px',
    padding: '14px 18px',
    fontFamily: 'var(--font-space), sans-serif',
    fontSize: '15px',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'all 0.2s ease',
    backdropFilter: 'blur(8px)',
  } as React.CSSProperties

  return (
    <main style={{ background: '#060B18', minHeight: '100vh' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(180deg, #0D1B4B 0%, #060B18 100%)',
        paddingTop: '120px',
        paddingBottom: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '600px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(79,142,247,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', padding: '0 20px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(79,142,247,0.1)',
            border: '1px solid rgba(79,142,247,0.25)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
          }}>
            <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#4F8EF7', display:'block', animation:'pulse 2s infinite' }} />
            <span style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(79,142,247,0.9)',letterSpacing:'0.08em' }}>
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-space), sans-serif',
            fontWeight: '700',
            fontSize: 'clamp(40px,6vw,72px)',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            marginBottom: '20px',
          }}>
            Let's build your{' '}
            <span style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', color: '#4F8EF7' }}>
              system.
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-space), sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: '1.7',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Tell us about your project. Zubair reads every message personally and responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '32px', alignItems: 'start' }} className="contact-grid">

          {/* ── LEFT — Contact Info ────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* WhatsApp card */}
            <a href="https://wa.me/923167697273" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'rgba(37,211,102,0.08)',
                border: '1px solid rgba(37,211,102,0.20)',
                borderRadius: '20px',
                padding: '24px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.14)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.35)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.08)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.20)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px' }}>
                <div style={{
                  width:'40px', height:'40px', borderRadius:'12px',
                  background:'rgba(37,211,102,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',fontWeight:'600',color:'#25D366',margin:0 }}>WhatsApp</p>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'15px',fontWeight:'700',color:'#FFFFFF',margin:0 }}>+92 316 7697273</p>
                </div>
              </div>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:'rgba(37,211,102,0.7)',margin:0 }}>
                Fastest response — typically within 2 hours →
              </p>
            </a>

            {/* Email card */}
            <div style={{
              background: 'rgba(13,27,75,0.4)',
              border: '1px solid rgba(79,142,247,0.15)',
              borderRadius: '20px',
              padding: '24px',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px' }}>
                <div style={{
                  width:'40px', height:'40px', borderRadius:'12px',
                  background:'rgba(79,142,247,0.12)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F8EF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 8l10 6 10-6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',fontWeight:'600',color:'rgba(79,142,247,0.8)',margin:0 }}>Email</p>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'15px',fontWeight:'600',color:'#FFFFFF',margin:0 }}>hashir@zubaircodes.site</p>
                </div>
              </div>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:'rgba(255,255,255,0.35)',margin:0 }}>
                Response within 24 hours
              </p>
            </div>

            {/* Response time card */}
            <div style={{
              background: 'rgba(13,27,75,0.3)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '24px',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' }}>
                <span style={{ width:'8px',height:'8px',borderRadius:'50%',background:'#22c55e',display:'block',flexShrink:0,boxShadow:'0 0 8px rgba(34,197,94,0.6)' }}/>
                <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.7)',margin:0 }}>We're available</p>
              </div>

              {[
                { flag:'🇵🇰', label:'Pakistan', time:'+92 316 7697273' },
                { flag:'🇺🇸', label:'USA',      time:'Coming Soon'   },
              ].map(item => (
                <div key={item.label} style={{
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                  padding:'10px 0',
                  borderBottom: item.label === 'Pakistan' ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                    <span>{item.flag}</span>
                    <span style={{ fontFamily:'var(--font-space)',fontSize:'14px',color:'rgba(255,255,255,0.5)' }}>{item.label}</span>
                  </div>
                  <span style={{ fontFamily:'var(--font-space)',fontSize:'13px',color: item.time === 'Coming Soon' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.55)' }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT — FORM ──────────────────────────────────── */}
          <div style={{
            background: 'rgba(13,27,75,0.25)',
            border: '1px solid rgba(79,142,247,0.12)',
            borderRadius: '24px',
            padding: '32px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
          }} className="form-container">

            {status === 'success' ? (
              /* Success state */
              <div style={{ textAlign:'center', padding:'48px 0' }}>
                <div style={{
                  width:'72px', height:'72px', borderRadius:'50%',
                  background:'rgba(34,197,94,0.15)',
                  border:'1px solid rgba(34,197,94,0.3)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  margin:'0 auto 24px',
                }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 16l7 7 13-13" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-space)',fontSize:'24px',fontWeight:'700',color:'#FFFFFF',marginBottom:'12px' }}>
                  Message received.
                </h3>
                <p style={{ fontFamily:'var(--font-space)',fontSize:'16px',color:'rgba(255,255,255,0.45)',lineHeight:'1.7',maxWidth:'380px',margin:'0 auto' }}>
                  Zubair will read your message personally and respond within 24 hours.
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2 style={{ fontFamily:'var(--font-space)',fontSize:'22px',fontWeight:'700',color:'#FFFFFF',marginBottom:'32px' }}>
                  Tell us about your project
                </h2>

                {/* Row 1: Name + Email */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }} className="form-row">
                  <div>
                    <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                      NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      style={inputBase}
                      {...register('name', { required: true })}
                      onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,142,247,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)'; e.target.style.boxShadow = 'none' }}
                    />
                    {errors.name && <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',color:'#f87171',marginTop:'4px' }}>Required</p>}
                  </div>
                  <div>
                    <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      style={inputBase}
                      {...register('email', { required: true })}
                      onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,142,247,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)'; e.target.style.boxShadow = 'none' }}
                    />
                    {errors.email && <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',color:'#f87171',marginTop:'4px' }}>Required</p>}
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }} className="form-row">
                  <div>
                    <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      style={inputBase}
                      {...register('phone')}
                      onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,142,247,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                      COMPANY / PROJECT
                    </label>
                    <input
                      type="text"
                      placeholder="Your company or idea"
                      style={inputBase}
                      {...register('company')}
                      onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,142,247,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>

                {/* Row 3: Service + Budget */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }} className="form-row">
                  <div>
                    <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                      SERVICE NEEDED *
                    </label>
                    <select
                      style={{ ...inputBase, cursor:'pointer', appearance:'none' as any }}
                      {...register('service', { required: true })}
                      onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)' }}
                    >
                      <option value="" style={{ background:'#0D1B4B' }}>Select service</option>
                      <option value="ai-automation" style={{ background:'#0D1B4B' }}>AI Automation</option>
                      <option value="web-development" style={{ background:'#0D1B4B' }}>Web Development</option>
                      <option value="ai-content" style={{ background:'#0D1B4B' }}>AI Content System</option>
                      <option value="marketing" style={{ background:'#0D1B4B' }}>Growth & Marketing</option>
                      <option value="brand" style={{ background:'#0D1B4B' }}>Brand Experience</option>
                      <option value="not-sure" style={{ background:'#0D1B4B' }}>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                      BUDGET RANGE
                    </label>
                    <select
                      style={{ ...inputBase, cursor:'pointer', appearance:'none' as any }}
                      {...register('budget')}
                      onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)' }}
                    >
                      <option value="" style={{ background:'#0D1B4B' }}>Select budget</option>
                      <option value="under-500" style={{ background:'#0D1B4B' }}>Under $500</option>
                      <option value="500-2000" style={{ background:'#0D1B4B' }}>$500 – $2,000</option>
                      <option value="2000-5000" style={{ background:'#0D1B4B' }}>$2,000 – $5,000</option>
                      <option value="5000-plus" style={{ background:'#0D1B4B' }}>$5,000+</option>
                      <option value="discuss" style={{ background:'#0D1B4B' }}>Let's discuss</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom:'24px' }}>
                  <label style={{ fontFamily:'var(--font-space)',fontSize:'12px',fontWeight:'500',color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',display:'block',marginBottom:'8px' }}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project, goals, and any challenges you're facing..."
                    style={{ ...inputBase, resize:'none' as any }}
                    {...register('message', { required: true })}
                    onFocus={e => { e.target.style.borderColor = 'rgba(79,142,247,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,142,247,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(79,142,247,0.15)'; e.target.style.boxShadow = 'none' }}
                  />
                  {errors.message && <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',color:'#f87171',marginTop:'4px' }}>Required</p>}
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:'#f87171',marginBottom:'16px',textAlign:'center' }}>
                    Something went wrong. Please WhatsApp us directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    background: status === 'sending'
                      ? 'rgba(79,142,247,0.3)'
                      : 'linear-gradient(135deg, #1A3A8F 0%, #4F8EF7 100%)',
                    border: '1px solid rgba(79,142,247,0.4)',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-space), sans-serif',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 24px rgba(79,142,247,0.25)',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation:'spin 1s linear infinite' }}>
                        <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mobile responsive override */}
        <style>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
            .form-container {
              padding: 24px !important;
            }
            .form-row {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            .form-container {
              padding: 20px !important;
            }
          }
          @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        `}</style>
      </section>
    </main>
  )
}
