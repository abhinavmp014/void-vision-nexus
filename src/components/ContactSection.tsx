import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="border-t border-border px-6 py-32 sm:px-10 sm:py-40">
    <div className="mx-auto max-w-7xl">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">/ Start a conversation</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hero-heading max-w-5xl text-[clamp(4rem,13vw,12rem)] font-black leading-[0.82] tracking-tight">Let&apos;s talk.</motion.h2>
      <div className="mt-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"><p className="max-w-md text-lg text-foreground/60 sm:text-xl">Have an idea, a product, or a problem worth solving? I&apos;m always open to building something meaningful.</p><Button asChild className="rounded-full bg-foreground px-7 py-6 text-background hover:bg-foreground/85"><a href="https://www.instagram.com/_abhinavzzz_/?__pwa=1" target="_blank" rel="noopener noreferrer">Message me <ArrowUpRight /></a></Button></div>
    </div>
  </section>
);

export default ContactSection;