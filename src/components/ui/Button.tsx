import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'standard' | 'large'
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'standard', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer'
  
  const variantStyles = {
    primary: 'bg-lime text-black hover:bg-lime/90 shadow-[0_4px_24px_rgba(212,245,60,0.25)] font-bold',
    secondary: 'border border-white/10 text-white/70 hover:text-white hover:border-white/20 bg-white/5',
    ghost: 'text-white/50 hover:text-white hover:bg-white/5',
  }
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm min-h-[36px]',
    standard: 'px-6 py-3 text-sm min-h-[44px]',
    large: 'px-8 py-4 text-base min-h-[52px]',
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
