# Chase Thilleman — Portfolio

Modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. It features an animated hero, an “About Me” section with skill icons, a projects gallery, and a footer with contact links.

**Live Dev Preview**: run locally with `npm run dev` (instructions below).

**Tech Stack**

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion, custom canvas‑like ASCII water effect
- **Utilities**: clsx, ESLint (Vite + React Hooks configs)

**Key Features**

- **Animated Hero**: Smooth entrance animations and a learn‑more scroll link (`src/components/hero.jsx:1`).
- **About + Skills**: Motion‑staggered skill grid and links to resume, LinkedIn, GitHub, and email (`src/components/about.jsx:1`).
- **Projects Gallery**: Simple data‑driven list with alternating layouts and hover effects (`src/components/projects.jsx:1`).
- **ASCII Water Background**: Lightweight, configurable animated background with reduced‑motion support (`src/components/symbolWater.jsx:1`).
- **Responsive Design**: Tailwind utility classes and custom keyframes (`tailwind.config.js:1`).

**Quick Start**

- **Prerequisites**: Node.js 18+ and npm 9+ recommended.
- **Install**: `npm install`
- **Develop**: `npm run dev` then open the printed local URL
- **Lint**: `npm run lint`
- **Build**: `npm run build`
- **Preview Build**: `npm run preview`

**Project Structure**

- `index.html:1` — Root HTML, title and favicons
- `src/main.jsx:1` — App bootstrap (React root)
- `src/App.jsx:1` — Page composition (Hero, About, Projects, Footer)
- `src/components/hero.jsx:1` — Hero section + scroll trigger
- `src/components/about.jsx:1` — About content + skills + external links
- `src/components/projects.jsx:1` — Projects list and card layout
- `src/components/footer.jsx:1` — Footer with social/contact icons
- `src/components/symbolWater.jsx:1` — Animated symbol‑based water background
- `src/index.css:1` — Tailwind entry; `tailwind.config.js:1` — custom keyframes
- `vite.config.js:1` — Vite + React + Tailwind plugins

**Customization**

- **Hero Text**: Update headings and CTA in `src/components/hero.jsx:1`.
- **About Content**: Edit bio and external links in `src/components/about.jsx:1`.
- **Skills**: Adjust the `skills` array (icons and labels) in `src/components/about.jsx:1`. Icons live under `src/icons`.
- **Projects**: Modify `DEFAULT_PROJECTS` (title, description, image, layout) in `src/components/projects.jsx:1`. Images live under `src/assets`.
- **Footer Links**: Update social and email targets in `src/components/footer.jsx:1`.
- **Branding**: Update page `<title>` and favicons in `index.html:1` and `/favicon*.png|svg` at the repo root.

**Deployment**

- **Vercel/Netlify**: Use the default build command `npm run build` and publish the `dist/` directory.
- **GitHub Pages**: Build locally (`npm run build`) and publish `dist/` to a `gh-pages` branch, or use an action to deploy.

**Accessibility & Performance**

- **Reduced Motion**: The animated background checks `prefers-reduced-motion` and fades appropriately (`src/components/symbolWater.jsx:1`).
- **Responsive Layout**: Scales from mobile to desktop with Tailwind utilities.

**Scripts**

- `npm run dev` — Start local dev server (Vite)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

If you have questions or want enhancements (e.g., routing, CMS integration, or additional sections), feel free to open an issue or reach out.
