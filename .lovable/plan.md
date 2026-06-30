
# Rebuild portfolio in the Majd layout

Mirror the reference's structure, rhythm, and motion using your existing content (Abhinav, 14, Founder/CEO Void AI). Keep the cream/black palette already in place; redesign sections to match the reference's flow.

## Page flow (top → bottom)

1. **Centered pill navbar** — black pill, "Abhinav" on the left, "•••" menu button on the right that opens a dropdown with Home / About / Works / Contact / Instagram. Stays centered, sticky at top.
2. **Hero** — cream bg. Giant stacked headline "SOFTWARE / ENGINEER". Decorative chrome star (left) and lightning bolt (right). Profile photo as a small rounded card that sits behind the headline and scroll-rotates / drifts down (already implemented — keep, tune sizing). Bottom row: "©2026" (left) and "/CREATING SINCE 2023" (right).
3. **Intro statement** — full-width cream section. One large centered paragraph using the existing ScrollHighlightText (word-by-word brighten on scroll). Replaces current About copy block.
4. **Services / What I Do** — "/Services" eyebrow + heading "What I Do". 3–4 large stacked rows separated by hairlines (AI Systems, Full-Stack Web, eCommerce + SEO, Product Consulting). Each row: number, title, one-line description, arrow. Hover slides the row content right.
5. **Featured Projects** — "/Works" eyebrow + "Featured Projects" heading with a "View All Work" link top-right. 2-column grid: each card is a large image/preview block with rounded corners, project name below in large display type and a small subtitle (Void AI Chatbot — AI Assistant, Study AI — Learning Platform, etc.). Subtle hover lift.
6. **Testimonials** — "/Testimonials" eyebrow + big blurred-in heading. 3–4 dark rounded quote cards in a row with name + role.
7. **Let's talk CTA** — large left-aligned "Let's talk." headline, supporting line "Have a project or need help?", Instagram button.
8. **Dark footer** — switches to near-black bg with cream text. Two columns of links (`/Quick links`: Home, About Me, Services, Works, Contact; `/Contact`: instagram handle / email line) next to a left "Scaling / Start-ups / for Growth." style statement rewritten for Abhinav ("Building / Intelligent / Systems."). Huge faded "ABHINAV" wordmark across the bottom. Small legal row underneath.

## Motion & feel
- Keep Lenis smooth scroll.
- Reuse `ScrollHighlightText` for intro + footer statement.
- Sections fade/translate-up on enter via framer-motion (already standard).
- Hero photo: keep scroll-driven rotate/translate/scale.
- Headings use word-mask reveal on first paint.
- Testimonial heading and footer wordmark get a blur-in (filter: blur(20px) → 0).

## Files to change

- `src/components/Navbar.tsx` — rebuild as pill with brand + "•••" dropdown menu (Radix DropdownMenu already available).
- `src/components/HeroSection.tsx` — keep current structure; tighten spacing so the photo overlaps the headline like the reference.
- `src/components/AboutSection.tsx` — replace with the centered intro statement (single big paragraph via ScrollHighlightText). Move stats out (or drop).
- `src/components/SkillsSection.tsx` — repurpose into the Services row-list section, or replace with a new `ServicesSection.tsx` and remove from `Index.tsx`.
- `src/components/ProjectsSection.tsx` — rebuild as 2-column image-led grid with title + subtitle and a top-right "View All Work" link.
- `src/components/VisionSection.tsx` — remove or fold its line into the intro statement.
- New `src/components/TestimonialsSection.tsx` — dark quote cards row with blurred-in heading.
- `src/components/ContactSection.tsx` — left-aligned "Let's talk." with supporting copy and Instagram CTA.
- `src/components/Footer.tsx` — full dark footer: statement block + quick links + contact + giant ABHINAV wordmark.
- `src/pages/Index.tsx` — new section order: Navbar, Hero, Intro, Services, Projects, Testimonials, Contact, Footer. Remove ToolsSection (or keep as a thin marquee strip between Services and Projects — your call after seeing it; default is remove for closer match).

## Content stays yours
All copy uses your existing details — 14-year-old founder, CEO of Void AI, AI tools + full-stack + SEO, Void AI Chatbot, Study AI, Instagram CTA — just re-organized into the reference's structure. Headline stays SOFTWARE ENGINEER.

## Out of scope
- No new fonts (keep Manrope + Inter + JetBrains Mono).
- No backend changes.
- No template/branded assets from the reference site are copied.
