'use client'

const C = {
  void:    '#060B18',
  deep:    '#0D1B4B',
  slate:   '#112040',
  signal:  '#D4F53C',
  signalD: 'rgba(212,245,60,0.20)',
  signalDim:'rgba(212,245,60,0.08)',
  white:   '#FFFFFF',
  fog:     'rgba(255,255,255,0.40)',
  line:    'rgba(212,245,60,0.12)',
  green:   '#22c55e',
}

const KF = `
  @keyframes zy-fy  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-9px)} }
  @keyframes zy-fx  { 0%,100%{transform:translateX(0)}  50%{transform:translateX(7px)}  }
  @keyframes zy-pu  { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes zy-sp  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes zy-fu  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes zy-rp  { 0%{r:8;opacity:0.7} 100%{r:80;opacity:0} }
  @keyframes zy-sc  { 0%{transform:translateY(-20px)} 100%{transform:translateY(340px)} }
`

/* ─── TOOLMATIC ─────────────────────────────────────── */
export function ToolmaticVisual({ height = 320 }: { height?: number }) {
  return (
    <div style={{ width:'100%', height:`${height}px`, position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,${C.void} 0%,${C.deep} 100%)` }}>
      <style>{KF}</style>
      <svg width="100%" height="100%" viewBox="0 0 640 320" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="tm-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.signal} stopOpacity="0.12"/>
            <stop offset="100%" stopColor={C.signal} stopOpacity="0"/>
          </radialGradient>
          <pattern id="tm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke={C.line} strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="640" height="320" fill="url(#tm-grid)"/>
        <ellipse cx="320" cy="160" rx="220" ry="130" fill="url(#tm-g)"/>

        {/* Browser window */}
        <g style={{animation:'zy-fy 4.5s ease-in-out infinite'}}>
          <rect x="160" y="60" width="320" height="200" rx="12" fill="rgba(0,0,0,0.3)" transform="translate(4,6)"/>
          <rect x="160" y="60" width="320" height="200" rx="12" fill={C.slate} stroke={C.signal} strokeWidth="0.8" strokeOpacity="0.5"/>
          <rect x="160" y="60" width="320" height="32" rx="12" fill={C.deep}/>
          <rect x="160" y="78" width="320" height="14" fill={C.deep}/>
          <circle cx="180" cy="76" r="5" fill="#ef4444"/>
          <circle cx="196" cy="76" r="5" fill="#f59e0b"/>
          <circle cx="212" cy="76" r="5" fill={C.green}/>
          <rect x="232" y="68" width="176" height="16" rx="8" fill="rgba(212,245,60,0.08)" stroke={C.signal} strokeWidth="0.4" strokeOpacity="0.4"/>
          <text x="320" y="80" fontSize="7.5" fill={C.fog} textAnchor="middle" fontFamily="monospace">toolmatic.site</text>
          <text x="320" y="114" fontSize="12" fill={C.white} textAnchor="middle" fontFamily="monospace" fontWeight="bold">Free AI Tools</text>
          <text x="320" y="128" fontSize="7.5" fill={C.fog} textAnchor="middle" fontFamily="monospace">50+ tools · No sign-up · Instant results</text>
          {[{x:178,l:'Meta\nTag'},{x:250,l:'Word\nCount'},{x:322,l:'KD\nCheck'},{x:394,l:'SEO\nAnalysis'},{x:466,l:'AI\nWriter'}].map((t,i)=>(
            <g key={i} style={{animation:`zy-fu 0.5s ease ${i*0.1+0.2}s both`}}>
              <rect x={t.x-28} y="144" width="60" height="56" rx="8" fill={C.signalDim} stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.4"/>
              <text x={t.x} y="168" fontSize="7" fill={C.signal} textAnchor="middle" fontFamily="monospace">{t.l.split('\n')[0]}</text>
              <text x={t.x} y="180" fontSize="7" fill={C.signal} textAnchor="middle" fontFamily="monospace">{t.l.split('\n')[1]}</text>
            </g>
          ))}
          <rect x="175" y="214" width="50" height="17" rx="8" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="0.6"/>
          <circle cx="186" cy="222" r="3.5" fill={C.green}><animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/></circle>
          <text x="194" y="226" fontSize="7" fill={C.green} fontFamily="monospace">LIVE</text>
          <text x="234" y="226" fontSize="7" fill={C.fog} fontFamily="monospace">50+ tools active</text>
        </g>

        {/* Orbit nodes */}
        {[{cx:82,cy:82,l:'SEO',s:'tools',d:'0.5'},{cx:558,cy:82,l:'FREE',s:'always',d:'1'},{cx:78,cy:248,l:'AI',s:'powered',d:'1.5'},{cx:558,cy:248,l:'FAST',s:'instant',d:'0.8'}].map((n,i)=>(
          <g key={i} style={{animation:`zy-fy ${3.5+i*0.3}s ease-in-out ${n.d}s infinite`}}>
            <circle cx={n.cx} cy={n.cy} r="30" fill={C.deep} stroke={C.signal} strokeWidth="0.8" strokeOpacity="0.5"/>
            <text x={n.cx} y={n.cy-3} fontSize="8" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">{n.l}</text>
            <text x={n.cx} y={n.cy+10} fontSize="6.5" fill={C.fog} textAnchor="middle" fontFamily="monospace">{n.s}</text>
          </g>
        ))}
        {/* Connecting lines */}
        {[[112,96,160,116],[528,96,480,116],[108,230,160,204],[528,234,480,204]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.signal} strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="3 5"/>
        ))}
        <circle cx="320" cy="160" r="170" fill="none" stroke={C.signal} strokeWidth="0.4" strokeOpacity="0.08" strokeDasharray="4 8"/>
      </svg>
    </div>
  )
}

/* ─── PDFMASTER ──────────────────────────────────────── */
export function PDFMasterVisual({ height = 320 }: { height?: number }) {
  return (
    <div style={{ width:'100%', height:`${height}px`, position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,${C.deep} 0%,#070f22 100%)` }}>
      <style>{KF}</style>
      <svg width="100%" height="100%" viewBox="0 0 640 320" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="pdf-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.signal} stopOpacity="0.12"/>
            <stop offset="100%" stopColor={C.signal} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="320" cy="160" rx="240" ry="140" fill="url(#pdf-g)"/>

        {/* Input stack */}
        <g style={{animation:'zy-fy 4s ease-in-out infinite'}}>
          {[14,9,4,0].map((o,i)=>(
            <rect key={i} x={68+o} y={64+o} width="116" height="152" rx="7"
              fill={C.deep} stroke={C.signal} strokeWidth="0.7"
              strokeOpacity={1-i*0.22} fillOpacity={1-i*0.12}/>
          ))}
          <rect x="82" y="85" width="60" height="18" rx="4" fill="rgba(239,68,68,0.18)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.6"/>
          <text x="112" y="98" fontSize="8.5" fill="#ef4444" textAnchor="middle" fontFamily="monospace" fontWeight="bold">PDF</text>
          {[115,133,149,165,179,193].map((y,i)=>(
            <rect key={i} x="82" y={y} width={i%3===0?80:i%3===1?60:70} height="3.5" rx="1.5" fill={C.fog} opacity="0.3"/>
          ))}
          <text x="126" y="230" fontSize="8" fill={C.fog} textAnchor="middle" fontFamily="monospace">3 input files</text>
        </g>

        {/* Pipeline */}
        <line x1="202" y1="162" x2="424" y2="162" stroke={C.signal} strokeWidth="2" strokeOpacity="0.35"/>
        <polygon points="424,156 438,162 424,168" fill={C.signal} opacity="0.5"/>
        {[{x:238,l:'MERGE'},{x:310,l:'COMPRESS'},{x:382,l:'CONVERT'}].map((op,i)=>(
          <g key={i} style={{animation:`zy-fy ${3+i*0.4}s ease-in-out ${i*0.4}s infinite`}}>
            <rect x={op.x-34} y="138" width="68" height="22" rx="5" fill={C.signalDim} stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.45"/>
            <text x={op.x} y="153" fontSize="7.5" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">{op.l}</text>
          </g>
        ))}
        {/* Flow particles */}
        {[0,0.6,1.2].map((d,i)=>(
          <circle key={i} cx="0" cy="0" r="4" fill={C.signal} opacity="0.7">
            <animateMotion dur="2s" begin={`${d}s`} repeatCount="indefinite" path="M 202 162 L 424 162"/>
          </circle>
        ))}

        {/* Output document */}
        <g style={{animation:'zy-fy 4.2s ease-in-out 0.6s infinite'}}>
          <rect x="452" y="74" width="116" height="152" rx="7" fill={C.slate} stroke={C.signal} strokeWidth="1.4" strokeOpacity="0.6"/>
          <circle cx="510" cy="138" r="26" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.45)" strokeWidth="1.2"/>
          <path d="M497 138 L506 147 L524 129" stroke={C.green} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="466" y="177" width="88" height="18" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.45)" strokeWidth="0.6"/>
          <text x="510" y="190" fontSize="8" fill={C.green} textAnchor="middle" fontFamily="monospace" fontWeight="bold">READY</text>
          <text x="510" y="210" fontSize="7.5" fill={C.fog} textAnchor="middle" fontFamily="monospace">size −68%</text>
          <text x="510" y="226" fontSize="7" fill={C.fog} textAnchor="middle" fontFamily="monospace">instant download</text>
        </g>

        {[0,0.9].map((d,i)=>(
          <circle key={i} cx="320" cy="162" r="8" fill="none" stroke={C.signal} strokeWidth="0.8">
            <animate attributeName="r" values="8;90" dur="2.2s" begin={`${d}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.35;0" dur="2.2s" begin={`${d}s`} repeatCount="indefinite"/>
          </circle>
        ))}
        <rect x="200" y="268" width="240" height="28" rx="14" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.35)" strokeWidth="0.8"/>
        <circle cx="218" cy="282" r="4.5" fill={C.green}><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></circle>
        <text x="232" y="286" fontSize="8.5" fill={C.green} fontFamily="monospace">No sign-up · Instant · Always free</text>
      </svg>
    </div>
  )
}

/* ─── CANTT DENTAL ───────────────────────────────────── */
export function CanttDentalVisual({ height = 320 }: { height?: number }) {
  return (
    <div style={{ width:'100%', height:`${height}px`, position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,#060b18 0%,#0a1a30 100%)` }}>
      <style>{KF}</style>
      <svg width="100%" height="100%" viewBox="0 0 640 320" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="dc-g" cx="50%" cy="42%" r="48%">
            <stop offset="0%" stopColor={C.signal} stopOpacity="0.16"/>
            <stop offset="100%" stopColor={C.signal} stopOpacity="0"/>
          </radialGradient>
          <pattern id="dc-map" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M52 0L0 0 0 52" fill="none" stroke="rgba(212,245,60,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="640" height="320" fill="url(#dc-map)"/>
        <line x1="0" y1="164" x2="640" y2="164" stroke="rgba(212,245,60,0.06)" strokeWidth="10"/>
        <line x1="320" y1="0" x2="320" y2="320" stroke="rgba(212,245,60,0.06)" strokeWidth="10"/>
        <line x1="0" y1="96" x2="640" y2="96" stroke="rgba(212,245,60,0.04)" strokeWidth="5"/>
        <line x1="0" y1="240" x2="640" y2="240" stroke="rgba(212,245,60,0.04)" strokeWidth="5"/>
        <line x1="192" y1="0" x2="192" y2="320" stroke="rgba(212,245,60,0.04)" strokeWidth="5"/>
        <line x1="448" y1="0" x2="448" y2="320" stroke="rgba(212,245,60,0.04)" strokeWidth="5"/>
        <ellipse cx="320" cy="148" rx="190" ry="118" fill="url(#dc-g)"/>

        {/* Pulse rings */}
        {[50,82,114].map((r,i)=>(
          <circle key={i} cx="320" cy="144" r={r} fill="none" stroke={C.signal} strokeWidth="0.7" strokeOpacity={0.16-i*0.04}>
            <animate attributeName="r" values={`${r};${r+24}`} dur={`${2.2+i*0.55}s`} begin={`${i*0.65}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.35;0" dur={`${2.2+i*0.55}s`} begin={`${i*0.65}s`} repeatCount="indefinite"/>
          </circle>
        ))}

        {/* Location pin */}
        <g style={{animation:'zy-fy 3.2s ease-in-out infinite'}}>
          <ellipse cx="320" cy="116" rx="30" ry="32" fill={C.deep} stroke={C.signal} strokeWidth="2"/>
          <path d="M303 138 Q320 168 337 138" fill={C.deep} stroke={C.signal} strokeWidth="2"/>
          <line x1="320" y1="97" x2="320" y2="131" stroke={C.signal} strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="302" y1="114" x2="338" y2="114" stroke={C.signal} strokeWidth="2.8" strokeLinecap="round"/>
          <circle cx="320" cy="114" r="4.5" fill={C.signal} opacity="0.7"/>
        </g>

        {/* SERP card */}
        <g style={{animation:'zy-fy 3.8s ease-in-out 0.6s infinite'}}>
          <rect x="390" y="52" width="192" height="116" rx="12" fill={C.slate} stroke={C.signal} strokeWidth="0.7" strokeOpacity="0.45"/>
          <circle cx="410" cy="80" r="11" fill="none" stroke={C.signal} strokeWidth="1.2" strokeOpacity="0.5"/>
          <text x="410" y="84" fontSize="9.5" fill={C.signal} textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">G</text>
          <text x="428" y="76" fontSize="7.5" fill={C.fog} fontFamily="monospace">google.com</text>
          <text x="428" y="88" fontSize="6.5" fill="rgba(255,255,255,0.22)" fontFamily="monospace">cantt dental rawalpindi</text>
          <rect x="400" y="102" width="172" height="22" rx="5" fill="rgba(212,245,60,0.15)" stroke={C.signal} strokeWidth="0.6" strokeOpacity="0.55"/>
          <text x="414" y="117" fontSize="8.5" fill={C.signal} fontFamily="monospace" fontWeight="bold">#1</text>
          <text x="432" y="117" fontSize="7.5" fill={C.white} fontFamily="monospace">Cantt Dental Care</text>
          <rect x="400" y="129" width="172" height="18" rx="5" fill={C.signalDim}/>
          <text x="414" y="141" fontSize="7.5" fill={C.fog} fontFamily="monospace">#2  competitor...</text>
          <text x="410" y="160" fontSize="9" fill="#f59e0b" fontFamily="monospace">★★★★★</text>
          <text x="470" y="160" fontSize="7" fill={C.fog} fontFamily="monospace">4.9</text>
        </g>

        {/* Appointment counter */}
        <g style={{animation:'zy-fy 4s ease-in-out 1.1s infinite'}}>
          <rect x="52" y="186" width="164" height="74" rx="12" fill={C.slate} stroke={C.signal} strokeWidth="0.7" strokeOpacity="0.4"/>
          <text x="74" y="214" fontSize="30" fill={C.signal} fontFamily="monospace" fontWeight="bold">20+</text>
          <text x="74" y="232" fontSize="7.5" fill={C.fog} fontFamily="monospace">Monthly appointments</text>
          <text x="74" y="248" fontSize="7" fill={C.fog} fontFamily="monospace">via website</text>
        </g>

        {/* Review card */}
        <g style={{animation:'zy-fy 3.6s ease-in-out 0.3s infinite'}}>
          <rect x="398" y="190" width="164" height="68" rx="12" fill={C.slate} stroke={C.signal} strokeWidth="0.7" strokeOpacity="0.4"/>
          <text x="418" y="212" fontSize="9" fill={C.white} fontFamily="monospace" fontWeight="bold">Patient Rating</text>
          <text x="418" y="234" fontSize="18" fill="#f59e0b" fontFamily="monospace">★★★★★</text>
          <text x="418" y="250" fontSize="7" fill={C.fog} fontFamily="monospace">4.9 / 5.0 average</text>
        </g>
      </svg>
    </div>
  )
}

/* ─── AI AUTOMATION visual ───────────────────────────── */
export function AIAutomationVisual({ height = 320 }: { height?: number }) {
  return (
    <div style={{ width:'100%', height:`${height}px`, position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,${C.void} 0%,${C.deep} 100%)` }}>
      <style>{KF}</style>
      <svg width="100%" height="100%" viewBox="0 0 640 320" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="ai-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.signal} stopOpacity="0.14"/>
            <stop offset="100%" stopColor={C.signal} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="320" cy="160" rx="240" ry="150" fill="url(#ai-g)"/>

        {/* Central brain/hub */}
        <g style={{animation:'zy-fy 4s ease-in-out infinite'}}>
          <circle cx="320" cy="160" r="52" fill={C.deep} stroke={C.signal} strokeWidth="1.5" strokeOpacity="0.6"/>
          <circle cx="320" cy="160" r="38" fill={C.slate} stroke={C.signal} strokeWidth="0.8" strokeOpacity="0.4"/>
          <text x="320" y="153" fontSize="11" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">AUTO</text>
          <text x="320" y="168" fontSize="9" fill={C.fog} textAnchor="middle" fontFamily="monospace">SYSTEM</text>
          <text x="320" y="182" fontSize="7" fill={C.signal} textAnchor="middle" fontFamily="monospace">ACTIVE</text>
        </g>

        {/* Rotating outer ring */}
        <circle cx="320" cy="160" r="90" fill="none" stroke={C.signal} strokeWidth="0.6" strokeOpacity="0.2"
          strokeDasharray="6 4" style={{animation:'zy-sp 12s linear infinite', transformOrigin:'320px 160px'}}/>

        {/* Satellite nodes */}
        {[
          {angle:0,   label:'CRM',    sub:'Auto-sync'},
          {angle:60,  label:'EMAIL',  sub:'Sequences'},
          {angle:120, label:'REPORT', sub:'Weekly'},
          {angle:180, label:'LEADS',  sub:'Capture'},
          {angle:240, label:'FOLLOW', sub:'Up auto'},
          {angle:300, label:'SLACK',  sub:'Alerts'},
        ].map((n,i)=>{
          const rad = (n.angle - 90) * Math.PI / 180
          const nx = 320 + 140 * Math.cos(rad)
          const ny = 160 + 140 * Math.sin(rad)
          return (
            <g key={i} style={{animation:`zy-fy ${3.5+i*0.3}s ease-in-out ${i*0.5}s infinite`}}>
              <line x1={320 + 55 * Math.cos(rad)} y1={160 + 55 * Math.sin(rad)}
                x2={nx - 28 * Math.cos(rad)} y2={ny - 28 * Math.sin(rad)}
                stroke={C.signal} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 4"/>
              {/* Particle on line */}
              <circle r="3" fill={C.signal} opacity="0.6">
                <animateMotion dur={`${1.5+i*0.2}s`} begin={`${i*0.3}s`} repeatCount="indefinite"
                  path={`M ${320+55*Math.cos(rad)} ${160+55*Math.sin(rad)} L ${nx-28*Math.cos(rad)} ${ny-28*Math.sin(rad)}`}/>
              </circle>
              <circle cx={nx} cy={ny} r="28" fill={C.deep} stroke={C.signal} strokeWidth="0.9" strokeOpacity="0.5"/>
              <text x={nx} y={ny-3} fontSize="7.5" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">{n.label}</text>
              <text x={nx} y={ny+10} fontSize="6" fill={C.fog} textAnchor="middle" fontFamily="monospace">{n.sub}</text>
            </g>
          )
        })}

        {/* Scanline */}
        <rect x="190" y="0" width="260" height="3" fill={C.signal} opacity="0.08"
          style={{animation:'zy-sc 3s linear infinite'}}/>

        {/* Stats bottom */}
        <rect x="100" y="270" width="440" height="28" rx="8" fill="rgba(212,245,60,0.07)" stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.3"/>
        {['22hrs saved/wk','300% more leads','24/7 active','0 manual tasks'].map((s,i)=>(
          <text key={i} x={152+i*110} y="288" fontSize="7.5" fill={C.fog} textAnchor="middle" fontFamily="monospace">{s}</text>
        ))}
        {[262,372,482].map((x,i)=>(
          <line key={i} x1={x} y1="274" x2={x} y2="294" stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.3"/>
        ))}
      </svg>
    </div>
  )
}

/* ─── BEFORE / AFTER visual ──────────────────────────── */
export function BeforeAfterVisual({ height = 280 }: { height?: number }) {
  return (
    <div style={{ width:'100%', height:`${height}px`, position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,${C.deep} 0%,${C.void} 100%)` }}>
      <style>{KF}</style>
      <svg width="100%" height="100%" viewBox="0 0 640 280" preserveAspectRatio="xMidYMid meet">
        {/* Divider */}
        <line x1="320" y1="0" x2="320" y2="280" stroke={C.signal} strokeWidth="1.5" strokeOpacity="0.4"/>
        <rect x="296" y="124" width="48" height="32" rx="8" fill={C.deep} stroke={C.signal} strokeWidth="1" strokeOpacity="0.6"/>
        <text x="320" y="144" fontSize="9" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">VS</text>

        {/* BEFORE — left side */}
        <text x="160" y="36" fontSize="11" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace" fontWeight="bold">BEFORE</text>
        {[
          {y:58,  label:'Follow-up emails', val:'Manual · 3hrs/day',   bad:true},
          {y:96,  label:'CRM updates',      val:'Copy-paste · daily',  bad:true},
          {y:134, label:'Reports',          val:'Monday morning ritual',bad:true},
          {y:172, label:'Lead response',    val:'2–3 days average',    bad:true},
          {y:210, label:'Availability',     val:'9–5 only',            bad:true},
        ].map((r,i)=>(
          <g key={i} style={{animation:`zy-fu 0.4s ease ${i*0.1}s both`}}>
            <rect x="40" y={r.y} width="240" height="30" rx="6" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" strokeWidth="0.6"/>
            <circle cx="56" cy={r.y+15} r="5" fill="none" stroke="#ef4444" strokeWidth="1"/>
            <line x1="53" y1={r.y+12} x2="59" y2={r.y+18} stroke="#ef4444" strokeWidth="1"/>
            <line x1="59" y1={r.y+12} x2="53" y2={r.y+18} stroke="#ef4444" strokeWidth="1"/>
            <text x="70" y={r.y+12} fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">{r.label}</text>
            <text x="70" y={r.y+23} fontSize="7" fill="rgba(239,68,68,0.7)" fontFamily="monospace">{r.val}</text>
          </g>
        ))}

        {/* AFTER — right side */}
        <text x="480" y="36" fontSize="11" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">AFTER ZYVONE</text>
        {[
          {y:58,  label:'Follow-up emails', val:'Automated · 0 manual'},
          {y:96,  label:'CRM updates',      val:'Real-time sync · auto'},
          {y:134, label:'Reports',          val:'Sunday night · inbox'},
          {y:172, label:'Lead response',    val:'Under 90 seconds'},
          {y:210, label:'Availability',     val:'24 / 7 always on'},
        ].map((r,i)=>(
          <g key={i} style={{animation:`zy-fu 0.4s ease ${i*0.1+0.3}s both`}}>
            <rect x="340" y={r.y} width="260" height="30" rx="6" fill="rgba(212,245,60,0.08)" stroke={C.signal} strokeWidth="0.6" strokeOpacity="0.3"/>
            <circle cx="358" cy={r.y+15} r="5" fill="rgba(34,197,94,0.2)" stroke={C.green} strokeWidth="1"/>
            <path d={`M353 ${r.y+15} L357 ${r.y+19} L363 ${r.y+11}`} stroke={C.green} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="372" y={r.y+12} fontSize="7.5" fill="rgba(255,255,255,0.65)" fontFamily="monospace">{r.label}</text>
            <text x="372" y={r.y+23} fontSize="7" fill={C.signal} fontFamily="monospace">{r.val}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}

/* ─── STATS DASHBOARD visual ─────────────────────────── */
export function StatsDashboardVisual({ height = 280 }: { height?: number }) {
  return (
    <div style={{ width:'100%', height:`${height}px`, position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,${C.void} 0%,${C.slate} 100%)` }}>
      <style>{KF}</style>
      <svg width="100%" height="100%" viewBox="0 0 640 280" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="sd-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.signal} stopOpacity="0.10"/>
            <stop offset="100%" stopColor={C.signal} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="320" cy="140" rx="280" ry="160" fill="url(#sd-g)"/>

        {/* Dashboard header */}
        <rect x="60" y="24" width="520" height="36" rx="8" fill={C.deep} stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.3"/>
        <circle cx="80" cy="42" r="4" fill={C.green}><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></circle>
        <text x="92" y="46" fontSize="9" fill={C.white} fontFamily="monospace" fontWeight="bold">ZYVONE DASHBOARD</text>
        <rect x="500" y="30" width="60" height="18" rx="9" fill="rgba(212,245,60,0.15)" stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="530" y="43" fontSize="7.5" fill={C.signal} textAnchor="middle" fontFamily="monospace" fontWeight="bold">LIVE</text>

        {/* Stat tiles row */}
        {[
          {x:64,  n:'47',    l:'Leads Today',      color:'rgba(212,245,60,0.10)'},
          {x:230, n:'$12.5K',l:'Revenue (week)',    color:'rgba(34,197,94,0.08)'},
          {x:396, n:'22hrs', l:'Time Saved',        color:'rgba(212,245,60,0.08)'},
          {x:498, n:'100%',  l:'Uptime',            color:'rgba(34,197,94,0.08)'},
        ].map((t,i)=>(
          <g key={i}>
            <rect x={t.x} y="72" width={i<3?150:140} height="68" rx="8" fill={t.color} stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.3"/>
            <text x={t.x+12} y="102" fontSize={t.n.length>4?20:26} fill={C.signal} fontFamily="monospace" fontWeight="bold">{t.n}</text>
            <text x={t.x+12} y="130" fontSize="7.5" fill={C.fog} fontFamily="monospace">{t.l}</text>
          </g>
        ))}

        {/* Activity feed */}
        <rect x="64" y="154" width="520" height="104" rx="8" fill="rgba(13,27,75,0.5)" stroke={C.signal} strokeWidth="0.5" strokeOpacity="0.2"/>
        <text x="78" y="172" fontSize="8" fill={C.fog} fontFamily="monospace" letterSpacing="0.08em">RECENT ACTIVITY</text>
        <line x1="64" y1="178" x2="584" y2="178" stroke={C.signal} strokeWidth="0.4" strokeOpacity="0.2"/>
        {[
          {t:'New lead captured: Ahmed R. — Dubai',              time:'2 min ago'},
          {t:'Follow-up email sent automatically',              time:'8 min ago'},
          {t:'Weekly report generated and delivered',           time:'1 hr ago'},
          {t:'CRM synced — 14 new contacts added',             time:'3 hrs ago'},
        ].map((a,i)=>(
          <g key={i} style={{animation:`zy-fu 0.4s ease ${i*0.1+0.3}s both`}}>
            <circle cx="80" cy={192+i*20} r="3.5" fill={C.signal} opacity="0.7"/>
            <text x="94" y={196+i*20} fontSize="7.5" fill="rgba(255,255,255,0.65)" fontFamily="monospace">{a.t}</text>
            <text x="550" y={196+i*20} fontSize="7" fill={C.fog} textAnchor="middle" fontFamily="monospace">{a.time}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}
