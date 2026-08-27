import { Mail, Link, Phone, Download } from 'lucide-react'
import { SectionContainer } from '../layout/SectionContainer'
import { Button } from '../ui/Button'
import { site } from '../../data/site'

export function Contact() {
  return (
    <SectionContainer
      id="contact"
      label="Contact"
      eyebrow="Get in touch"
      title="Let's talk about your data"
      description="I'm actively looking for Data Analyst and Business/IT Analyst roles — reach out and I'll get back to you quickly."
      className="border-t border-white/10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Button href={`mailto:${site.email}`}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email me
        </Button>
        <Button href={site.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
          <Link className="h-4 w-4" aria-hidden="true" />
          Connect on LinkedIn
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
    </SectionContainer>
  )
}
