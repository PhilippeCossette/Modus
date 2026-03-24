import { PingHeader } from "../components/PingHeader";
import { FlipButton } from "../components/FlipButton";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import type { MotionProps } from "framer-motion";
import { AnimatedTitle } from "./AnimatedTitle";

const MotionNavLink = motion(NavLink);

type BlockProps = MotionProps & {
  className?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  description?: string;
  href?: string;
  to?: string;
};

export function ColoredBlock({
  className = "",
  title,
  icon,
  description,
  href,
  to,
  ...motionProps
}: BlockProps) {
  const content = (
    <>
      <div className={`flex flex-col gap-2`}>
        {icon && <div className="text-2xl mb-5">{icon}</div>}
        <AnimatedTitle>{title}</AnimatedTitle>
        {description && (
          <p className="text-sm mt-2 max-w-[220px]">{description}</p>
        )}
      </div>
    </>
  );

  const base = `${className} transition hover:scale-[0.99] duration-200 rounded-md p-6 pr-0 flex flex-col md:gap-[65px]`;

  if (href) {
    return (
      <motion.a
        initial="rest"
        whileHover="hover"
        animate="rest"
        href={href}
        className={base}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  if (to) {
    return (
      <MotionNavLink
        initial="rest"
        whileHover="hover"
        animate="rest"
        to={to}
        className={base}
        {...motionProps}
      >
        {content}
      </MotionNavLink>
    );
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={base}
      {...motionProps}
    >
      {content}
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
  divClassName = "",
  textClassName = "",
}: {
  title: string;
  description: string;
  withButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  divClassName?: string;
  textClassName?: string;
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
      <div
        className={`flex flex-col items-start gap-3 ${divClassName} bg-background p-6 h-fit`}
      >
        <PingHeader title={title} />
        <p className={`mb-6 text-xl text-secondary ${textClassName}`}>
          {description}
        </p>
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
