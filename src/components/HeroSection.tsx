import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import abhinavPhoto from "@/assets/abhinav-photo.jpeg";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HeroSection = () => {
  const lines = [["SOFTWARE"], ["ENGINEER"]];
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 80, damping: 20, mass: 0.5 });
  const photoY = useTransform(smoothY, [0, 900], [0, -80]);
  const photoRotateY = useTransform(smoothY, [0, 900], [0, 360]);
  const photoScale = useTransform(smoothY, [0, 900], [1, 4.2]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Decorative star */}
      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[8%] top-[38%] hidden md:block"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M32 0 L36 28 L64 32 L36 36 L32 64 L28 36 L0 32 L28 28 Z" fill="hsl(var(--foreground))" />
        </svg>
      </motion.div>

      {/* Decorative bolt */}
      <motion.div
        initial={{ opacity: 0, rotate: 45, scale: 0 }}
        animate={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[10%] top-[55%] hidden md:block"
      >
        <svg width="56" height="72" viewBox="0 0 56 72" fill="none">
          <path d="M34 0 L0 40 L22 40 L20 72 L56 28 L32 28 Z" fill="hsl(var(--foreground))" />
        </svg>
      </motion.div>

      {/* Main headline */}
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        {lines.map((line, li) => (
          <div key={li} className="flex gap-3 sm:gap-6 overflow-hidden">
            {line.map((w, wi) => (
              <div key={wi} className="overflow-hidden">
                <motion.h1
                  custom={li * 2 + wi}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className="font-display font-black text-[18vw] sm:text-[15vw] lg:text-[12rem] leading-[0.95] tracking-tighter text-foreground"
                >
                  {w}
                </motion.h1>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scroll-driven photo */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 sm:mt-16 relative z-20"
      >
        <motion.div
          style={{ y: photoY, rotate: photoRotate, scale: photoScale }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-foreground/10 will-change-transform"
        >
          <img
            src={abhinavPhoto}
            alt="Abhinav — CEO of Void AI"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 flex justify-between items-end px-6 sm:px-10 text-xs sm:text-sm font-mono text-foreground"
      >
        <span className="font-display font-black text-xl">©{new Date().getFullYear()}</span>
        <span className="tracking-wider">/CREATING SINCE 2023</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
