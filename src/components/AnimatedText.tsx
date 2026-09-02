import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const Character = ({ character, progress, range }: { character: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span aria-hidden="true" className="opacity-0">{character}</span>
      <motion.span className="absolute inset-0" style={{ opacity }} aria-hidden="true">
        {character}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ children }: { children: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });

  return (
    <p ref={ref}>
      {Array.from(children).map((character, index) => {
        const start = index / children.length;
        return <Character key={`${character}-${index}`} character={character} progress={scrollYProgress} range={[start, Math.min(1, start + 0.12)]} />;
      })}
    </p>
  );
};

export default AnimatedText;