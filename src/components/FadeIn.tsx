import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  x?: number;
  y?: number;
}

const FadeIn = ({ children, delay = 0, x = 0, y = 30, ...props }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "50px", amount: 0 }}
    transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);

export default FadeIn;