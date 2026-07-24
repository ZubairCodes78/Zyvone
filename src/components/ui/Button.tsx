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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200'
  
  const variantStyles = {
    primary: 'bg-primary text-ink hover:bg-primary/90 shadow-primary',
    secondary: 'bg-card border border-border text-ink hover:border-primary/30 hover:shadow-card-hover',
    ghost: 'text-muted hover:text-ink hover:bg-card',
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
