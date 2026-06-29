const Footer = () => (
  <footer className="px-6 py-10 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
      <span>© {new Date().getFullYear()} ABHINAV.MP</span>
      <span>BUILT WITH CARE / VOID AI</span>
    </div>
  </footer>
);

export default Footer;
