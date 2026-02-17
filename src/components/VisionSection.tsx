import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const VisionSection = () => (
  <section id="vision" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          My Vision for <span className="gradient-text">AI & Web Technology</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto glass rounded-2xl p-10 glow-border text-center"
      >
        <Zap className="w-10 h-10 mx-auto mb-6 text-neon-purple" />
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
          I believe the future belongs to those who build at the intersection of{" "}
          <span className="text-foreground font-semibold">artificial intelligence</span> and{" "}
          <span className="text-foreground font-semibold">scalable web architecture</span>.
          My mission is to create intelligent systems that don't just automate — they{" "}
          <span className="gradient-text font-semibold">think, adapt, and evolve</span>.
          From AI-powered learning tools to enterprise-grade eCommerce platforms,
          every product I build is designed to push boundaries and deliver real impact.
        </p>
      </motion.div>
    </div>
  </section>
);

export default VisionSection;
