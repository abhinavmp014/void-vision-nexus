import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Instagram } from "lucide-react";
import abhinavPhoto from "@/assets/abhinav-photo.jpeg";

const roles = [
  "14-year-old Tech Founder",
  "CEO of Void AI",
  "Web Developer",
  "AI Systems Builder",
  "SEO Strategist",
  "eCommerce Platform Architect",
];

const badges = [
  { label: "Creative 🎨", rotate: -8, x: "5%", y: "15%" },
  { label: "Team Player 🤝", rotate: 6, x: "68%", y: "8%" },
  { label: "Problem Solver 🧠", rotate: -4, x: "75%", y: "65%" },
  { label: "Fast Learner ⚡", rotate: 10, x: "2%", y: "70%" },
];

const polaroids = [
  { caption: "Building AI Tools", rotate: -6, offsetX: -60, offsetY: 20, z: 3 },
  { caption: "Designing Systems", rotate: 4, offsetX: 0, offsetY: -10, z: 4 },
  { caption: "Crafting Websites", rotate: -3, offsetX: 60, offsetY: 30, z: 2 },
  { caption: "Exploring Tech", rotate: 7, offsetX: 120, offsetY: 5, z: 1 },
];

const floatingObjects = [
  { emoji: "📄", size: 48, x: "12%", y: "30%", delay: 0, duration: 4 },
  { emoji: "⭐", size: 36, x: "85%", y: "40%", delay: 1.2, duration: 5 },
  { emoji: "🚀", size: 42, x: "78%", y: "22%", delay: 0.6, duration: 3.5 },
];

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTypedText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setTypedText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex <= 1) {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
            setCharIndex(0);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // Mouse parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  }, []);

  const parallax = (strength: number) => ({
    transform: `translate(${mouse.x * strength}px, ${mouse.y * strength}px)`,
    transition: "transform 0.3s ease-out",
  });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(270_40%_12%)]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/8 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-neon-pink/6 rounded-full blur-[120px]" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Floating rotated badges */}
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.5, rotate: badge.rotate * 2 }}
          animate={{ opacity: 1, scale: 1, rotate: badge.rotate }}
          transition={{ delay: 1 + i * 0.15, duration: 0.6, type: "spring" }}
          className="absolute hidden lg:block z-10"
          style={{ left: badge.x, top: badge.y, ...parallax(15 + i * 5) }}
        >
          <motion.div
            whileHover={{ rotate: 0, scale: 1.1, y: -4 }}
            className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground cursor-default select-none"
            style={{
              boxShadow: "0 8px 32px hsl(270 80% 60% / 0.15), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {badge.label}
          </motion.div>
        </motion.div>
      ))}

      {/* Floating objects */}
      {floatingObjects.map((obj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.5 + obj.delay, duration: 0.8 }}
          className="absolute hidden lg:block pointer-events-none z-[5]"
          style={{ left: obj.x, top: obj.y, ...parallax(10 + i * 8) }}
        >
          <motion.span
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: obj.duration, repeat: Infinity, ease: "easeInOut" }}
            className="block select-none"
            style={{
              fontSize: obj.size,
              filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))",
            }}
          >
            {obj.emoji}
          </motion.span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left" style={parallax(5)}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-neon-purple font-mono text-sm mb-5 tracking-[0.25em] uppercase"
            >
              Hi, I'm Abhinav 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6 tracking-tight uppercase"
            >
              Building{" "}
              <span className="gradient-text">Intelligent</span>
              <br />
              <span className="gradient-text">Digital</span>{" "}
              Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground text-lg sm:text-xl mb-4 max-w-xl leading-relaxed"
            >
              CEO & Founder of{" "}
              <span className="text-neon-purple font-semibold">Void AI</span> —
              crafting AI-powered tools, high-performance websites, and scalable
              digital platforms.
            </motion.p>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-8 mb-8"
            >
              <span className="text-lg sm:text-xl text-muted-foreground font-mono">
                {typedText}
                <span className="animate-glow-pulse text-neon-purple">|</span>
              </span>
            </motion.div>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full instagram-gradient text-primary-foreground font-semibold text-lg instagram-glow hover:shadow-[0_0_40px_rgba(225,48,108,0.5)] transition-shadow duration-300"
            >
              <Instagram size={22} />
              Message Me on Instagram
            </motion.a>
          </div>

          {/* Photo + Polaroid side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
            style={parallax(8)}
          >
            {/* Main photo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue p-[3px] animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={abhinavPhoto}
                    alt="Abhinav - CEO of Void AI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 blur-2xl -z-10" />
            </div>

            {/* Polaroid cards */}
            {polaroids.map((card, i) => (
              <motion.div
                key={card.caption}
                initial={{ opacity: 0, y: 40, rotate: card.rotate * 2 }}
                animate={{ opacity: 1, y: 0, rotate: card.rotate }}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.6, type: "spring" }}
                className="absolute hidden lg:block"
                style={{
                  bottom: -40 + card.offsetY,
                  left: `calc(50% + ${card.offsetX - 40}px)`,
                  zIndex: card.z,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 0, y: -8, scale: 1.05 }}
                  animate={{ x: [0, i % 2 === 0 ? 6 : -6, 0] }}
                  transition={{
                    x: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="w-24 bg-foreground/90 rounded-sm p-1.5 cursor-default"
                  style={{
                    boxShadow: "0 8px 30px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="w-full h-20 rounded-[2px] bg-gradient-to-br from-muted to-card overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      {["🤖", "⚙️", "🌐", "💡"][i]}
                    </div>
                  </div>
                  <p className="text-[9px] text-background font-medium text-center mt-1.5 leading-tight">
                    {card.caption}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Infinite marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-5 border-t border-border/30 bg-background/40 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {[...roles, ...roles, ...roles, ...roles].map((role, i) => (
              <span
                key={i}
                className="inline-flex items-center text-base sm:text-lg text-muted-foreground mx-8 shrink-0 font-medium uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-neon-purple mr-4 shrink-0" />
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
