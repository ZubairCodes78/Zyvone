import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.shortTitle,
    description: project.overview,
    alternates: { canonical: `https://zyvone.site/work/${project.slug}` },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const dark  = '#060B18'
  const navy  = '#0D1B4B'
  const arc   = '#4F8EF7'
  const white = '#FFFFFF'
  const fog   = 'rgba(255,255,255,0.45)'
  const lineDark = 'rgba(255,255,255,0.07)'

  return (
    <main style={{ background: dark, minHeight: '100vh' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(180deg, ${navy} 0%, ${dark} 100%)`,
        paddingTop: '120px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:`linear-gradient(${lineDark} 1px,transparent 1px),linear-gradient(90deg,${lineDark} 1px,transparent 1px)`,
          backgroundSize:'60px 60px',
        }}/>

        <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'0 20px', position:'relative', zIndex:1 }}>
          {/* Back link */}
          <Link href="/work" style={{
            display:'inline-flex', alignItems:'center', gap:'6px',
            fontFamily:'var(--font-space),sans-serif', fontSize:'13px',
            fontWeight:'500', color:fog, textDecoration:'none',
            marginBottom:'24px',
            transition:'color 0.2s ease',
          }}>
            ← Back to work
          </Link>

          {/* Industry tag */}
          <p style={{
            fontFamily:'var(--font-space),sans-serif', fontSize:'11px',
            fontWeight:'600', color:arc, letterSpacing:'0.12em',
            textTransform:'uppercase', marginBottom:'16px',
          }}>
            {project.industry}  ·  {project.tag}
          </p>

          {/* Title */}
          <h1 style={{
            fontFamily:'var(--font-space),sans-serif', fontWeight:'700',
            fontSize:'clamp(36px,5vw,64px)', lineHeight:'1.05',
            letterSpacing:'-0.025em', color:white,
            marginBottom:'24px', maxWidth:'800px',
          }}>
            {project.title}
          </h1>

          {/* Overview */}
          <p style={{
            fontFamily:'var(--font-space),sans-serif', fontSize:'16px',
            color:fog, lineHeight:'1.75', maxWidth:'640px', marginBottom:'32px',
          }}>
            {project.overview}
          </p>

          {/* Stats row */}
          <div style={{ display:'flex', alignItems:'center', gap:'24px', flexWrap:'wrap' }}>
            <div>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'32px',fontWeight:'700',color:arc,margin:0,lineHeight:1 }}>
                {project.result}
              </p>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:fog,margin:'4px 0 0' }}>
                {project.resultLabel}
              </p>
            </div>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:'8px',
                background:'rgba(79,142,247,0.12)', border:'1px solid rgba(79,142,247,0.25)',
                borderRadius:'100px', padding:'10px 20px',
                fontFamily:'var(--font-space),sans-serif', fontSize:'13px',
                fontWeight:'600', color:white, textDecoration:'none',
                transition:'all 0.2s ease',
              }}>
                View live site
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H5M11 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── PROJECT VISUAL ───────────────────────────────────── */}
      <section style={{ maxWidth:'1360px', margin:'0 auto', padding:'0 20px', marginBottom:'60px' }}>
        <div style={{
          background: '#111827',
          border: '1px solid #1e2a3a',
          borderRadius: '16px',
          minHeight: '320px',
          padding: '48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Tag */}
          <p style={{
            fontFamily:'var(--font-space),sans-serif',
            fontSize:'11px',
            fontWeight:'600',
            color:'#4F8B8D',
            letterSpacing:'0.12em',
            textTransform:'uppercase',
            marginBottom:'32px',
            alignSelf: 'flex-start',
          }}>
            {project.slug === 'cantt-dental-care' && 'Healthcare / Local SEO'}
            {project.slug === 'pdfmaster' && 'PDF Tools / Web Development'}
            {project.slug === 'toolmatic' && 'AI Tools / Web Development'}
          </p>

          {/* Center stat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            {project.slug === 'cantt-dental-care' && (
              <span style={{
                fontFamily:'var(--font-space),sans-serif',
                fontSize:'96px',
                fontWeight:'900',
                color:'#D4F53C',
                lineHeight:1,
              }}>
                #1
              </span>
            )}
            {project.slug === 'pdfmaster' && (
              <span style={{
                fontFamily:'var(--font-space),sans-serif',
                fontSize:'96px',
                fontWeight:'900',
                color:'#D4F53C',
                lineHeight:1,
              }}>
                50+
              </span>
            )}
            {project.slug === 'toolmatic' && (
              <>
                <span style={{
                  fontFamily:'var(--font-space),sans-serif',
                  fontSize:'72px',
                  fontWeight:'900',
                  color:'#D4F53C',
                  lineHeight:1,
                }}>
                  Live
                </span>
                <span style={{
                  width:'8px',
                  height:'8px',
                  borderRadius:'50%',
                  background:'#22c55e',
                  animation:'pulse 2s infinite',
                }} />
              </>
            )}
          </div>

          {/* Description */}
          <p style={{
            fontFamily:'var(--font-space),sans-serif',
            fontSize:'14px',
            color:'#8892a4',
            marginBottom:'48px',
          }}>
            {project.slug === 'cantt-dental-care' && 'Local Google Ranking'}
            {project.slug === 'pdfmaster' && 'Tools Built & Deployed'}
            {project.slug === 'toolmatic' && 'Platform in Production'}
          </p>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {project.slug === 'cantt-dental-care' && ['90 Days', '20+ Reviews', '98 PageSpeed'].map((stat) => (
              <span key={stat} style={{
                fontFamily:'var(--font-space),sans-serif',
                fontSize:'13px',
                color:'#8892a4',
                background:'rgba(30,42,58,0.5)',
                border:'1px solid #4F8B8D',
                borderRadius:'8px',
                padding:'8px 16px',
              }}>
                {stat}
              </span>
            ))}
            {project.slug === 'pdfmaster' && ['0 Sign-ups', 'Client-side', 'Sub-3s Load'].map((stat) => (
              <span key={stat} style={{
                fontFamily:'var(--font-space),sans-serif',
                fontSize:'13px',
                color:'#8892a4',
                background:'rgba(30,42,58,0.5)',
                border:'1px solid #4F8B8D',
                borderRadius:'8px',
                padding:'8px 16px',
              }}>
                {stat}
              </span>
            ))}
            {project.slug === 'toolmatic' && ['Next.js 14', 'Vercel Edge', 'SEO-Optimized'].map((stat) => (
              <span key={stat} style={{
                fontFamily:'var(--font-space),sans-serif',
                fontSize:'13px',
                color:'#8892a4',
                background:'rgba(30,42,58,0.5)',
                border:'1px solid #4F8B8D',
                borderRadius:'8px',
                padding:'8px 16px',
              }}>
                {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY BODY ──────────────────────────────── */}
      <section style={{ maxWidth:'760px', margin:'0 auto', padding:'80px 32px' }}>

        {/* The Problem */}
        <div style={{ marginBottom:'56px' }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'16px' }}>
            The Problem
          </p>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'18px',color:fog,lineHeight:'1.8' }}>
            {project.problem}
          </p>
        </div>

        <div style={{ height:'1px', background:lineDark, marginBottom:'56px' }} />

        {/* Our Approach */}
        <div style={{ marginBottom:'56px' }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'16px' }}>
            Our Approach
          </p>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'18px',color:fog,lineHeight:'1.8' }}>
            {project.approach}
          </p>
        </div>

        <div style={{ height:'1px', background:lineDark, marginBottom:'56px' }} />

        {/* What We Built */}
        <div style={{ marginBottom:'56px' }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'24px' }}>
            What We Built
          </p>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'12px' }}>
            {project.execution.map((item, i) => (
              <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'12px' }}>
                <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:arc, flexShrink:0, marginTop:'8px' }} />
                <span style={{ fontFamily:'var(--font-space)',fontSize:'17px',color:'rgba(255,255,255,0.65)',lineHeight:'1.7' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ height:'1px', background:lineDark, marginBottom:'56px' }} />

        {/* Outcome */}
        <div style={{
          background:'rgba(79,142,247,0.07)', border:'1px solid rgba(79,142,247,0.15)',
          borderRadius:'20px', padding:'32px', marginBottom:'56px',
        }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'16px' }}>
            The Outcome
          </p>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'18px',color:white,lineHeight:'1.8',margin:0 }}>
            {project.outcome}
          </p>
        </div>

        {/* Reflection */}
        <div style={{
          background:'rgba(13,27,75,0.4)', border:'1px solid rgba(255,255,255,0.07)',
          borderRadius:'20px', padding:'32px', marginBottom:'56px',
        }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.3)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'16px' }}>
            Zubair's Reflection
          </p>
          <p style={{ fontFamily:'var(--font-instrument),serif',fontStyle:'italic',fontSize:'20px',color:'rgba(255,255,255,0.65)',lineHeight:'1.75',margin:0 }}>
            "{project.reflection}"
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ maxWidth:'760px', margin:'0 auto', padding:'0 32px 80px' }}>
        <div style={{ textAlign:'center', paddingTop:'40px', borderTop:`1px solid ${lineDark}` }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'16px',color:fog,marginBottom:'20px' }}>
            Want a system like this for your business?
          </p>
          <Link href="/contact" style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            background:'#D4F53C',
            border:'1px solid #D4F53C',
            borderRadius:'100px', padding:'14px 32px',
            fontFamily:'var(--font-space),sans-serif', fontSize:'15px',
            fontWeight:'600', color:'#060B18', textDecoration:'none',
            boxShadow:'0 4px 24px rgba(212,245,60,0.25)',
            transition:'all 0.2s ease',
          }}>
            Start a project →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </main>
  )
}
