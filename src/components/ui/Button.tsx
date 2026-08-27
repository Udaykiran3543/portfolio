import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400',
        variant === 'primary' &&
          'bg-gradient-accent text-slate-950 hover:shadow-[0_0_24px_-4px_rgba(168,85,247,0.6)] hover:scale-[1.02]',
        variant === 'secondary' &&
          'border border-white/15 bg-white/5 text-text hover:border-white/30 hover:bg-white/10',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
