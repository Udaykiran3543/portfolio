import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import type { Project, ProjectCategory } from '../../data/projects'
import { ProjectVisual } from './ProjectVisual'
import { Pill } from './Pill'
import { GlowCard } from './spotlight-card'
import { cn } from '../../lib/utils'

type ProjectCardProps = {
  project: Project
}

const glowColorByCategory: Record<ProjectCategory, 'blue' | 'purple' | 'green' | 'red'> = {
  security: 'red',
  trade: 'blue',
  podcast: 'purple',
  strategy: 'green',
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <GlowCard
      glowColor={glowColorByCategory[project.category]}
      customSize
      className="h-full w-full transition-transform duration-200 hover:scale-[1.01]"
    >
      <div className="flex h-full flex-col">
        <ProjectVisual
          category={project.category}
          image={project.image}
          imagePosition={project.imagePosition}
          imageFit={project.imageFit}
        />

        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gradient">
          {project.categoryLabel}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-text">{project.title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag} className="px-3 py-1 text-xs">
              {tag}
            </Pill>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-bg/40 p-3">
              <p className="text-sm font-semibold text-text">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-5 flex items-center justify-between rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-text transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
        >
          {expanded ? 'Hide case study' : 'Read case study'}
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', expanded && 'rotate-180')}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-muted">
                <div>
                  <p className="font-semibold text-text">Challenge</p>
                  <p className="mt-1">{project.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Approach</p>
                  <p className="mt-1">{project.approach}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Impact</p>
                  <p className="mt-1">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlowCard>
  )
}
