'use client'
import { useEffect, useRef, useState } from 'react'

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
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  )
}
