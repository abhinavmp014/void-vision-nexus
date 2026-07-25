import { useEffect, useRef } from "react";
import gsap from "gsap";

const tools = ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Figma", "Framer", "GSAP", "Git"];

/**
 * Orbital tools ring:
 * - 10 chips evenly spaced on a circle around a fixed center.
 * - GSAP ticker drives per-frame position, scale, opacity from a single rotation proxy.
 * - Depth via cosine of chip angle -> front is largest/brightest, back is smallest/faded.
 * - Seamless loop (rotation modulo 360). Hover pause preserves exact position (no jump).
 * - Responsive radius via ResizeObserver. Respects prefers-reduced-motion.
 */
const ToolsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = tools.length;
    const proxy = { rotation: 0 };
    let radius = 220;

    const computeRadius = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      radius = Math.min(Math.min(w, 640) * 0.36, h * 0.42);
    };

    const render = () => {
      const rot = proxy.rotation;
      for (let i = 0; i < N; i++) {
        const el = chipRefs.current[i];
        if (!el) continue;
        // Base angle per chip + global rotation; 0deg = bottom (front-most).
        const angleDeg = (i / N) * 360 + rot;
        const rad = (angleDeg * Math.PI) / 180;
        const x = Math.sin(rad) * radius;
        const y = -Math.cos(rad) * radius; // negative cos: front-most at bottom
        // cos component: +1 at front (bottom), -1 at back (top)
        const depth = -Math.cos(rad);
        const t = (depth + 1) / 2; // 0 back .. 1 front
        const scale = 0.55 + t * 0.45;
        const opacity = 0.35 + t * 0.65;
        const z = t * 80 - 40;
        el.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(Math.round(t * 100));
      }
    };

    computeRadius();
    render();

    const ro = new ResizeObserver(() => {
      computeRadius();
      render();
    });
    ro.observe(container);

    if (reduce) {
      return () => ro.disconnect();
    }

    const tl = gsap.to(proxy, {
      rotation: 360,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: { rotation: (v) => `${parseFloat(v) % 360}` },
    });

    const tick = () => render();
    gsap.ticker.add(tick);

    const onEnter = () => tl.pause();
    const onLeave = () => tl.resume();
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      tl.kill();
      gsap.ticker.remove(tick);
      ro.disconnect();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="py-24 border-t border-border overflow-hidden">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12 text-center">
        / Tools I Use
      </p>
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[720px] h-[360px] sm:h-[520px]"
        style={{ perspective: "1200px" }}
      >
        {/* Fixed center marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/20 text-4xl select-none pointer-events-none">
          ✦
        </div>

        {tools.map((label, i) => (
          <div
            key={label}
            ref={(el) => (chipRefs.current[i] = el)}
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="px-6 py-3 rounded-full bg-foreground text-background font-display font-bold text-lg sm:text-2xl tracking-tight whitespace-nowrap shadow-lg">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
