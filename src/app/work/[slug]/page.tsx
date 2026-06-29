import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import type { Metadata } from 'next'
import { ToolmaticVisual, PDFMasterVisual, CanttDentalVisual, BeforeAfterVisual, StatsDashboardVisual, AIAutomationVisual } from '@/components/ProjectVisuals'

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

      {/* ── HERO IMAGE ───────────────────────────────────── */}
      <section style={{ maxWidth:'1360px', margin:'0 auto', padding:'0 20px', marginBottom:'60px' }}>
        <div style={{
          borderRadius:'24px', overflow:'hidden',
          boxShadow:'0 20px 60px rgba(0,0,0,0.5)',
          background: `linear-gradient(135deg, ${navy} 0%, ${dark} 100%)`,
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily:'var(--font-space)',fontSize:'14px',color:fog,marginBottom:'16px' }}>
              Project Visual
            </p>
            <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:'rgba(255,255,255,0.3)' }}>
              AI-generated image coming soon
            </p>
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

      {/* ── GALLERY ───────────────────────────────────────── */}
      <section style={{ maxWidth:'1360px', margin:'0 auto', padding:'0 32px', marginBottom:'80px' }}>
        <div style={{ margin:'56px 0', display:'flex', flexDirection:'column', gap:'16px' }}>

          {project.slug === 'toolmatic' && (
            <>
              <div style={{ borderRadius:'16px', overflow:'hidden' }}>
                <ToolmaticVisual height={380} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                <div style={{ borderRadius:'12px', overflow:'hidden' }}>
                  <StatsDashboardVisual height={240} />
                </div>
                <div style={{ borderRadius:'12px', overflow:'hidden' }}>
                  <AIAutomationVisual height={240} />
                </div>
              </div>
            </>
          )}

          {project.slug === 'pdfmaster' && (
            <>
              <div style={{ borderRadius:'16px', overflow:'hidden' }}>
                <PDFMasterVisual height={380} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                <div style={{ borderRadius:'12px', overflow:'hidden' }}>
                  <ToolmaticVisual height={240} />
                </div>
                <div style={{ borderRadius:'12px', overflow:'hidden' }}>
                  <StatsDashboardVisual height={240} />
                </div>
              </div>
              <div style={{ borderRadius:'16px', overflow:'hidden' }}>
                <AIAutomationVisual height={320} />
              </div>
            </>
          )}

          {project.slug === 'cantt-dental-care' && (
            <>
              <div style={{ borderRadius:'16px', overflow:'hidden' }}>
                <CanttDentalVisual height={380} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                <div style={{ borderRadius:'12px', overflow:'hidden' }}>
                  <BeforeAfterVisual height={240} />
                </div>
                <div style={{ borderRadius:'12px', overflow:'hidden' }}>
                  <StatsDashboardVisual height={240} />
                </div>
              </div>
              <div style={{ borderRadius:'16px', overflow:'hidden' }}>
                <AIAutomationVisual height={320} />
              </div>
            </>
          )}

          <p style={{
            fontFamily:'var(--font-space), sans-serif',
            fontSize:'11px', color:'rgba(255,255,255,0.22)',
            textAlign:'center', letterSpacing:'0.05em',
            marginTop:'4px',
          }}>
            System visualization — built in code
          </p>
        </div>
      </section>

      {/* ── BEFORE/AFTER ─────────────────────────────────── */}
      {project.beforeImage && project.afterImage && (
        <section style={{ maxWidth:'1360px', margin:'0 auto', padding:'0 32px', marginBottom:'80px' }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'32px' }}>
            Before / After
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(500px, 1fr))', gap:'24px' }}>
            <div>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:fog,marginBottom:'12px' }}>Before</p>
              <div style={{
                borderRadius:'16px', overflow:'hidden',
                boxShadow:'0 10px 40px rgba(0,0,0,0.3)',
                background: `linear-gradient(135deg, ${navy} 0%, ${dark} 100%)`,
                height: '350px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:fog }}>
                    Before Transformation
                  </p>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',color:'rgba(255,255,255,0.3)' }}>
                    AI-generated image coming soon
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:fog,marginBottom:'12px' }}>After</p>
              <div style={{
                borderRadius:'16px', overflow:'hidden',
                boxShadow:'0 10px 40px rgba(0,0,0,0.3)',
                background: `linear-gradient(135deg, ${navy} 0%, ${dark} 100%)`,
                height: '350px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:fog }}>
                    After Transformation
                  </p>
                  <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',color:'rgba(255,255,255,0.3)' }}>
                    AI-generated image coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARCHITECTURE ──────────────────────────────────── */}
      {project.architecture && (
        <section style={{ maxWidth:'1360px', margin:'0 auto', padding:'0 32px', marginBottom:'80px' }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'32px' }}>
            System Architecture
          </p>
          <div style={{
            borderRadius:'16px', overflow:'hidden',
            boxShadow:'0 10px 40px rgba(0,0,0,0.3)',
            background: `linear-gradient(135deg, ${navy} 0%, ${dark} 100%)`,
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'14px',color:fog,marginBottom:'16px' }}>
                System Architecture Diagram
              </p>
              <p style={{ fontFamily:'var(--font-space)',fontSize:'13px',color:'rgba(255,255,255,0.3)' }}>
                AI-generated diagram coming soon
              </p>
            </div>
          </div>
        </section>
      )}

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
    </main>
  )
}
