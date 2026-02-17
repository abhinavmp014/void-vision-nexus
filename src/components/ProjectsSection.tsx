import { motion } from "framer-motion";
import { ExternalLink, Bot, BookOpen, ShoppingCart, Layout, Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Void AI Chatbot",
    description: "An intelligent conversational AI system built to understand context and deliver human-like responses.",
    tech: ["AI/ML", "NLP", "JavaScript", "API"],
    icon: Bot,
    status: "Live",
  },
  {
    title: "Flashcard Generator AI",
    description: "AI-powered tool that auto-generates study flashcards from any text or topic for efficient learning.",
    tech: ["AI", "React", "Node.js"],
    icon: Sparkles,
    status: "Live",
  },
  {
    title: "Study AI",
    description: "Comprehensive AI study platform with personalized learning paths and adaptive quizzing.",
    tech: ["AI", "Full-Stack", "Database"],
    icon: BookOpen,
    status: "Live",
  },
  {
    title: "Premium Landing Pages",
    description: "High-converting, SEO-optimized landing pages with stunning animations and performance.",
    tech: ["HTML", "CSS", "JS", "SEO"],
    icon: Layout,
    status: "Live",
  },
  {
    title: "eCommerce Jersey Platform",
    description: "Full-stack eCommerce platform for premium sports jerseys with cart, checkout, and admin dashboard.",
    tech: ["PHP", "MySQL", "JS", "Payment API"],
    icon: ShoppingCart,
    status: "In Progress",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      className="glass rounded-2xl p-6 glow-border group hover:border-neon-purple/40 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
          <project.icon className="w-5 h-5 text-neon-purple" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-lg">{project.title}</h3>
        </div>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            project.status === "Live"
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
          }`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
            {t}
          </span>
        ))}
      </div>
      <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-purple transition-colors group/btn">
        <ExternalLink size={14} />
        <span className="group-hover/btn:underline">View Project</span>
      </button>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
