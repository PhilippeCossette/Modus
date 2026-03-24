import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { PingHeader } from "./PingHeader";
import { FlipButton } from "./FlipButton";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  pingTitle: string;
  titleMaxWidth: string;
  className?: string;
}

export function Hero({
  className = "",
  pingTitle,
  title,
  description,
  buttonText,
  titleMaxWidth,
  buttonLink,
}: HeroProps) {
  return (
    <div className={`col-span-12  h-full flex flex-col min-h-[500px]`}>
      <Navigation />
      <div
        className={`z-10 overflow-hidden relative bg-page-background grid grid-cols-12 gap-5 px-6 pb-12 h-full rounded-b-md items-end grid-rows-[1fr_auto] md:grid-rows-[1fr]  ${className}`}
      >
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <PingHeader title={pingTitle} />

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl lg:text-6xl text-secondary`}
            style={{ maxWidth: titleMaxWidth }}
          >
            {title}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="col-start-1 col-span-12 sm:col-span-6 lg:col-start-10 lg:col-span-3 gap-5 flex flex-col items-start"
        >
          <p className="max-w-80 text-secondary text-sm">{description}</p>
          <FlipButton variant="button" url={buttonLink} text={buttonText} />
        </motion.div>
        <HeroBg />
      </div>
    </div>
  );
}

const bgContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const bgBoxVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { ease: "easeIn" as const } },
};

function HeroBg() {
  return (
    <motion.div
      variants={bgContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="-z-10 absolute inset-0 grid grid-cols-12"
    >
      <HeroBgBox />
      <HeroBgBox className="hidden md:block" />
      <HeroBgBox className="hidden md:block" />
      <HeroBgBox />
    </motion.div>
  );
}

function HeroBgBox({ className = "" }: { className?: string }) {
  return (
    <motion.div
      variants={bgBoxVariants}
      className={`col-span-6 md:col-span-3 border-l bg-background border-grid-line last:border-r ${className}`}
    />
  );
}
