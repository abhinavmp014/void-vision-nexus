import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-40 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-black text-7xl sm:text-9xl lg:text-[12rem] tracking-tighter leading-[0.9] mb-8"
      >
        Let's talk.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg sm:text-xl text-muted-foreground max-w-md mb-12"
      >
        Have a project or need help? I'm always open to building something great.
      </motion.p>

      <motion.a
        href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.04 }}
        className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 rounded-full font-display font-semibold text-base group"
      >
        Message me on Instagram
        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
      </motion.a>
    </div>
  </section>
);

export default ContactSection;
