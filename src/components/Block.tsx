import { motion, type HTMLMotionProps } from "framer-motion";
import { AnimatedTitle } from "./AnimatedTitle";
import { PingHeader } from "../components/PingHeader";
import { FlipButton } from "../components/FlipButton";

type BlockProps = {
  className?: string;
  title: string;
  description: string;
} & HTMLMotionProps<"div">;

export function ColoredBlock({
  className = "",
  title,
  description,
  ...motionProps
}: BlockProps) {
  return (
    <motion.div
      viewport={{ margin: "-50px" }}
      whileHover="hover"
      className={`${className} transition-all  hover:scale-[0.99] duration-200 rounded-md p-6 pr-0 flex flex-col gap-12 md:gap-[65px]`}
      {...motionProps}
    >
      <AnimatedTitle>{title}</AnimatedTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, delay: 0.8 },
        }}
        viewport={{ once: true }}
        className="text-sm mt-2 max-w-[200px]"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export function InfoBlock({
  title,
  description,
  withButton = false,
  buttonText = "LEARN MORE",
  buttonLink = "#",
  className = "",
}: {
  title: string;
  description: string;
  withButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 },
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`rounded-md h-full overflow-hidden col-span-12 sm:col-span-6 row-span-1 ${className}`}
    >
      <div className="flex flex-col items-start gap-3 bg-background p-6 h-fit">
        <PingHeader title={title} />
        <p className="mb-6 text-xl md:text-xl text-secondary">{description}</p>
        {withButton && (
          <FlipButton variant="button" url={buttonLink} text={buttonText} />
        )}
      </div>
    </motion.div>
  );
}
export function ImageBlock({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 },
      }}
      viewport={{ once: true, margin: "-250px" }}
      className={`group rounded-md overflow-hidden ${className}`}
    >
      <img
        className="group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 object-cover w-full h-full"
        src={src}
        alt=""
      />
    </motion.div>
  );
}
