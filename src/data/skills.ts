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
    id: 'bi',
    label: 'BI & Visualization',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau', 'Excel', 'Looker Studio'],
  },
  {
    id: 'languages',
    label: 'Languages & Libraries',
    icon: Code2,
    skills: ['SQL', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'HTML', 'CSS'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: Server,
    skills: ['AWS', 'Docker', 'Jenkins', 'Linux'],
  },
]
