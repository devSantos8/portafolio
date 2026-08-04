# AGENTS.md - Portfolio Astro Project

## Quick Commands
- `npm run dev` – Start dev server at `localhost:4321`
- `npm run build` – Build production output to `./dist/`
- `npm run preview` – Preview built site locally
- `npm run astro` – Run Astro CLI commands (e.g., `npm run astro -- --help`)

## Tech Stack
- **Framework**: Astro 5.3 (static site generator)
- **Styling**: Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Language**: TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Animations**: GSAP + Lenis (smooth scrolling)
- **Fonts**: @fontsource (Instrument Serif, Inter, Onest, Barlow)

## Project Structure
```
src/
├── pages/
│   └── index.astro          (main portfolio page – currently ~970 lines)
├── layouts/
│   └── Layout.astro          (page wrapper, also Layout.astro.new exists)
├── components/
│   ├── Header.astro          (sticky nav with theme toggle)
│   ├── Hero.astro
│   ├── Footer.astro
│   ├── SectionContainer.astro
│   ├── icons/                (skill & tech icons)
│   └── legacy/
├── scripts/
│   └── animations.js         (GSAP/Lenis animation logic)
├── styles/
│   └── global.css            (Tailwind directives + custom CSS vars)
└── assets/
```

## Key Conventions & Quirks
- **Astro frontmatter** (above `---`): Use for imports and component logic; all render server-side
- **CSS variables**: Defined in `global.css` – scope includes `--accent-red`, `--surface-*`, `--border-*`, `--shadow-*`; supports dark mode via `@media (prefers-color-scheme: dark)` and class-based dark mode (`darkMode: 'class'` in tailwind.config)
- **Dark mode**: Implemented via Tailwind class toggle (not system preference alone) – check Header.astro for theme toggle logic
- **Custom cursor**: Hidden on desktop (≥768px) via `@media (min-width: 768px)` in global.css
- **Animations**: Loaded from `src/scripts/animations.js` – integrated into page components; uses GSAP and Lenis
- **No build or lint steps**: Build output is `dist/` only; TypeScript checking runs via Astro, not a separate CI step

## Content
- Portfolio showcases certificates, projects, skills, and experience (all in `index.astro` data)
- Bilingual-friendly structure (Spanish text present, e.g., "Experiencia", "Sobre mí", "Habilidades")
- No database or API integration – purely static content

## Ignored Build Artifacts
- `dist/` (production output)
- `.astro/` (generated types)
- `node_modules/`
- `.env*` files
- Ensure changes are in `src/` for Git tracking

## Common Pitfalls
- **Layout.astro.new exists**: Legacy backup file – use current `Layout.astro`; clarify intent or remove .new file
- **Global CSS ordering**: Tailwind directives must come first (`@tailwind base/components/utilities`) before custom `@layer` blocks
- **Component imports**: Astro auto-hydrates only islands with `client:*` directives; most components are static (verify if interaction is needed)
- **Font loading**: Custom fonts imported inline in components (e.g., `@fontsource/instrument-serif`) – check for missing imports if rendering breaks

## When to Ask / Verify
- Desired behavior for dark mode persistence (localStorage? system preference?)
- Intent of `Layout.astro.new` backup file (keep, merge, or remove?)
- Any CI/CD or deploy workflows (currently none detected)
- Testing strategy (none configured – Astro static sites rarely need unit tests)
