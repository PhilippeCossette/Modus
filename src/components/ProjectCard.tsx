import { FlipButton } from "./FlipButton";
import { PingHeader } from "./PingHeader";
import type { ProjectType } from "../type/ProjectType";
import { motion } from "framer-motion";

type Props = {
  project: ProjectType;
};

function ProjectCard({ project }: Props) {
  return (
    <motion.section className="gap-1.5 flex">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "80px" }}
        className="p-6 flex flex-col gap-8 rounded-md min-w-[450px] bg-background text-secondary"
      >
        <header className="space-y-3">
          <h2 className="text-3xl max-w-[12ch]">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </header>
        <div>
          <span className="text-xs flex py-4 border-b border-grid-line justify-between items-center">
            <h3>LOCATION:</h3>
            <p className="font-semibold">{project.location}</p>
          </span>
          <span className="text-xs flex py-4 border-b border-grid-line justify-between items-center">
            <h3>TYPE OF WORK:</h3>
            <p className="font-semibold">{project.type}</p>
          </span>
          <span className="text-xs flex py-4 border-b border-grid-line justify-between items-center">
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
            <FlipButton
              className=""
              variant="button"
              url="#"
              text="LEARN MORE"
            />
            <FlipButton variant="link" text="VIEW ON MAPS" url="#" />
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "80px" }}
        className="min-w-[450px] rounded-md overflow-hidden max-h-[675px]"
      >
        <img
          className="w-full h-full object-cover"
          src="BentoPreview2.jpg"
          alt=""
        />
      </motion.div>
    </motion.section>
  );
}

export default ProjectCard;
