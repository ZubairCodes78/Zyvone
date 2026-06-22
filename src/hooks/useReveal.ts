'use client'
import { useEffect, useRef } from 'react'

export function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return
    el.style.cssText = `opacity:0;transform:translateY(24px);transition:opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity='1'; el.style.transform='none'; io.unobserve(el) }
    }, { threshold:0.08 })
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return ref
}
