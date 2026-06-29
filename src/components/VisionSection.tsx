import { motion } from "framer-motion";

const VisionSection = () => (
  <section id="vision" className="py-32 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
      >
        / Vision
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight"
      >
        The future belongs to those who build at the intersection of <span className="italic font-light">artificial intelligence</span> and scalable web architecture. I'm building systems that don't just automate — they <span className="italic font-light">think, adapt, and evolve</span>.
      </motion.h2>
    </div>
  </section>
);

export default VisionSection;
