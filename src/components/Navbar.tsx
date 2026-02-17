import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
{ label: "About", href: "#about" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Vision", href: "#vision" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "py-5"}`}>

      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold gradient-text">Abhinav.mp

        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">

              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-blue group-hover:w-full transition-all duration-300" />
            </a>
          )}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong">

            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {links.map((l) =>
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors">

                  {l.label}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};

export default Navbar;