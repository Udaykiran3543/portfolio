import { SectionContainer } from '../layout/SectionContainer'
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export function Projects() {
  return (
    <SectionContainer
      id="projects"
      label="Projects"
      eyebrow="Selected Work"
      title="Projects"
      description="Hands-on work spanning cybersecurity risk, economic analysis, and strategic consulting — the full analytics lifecycle from data to decision."
      className="border-t border-white/10"
    >
      <AnimatedSection className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <AnimatedItem key={project.id}>
            <ProjectCard project={project} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </SectionContainer>
  )
}
