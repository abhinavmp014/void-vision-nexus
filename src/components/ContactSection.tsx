import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-32 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
      >
        / Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-black text-6xl sm:text-8xl lg:text-[10rem] tracking-tighter leading-[0.9] mb-12"
      >
        LET'S<br />BUILD.
      </motion.h2>

      <motion.a
        href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 rounded-full font-display font-semibold text-lg group"
      >
        Message me on Instagram
        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
      </motion.a>
    </div>
  </section>
);

export default ContactSection;
