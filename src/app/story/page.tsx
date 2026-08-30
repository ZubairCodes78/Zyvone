import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'From college friends to a $100K+ agency — the real story of how ZYVONE was built.',
  alternates: { canonical: 'https://zyvone.site/story' },
}

export default function StoryPage() {
  const bg        = '#05070A'
  const lightBg   = '#0B1020'
  const primary   = '#D4F53C'
  const secondary = '#D4F53C'
  const textDark  = '#FFFFFF'
  const textMuted = 'rgba(255, 255, 255, 0.55)'
  const border    = 'rgba(255, 255, 255, 0.08)'

  const chapters = [
    {
      year: '2021',
      tag:  'The Beginning',
      title:'Two friends. One laptop. Fiverr.',
      body: `It started the way most things do — with necessity and boredom. Zubair and Hashir were college students in Pakistan with more ambition than money. Fiverr was the first move. Small jobs. Web tweaks. Logo requests at $5 a piece. Nothing glamorous. But it was the first time someone paid them for something they built — and that feeling didn't go away.`,
    },
    {
      year: '2022',
      tag:  'Learning in Public',
      title:'Every project was a lesson we paid for.',
      body: `The first year on Fiverr was expensive in ways money can't measure. They undercharged for projects that took three times as long as expected. They said yes to clients who made the work impossible. They delivered things they weren't proud of. But they also learned — fast. By the end of year one, they understood something most freelancers take years to figure out: the problem was never the skill. The problem was the structure.`,
    },
    {
      year: '2023',
      tag:  'The Shift',
      title:'Stop selling time. Start building systems.',
      body: `The realization came during a late-night client call. The client was asking for the same fix — again — that had been delivered six months earlier. Not because the work was bad. Because the work was a patch, not a system. That conversation changed everything. Zubair and Hashir stopped taking any project that didn't have a structural answer. Not a fix. A system that would make the fix unnecessary forever.`,
    },
    {
      year: '2024',
      tag:  'Zubair Codes',
      title:'The first real agency. Built under the wrong name.',
      body: `"Zubair Codes" was the first proper brand. A real website. A real portfolio. Real service packages. The work improved dramatically — AI automation projects, web systems for clients in Pakistan and the UAE, full digital infrastructure builds. Revenue crossed $100K. The team grew from two people to a small operation. But something was off. The name said one person. The ambition said company. The name had to change.`,
    },
    {
      year: '2025',
      tag:  'ZYVONE',
      title:'A name that sounds like what we\'re building.',
      body: `ZYVONE is not a rebrand. It's a declaration. The same two founders. The same obsession with building things that actually work. But now with the right name, the right positioning, and the right understanding of what we're actually doing — not building websites. Not running campaigns. Building the digital infrastructure that serious businesses run on. That's what ZYVONE is. That's what it will always be.`,
    },
  ]

  return (
    <main style={{ background: bg, minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        background: `radial-gradient(ellipse at 50% 0%, rgba(212,245,60,0.06) 0%, ${bg} 75%)`,
        paddingTop:'140px', paddingBottom:'60px',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:`linear-gradient(${border} 1px,transparent 1px),linear-gradient(90deg,${border} 1px,transparent 1px)`,
          backgroundSize:'60px 60px',
          opacity: 0.2,
        }}/>
        <div style={{ maxWidth:'760px', margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:primary,letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:'20px' }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily:'var(--font-space)',fontWeight:'700',
            fontSize:'clamp(40px,6vw,72px)',lineHeight:'1.05',
            letterSpacing:'-0.03em',color:textDark,marginBottom:'24px',
          }}>
            From college friends<br />
            to{' '}
            <span style={{ fontFamily:'var(--font-instrument),serif',fontStyle:'italic',color:primary }}>
              digital company.
            </span>
          </h1>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'18px',color:textMuted,lineHeight:'1.75' }}>
            The real story — no success theater, no manufactured origin myth. Just what actually happened.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth:'760px', margin:'0 auto', padding:'60px 24px' }}>
        <div style={{ position:'relative' }}>
          {/* Vertical line */}
          <div style={{
            position:'absolute', left:'0', top:'8px', bottom:'0',
            width:'1px', background:`linear-gradient(180deg, ${primary} 0%, ${border} 100%)`,
            opacity:0.4,
          }}/>

          {chapters.map((ch, i) => (
            <div key={ch.year} style={{
              paddingLeft:'32px', paddingBottom: i < chapters.length-1 ? '48px' : '0',
              position:'relative',
            }}>
              {/* Dot */}
              <div style={{
                position:'absolute', left:'-5px', top:'6px',
                width:'11px', height:'11px', borderRadius:'50%',
                background: i === chapters.length-1 ? primary : bg,
                border:`1.5px solid ${primary}`,
                boxShadow: i === chapters.length-1 ? `0 0 12px rgba(212,245,60,0.5)` : 'none',
              }}/>

              {/* Year + tag */}
              <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px', flexWrap:'wrap' }}>
                <span style={{ fontFamily:'var(--font-space)',fontSize:'13px',fontWeight:'700',color:primary }}>{ch.year}</span>
                <span style={{
                  fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',
                  color:'rgba(255,255,255,0.7)',letterSpacing:'0.08em',textTransform:'uppercase',
                  background:lightBg,border:`1px solid ${border}`,
                  borderRadius:'100px',padding:'2px 10px',
                }}>
                  {ch.tag}
                </span>
              </div>

              <h2 style={{
                fontFamily:'var(--font-space)',fontWeight:'700',
                fontSize:'clamp(20px,4vw,30px)',lineHeight:'1.2',
                letterSpacing:'-0.02em',color:textDark,marginBottom:'12px',
              }}>
                {ch.title}
              </h2>

              <p style={{ fontFamily:'var(--font-space)',fontSize:'15px',color:textMuted,lineHeight:'1.75',margin:0 }}>
                {ch.body}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{
          marginTop:'60px', paddingTop:'40px', borderTop:`1px solid ${border}`,
          textAlign:'center',
        }}>
          <p style={{ fontFamily:'var(--font-instrument),serif',fontStyle:'italic',fontSize:'20px',color:textDark,marginBottom:'20px',lineHeight:'1.5' }}>
            "The story isn't finished. This is just where we are."
          </p>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'14px',color:textMuted,marginBottom:'32px' }}>— Muhammad Zubair</p>
          <Link href="/contact" style={{
            display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',
            background:primary,
            border:`1px solid ${primary}`,
            borderRadius:'100px',padding:'12px 28px',
            fontFamily:'var(--font-space),sans-serif',fontSize:'14px',
            fontWeight:'700',color:'#060B18',textDecoration:'none',
            boxShadow:'0 4px 24px rgba(212,245,60,0.25)',
            minWidth:'fit-content',
          }}>
            Build with us →
          </Link>
        </div>
      </section>
    </main>
  )
}
