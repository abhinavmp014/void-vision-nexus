import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const AboutSection = () => (
  <section id="about" className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hero-heading text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight">
        About me
      </motion.p>
      <div className="max-w-[560px] text-base font-medium leading-relaxed text-foreground sm:text-lg md:text-xl">
        <AnimatedText>I'm Abhinav MP, a 14-year-old founder and software engineer turning ideas into AI-powered tools, full-stack web systems, and thoughtful digital products. I care about clarity, speed, strong interfaces, and building things that feel genuinely useful. Let's make something incredible together.</AnimatedText>
      </div>
      <div className="grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border/70 pt-8 text-left sm:grid-cols-4">
        {["14 / Age", "2023 / Creating since", "AI / Focus", "∞ / Curiosity"].map((item) => {
          const [value, label] = item.split(" / ");
          return <div key={label}><p className="font-display text-2xl font-bold text-foreground sm:text-3xl">{value}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/50">{label}</p></div>;
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;