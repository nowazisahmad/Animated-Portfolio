# AGENTS.md

Single-page animated portfolio: Vite + React 19 (plain JS/JSX, no TypeScript), Tailwind CSS v4, GSAP + Lenis + Motion. No tests, no typecheck — verification is `npm run lint && npm run build`.

## Commands

- `npm run dev` — dev server
- `npm run lint` — oxlint (config: `.oxlintrc.json`)
- `npm run build` — production build
- `npm run frames` — regenerate canvas frames (see below)

## Scroll-driven frame sequences (important)

The hero and about sections are not video — they are canvas image sequences driven by GSAP ScrollTrigger (`src/components/ScrollSequence.jsx`).

- Raw PNG sequences live in `raw-frames/` (hero) and `raw-frames-about/` (about) at repo root. `npm run frames` converts them via sharp into WebP at `public/frames/{hero,hero-sm,about,about-sm}/frame_0001.webp` (1-indexed, zero-padded).
- `raw-frames*/` and `public/frames/` are **gitignored**. A fresh clone has no frames and the sections show a loading screen forever until `npm run frames` is run (which requires the raw PNG folders). Do not delete them.
- `ScrollSequence` picks the `-sm` folder when `window.innerWidth < 768`; all four folders must exist.
- `frameCount` is hardcoded in `src/pages/Home.jsx` (`<ScrollSequence name=... frameCount=...>`), not derived from the folder. If you change the number of raw frames, update `frameCount` to match or the loader never reaches 100% / frames get skipped.

## Architecture quirks

- The scroll page is `src/pages/Home.jsx` (one long page of sections); section components live in `src/components/`. Content/data for projects is in `src/data/projects.js`.
- Routing: `/` renders `src/pages/Home.jsx` (the whole scroll page) and `/projects/:id` renders `src/pages/ProjectDetails.jsx`; anything else redirects to `/`. `ScrollToTop` in `App.jsx` resets scroll on route change, and `Home.jsx` re-scrolls to `location.hash` after every ScrollTrigger refresh (pin spacers shift the layout while frames load). Lenis is only alive on `/` — `window.__lenis` is undefined on the details page.
- Theming is class-based (`@custom-variant dark` in `src/index.css`): `ThemeProvider` (`src/context/ThemeContext.jsx`, hook in `theme.js`) toggles `.dark` on `<html>` and persists to `localStorage["theme"]`; it follows the OS until the user toggles. A boot script in `index.html` applies it pre-paint — no flash. Always write `dark:` pairs, not bare dark colors.
- Intentionally always-dark (do NOT theme): `ScrollSequence`/`HeroContent`/`AboutContent` — they overlay the dark WebP frames. Navbar text uses `atTop`/`overDark` logic because it sits over the dark hero until scrolled.
- `SmoothScroll.jsx` wires Lenis into `gsap.ticker` and globally intercepts `a[href^="#"]` clicks for smooth anchor scrolling (with a -60px offset). It exposes `window.__lenis`. If scroll/pin behavior breaks after adding content, `ScrollTrigger.refresh()` is called inside `ScrollSequence`.
- GSAP plugins (`ScrollTrigger`, `useGSAP`) are registered inside `ScrollSequence.jsx`; Motion is used via `import ... from "motion/react"` (package name is `motion`, not `framer-motion`).
- Tailwind v4 has no config file; custom styles and the `.glass-panel` helpers are in `src/index.css`.
- `public/hero.mp4` and `public/about.mp4` are unreferenced leftovers — don't wire them in.
