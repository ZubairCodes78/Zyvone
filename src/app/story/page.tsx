import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'From college friends to a $100K+ agency — the real story of how ZYVONE was built.',
  alternates: { canonical: 'https://zyvone.site/story' },
}

export default function StoryPage() {
  const dark    = '#060B18'
  const navy    = '#0D1B4B'
  const arc     = '#4F8EF7'
  const white   = '#FFFFFF'
  const fog     = 'rgba(255,255,255,0.50)'
  const lineDark = 'rgba(255,255,255,0.07)'

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
    <main style={{ background: dark, minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        background:`linear-gradient(180deg, ${navy} 0%, ${dark} 100%)`,
        paddingTop:'160px', paddingBottom:'80px',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:`linear-gradient(${lineDark} 1px,transparent 1px),linear-gradient(90deg,${lineDark} 1px,transparent 1px)`,
          backgroundSize:'60px 60px',
        }}/>
        <div style={{ maxWidth:'760px', margin:'0 auto', padding:'0 32px', position:'relative', zIndex:1 }}>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'600',color:arc,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'20px' }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily:'var(--font-space)',fontWeight:'700',
            fontSize:'clamp(40px,6vw,72px)',lineHeight:'1.05',
            letterSpacing:'-0.03em',color:white,marginBottom:'24px',
          }}>
            From college friends<br />
            to{' '}
            <span style={{ fontFamily:'var(--font-instrument),serif',fontStyle:'italic',color:arc }}>
              digital company.
            </span>
          </h1>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'18px',color:fog,lineHeight:'1.75' }}>
            The real story — no success theater, no manufactured origin myth. Just what actually happened.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth:'760px', margin:'0 auto', padding:'80px 32px' }}>
        <div style={{ position:'relative' }}>
          {/* Vertical line */}
          <div style={{
            position:'absolute', left:'0', top:'8px', bottom:'0',
            width:'1px', background:`linear-gradient(180deg, ${arc} 0%, transparent 100%)`,
            opacity:0.3,
          }}/>

          {chapters.map((ch, i) => (
            <div key={ch.year} style={{
              paddingLeft:'40px', paddingBottom: i < chapters.length-1 ? '64px' : '0',
              position:'relative',
            }}>
              {/* Dot */}
              <div style={{
                position:'absolute', left:'-5px', top:'6px',
                width:'11px', height:'11px', borderRadius:'50%',
                background: i === chapters.length-1 ? arc : 'transparent',
                border:`1.5px solid ${arc}`,
                boxShadow: i === chapters.length-1 ? `0 0 12px rgba(79,142,247,0.5)` : 'none',
              }}/>

              {/* Year + tag */}
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px' }}>
                <span style={{ fontFamily:'var(--font-space)',fontSize:'13px',fontWeight:'700',color:arc }}>{ch.year}</span>
                <span style={{
                  fontFamily:'var(--font-space)',fontSize:'11px',fontWeight:'500',
                  color:'rgba(79,142,247,0.6)',letterSpacing:'0.08em',textTransform:'uppercase',
                  background:'rgba(79,142,247,0.08)',border:'1px solid rgba(79,142,247,0.15)',
                  borderRadius:'100px',padding:'2px 10px',
                }}>
                  {ch.tag}
                </span>
              </div>

              <h2 style={{
                fontFamily:'var(--font-space)',fontWeight:'700',
                fontSize:'clamp(22px,3vw,30px)',lineHeight:'1.2',
                letterSpacing:'-0.02em',color:white,marginBottom:'16px',
              }}>
                {ch.title}
              </h2>

              <p style={{ fontFamily:'var(--font-space)',fontSize:'17px',color:fog,lineHeight:'1.8',margin:0 }}>
                {ch.body}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{
          marginTop:'80px', paddingTop:'56px', borderTop:`1px solid ${lineDark}`,
          textAlign:'center',
        }}>
          <p style={{ fontFamily:'var(--font-instrument),serif',fontStyle:'italic',fontSize:'24px',color:fog,marginBottom:'24px',lineHeight:'1.5' }}>
            "The story isn't finished. This is just where we are."
          </p>
          <p style={{ fontFamily:'var(--font-space)',fontSize:'14px',color:'rgba(255,255,255,0.25)',marginBottom:'32px' }}>— Muhammad Zubair</p>
          <Link href="/contact" style={{
            display:'inline-flex',alignItems:'center',gap:'8px',
            background:'linear-gradient(135deg,#1A3A8F,#4F8EF7)',
            border:'1px solid rgba(79,142,247,0.4)',
            borderRadius:'100px',padding:'14px 32px',
            fontFamily:'var(--font-space),sans-serif',fontSize:'15px',
            fontWeight:'600',color:white,textDecoration:'none',
            boxShadow:'0 4px 24px rgba(79,142,247,0.25)',
          }}>
            Build with us →
          </Link>
        </div>
      </section>
    </main>
  )
}
