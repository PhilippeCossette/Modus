import { section } from "framer-motion/client";
import { FlipButton } from "./FlipButton";
import { PingHeader } from "./PingHeader";
import { motion } from "framer-motion";

const HighLightData = [
  {
    id: 1,
    header: "50+",
    title: "PROJECTS COMPLETED",
    description:
      "Successfully completed over 50+ projects across residential, commercial. and pubic sectors, showcasing our diverse expertise.",
  },
  {
    id: 2,
    header: "147",
    title: "SKILLED PROFESSIONALS",
    description:
      "Our team consists of 147 skilled architects, engineers, and designers dedicated to delivering high-quality, innovative solutions.",
  },
  {
    id: 3,
    header: "$1.2B",
    title: "PROJECTS VALUE",
    description:
      "Managed projects with a combined value of over $1.2 billion, demonstrating our capacity to handle high-budget, complex designs.",
  },
];

type Highlight = {
  id: number;
  header: string;
  title: string;
  description: string;
};

export function Highlight() {
  return (
    <section className="flex justify-center py-16">
      <div className="max-w-[800px] w-[100%] px-4 ">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-6">
          <span className="flex flex-col gap-2">
            <PingHeader title="HIGHLIGHT" color="secondary" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-2xl md:text-4xl max-w-[18ch]"
            >
              Key Points That Define Our Success
            </motion.h2>
          </span>
          <FlipButton text="GET IN TOUCH" url="#" color="secondary" />
        </header>
        <div className="flex flex-col mt-6">
          {HighLightData.map((item, index) => (
            <HighlightCard highlight={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) {
  return (
    <div
      className={`${index === 0 ? "border-t" : ""} flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-muted py-6 overflow-hidden`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-150px", once: true }}
        className="text-7xl md:text-[150px] text-muted mb-2"
      >
        {highlight.header}
      </motion.h2>
      <span className="max-w-[300px] md:flex md:flex-col">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-150px", once: true }}
          className="text-semibold text-white"
        >
          {highlight.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-150px", once: true }}
          className="text-white/60 text-xs"
        >
          {highlight.description}
        </motion.p>
      </span>
    </div>
  );
}
