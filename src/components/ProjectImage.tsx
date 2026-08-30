'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ProjectImage({ src, alt, className = '', priority = false }: ProjectImageProps) {
  const containerRef = useReveal(0)

  return (
    <div 
      ref={containerRef}
      className={`relative w-full bg-gradient-to-b from-[#10192d] to-[#0a0f1d] rounded-2xl overflow-hidden group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full h-auto object-cover transition-transform duration-350 ease-out group-hover:scale-[1.03]"
        quality={95}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
      />
    </div>
  )
}
