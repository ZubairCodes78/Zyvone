'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Work',     href: '/work'      },
  { label: 'Services', href: '/#services' },
  { label: 'About',    href: '/about'     },
  { label: 'Story',    href: '/story'     },
  { label: 'Journal',  href: '/journal'   },
]

export default function Navbar() {
  const [scrollY, setScrollY]       = useState(0)
  const [visible, setVisible]       = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname    = usePathname()

  // Scroll direction tracking — hide on scroll down, show on scroll up
  const handleScroll = useCallback(() => {
    const current = window.scrollY
    if (current < 80) {
      setVisible(true)
    } else if (current > lastScrollY.current + 8) {
      setVisible(false)
      setMobileOpen(false)
    } else if (current < lastScrollY.current - 4) {
      setVisible(true)
    }
    lastScrollY.current = current
    setScrollY(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Escape key closes mobile menu
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const scrolled = scrollY > 60

  return (
    <>
      {/* ── MAIN NAVBAR ─────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          // Hide/show animation based on scroll direction
          transform: visible ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        role="banner"
      >
        {/* ── iOS GLASS PILL ─────────────────────────────────── */}
        <div
          className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            // When scrolled: centered pill with max-width
            // When at top: full-width container
            maxWidth:      scrolled ? '860px'  : '100%',
            margin:        scrolled ? '14px auto 0' : '0 auto',
            padding:       scrolled ? '0 20px' : '0',
          }}
        >
          <nav
            aria-label="Main navigation"
            style={{
              // ── LIQUID GLASS MATERIAL ──────────────────────
              background: scrolled
                ? 'rgba(13, 11, 97, 0.50)'       // Premium brand glass when scrolled
                : 'transparent',                  // Transparent at top
              backdropFilter: scrolled
                ? 'blur(28px) saturate(180%)'
                : 'none',
              WebkitBackdropFilter: scrolled
                ? 'blur(28px) saturate(180%)'
                : 'none',
              border: scrolled
                ? '1px solid rgba(255,255,255,0.10)'
                : 'none',
              borderBottom: scrolled
                ? undefined
                : '1px solid rgba(255,255,255,0.04)',
              borderRadius: scrolled ? '100px' : '0',   // Full pill radius when floating
              boxShadow: scrolled
                ? '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 0.5px rgba(212,245,60,0.12)'
                : 'none',
              padding: scrolled ? '0 28px' : '0 40px',
              transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
              height: scrolled ? '52px' : '68px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* ── LOGO ─────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 focus-visible:outline-2 focus-visible:outline-arc focus-visible:outline-offset-4 rounded-lg"
              aria-label="ZYVONE — Home"
            >
              <div
                className="flex items-center justify-center flex-shrink-0 transition-all duration-500"
                style={{
                  width:  scrolled ? '28px' : '34px',
                  height: scrolled ? '28px' : '34px',
                }}
              >
                <Image
                  src="/favicon.png"
                  alt="ZYVONE"
                  width={scrolled ? 28 : 34}
                  height={scrolled ? 28 : 34}
                  priority
                />
              </div>

              <span
                className="font-sans font-bold tracking-[0.05em] text-white transition-all duration-500"
                style={{ fontSize: scrolled ? '16px' : '18px' }}
              >
                ZYVONE
              </span>
            </Link>

            {/* ── DESKTOP LINKS ─────────────────────────────── */}
            <div className="hidden md:flex items-center" style={{ gap: scrolled ? '28px' : '36px' }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-4 rounded"
                    style={{
                      fontFamily:    'var(--font-space), sans-serif',
                      fontSize:      '14px',
                      fontWeight:    '500',
                      color:         isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
                      transition:    'color 0.2s ease',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)' }}
                  >
                    {link.label}

                    <span
                      className="absolute -bottom-0.5 left-0 h-px bg-lime transition-all duration-200 ease-out"
                      style={{
                        width: isActive ? '100%' : '0%',
                        transformOrigin: 'left',
                      }}
                      aria-hidden="true"
                    />
                  </Link>
                )
              })}
            </div>

            {/* ── CTA BUTTON ───────────────────────────────── */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="/contact"
                className="focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-4"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '6px',
                  fontFamily:     'var(--font-space), sans-serif',
                  fontSize:       '13px',
                  fontWeight:     '600',
                  color:          '#060B18',
                  background:     '#D4F53C',
                  border:         '1px solid #D4F53C',
                  borderRadius:   '100px',
                  padding:        scrolled ? '7px 18px' : '9px 22px',
                  backdropFilter: 'blur(8px)',
                  transition:     'all 0.2s ease',
                  letterSpacing:  '0.01em',
                  boxShadow:      '0 4px 24px rgba(212,245,60,0.25)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background   = '#B8D932'
                  el.style.borderColor  = '#B8D932'
                  el.style.transform    = 'scale(1.03)'
                  el.style.boxShadow    = '0 6px 30px rgba(212,245,60,0.40)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background   = '#D4F53C'
                  el.style.borderColor  = '#D4F53C'
                  el.style.transform    = 'scale(1)'
                  el.style.boxShadow    = '0 4px 24px rgba(212,245,60,0.25)'
                }}
              >
                Start a project
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* ── MOBILE HAMBURGER ──────────────────────────── */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-lg focus-visible:outline-2 focus-visible:outline-lime"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: mobileOpen ? 'rgba(212,245,60,0.12)' : 'transparent',
                border:     mobileOpen ? '1px solid rgba(212,245,60,0.25)' : '1px solid transparent',
                transition: 'all 0.2s ease',
                padding:    '6px',
              }}
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  className="w-full rounded-full bg-white transition-all duration-300 origin-center"
                  style={{
                    height:    '1.5px',
                    opacity:   i === 1 && mobileOpen ? 0 : 1,
                    transform: mobileOpen
                      ? i === 0 ? 'rotate(45deg) translateY(6.5px)'
                      : i === 2 ? 'rotate(-45deg) translateY(-6.5px)'
                      : 'none'
                      : 'none',
                  }}
                />
              ))}
            </button>

          </nav>
        </div>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center"
        style={{
          background:              'rgba(5,7,10,0.92)',
          backdropFilter:          'blur(40px) saturate(180%)',
          WebkitBackdropFilter:    'blur(40px) saturate(180%)',
          opacity:                 mobileOpen ? 1 : 0,
          visibility:              mobileOpen ? 'visible' : 'hidden',
          transition:              'opacity 0.35s ease, visibility 0.35s ease',
          pointerEvents:           mobileOpen ? 'all' : 'none',
        }}
      >
        <nav className="flex flex-col items-center gap-2" aria-label="Mobile navigation">
          {[...NAV_LINKS, { label: 'Contact', href: '/contact' }].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans font-bold text-white focus-visible:outline-2 focus-visible:outline-lime rounded px-4 py-2"
              style={{
                fontSize:    'clamp(32px, 8vw, 52px)',
                lineHeight:  '1.1',
                letterSpacing: '-0.02em',
                opacity:     mobileOpen ? 1 : 0,
                transform:   mobileOpen ? 'none' : 'translateY(20px)',
                transition:  `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 55 + 80}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 55 + 80}ms, color 0.15s ease`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#D4F53C' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6"
          style={{ opacity: mobileOpen ? 1 : 0, transition: 'opacity 0.3s ease 0.5s' }}
        >
          {[
            { label: 'Instagram', href: 'https://instagram.com/zubair.zyvone' },
            { label: 'LinkedIn',  href: 'https://linkedin.com' },
            { label: 'WhatsApp',  href: 'https://wa.me/923XXXXXXXXX' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] font-medium text-white/30 hover:text-white transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
