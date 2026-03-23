import ProjectCard from "./ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { Projects } from "../data/Projects";
import { useRef, useState, useEffect } from "react";
import { PingHeader } from "./PingHeader";
import { FlipButton } from "./FlipButton";
import { AnimatedTitle } from "./AnimatedTitle";

function ScrollSliderSection() {
  const target = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const calculate = () => {
      if (!sliderRef.current) return;
      const totalWidth = sliderRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setDistance(totalWidth - viewportWidth);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <section ref={target} className="relative h-[300vh] px-1">
      <div className="sticky top-0 h-screen flex flex-col gap-8 justify-center overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-2">
          <PingHeader title="OUR PROJECTS" color="secondary" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl mb-4 text-white text-center max-w-[15ch]"
          >
            See Our Newest Projects in Action
          </motion.h2>
          <FlipButton text="VIEW ALL" url="#" color="secondary" />
        </div>
        <motion.div ref={sliderRef} style={{ x }} className="flex gap-2">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollSliderSection;
