import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neon-purple font-mono text-sm mb-4 tracking-widest uppercase"
            >
              Hi, I'm Abhinav 👋
            </motion.p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Building{" "}
              <span className="gradient-text">Intelligent Digital Systems</span>{" "}
              for the Future
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl mb-4 max-w-xl">
              I'm the CEO & Founder of <span className="text-neon-purple font-semibold">Void AI</span> — passionate about creating AI-powered tools, high-performance websites, and scalable digital platforms.
            </p>
            <div className="h-8 mb-8">
              <span className="text-lg sm:text-xl text-muted-foreground font-mono">
                {typedText}
                <span className="animate-glow-pulse text-neon-purple">|</span>
              </span>
            </div>

            {/* Role roll */}
            <div className="mb-8 overflow-hidden h-7">
              <div className="animate-roll">
                {[...roles, ...roles].map((role, i) => (
                  <div key={i} className="h-7 flex items-center justify-center lg:justify-start text-muted-foreground text-sm">
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full instagram-gradient text-primary-foreground font-semibold text-lg instagram-glow hover:shadow-[0_0_30px_rgba(225,48,108,0.5)] transition-shadow duration-300"
            >
              <Instagram size={22} />
              Message Me on Instagram
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
