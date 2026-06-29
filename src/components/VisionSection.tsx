import { motion } from "framer-motion";
import ScrollHighlightText from "./ScrollHighlightText";

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
      <ScrollHighlightText className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
        The future belongs to those who build at the intersection of artificial intelligence and scalable web architecture. I'm building systems that don't just automate — they think, adapt, and evolve.
      </ScrollHighlightText>
    </div>
  </section>
);

export default VisionSection;
