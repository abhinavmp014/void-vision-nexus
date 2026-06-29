import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Void AI Chatbot", year: "2025", tag: "AI · NLP", status: "Live" },
  { title: "Flashcard Generator AI", year: "2025", tag: "AI · React", status: "Live" },
  { title: "Study AI", year: "2025", tag: "AI · Full-Stack", status: "Live" },
  { title: "Premium Landing Pages", year: "2024", tag: "Web · SEO", status: "Live" },
  { title: "eCommerce Jersey Platform", year: "2025", tag: "PHP · MySQL", status: "In Progress" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
      >
        / Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter mb-16"
      >
        WORK.
      </motion.h2>

      <div>
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-12 gap-4 items-center py-8 border-t border-border last:border-b cursor-pointer"
          >
            <span className="col-span-1 font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <h3 className="col-span-7 sm:col-span-6 font-display font-bold text-2xl sm:text-4xl lg:text-5xl group-hover:translate-x-2 transition-transform duration-500">
              {p.title}
            </h3>
            <span className="hidden sm:block col-span-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
              {p.tag}
            </span>
            <span className="col-span-2 sm:col-span-1 font-mono text-xs text-muted-foreground text-right sm:text-left">
              {p.year}
            </span>
            <div className="col-span-2 flex justify-end">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
