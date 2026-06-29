import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 bg-foreground text-background rounded-full pl-5 pr-1 py-1 shadow-lg">
        <a href="#" className="font-display font-semibold text-sm tracking-tight mr-4">
          Abhinav.mp
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs px-3 py-2 rounded-full hover:bg-background/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 rounded-full bg-background text-foreground flex items-center justify-center"
        >
          {open ? <X size={14} /> : <Menu size={14} />}
        </button>
        <a
          href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex w-9 h-9 rounded-full bg-background text-foreground items-center justify-center text-xs font-medium hover:scale-105 transition-transform"
        >
          ↗
        </a>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-foreground text-background rounded-2xl p-4 flex flex-col gap-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm px-3 py-2 rounded-lg hover:bg-background/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
