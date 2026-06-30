import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="relative bg-[hsl(0_0%_8%)] text-[hsl(40_25%_95%)] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
      <div className="grid lg:grid-cols-3 gap-16 mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.95]"
        >
          Building<br />Intelligent<br />Systems.
        </motion.h2>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-60 mb-8">
            / Quick links
          </p>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 transition-colors font-display text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-60 mb-8">
            / Contact
          </p>
          <a
            href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-2xl sm:text-3xl hover:opacity-70 transition-opacity"
          >
            @_abhinavzzz_
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(30px)" }}
        whileInView={{ opacity: 0.95, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-black tracking-tighter leading-none select-none text-center"
        style={{ fontSize: "clamp(5rem, 22vw, 22rem)" }}
      >
        ABHINAV
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-60 mt-8 pt-8 border-t border-white/10">
        <span>© {new Date().getFullYear()} ABHINAV.MP</span>
        <span>BUILT WITH CARE / VOID AI</span>
      </div>
    </div>
  </footer>
);

export default Footer;
