import { useEffect, useRef } from "react";
import gsap from "gsap";
import abhinavPhoto from "@/assets/abhinav-photo.jpeg";
import voidAiImg from "@/assets/void-ai-chatbot.jpg";
import studyAiImg from "@/assets/study-ai.jpg";
import flashcardImg from "@/assets/flashcard-generator.jpg";
import jerseyImg from "@/assets/jersey-commerce.jpg";

const orbitItems = [
  { src: voidAiImg, label: "Void AI" },
  { src: studyAiImg, label: "Study AI" },
  { src: flashcardImg, label: "Flashcards" },
  { src: jerseyImg, label: "Jersey" },
];

/**
 * Profile photo fixed at center; portfolio images orbit around it on a
 * tilted 3D ring. Front-most card is largest & fully opaque; back cards
 * shrink and fade. Continuous seamless rotation, hover-pause, responsive,
 * respects prefers-reduced-motion.
 */
const HeroOrbit = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = orbitItems.length;
    const proxy = { rotation: 0 };
    let radius = 260;

    const computeRadius = () => {
      const w = stage.clientWidth;
      radius = Math.max(180, Math.min(w * 0.38, 320));
    };

    const render = () => {
      const rot = proxy.rotation;
      for (let i = 0; i < N; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const angleDeg = (i / N) * 360 + rot;
        const rad = (angleDeg * Math.PI) / 180;
        const x = Math.sin(rad) * radius;
        // vertical squash simulates a tilted ring (y ~ 0.42 of x radius)
        const y = -Math.cos(rad) * radius * 0.42;
        const depth = -Math.cos(rad); // +1 front, -1 back
        const t = (depth + 1) / 2;
        const scale = 0.5 + t * 0.65;
        const opacity = 0.28 + t * 0.72;
        const z = t * 140 - 70;
        el.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(depth > 0 ? 30 : 5);
      }
    };

    computeRadius();
    render();

    const ro = new ResizeObserver(() => {
      computeRadius();
      render();
    });
    ro.observe(stage);

    if (reduce) return () => ro.disconnect();

    const tl = gsap.to(proxy, {
      rotation: 360,
      duration: 24,
      ease: "none",
      repeat: -1,
      modifiers: { rotation: (v) => `${parseFloat(v) % 360}` },
    });

    const tick = () => render();
    gsap.ticker.add(tick);

    const onEnter = () => tl.pause();
    const onLeave = () => tl.resume();
    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);

    return () => {
      tl.kill();
      gsap.ticker.remove(tick);
      ro.disconnect();
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto w-full max-w-[880px] h-[360px] sm:h-[440px] lg:h-[520px]"
      style={{ perspective: "1400px" }}
    >
      {/* Orbiting portfolio cards */}
      {orbitItems.map((item, i) => (
        <div
          key={item.label}
          ref={(el) => (cardRefs.current[i] = el)}
          className="absolute left-1/2 top-1/2 will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-40 h-28 sm:w-56 sm:h-40 lg:w-64 lg:h-44 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-foreground/10 bg-muted">
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Center profile photo — fixed, always on top */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* soft outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--foreground) / 0.25) 0%, transparent 70%)",
            transform: "scale(1.4)",
          }}
        />
        <div
          className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-2 ring-foreground/20"
          style={{
            boxShadow:
              "0 30px 80px -20px hsl(var(--foreground) / 0.35), 0 0 0 8px hsl(var(--background)), 0 0 40px hsl(var(--foreground) / 0.15)",
          }}
        >
          <img
            src={abhinavPhoto}
            alt="Abhinav — Founder of Void AI"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
