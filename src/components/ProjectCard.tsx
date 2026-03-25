import { FlipButton } from "./FlipButton";
import { PingHeader } from "./PingHeader";
import type { ProjectType } from "../type/ProjectType";
import { motion } from "framer-motion";

type Props = {
  project: ProjectType;
};

function ProjectCard({ project }: Props) {
  return (
    <motion.section className="gap-1.5 flex h-full">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "80px" }}
        className="p-[clamp(1rem,2vw,1.5rem)] flex flex-col gap-[clamp(0.75rem,2vh,2rem)] rounded-md min-w-[85vw] md:min-w-[450px] bg-background text-secondary h-full"
      >
        <header className="space-y-2">
          <h2
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}
            className="max-w-[14ch] md:max-w-[12ch]"
          >
            {project.title}
          </h2>
          <p style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.875rem)" }}>
            {project.description}
          </p>
        </header>
        <div>
          <span
            style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)" }}
            className="flex py-[clamp(0.5rem,1.5vh,1rem)] border-b border-grid-line justify-between items-center"
          >
            <h3>LOCATION:</h3>
            <p className="font-semibold">{project.location}</p>
          </span>
          <span
            style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)" }}
            className="flex py-[clamp(0.5rem,1.5vh,1rem)] border-b border-grid-line justify-between items-center"
          >
            <h3>TYPE OF WORK:</h3>
            <p className="font-semibold">{project.type}</p>
          </span>
          <span
            style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)" }}
            className="flex py-[clamp(0.5rem,1.5vh,1rem)] border-b border-grid-line justify-between items-center"
          >
            <h3>COMPLETION DATE:</h3>
            <p className="font-semibold">{project.completionDate}</p>
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.informations.map((info) => (
            <PingHeader key={info} title={info} />
          ))}
        </div>
        <div className="flex items-end flex-grow">
          <span className="flex items-center gap-4">
            <FlipButton variant="button" url="#" text="LEARN MORE" />
            <FlipButton variant="link" text="VIEW ON MAPS" url="#" />
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "80px" }}
        className="min-w-[85vw] md:min-w-[450px] h-full rounded-md overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={project.src}
          alt={project.title}
        />
      </motion.div>
    </motion.section>
  );
}

export default ProjectCard;
