'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

export default function SocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-bg pt-40 md:pt-52 pb-20 md:pb-28 px-6 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-lime/3 rounded-full blur-2xl" />
        
        <div className="max-w-[1360px] mx-auto relative z-10">
          <div ref={useReveal()}>
            <p className="font-sans text-[11px] font-medium text-lime uppercase tracking-[0.14em] mb-6">CONNECT</p>
            <h1 className="font-sans font-bold text-white tracking-[-0.03em] leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              Connect with ZYVONE
            </h1>
            <p className="font-sans text-[19px] text-white/45 mt-6 max-w-lg leading-[1.75]">
              Follow our journey, connect with our team, and stay updated across our official social platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ZYVONE Company */}
      <section className="bg-primary-bg py-20 md:py-28 px-6 relative">
        <div className="max-w-[1360px] mx-auto">
          <div ref={useReveal()} className="mb-12">
            <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              ZYVONE
            </h2>
            <p className="font-sans text-[16px] text-white/40 mt-3">Official company profiles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/zyvone.official/',
                description: 'Behind the scenes, project updates, and company culture.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              {
                name: 'X',
                url: 'https://x.com/zyvone12',
                description: 'Industry insights, tech updates, and quick thoughts.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/zyvone-limited/',
                description: 'Company updates, career opportunities, and professional network.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              }
            ].map((platform, i) => (
              <div key={platform.name} ref={useReveal(i * 100)}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-8 block hover:border-lime/30 hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-lime/10 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime/0 via-transparent to-lime/0 group-hover:from-lime/5 group-hover:to-lime/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      platform.name === 'Instagram' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' :
                      platform.name === 'X' ? 'bg-black/40' :
                      'bg-blue-600/20'
                    }`}>
                      <span className={platform.name === 'X' ? 'text-white' : platform.name === 'LinkedIn' ? 'text-blue-400' : 'text-pink-400'}>{platform.icon}</span>
                    </div>
                    <h3 className="font-sans font-bold text-[22px] text-white mb-2 group-hover:text-lime transition-colors duration-300">{platform.name}</h3>
                    <p className="font-sans text-[15px] text-white/50 leading-[1.6]">
                      {platform.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-lime text-[14px] font-semibold">
                      Follow
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                        <path d="M3 8h10M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-secondary-bg py-20 md:py-28 px-6 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        
        <div className="max-w-[1360px] mx-auto relative z-10">
          <div ref={useReveal()} className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center flex-shrink-0 border border-lime/20 shadow-lg shadow-lime/10">
              <span className="font-sans font-bold text-[36px] text-lime">Z</span>
            </div>
            <div>
              <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                Muhammad Zubair
              </h2>
              <p className="font-sans text-[16px] text-white/40 mt-3">Founder — Web Development & AI Systems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/zubair.zyvone/',
                description: 'Personal journey, projects, and daily insights.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/zubair-zyvone/',
                description: 'Professional updates, projects, and network.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              {
                name: 'X',
                url: 'https://x.com/ZubairAttari37',
                description: 'Tech thoughts, industry commentary, and updates.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              }
            ].map((platform, i) => (
              <div key={platform.name} ref={useReveal(i * 100)}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-8 block hover:border-lime/30 hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-lime/10 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime/0 via-transparent to-lime/0 group-hover:from-lime/5 group-hover:to-lime/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      platform.name === 'Instagram' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' :
                      platform.name === 'X' ? 'bg-black/40' :
                      'bg-blue-600/20'
                    }`}>
                      <span className={platform.name === 'X' ? 'text-white' : platform.name === 'LinkedIn' ? 'text-blue-400' : 'text-pink-400'}>{platform.icon}</span>
                    </div>
                    <h3 className="font-sans font-bold text-[22px] text-white mb-2 group-hover:text-lime transition-colors duration-300">{platform.name}</h3>
                    <p className="font-sans text-[15px] text-white/50 leading-[1.6]">
                      {platform.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-lime text-[14px] font-semibold">
                      Connect
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                        <path d="M3 8h10M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founder */}
      <section className="bg-primary-bg py-20 md:py-28 px-6 relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-40 left-10 w-48 h-48 bg-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-lime/3 rounded-full blur-2xl" />
        
        <div className="max-w-[1360px] mx-auto relative z-10">
          <div ref={useReveal()} className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center flex-shrink-0 border border-lime/20 shadow-lg shadow-lime/10">
              <span className="font-sans font-bold text-[36px] text-lime">H</span>
            </div>
            <div>
              <h2 className="font-sans font-bold text-white tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                Hashir Ahmed
              </h2>
              <p className="font-sans text-[16px] text-white/40 mt-3">Co-Founder — Creative Strategy & Brand</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/co.founder.zyvone/',
                description: 'Creative work, brand insights, and design process.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/hashir-ahmad327/',
                description: 'Professional network, creative projects, and collaborations.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              {
                name: 'X',
                url: 'https://x.com/HashirAhmad327',
                description: 'Design thoughts, creative commentary, and updates.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              }
            ].map((platform, i) => (
              <div key={platform.name} ref={useReveal(i * 100)}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-8 block hover:border-lime/30 hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-lime/10 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime/0 via-transparent to-lime/0 group-hover:from-lime/5 group-hover:to-lime/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      platform.name === 'Instagram' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' :
                      platform.name === 'X' ? 'bg-black/40' :
                      'bg-blue-600/20'
                    }`}>
                      <span className={platform.name === 'X' ? 'text-white' : platform.name === 'LinkedIn' ? 'text-blue-400' : 'text-pink-400'}>{platform.icon}</span>
                    </div>
                    <h3 className="font-sans font-bold text-[22px] text-white mb-2 group-hover:text-lime transition-colors duration-300">{platform.name}</h3>
                    <p className="font-sans text-[15px] text-white/50 leading-[1.6]">
                      {platform.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-lime text-[14px] font-semibold">
                      Connect
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                        <path d="M3 8h10M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
