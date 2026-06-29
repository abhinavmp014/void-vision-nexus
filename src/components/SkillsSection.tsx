import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "PHP", "MySQL",
  "SEO Optimization", "UI/UX Design", "AI Integration",
];

const SkillsSection = () => (
  <section id="skills" className="py-32 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
      >
        / Skills
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
        {skills.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex items-center justify-between py-4 border-b border-border cursor-default"
          >
            <span className="font-display font-bold text-2xl sm:text-3xl group-hover:translate-x-1 transition-transform">
              {s}
            </span>
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
