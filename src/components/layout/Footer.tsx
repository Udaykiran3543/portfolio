import { Mail, Link, Phone, MapPin } from 'lucide-react'
import { site, navItems } from '../../data/site'
import { GlowCard } from '../ui/spotlight-card'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <GlowCard glowColor="blue" customSize className="w-full !rounded-2xl !p-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-text">{site.shortName}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{site.roleLine}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-text">Navigate</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-text">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-text">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-text">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={site.phoneHref} className="transition-colors hover:text-text">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Link className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-text"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>
        </GlowCard>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
