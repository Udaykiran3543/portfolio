import { GraduationCap } from 'lucide-react'
import { SectionContainer } from '../layout/SectionContainer'
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection'
import { Pill } from '../ui/Pill'
import { education } from '../../data/education'

export function Education() {
  return (
    <SectionContainer
      id="education"
      label="Education"
      eyebrow="Background"
      title="Education"
      className="border-t border-white/10"
    >
      <AnimatedSection className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <AnimatedItem key={item.id}>
            <div className="h-full rounded-2xl border border-white/10 bg-surface p-6">
              <GraduationCap className="h-6 w-6 text-purple-400" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-text">{item.institution}</h3>
              <p className="mt-1 text-sm text-muted">{item.degree}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Pill key={tag} className="px-3 py-1 text-xs">
                    {tag}
                  </Pill>
                ))}
              </div>
            </div>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </SectionContainer>
  )
}
