# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Uday Kiran Reddy Vonteddu. React 19 + TypeScript + Vite, Tailwind CSS v4, `motion` (Framer Motion successor) for animation, `lucide-react` for icons. Static site, no backend.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build      # tsc -b (typecheck via project references) then vite build -> dist/
npm run preview    # serve the production build locally
npm run lint        # oxlint
```

There is no test suite configured in this project.

## Architecture

The site is a single page (`src/App.tsx`) composed of section components rendered in a fixed order inside `<main>`: Hero, About, Skills, Projects, Education, Contact, wrapped by `Navbar` and `Footer`.

**Content is separated from presentation.** All copy and structured data lives in `src/data/` (`site.ts`, `projects.ts`, `skills.ts`, `education.ts`) as typed `const` objects/arrays. Components in `src/components/sections/` import from there rather than hardcoding text — when asked to change copy, numbers, links, or project details, edit the data files, not the components.

- `src/data/site.ts` — global identity/contact info (`site` object) and nav items.
- `src/data/projects.ts` — project entries, each tagged with a `ProjectCategory` (`security` | `trade` | `podcast` | `strategy`) that drives per-category icon/gradient styling in `ProjectVisual`.

**Component layers:**
- `src/components/layout/` — page chrome: `Navbar`, `Footer`, `SectionContainer` (the shared section wrapper that renders the eyebrow/title/description heading block and an `id`-anchored `<section>` for scroll-spy nav).
- `src/components/sections/` — one component per page section, each built on `SectionContainer`.
- `src/components/ui/` — small reusable pieces: `AnimatedSection`/`AnimatedItem` (stagger-on-scroll wrapper built on `motion`'s `whileInView`), `Avatar`, `Button`, `Pill`, `StatChip`, `ProjectCard`, `ProjectVisual`.

**Hooks** (`src/hooks/`): `useActiveSection` drives scroll-spy nav highlighting via `IntersectionObserver`; `usePrefersReducedMotion` reads the `prefers-reduced-motion` media query so animated components can respect it.

**Styling:** Tailwind v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 is CSS-first; see `src/styles/index.css` for theme tokens). Class merging goes through `cn()` in `src/lib/utils.ts` (a thin `clsx` wrapper).

**Assets:** Images and the downloadable résumé live in `public/` (referenced by absolute path, e.g. `/resume.pdf`, and copied as-is into `dist/` on build).

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main` and deploys `dist/` to GitHub Pages.
