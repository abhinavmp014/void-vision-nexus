import { motion } from "framer-motion";

const services = [
  ["01", "AI Systems", "Chatbots, learning tools, and AI-driven product experiences that feel clear, fast, and useful."],
  ["02", "Full-Stack Web", "Modern web apps end-to-end — frontend, backend, database, and the details between them."],
  ["03", "eCommerce & SEO", "PHP/MySQL storefronts and search-focused experiences engineered to rank and convert."],
  ["04", "Product Consulting", "Strategy, architecture, and interface direction for founders shipping ambitious ideas."],
  ["05", "Learning Tools", "Focused study products that make complicated information easier to understand and use."],
];

const ServicesSection = () => (
  <section id="services" className="rounded-t-[40px] bg-surface-light px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
    <div className="mx-auto max-w-5xl">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
        Services
      </motion.h2>
      <div>
        {services.map(([number, title, description], index) => (
          <motion.div key={number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.7 }} className="grid grid-cols-[72px_1fr] gap-5 border-t border-ink/15 py-8 sm:grid-cols-[130px_1fr] sm:gap-8 sm:py-10 md:grid-cols-[180px_1fr] md:py-12">
            <span className="font-display text-[clamp(3rem,10vw,8.75rem)] font-black leading-[0.75]">{number}</span>
            <div className="pt-1 sm:pt-2"><h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">{title}</h3><p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">{description}</p></div>
          </motion.div>
        ))}
        <div className="border-t border-ink/15" />
      </div>
    </div>
  </section>
);

export default ServicesSection;