import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import voidAiImg from "@/assets/void-ai-chatbot.jpg";
import studyAiImg from "@/assets/study-ai.jpg";
import flashcardImg from "@/assets/flashcard-generator.jpg";
import jerseyImg from "@/assets/jersey-commerce.jpg";

const projects = [
  { title: "Void AI Chatbot", subtitle: "AI Assistant", href: "https://void-ai-chat-app.vercel.app/", image: voidAiImg },
  { title: "Study AI", subtitle: "Learning Platform", href: "#", image: studyAiImg },
  { title: "Flashcard Generator", subtitle: "AI · React", href: "#", image: flashcardImg },
  { title: "Jersey Commerce", subtitle: "PHP · MySQL", href: "#", image: jerseyImg },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            / Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.95]"
          >
            Featured<br />Projects
          </motion.h2>
        </div>
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="group inline-flex items-center gap-3 font-display font-medium text-base"
        >
          View All Work
          <span className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <ArrowUpRight size={16} />
          </span>
        </motion.a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group block"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-muted transition-transform duration-700 group-hover:-translate-y-2">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-background/90 text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight size={18} />
              </div>
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
              {p.title}
            </h3>
            <p className="text-muted-foreground mt-1">{p.subtitle}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
