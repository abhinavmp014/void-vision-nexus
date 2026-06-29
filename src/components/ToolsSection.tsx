import { motion } from "framer-motion";

const tools = ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Figma", "Framer", "GSAP", "Git", "SEO", "AI/ML"];

const ToolsSection = () => {
  const dup = [...tools, ...tools, ...tools];
  return (
    <section className="py-20 border-t border-border overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center"
      >
        / Tools I Use
      </motion.p>
      <div className="relative">
        <div className="flex whitespace-nowrap will-change-transform" style={{ animation: "scroll-left 30s linear infinite" }}>
          {dup.map((t, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-display font-black text-5xl sm:text-7xl mx-8 tracking-tighter">{t}</span>
              <span className="text-foreground/30 text-5xl sm:text-7xl">✦</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
};

export default ToolsSection;
