import { Mail, Link, Phone, Download } from 'lucide-react'
import { SectionContainer } from '../layout/SectionContainer'
import { Button } from '../ui/Button'
import { GlowCard } from '../ui/spotlight-card'
import { site } from '../../data/site'

export function Contact() {
  return (
    <SectionContainer
      id="contact"
      label="Contact"
      eyebrow="Get in touch"
      title="Let's discuss data analyst opportunities"
      description="I am currently seeking a Data Analyst or a related analyst position. Feel free to reach out, and I will respond promptly."
      className="border-t border-white/10"
    >
      <GlowCard glowColor="purple" customSize className="w-full !rounded-2xl !p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <Link className="h-4 w-4" aria-hidden="true" />
            Connect on LinkedIn
          </Button>
          <Button href={`mailto:${site.email}`} variant="secondary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
          </Button>
          <Button href={site.phoneHref} variant="secondary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </Button>
          <Button href={site.resumeHref} download={site.resumeDownloadName} target="_blank" rel="noopener" variant="secondary">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Résumé
          </Button>
        </div>
      </GlowCard>
    </SectionContainer>
  )
}
