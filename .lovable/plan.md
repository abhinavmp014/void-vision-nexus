## Changes

### 1. Hero headline
Change the giant headline from `AI SYSTEMS / BUILDER` to:

```
SOFTWARE
ENGINEER
```

Keep the staggered word-reveal entrance animation.

### 2. Scroll-driven photo (rotates + drifts down)
Currently the small square photo sits statically below the headline. Replace with a photo that reacts to page scroll:

- Uses `useScroll` + `useTransform` from framer-motion.
- As the user scrolls down the page, the photo:
  - translates downward (`y: 0 → ~400px`)
  - rotates continuously (`rotate: 0 → 25deg`)
  - scales slightly (`1 → 1.05`)
- Spring-smoothed via `useSpring` so motion feels buttery, not jittery (matches the "very smooth" feel of the reference).
- Photo stays inside the hero section's flow but its visual transform makes it appear to follow the user as they scroll into the About section.

### 3. Smooth global scrolling (Lenis-style feel)
Add Lenis smooth-scroll so the whole page scrolls with momentum/easing instead of the browser's default jumpy scroll. This is what makes the reference site feel "very smooth."

- Install `lenis` (or `@studio-freight/lenis`).
- Initialize once in `src/pages/Index.tsx` inside a `useEffect`, with `requestAnimationFrame` loop.
- Clean up on unmount.

### 4. Scroll text highlight (word-by-word reveal)
Build a reusable `ScrollHighlightText` component used in the About and Vision sections. As the user scrolls through the paragraph:

- Each word starts dimmed (low opacity / muted color).
- Words light up one-by-one to full foreground color as they cross the viewport center.
- Implemented with framer-motion's `useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] })` and per-word `useTransform` on opacity/color.

Apply it to:
- the long About paragraph
- the Vision section's statement

### 5. Files touched

- `src/components/HeroSection.tsx` — new headline + scroll-rotating photo
- `src/components/ScrollHighlightText.tsx` — new reusable component
- `src/components/AboutSection.tsx` — wrap paragraph in ScrollHighlightText
- `src/components/VisionSection.tsx` — wrap statement in ScrollHighlightText
- `src/pages/Index.tsx` — Lenis smooth-scroll setup
- `package.json` — add `lenis`

## Technical notes

- Lenis duration ~1.2, easing `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` for the classic smooth feel.
- Photo transform uses `useSpring(scrollYProgress, { stiffness: 80, damping: 20 })` to avoid stutter.
- ScrollHighlightText splits text on spaces; each word is its own `motion.span` with `useTransform` mapping a small slice of scroll progress to opacity 0.2 → 1.
- No business logic / backend changes — pure frontend motion work.

## Out of scope
- No changes to colors, fonts, layout structure, projects list, contact, or nav.
- Not reproducing the reference site 1:1 — just matching the feel (smooth scroll, rotating photo follower, word-highlight).
