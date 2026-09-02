import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import voidAiImg from "@/assets/void-ai-chatbot.jpg";
import studyAiImg from "@/assets/study-ai.jpg";
import flashcardImg from "@/assets/flashcard-generator.jpg";
import jerseyImg from "@/assets/jersey-commerce.jpg";

const projects = [
  { number: "01", title: "Void AI Chatbot", category: "AI Assistant", image: voidAiImg, href: "https://void-ai-chat-app.vercel.app/" },
  { number: "02", title: "Study AI", category: "Learning Platform", image: studyAiImg, href: "#" },
  { number: "03", title: "Flashcard Generator", category: "AI / React", image: flashcardImg, href: "#" },
  { number: "04", title: "Jersey Commerce", category: "PHP / MySQL", image: jerseyImg, href: "#" },
];

const ProjectsSection = () => (
  <section id="projects" className="-mt-10 rounded-t-[40px] bg-background px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
    <div className="mx-auto max-w-7xl">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
        Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a key={project.title} href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: (index % 2) * 0.1, duration: 0.8 }} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-foreground/15 bg-card sm:rounded-[38px]">
              <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full border border-primary-foreground/80 bg-background/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">{project.number}</span>
              <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={18} /></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h3><p className="mt-1 text-sm text-foreground/55">{project.category}</p></div><span className="pt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/45">View ↗</span></div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;