import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Bot, Globe, Rocket, Clock } from "lucide-react";

const stats = [
  { icon: Bot, label: "AI Tools Built", value: 3 },
  { icon: Globe, label: "Websites Developed", value: 10 },
  { icon: Rocket, label: "Ongoing Projects", value: 4 },
  { icon: Clock, label: "Years Learning & Building", value: 3 },
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
            About <span className="gradient-text">Abhinav</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-8 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto mb-16 glow-border"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            As the <span className="text-foreground font-semibold">CEO & Founder of Void AI</span>, Abhinav is on a mission to build intelligent
            digital systems that shape the future. From developing{" "}
            <span className="text-neon-purple">AI-powered chat systems</span> and a{" "}
            <span className="text-neon-blue">Flashcard Generator AI</span> to creating the{" "}
            <span className="text-neon-purple">Study AI platform</span>, he combines technical depth with entrepreneurial vision.
            His expertise spans full-stack eCommerce architecture, premium web development,
            and data-driven SEO strategies that deliver measurable growth.
          </p>
        </motion.div>

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
