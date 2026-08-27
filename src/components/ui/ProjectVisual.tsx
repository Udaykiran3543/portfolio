import { ShieldCheck, TrendingUp, Mic, Building2 } from 'lucide-react'
import type { ProjectCategory } from '../../data/projects'
import { cn } from '../../lib/utils'

const visualConfig: Record<
  ProjectCategory,
  { icon: typeof ShieldCheck; gradient: string }
> = {
  security: {
    icon: ShieldCheck,
    gradient: 'from-rose-500/30 via-slate-500/10 to-transparent',
  },
  trade: {
    icon: TrendingUp,
    gradient: 'from-indigo-500/30 via-cyan-400/10 to-transparent',
  },
  podcast: {
    icon: Mic,
    gradient: 'from-violet-500/30 via-pink-400/10 to-transparent',
  },
  strategy: {
    icon: Building2,
    gradient: 'from-cyan-400/30 via-slate-500/10 to-transparent',
  },
}

type ProjectVisualProps = {
  category: ProjectCategory
  image?: string
  imagePosition?: string
  imageFit?: 'cover' | 'contain'
  className?: string
}

export function ProjectVisual({
  category,
  image,
  imagePosition,
  imageFit = 'cover',
  className,
}: ProjectVisualProps) {
  const { icon: Icon, gradient } = visualConfig[category]

  if (image) {
    return (
      <div
        className={cn(
          'relative h-32 overflow-hidden rounded-xl border border-white/10 bg-surface',
          className,
        )}
        aria-hidden="true"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn('h-full w-full', imageFit === 'contain' ? 'object-contain' : 'object-cover')}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative flex h-32 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br',
        gradient,
        className,
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${category}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${category})`} />
      </svg>
      <Icon className="relative h-10 w-10 text-text/80" strokeWidth={1.5} />
    </div>
  )
}
