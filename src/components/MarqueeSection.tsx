import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import voidAiImg from "@/assets/void-ai-chatbot.jpg";
import studyAiImg from "@/assets/study-ai.jpg";
import flashcardImg from "@/assets/flashcard-generator.jpg";
import jerseyImg from "@/assets/jersey-commerce.jpg";

const images = [voidAiImg, studyAiImg, flashcardImg, jerseyImg];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, (value) => {
    const offset = Math.max(0, value - (ref.current?.offsetTop ?? 0) + window.innerHeight) * 0.05;
    return reverse ? -offset : offset - 200;
  });
  const row = [...images, ...images, ...images];

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x, willChange: "transform" }} className="flex w-max gap-3">
        {row.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt="Abhinav project preview"
            loading="lazy"
            className="h-[170px] w-[260px] shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
          />
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeSection = () => (
  <section className="overflow-hidden bg-background px-0 pb-10 pt-24 sm:pt-32 md:pt-40">
    <div className="flex flex-col gap-3">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>
  </section>
);

export default MarqueeSection;