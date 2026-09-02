import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import abhinavPhoto from "@/assets/abhinav-photo.jpeg";
import ContactButton from "./ContactButton";

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col overflow-x-clip px-6 pb-7 pt-6 sm:pb-8 sm:pt-8 md:px-10 md:pb-10">
    <div className="flex items-center justify-between gap-5">
      <motion.a href="#" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-base font-bold uppercase tracking-[0.18em] text-foreground sm:text-xl">
        Abhinav.mp
      </motion.a>
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="hidden items-center justify-between gap-8 text-sm font-medium uppercase tracking-[0.16em] text-foreground/85 md:flex md:text-lg lg:text-[1.1rem]">
        <a href="#about" className="transition-opacity duration-200 hover:opacity-70">About</a>
        <a href="#services" className="transition-opacity duration-200 hover:opacity-70">Services</a>
        <a href="#projects" className="transition-opacity duration-200 hover:opacity-70">Projects</a>
        <a href="#contact" className="transition-opacity duration-200 hover:opacity-70">Contact</a>
      </motion.nav>
      <motion.a href="#contact" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 transition-opacity hover:opacity-60 sm:text-xs">
        Available / 2026
      </motion.a>
    </div>

    <div className="relative z-20 mt-10 overflow-hidden sm:mt-5 md:-mt-5">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} className="hero-heading w-full whitespace-nowrap text-center text-[17vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
        Hi, I&apos;m Abhinav
      </motion.h1>
    </div>

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className="absolute left-1/2 top-[51%] z-10 w-[215px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[300px] sm:translate-y-0 md:w-[390px] lg:w-[490px]">
      <div className="profile-glow absolute inset-[8%] rounded-full" />
      <div className="relative overflow-hidden rounded-full border border-foreground/30 bg-card shadow-portrait">
        <img src={abhinavPhoto} alt="Abhinav MP, 14-year-old technology founder" className="aspect-square w-full object-cover grayscale-[0.12]" />
      </div>
    </motion.div>

    <div className="mt-auto flex items-end justify-between gap-6 pt-8">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="max-w-[165px] text-xs font-light uppercase leading-snug tracking-[0.1em] text-foreground/80 sm:max-w-[230px] sm:text-sm md:max-w-[275px] md:text-base">
        A 14-year-old technology founder crafting AI tools, full-stack systems, and digital experiences with real product taste.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="flex flex-col items-end gap-5">
        <ContactButton />
        <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/50 sm:flex"><ArrowDownRight size={15} /> Scroll to explore</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;