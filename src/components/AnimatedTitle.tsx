import { motion } from "framer-motion";

export function AnimatedTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, delay: 0.5 },
      }}
      viewport={{ once: true }}
      className="flex items-center justify-start leading-none"
      variants={{
        rest: {},
        hover: {},
      }}
    >
      {/* DOT */}
      <motion.span
        variants={{
          rest: { width: 0, opacity: 0, marginRight: 0 },
          hover: {
            width: "5px",
            opacity: 1,
            marginRight: "8px",
            transition: { duration: 0.1 },
          },
        }}
        className="h-[5px] bg-white"
      />
      {/* TEXT */}
      <span className="text-sm font-medium">{children}</span>
    </motion.span>
  );
}
