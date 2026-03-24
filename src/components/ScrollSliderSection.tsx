import ProjectCard from "./ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PingHeader } from "./PingHeader";
import { FlipButton } from "./FlipButton";
import type { ProjectType } from "../type/ProjectType";

interface ScrollSliderSectionProps {
  pingTitle: string;
  title: string;
  titleMaxWidth: string;
  projects: ProjectType[];
  buttonText?: string;
  buttonLink?: string;
}

function ScrollSliderSection({
  pingTitle,
  title,
  titleMaxWidth,
  projects,
  buttonText,
  buttonLink,
}: ScrollSliderSectionProps) {
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
          <PingHeader title={pingTitle} color="secondary" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: titleMaxWidth }}
            className="text-3xl mb-4 text-white text-center"
          >
            {title}
          </motion.h2>
          {buttonText && buttonLink && (
            <FlipButton text={buttonText} url={buttonLink} color="secondary" />
          )}
        </div>
        <motion.div ref={sliderRef} style={{ x }} className="flex gap-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollSliderSection;
