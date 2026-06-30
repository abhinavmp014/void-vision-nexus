import { motion } from "framer-motion";
import ScrollHighlightText from "./ScrollHighlightText";

const AboutSection = () => (
  <section id="about" className="py-40 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12 text-center"
      >
        / About
      </motion.p>

      <ScrollHighlightText className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-center justify-center">
        From idea to launch. I build AI-powered tools and full-stack web systems that are fast, scalable, and intentional — driven by clarity, structured thinking, and real product taste.
      </ScrollHighlightText>
    </div>
  </section>
);

export default AboutSection;
