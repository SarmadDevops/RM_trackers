import React from 'react'

const variants = {
  primary: 'bg-brand-blue hover:bg-brand-glow text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40',
  outline: 'border border-brand-blue text-brand-blue hover:bg-brand-blue/10',
  ghost: 'text-chrome hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  href,
}) {
  const base =
    'inline-flex items-center gap-2 font-heading font-semibold tracking-wide rounded-lg transition-all duration-300 cursor-pointer'

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
