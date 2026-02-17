import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Bot, Globe, Rocket, Clock, Code, TrendingUp, Cpu, GraduationCap } from "lucide-react";

const stats = [
  { icon: Bot, label: "AI Tools Built", value: 3 },
  { icon: Globe, label: "Websites Developed", value: 10 },
  { icon: Rocket, label: "Ongoing Projects", value: 4 },
  { icon: Clock, label: "Years Learning & Building", value: 3 },
];

const highlights = [
  {
    icon: Cpu,
    title: "AI Systems Builder",
    desc: "I design and develop AI-powered tools like chatbots, flashcard generators, and study platforms that make learning smarter and more efficient.",
  },
  {
    icon: Code,
    title: "Full-Stack Web Developer",
    desc: "From landing pages to full eCommerce platforms, I build responsive, high-performance websites using HTML, CSS, JavaScript, PHP, and MySQL.",
  },
  {
    icon: TrendingUp,
    title: "SEO Strategist",
    desc: "I implement data-driven SEO strategies — on-page optimization, keyword research, and technical SEO — to help websites rank higher and grow organically.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    desc: "I'm constantly exploring new technologies, frameworks, and AI models. Every day is a chance to level up and build something better than yesterday.",
  },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span>{count}+</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto mb-16 glow-border"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Hey! I'm <span className="text-foreground font-semibold">Abhinav</span> — a young tech entrepreneur, developer, and the{" "}
            <span className="text-neon-purple font-semibold">CEO & Founder of Void AI</span>. I started my journey by learning web development from scratch, and today I build AI-powered platforms and full-stack web applications.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            I've created <span className="text-neon-blue font-semibold">Void AI Chatbot</span> — an intelligent conversational system, 
            a <span className="text-neon-purple font-semibold">Flashcard Generator AI</span> that auto-creates study materials, 
            and <span className="text-neon-blue font-semibold">Study AI</span> — a personalized learning platform. I'm also building a 
            full-stack <span className="text-neon-purple font-semibold">eCommerce jersey platform</span> with cart, checkout, and admin dashboard.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Beyond coding, I'm deeply into <span className="text-foreground font-semibold">SEO optimization</span> — helping websites rank higher through keyword strategy, on-page SEO, and technical audits. My goal? To build technology that genuinely helps people learn, shop, and connect smarter.
          </p>
        </motion.div>

        {/* What I Do cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 glow-border group hover:bg-neon-purple/5 transition-colors"
            >
              <h.icon className="w-8 h-8 mb-3 text-neon-purple group-hover:text-neon-blue transition-colors" />
              <h3 className="font-display font-bold text-lg mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center glow-border group hover:bg-neon-purple/5 transition-colors"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-neon-purple group-hover:text-neon-blue transition-colors" />
              <div className="font-display text-3xl font-bold gradient-text mb-1">
                <Counter target={stat.value} inView={inView} />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
