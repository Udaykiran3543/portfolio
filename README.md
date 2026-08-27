# Portfolio — Uday Kiran Reddy Vonteddu

Personal portfolio site. React + TypeScript + Vite, Tailwind CSS v4, `motion` for animation, `lucide-react` for icons. No backend — static site.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Content

All copy and structured data live in `src/data/` (`site.ts`, `projects.ts`, `skills.ts`, `education.ts`) — edit those files to update text without touching components.

The downloadable résumé lives at `public/resume.pdf`; replace that file to update what visitors download.

## Deployment

Static `dist/` output — deploys as-is to Vercel, Netlify, GitHub Pages, or any static host.
