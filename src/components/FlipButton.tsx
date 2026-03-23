import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const parentVariants = {
  hidden: {},
  hover: {},
};

const childVariants = {
  hidden: { rotateX: 0, y: 0, opacity: 1 },
  hover: { rotateX: 90, y: -20, opacity: 0, transition: { duration: 0.25 } },
};

const childVariants2 = {
  hidden: { rotateX: -90, y: 20, opacity: 0 },
  hover: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, delay: 0.05 },
  },
};

const MotionLink = motion(Link);

export function FlipButton({
  text,
  className = "",
  variant = "button",
  color = "primary",
  url,
}: {
  text: string;
  className?: string;
  variant?: "button" | "link";
  color?: "primary" | "secondary";
  url: string;
}) {
  const colorClasses =
    variant === "button"
      ? color === "primary"
        ? "bg-primary border-primary hover:bg-transparent hover:text-secondary text-white"
        : "bg-white border-white hover:bg-transparent text-secondary hover:text-white"
      : "text-secondary";

  if (variant === "link") {
    return (
      <motion.a
        href={url}
        variants={parentVariants}
        initial={"hidden"}
        whileHover={"hover"}
        className={`${colorClasses} inline-block overflow-hidden w-fit [perspective:800px] relative whitespace-nowrap ${className}`}
        data-text={text}
      >
        <motion.p
          className="[transform-origin:bottom] [transform-style:preserve-3d] [backface-visibility:hidden]"
          variants={childVariants}
        >
          {text}
        </motion.p>
        <motion.p
          className="absolute inset-0 [transform-origin:top] [transform-style:preserve-3d] [backface-visibility:hidden]"
          variants={childVariants2}
        >
          {text}
        </motion.p>
      </motion.a>
    );
  }

  return (
    <MotionLink
      to={url}
      variants={parentVariants}
      initial={"hidden"}
      whileHover={"hover"}
      className={`${colorClasses} inline-block font-semibold text-xs rounded-full transition-all duration-300 border w-fit [perspective:800px] relative whitespace-nowrap ${className}`}
      data-text={text}
    >
      <motion.p
        className="px-5 py-3 [transform-origin:bottom] [transform-style:preserve-3d] [backface-visibility:hidden]"
        variants={childVariants}
      >
        {text}
      </motion.p>
      <motion.p
        className="px-5 py-3 absolute inset-0 [transform-origin:top] [transform-style:preserve-3d] [backface-visibility:hidden]"
        variants={childVariants2}
      >
        {text}
      </motion.p>
    </MotionLink>
  );
}
