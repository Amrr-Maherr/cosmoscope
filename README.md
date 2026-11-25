# Cosmoscope

A space-exploration web app built on NASA's open APIs. Browse the astronomy picture of the day, track asteroids passing near Earth, view the latest Mars rover photos and search deep-space image libraries.

## Features

- **Picture of the Day**: daily images and videos from NASA's APOD archive
- **Near Earth Objects**: track asteroids and comets currently passing close to Earth
- **Mars Rover Photos**: the latest images captured by NASA's rovers on Mars
- **Deep Space Explorer**: browse cosmic image libraries, with a dedicated search page
- Animated, parallax-driven UI with a hero section and feature highlights

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router, Turbopack), React 19 |
| Styling | Tailwind CSS 4, Radix UI, tw-animate-css |
| Data | TanStack Query, Axios, NASA open APIs |
| Animation | Framer Motion, react-scroll-parallax, ScrollReveal, Swiper |
| Icons | lucide-react |

## Getting Started

```bash
git clone https://github.com/Amrr-Maherr/cosmoscope.git
cd cosmoscope
npm install
npm run dev
```

The app runs at http://localhost:3000. Use `npm run build` and `npm start` for production.

## Project Structure

```
src/
  app/
    page.js            Home: hero plus feature sections (APOD, NEOs, Mars, deep space)
    search/            Search page
    Components/        Navbar, HeroSection, HomeInfo, Footer
    layout.js          Root layout
    not-found.jsx      404 page
  components/          Shared components
  lib/                 Utilities
```
