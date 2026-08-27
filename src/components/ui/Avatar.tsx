import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { site } from '../../data/site'
import { cn } from '../../lib/utils'

export function Avatar() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="relative h-40 w-40 shrink-0 sm:h-48 sm:w-48" aria-hidden="true">
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--color-accent-from),var(--color-accent-to),var(--color-accent-from))] opacity-80 blur-[2px]',
          !prefersReducedMotion && 'animate-[spin_10s_linear_infinite]',
        )}
      />
      <div className="absolute inset-[6px] overflow-hidden rounded-full bg-bg">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt={site.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
