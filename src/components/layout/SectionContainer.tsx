import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type SectionContainerProps = {
  id: string
  label: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function SectionContainer({
  id,
  label,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn('py-24 md:py-32', className)}>
      <div className="mx-auto max-w-6xl px-6">
        <span className="sr-only">{label}</span>
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-heading`} className="text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
