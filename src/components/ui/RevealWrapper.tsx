'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function RevealWrapper({ children, delay = 0, className = '' }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
          observer.unobserve(element)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[12px]'
      }`}
    >
      {children}
    </div>
  )
}
