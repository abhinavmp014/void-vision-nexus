import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-foreground text-background rounded-full pl-7 pr-2 py-2 shadow-xl">
        <a href="#" className="font-display font-semibold text-base tracking-tight pr-6">
          Abhinav
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Menu"
              className="w-11 h-9 rounded-full bg-background text-foreground flex items-center justify-center hover:scale-105 transition-transform"
            >
              <MoreHorizontal size={18} strokeWidth={2.5} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={12}
            className="bg-foreground text-background border-none rounded-2xl p-2 min-w-[180px] shadow-xl"
          >
            {links.map((l) => (
              <DropdownMenuItem
                key={l.href}
                asChild
                className="rounded-xl px-4 py-3 focus:bg-background/10 focus:text-background cursor-pointer"
              >
                <a href={l.href} className="font-display text-sm font-medium">
                  {l.label}
                </a>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem
              asChild
              className="rounded-xl px-4 py-3 focus:bg-background/10 focus:text-background cursor-pointer"
            >
              <a
                href="https://www.instagram.com/_abhinavzzz_/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm font-medium"
              >
                Instagram ↗
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  );
};

export default Navbar;
