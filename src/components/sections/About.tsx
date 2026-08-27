import { SectionContainer } from '../layout/SectionContainer'
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection'
import { StatChip } from '../ui/StatChip'
import { site } from '../../data/site'

const stats = [
  { value: '13 yrs', label: 'of UK trade data analyzed' },
  { value: '10', label: 'threat vectors assessed' },
  { value: '6', label: 'asset categories mapped' },
  { value: '4', label: 'end-to-end analytics projects' },
]

export function About() {
  return (
    <SectionContainer
      id="about"
      label="About"
      eyebrow="About"
      title="Turning data into decisions"
      className="border-t border-white/10"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-base leading-relaxed text-muted">{site.summary}</p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection as="ul" className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <AnimatedItem as="li" key={stat.label}>
              <StatChip value={stat.value} label={stat.label} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </SectionContainer>
  )
}
