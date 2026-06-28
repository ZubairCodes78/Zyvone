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
        {/* Animated grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'linear-gradient(rgba(212,245,60,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,245,60,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}/>
        {/* Multiple glow effects */}
        <div style={{
          position: 'absolute', top: '-120px', left: '-120px',
          width: '700px', height: '700px', borderRadius: '50%', display: 'flex',
          background: 'radial-gradient(circle, rgba(212,245,60,0.15) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}/>
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%', display: 'flex',
          background: 'radial-gradient(circle, rgba(212,245,60,0.10) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite 2s',
        }}/>
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '4px', height: '4px',
            background: '#D4F53C',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}/>
        ))}
        {/* Z logo with glow */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '90px', height: '90px',
          background: 'linear-gradient(145deg, #0D1B4B, #112040)',
          border: '3px solid rgba(212,245,60,0.7)',
          borderRadius: '20px', marginBottom: '36px',
          boxShadow: '0 0 40px rgba(212,245,60,0.3), inset 0 2px 0 rgba(255,255,255,0.1)',
          animation: 'logoFloat 6s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '48px', fontWeight: '900', color: '#D4F53C', lineHeight: 1, display: 'flex', textShadow: '0 0 20px rgba(212,245,60,0.5)' }}>Z</span>
        </div>
        {/* Company name with tracking */}
        <div style={{
          fontSize: '22px', fontWeight: '700', color: 'rgba(255,255,255,0.50)',
          letterSpacing: '0.25em', marginBottom: '24px', display: 'flex',
          textShadow: '0 0 20px rgba(212,245,60,0.2)',
        }}>ZYVONE</div>
        {/* Headline line 1 */}
        <div style={{
          fontSize: '82px', fontWeight: '800', color: '#FFFFFF',
          lineHeight: 1.0, letterSpacing: '-0.04em',
          marginBottom: '8px', display: 'flex',
          textShadow: '0 0 30px rgba(0,0,0,0.5)',
        }}>We Build Systems.</div>
        {/* Headline line 2 */}
        <div style={{
          fontSize: '82px', fontWeight: '800', color: '#D4F53C',
          lineHeight: 1.0, letterSpacing: '-0.04em',
          marginBottom: '48px', display: 'flex',
          textShadow: '0 0 30px rgba(212,245,60,0.4)',
        }}>Not Services.</div>
        {/* Tagline */}
        <div style={{
          fontSize: '24px', color: 'rgba(255,255,255,0.50)',
          fontWeight: '400', maxWidth: '720px', display: 'flex',
          letterSpacing: '0.02em',
        }}>
          Premium digital company · AI automation · Web development · Pakistan
        </div>
        {/* Stats badges */}
        <div style={{
          position: 'absolute', bottom: '64px', left: '80px', display: 'flex',
          gap: '16px',
        }}>
          <div style={{
            background: 'rgba(212,245,60,0.12)',
            border: '1px solid rgba(212,245,60,0.4)',
            borderRadius: '12px', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#D4F53C' }}>$100K+</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Revenue</span>
          </div>
          <div style={{
            background: 'rgba(212,245,60,0.12)',
            border: '1px solid rgba(212,245,60,0.4)',
            borderRadius: '12px', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#D4F53C' }}>50+</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Projects</span>
          </div>
        </div>
        {/* Domain badge */}
        <div style={{
          position: 'absolute', bottom: '64px', right: '80px', display: 'flex',
          alignItems: 'center', gap: '12px',
          background: 'rgba(212,245,60,0.15)',
          border: '1px solid rgba(212,245,60,0.5)',
          borderRadius: '100px', padding: '14px 32px',
          boxShadow: '0 0 30px rgba(212,245,60,0.2)',
        }}>
          <div style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#22c55e', display:'flex', boxShadow: '0 0 10px #22c55e' }}/>
          <span style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: '600', display: 'flex', letterSpacing: '0.02em' }}>zyvone.site</span>
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes logoFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          @keyframes gridMove {
            0% { backgroundPosition: 0 0; }
            100% { backgroundPosition: 60px 60px; }
          }
        `}</style>
      </div>
    ),
    { 
      width: 1200, 
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }
  )
}
