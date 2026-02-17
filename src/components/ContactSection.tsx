import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 relative">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
          Let's Build the{" "}
          <span className="gradient-text">Future Together</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
          Ready to create something extraordinary? Let's connect and turn ideas into intelligent systems.
        </p>
        <motion.a
          href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full instagram-gradient text-primary-foreground font-bold text-xl instagram-glow hover:shadow-[0_0_40px_rgba(225,48,108,0.5)] transition-shadow duration-300"
        >
          <Instagram size={24} />
          Message Me on Instagram
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
