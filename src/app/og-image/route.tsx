import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: '1200px', height: '630px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'center',
        background: 'linear-gradient(145deg, #060B18 0%, #0D1B4B 60%, #112040 100%)',
        padding: '80px', position: 'relative', fontFamily: 'sans-serif',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'linear-gradient(rgba(212,245,60,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,245,60,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}/>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-120px', left: '-120px',
          width: '700px', height: '700px', borderRadius: '50%', display: 'flex',
          background: 'radial-gradient(circle, rgba(212,245,60,0.12) 0%, transparent 70%)',
        }}/>
        {/* Z logo */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '80px', height: '80px',
          background: '#0D1B4B',
          border: '2px solid rgba(212,245,60,0.6)',
          borderRadius: '18px', marginBottom: '36px',
        }}>
          <span style={{ fontSize: '42px', fontWeight: '900', color: '#D4F53C', lineHeight: 1, display: 'flex' }}>Z</span>
        </div>
        {/* Company name */}
        <div style={{
          fontSize: '20px', fontWeight: '700', color: 'rgba(255,255,255,0.40)',
          letterSpacing: '0.20em', marginBottom: '20px', display: 'flex',
        }}>ZYVONE</div>
        {/* Headline line 1 */}
        <div style={{
          fontSize: '78px', fontWeight: '800', color: '#FFFFFF',
          lineHeight: 1.0, letterSpacing: '-0.03em',
          marginBottom: '8px', display: 'flex',
        }}>We Build Systems.</div>
        {/* Headline line 2 */}
        <div style={{
          fontSize: '78px', fontWeight: '800', color: '#D4F53C',
          lineHeight: 1.0, letterSpacing: '-0.03em',
          marginBottom: '44px', display: 'flex',
        }}>Not Services.</div>
        {/* Tagline */}
        <div style={{
          fontSize: '22px', color: 'rgba(255,255,255,0.45)',
          fontWeight: '400', maxWidth: '720px', display: 'flex',
        }}>
          Premium digital company · AI automation · Web development · Pakistan
        </div>
        {/* Domain badge */}
        <div style={{
          position: 'absolute', bottom: '64px', right: '80px', display: 'flex',
          alignItems: 'center', gap: '12px',
          background: 'rgba(212,245,60,0.10)',
          border: '1px solid rgba(212,245,60,0.35)',
          borderRadius: '100px', padding: '12px 28px',
        }}>
          <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#22c55e', display:'flex' }}/>
          <span style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: '500', display: 'flex' }}>zyvone.site</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
