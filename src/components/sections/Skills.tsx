import { SectionContainer } from '../layout/SectionContainer'
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection'
import { Pill } from '../ui/Pill'
import { skillGroups } from '../../data/skills'

export function Skills() {
  return (
    <SectionContainer
      id="skills"
      label="Skills"
      eyebrow="Toolbox"
      title="Skills & tools"
      description="The languages, BI tools, and platforms I use to move from raw data to a decision-ready story."
      className="border-t border-white/10"
    >
      <AnimatedSection className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <AnimatedItem key={group.id}>
              <div className="mb-4 flex items-center gap-2">
                <Icon className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-text">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </AnimatedItem>
          )
        })}
      </AnimatedSection>
    </SectionContainer>
  )
}
