import { motion } from "framer-motion";

const quotes = [
  {
    quote: "Abhinav ships faster than teams 3x his size. Sharp product instincts.",
    name: "Founder",
    role: "AI Startup",
  },
  {
    quote: "The chatbot he built is genuinely good. Clean code, clean UX.",
    name: "Beta User",
    role: "Void AI",
  },
  {
    quote: "Hard to believe he's 14. The technical bar is real.",
    name: "Engineer",
    role: "Open Source",
  },
];

const TestimonialsSection = () => (
  <section className="py-32 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
      >
        / Testimonials
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-black text-6xl sm:text-8xl lg:text-[9rem] tracking-tighter leading-[0.95] mb-20"
      >
        Testimonials
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="rounded-3xl bg-foreground text-background p-8 sm:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <p className="font-display text-xl sm:text-2xl leading-snug">
              "{q.quote}"
            </p>
            <div className="mt-8">
              <p className="font-display font-semibold">{q.name}</p>
              <p className="text-sm opacity-60">{q.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
