# TEDxMiami Clone (Next.js)

A high-fidelity clone of [TEDxMiami](https://www.tedxmiami.com/) built with **Next.js 14** and **Framer Motion**, matching the real site’s layout, content, animations, and design quality.

## Features

- **Next.js 14** (App Router)
- **Framer Motion** for:
  - Hero: word-by-word title reveal, rotating circles graphic
  - Scroll-triggered section reveals (fade + slide)
  - Staggered card and list animations
  - Hover: card lift, arrow slide, button scale
  - Cookie bar: slide-up entrance, spring exit
  - Mobile nav: hamburger → X, staggered menu items
- **TEDxMiami assets**: logo, hero circles, talk images (CDN)
- **Design**: dark theme, TED red, sky-blue arrows, card layout, typography

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app/` – `layout.jsx`, `page.jsx`, `globals.css`
- `src/components/` – Header, Hero, About, Events, Talks, CTAs, Newsletter, Footer, CookieConsent (with `.module.css`)
- `src/components/ui/` – AnimatedSection, StaggerContainer, Arrows (Red / Sky)
# tedxjuet_26
