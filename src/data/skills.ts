import type { LucideIcon } from 'lucide-react'
import { Code2, BarChart3, Server } from 'lucide-react'

export type SkillGroup = {
  id: string
  label: string
  icon: LucideIcon
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages & Querying',
    icon: Code2,
    skills: ['Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'bi',
    label: 'BI & Visualization',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: Server,
    skills: ['Docker', 'AWS', 'Jenkins', 'Linux'],
  },
]
