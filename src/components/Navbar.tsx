import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Instagram ↗", href: "https://www.instagram.com/_abhinavzzz_/?__pwa=1", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      ref={wrapRef}
    >
      <div className="relative flex items-center gap-2 bg-foreground text-background rounded-full pl-7 pr-2 py-2 shadow-xl">
        <a href="#" className="font-display font-semibold text-base tracking-tight pr-6">
          Abhinav
        </a>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative w-11 h-9 rounded-full bg-background text-foreground flex items-center justify-center overflow-hidden"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0, scale: open ? 0.9 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="flex items-center gap-[3px]"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  scale: open ? (i === 1 ? 0 : 1.15) : 1,
                  x: open ? (i === 0 ? 3 : i === 2 ? -3 : 0) : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22, delay: i * 0.03 }}
                className="w-[4px] h-[4px] rounded-full bg-foreground"
              />
            ))}
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -8, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: -6, filter: "blur(6px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top right" }}
              className="absolute right-0 top-full mt-3 min-w-[200px] bg-foreground text-background rounded-2xl p-2 shadow-2xl border border-background/10"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ delay: 0.06 + i * 0.04, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="block rounded-xl px-4 py-3 font-display text-sm font-medium hover:bg-background/10 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
