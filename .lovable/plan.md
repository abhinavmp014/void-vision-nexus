## Changes

### 1. Footer redesign to match reference (`src/components/Footer.tsx`)
Rebuild layout to mirror the uploaded screenshot:
- Left column: huge headline `Building / Intelligent / Systems.` (already there, keep but tighten to match scale).
- Middle column: `/Quick links` eyebrow + cream **pill buttons** (filled cream bg, dark text, rounded-full) for Home / About Me / Services / Works / Contact — not the current outlined chips.
- Right column: `/Contact` eyebrow + email-style line `abhinav@voidai.app` and `@_abhinavzzz_` link.
- Bottom: giant faded `ABHINAV` wordmark spanning full width, clipped at the bottom edge like the reference.
- Add **mouse-tracking highlight**: as the cursor moves over the wordmark, a soft cream radial glow follows the pointer revealing the letters brighter under the cursor (CSS mask + radial-gradient driven by `onMouseMove` → CSS vars). Falls back to the current static faded state when not hovered.

### 2. Animated ••• dropdown (`src/components/Navbar.tsx`)
Replace Radix `DropdownMenu` with a `framer-motion` `AnimatePresence` popover so we control the open animation:
- ••• button: on open, the three dots morph (rotate 90° + scale) into an X-style indicator with a spring.
- Menu panel: animates from `scale 0.85, y -8, opacity 0, filter blur(8px)` → `scale 1, y 0, opacity 1, blur 0` with a cubic-bezier ease; transform-origin top-right so it grows out of the button.
- Each link staggers in (`y: 10 → 0`, opacity, 40ms stagger) and staggers out on close.
- Backdrop click + Escape close it.

### 3. Void AI Chatbot project (`src/components/ProjectsSection.tsx` + new asset)
- Generate a premium hero image for the Void AI Chatbot card: dark cosmic UI mockup of a chat interface with neon purple/blue glow, glassmorphism panels, "Void AI" wordmark — saved to `src/assets/void-ai-chatbot.jpg`.
- Replace the gradient placeholder for the first card with this image (`<img>` filling the card, subtle zoom on hover).
- Make the entire card an `<a href="https://void-ai-chat-app.vercel.app/" target="_blank" rel="noopener noreferrer">` so clicking opens the live app in a new tab.
- Other three cards keep their current gradient placeholders.

## Out of scope
- No changes to Hero, About, Services, Testimonials, Contact, or smooth-scroll behavior.
- No backend changes.
