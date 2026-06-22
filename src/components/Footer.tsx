import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-bg border-t border-line-dark">
      {/* Top section */}
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 py-14 flex justify-between items-start">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-1">
            <Image
              src="/favicon.png"
              alt="ZYVONE"
              width={32}
              height={32}
            />
            <span className="font-sans font-bold text-[17px] tracking-[0.04em] text-white">ZYVONE</span>
          </Link>
          <p className="text-white/25 text-[14px]">Building systems. Not deliverables.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-lime transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-lime transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://wa.me/923XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-lime transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 21l1.65-3.8A8.5 8.5 0 1 1 7 18.4L3 21zm7.9-5.4c.9.5 2 .8 3.1.8 3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6c0 1.1.3 2.2.8 3.1l.3.5-.7 1.7 1.8-.6.7.5z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 py-14 border-y border-line-dark bg-secondary-bg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white/20 text-[11px] font-medium uppercase tracking-widest mb-5">Systems</h4>
            <ul className="space-y-3">
              <li><Link href="/services/automation" className="text-white/40 hover:text-white transition-colors text-[14px]">AI Automation</Link></li>
              <li><Link href="/services/web" className="text-white/40 hover:text-white transition-colors text-[14px]">Web Development</Link></li>
              <li><Link href="/services/content" className="text-white/40 hover:text-white transition-colors text-[14px]">AI Content</Link></li>
              <li><Link href="/services/marketing" className="text-white/40 hover:text-white transition-colors text-[14px]">Growth & Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/20 text-[11px] font-medium uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/40 hover:text-white transition-colors text-[14px]">About</Link></li>
              <li><Link href="/story" className="text-white/40 hover:text-white transition-colors text-[14px]">Story</Link></li>
              <li><Link href="/work" className="text-white/40 hover:text-white transition-colors text-[14px]">Work</Link></li>
              <li><Link href="/journal" className="text-white/40 hover:text-white transition-colors text-[14px]">Journal</Link></li>
              <li><Link href="/book-call" className="text-white/40 hover:text-white transition-colors text-[14px]">Book a Call</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/20 text-[11px] font-medium uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-[14px]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-white transition-colors text-[14px]">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/20 text-[11px] font-medium uppercase tracking-widest mb-5">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://wa.me/923XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-[14px]">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-[14px]">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-[14px]">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 py-6 flex justify-between items-center">
        <p className="text-white/20 text-[13px]">© 2025 ZYVONE. All rights reserved.</p>
        <p className="text-white/20 text-[13px]">Built by ZYVONE</p>
      </div>
    </footer>
  )
}
