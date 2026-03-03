# TEDxJUET Website

Official website for TEDxJUET at Jaypee University of Engineering and Technology. Built with Next.js and TypeScript.

## Overview

This is the main web presence for TEDxJUET events. The site handles speaker showcases, event registration, team profiles, and past talks. We've integrated 3D elements and animations to make the experience more engaging.

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- React 19
- CSS Modules for styling
- Framer Motion and GSAP for animations
- Three.js with React Three Fiber for 3D
- Google Sheets API for registration data

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on `localhost:3000`.

For production:
```bash
npm run build
npm start
```

## Structure

```
app/          - Pages and routes
components/   - Shared components (Navbar, Footer, Hero, etc.)
public/       - Images, videos, and static files
```

Main pages: home, about, speakers, event details, team, registration, and contact.

## What's Included

The site has event registration with Google Sheets backend, speaker profiles, team member pages, talks showcase, newsletter signups, and cookie consent. Registration data flows through the `/api/register` endpoint.

## Notes

Check `OPTIMIZATION_GUIDE.md` for performance tips. Assets are in `public/` with separate folders for speakers, talks, frames, and 3D models.

Version 1.0.0
