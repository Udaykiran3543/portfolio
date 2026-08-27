import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type PillProps = {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export function Pill({ children, icon, className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-text',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}
