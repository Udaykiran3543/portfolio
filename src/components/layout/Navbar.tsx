import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { site, navItems } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(navItems.map((item) => item.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-white/10 bg-bg/80 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a href="#top" className="font-display text-lg font-semibold text-text">
          {site.initials}
          <span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-text' : 'text-muted hover:text-text',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-accent" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href={site.resumeHref}
            download={site.resumeDownloadName}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-text md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-white/10 bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeHref}
                download={site.resumeDownloadName}
                target="_blank"
                rel="noopener"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium text-text"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
