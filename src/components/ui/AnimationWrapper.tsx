'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
  as?: React.ElementType
}

export function Reveal({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 24,
  className = '',
  as: Component = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTimeout(() => setIsVisible(true), 0)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'none'
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`
      case 'down':
        return `translateY(-${distance}px)`
      case 'left':
        return `translateX(${distance}px)`
      case 'right':
        return `translateX(-${distance}px)`
      case 'none':
      default:
        return 'none'
    }
  }

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({
  children,
  index = 0,
  baseDelay = 70,
  duration = 600,
  className = '',
}: {
  children: React.ReactNode
  index?: number
  baseDelay?: number
  duration?: number
  className?: string
}) {
  return (
    <Reveal delay={index * baseDelay} duration={duration} className={className}>
      {children}
    </Reveal>
  )
}

export function AmbientGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[500px] rounded-full blur-[130px] opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #D4F53C 0%, rgba(212, 245, 60, 0.1) 50%, transparent 75%)' }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[400px] h-[300px] rounded-full blur-[100px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />
    </div>
  )
}
