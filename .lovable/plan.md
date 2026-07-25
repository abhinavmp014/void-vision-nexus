## Changes

### 1. Generate 3 project screenshot images
Create clean product-screenshot mockups on neutral backgrounds, saved to `src/assets/`:
- `study-ai.jpg` — Study AI learning dashboard UI (course cards, progress bars, AI tutor panel).
- `flashcard-generator.jpg` — Flashcard app UI (flip card centered, deck list sidebar).
- `jersey-commerce.jpg` — E-commerce storefront UI (jersey product grid, cart, PHP/MySQL vibe).

Wire them into `src/components/ProjectsSection.tsx` — replace the pastel gradient placeholders for the last three cards with `<img>` tags (same pattern already used for Void AI).

### 2. Replace ToolsSection with orbital rotation (`src/components/ToolsSection.tsx`)
Rebuild the horizontal marquee as a continuous circular orbit of the 10 tool logos around a fixed center point.

Behavior (matching the requested spec):
- All 10 logo chips positioned on a circle of radius R, evenly spaced (36° apart).
- Continuous rotation of the whole ring, seamless infinite loop, ~30s per revolution.
- GSAP `gsap.to()` with `repeat: -1`, `ease: "none"` on the ring's rotation, but **each chip counter-rotates** so logos stay upright.
- Per-chip depth: use the chip's current angle to compute `scale` (front = 1.0, back = 0.55) and `opacity` (front = 1, back = 0.35) via `gsap.ticker` updating `translate3d` + `scale` each frame. Front-most chip (bottom of circle) is largest; back-most (top) is smallest and faded.
- Slight z-parallax via `translateZ` on a `perspective` parent for real 3D depth.
- Hover pause: `onMouseEnter` → `tl.pause()`, `onMouseLeave` → `tl.resume()` (GSAP preserves exact position, no jump).
- Responsive radius via `ResizeObserver`: R = `min(containerWidth, 520) * 0.38`; recomputes on resize.
- `prefers-reduced-motion`: check `window.matchMedia`, skip the timeline and render logos in a static row.
- All transforms use `translate3d` / `will-change: transform` for GPU acceleration.

Structure:
```text
        ● ●
      ●     ●
     ●   ✦   ●     ← ring rotates, center stays fixed
      ●     ●
        ● ●
```

Component API stays the same (no props); drop-in replacement. Section keeps its heading and section spacing; only the marquee viewport is swapped for the orbit canvas (height ~520px desktop, ~360px mobile).

Add `gsap` to dependencies.

## Technical notes
- New file structure: single `ToolsSection.tsx` containing an `OrbitRing` subcomponent. Chips reuse the existing inline SVG logo array.
- Timeline: one master `gsap.to({ rotation: 360 }, { duration: 30, ease: "none", repeat: -1 })` on a proxy object; a `gsap.ticker.add` callback reads `proxy.rotation` and writes each chip's `x/y/scale/opacity` from its base angle + current rotation. This guarantees seamless looping (rotation is modulo 360) and exact hover-resume.
- Easing for depth (scale/opacity across the circle) uses a cosine curve of the chip's angle — smooth, no linear feel.
- Cleanup in `useEffect` return: `tl.kill()`, `gsap.ticker.remove(...)`, `ResizeObserver.disconnect()`.

## Out of scope
- Hero photo, Navbar, Footer, About, Services, Testimonials, Contact — unchanged.
- No backend changes.
