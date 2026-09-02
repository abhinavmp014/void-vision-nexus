const Footer = () => (
  <footer className="border-t border-border px-6 py-8 sm:px-10">
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45 sm:flex-row">
      <span>© {new Date().getFullYear()} Abhinav.mp</span>
      <span>Building intelligent systems / Void AI</span>
    </div>
  </footer>
);

export default Footer;