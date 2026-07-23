# Sai Hemanth Babu Sunkari — Portfolio

Personal portfolio website built with React, TypeScript, Vite, and GSAP.

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/data/resume.ts` — all resume content (profile, experience, projects, skills). Edit this file to update the site.
- `src/components/` — one component per section (Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer).
- `src/styles/` — per-component CSS.
- `public/Sai_Hemanth_Babu_Sunkari_Resume.pdf` — the downloadable resume linked from the navbar.

## Credit

Section layout (hero → about → experience → projects → tech stack → contact) was inspired by
[Moncy Yohannan's portfolio](https://github.com/MoncyDev/Portfolio-Website). No code, assets, or
design from that repository were copied — this is an original implementation built from scratch,
per that repo's Personal Portfolio License.

## Deploying

Live at: https://hemanth145.github.io

Pushes to `main` automatically build and deploy to GitHub Pages via the workflow in
`.github/workflows/deploy.yml`. In the repo settings, under **Pages**, the source is set to
**GitHub Actions**.
