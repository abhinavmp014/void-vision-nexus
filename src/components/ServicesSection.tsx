import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "AI Systems", desc: "Chatbots, learning tools, and AI-driven product experiences." },
  { title: "Full-Stack Web", desc: "Modern web apps end-to-end — frontend, backend, database." },
  { title: "eCommerce & SEO", desc: "PHP/MySQL storefronts engineered to rank and convert." },
  { title: "Product Consulting", desc: "Strategy, architecture, and design for founders shipping fast." },
];

const ServicesSection = () => (
  <section id="services" className="py-32 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            / Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter"
          >
            What I Do
          </motion.h2>
        </div>
      </div>

      <div>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-12 gap-4 items-center py-10 border-t border-border last:border-b cursor-default"
          >
            <span className="col-span-1 font-mono text-xs text-muted-foreground">
              0{i + 1}
            </span>
            <h3 className="col-span-7 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight group-hover:translate-x-3 transition-transform duration-500">
              {s.title}
            </h3>
            <p className="hidden md:block col-span-3 text-sm text-muted-foreground">
              {s.desc}
            </p>
            <div className="col-span-1 flex justify-end">
              <div className="w-12 h-12 rounded-full bg-foreground/5 text-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
