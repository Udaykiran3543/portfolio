import { motion } from 'motion/react'
import { Mail, Link, MapPin, Download } from 'lucide-react'
import { site } from '../../data/site'
import { Avatar } from '../ui/Avatar'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-from)_0%,transparent_70%)] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-32 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--color-accent-to)_0%,transparent_70%)] opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">
            {site.roleLine}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {site.heroHook}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button href="#projects">View Projects</Button>
          <Button
            href={site.resumeHref}
            download={site.resumeDownloadName}
            target="_blank"
            rel="noopener"
            variant="secondary"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Résumé
          </Button>
        </motion.div>

        <motion.ul
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-text">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Link className="h-4 w-4" aria-hidden="true" />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text"
            >
              {site.linkedinLabel}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {site.location}
          </li>
        </motion.ul>
      </div>
    </section>
  )
}
