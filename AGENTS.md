# AGENTS.md

## Project Overview
Portfolio website featuring a Developer IDE-themed design. Built with vanilla HTML, CSS, JavaScript, React 18, and Tailwind CSS.

## Key Architecture & Features
- **Scroll Engine:** Uses `requestAnimationFrame` + LERP (Linear Interpolation) for fluid parallax.
- **Styling:** Uses Tailwind CSS via CDN + custom IDE-themed CSS (`assets/styles/style.css`).
- **Interaction:** Custom 3D tilt effects, parallax background, and dual-layer cursor follower (desktop-only).
- **Modules:** Features are modularized under `assets/features/`.
- **Admin/AI:** Secret admin panel and Gemini AI assistant integrated as standalone modules.

## Dev Commands
- **Linting/Verification:** No automated pipeline defined. Verify manually by checking console logs in browser.
- **Workflow:** 
    - Changes to `style.css` impact the IDE-like global look.
    - Animation logic is primarily in `assets/features/`.
    - Always ensure `will-change: transform` is applied to elements undergoing frequent parallax updates.

## Conventions
- **Glassmorphism:** Use `.glass-panel` utility class for containers.
- **Performance:** For scroll-heavy features, use LERP patterns found in `parallax-tilt.js` and apply `backface-visibility: hidden`.
- **Code Style:** No automated formatter. Follow existing indentation (4 spaces).
