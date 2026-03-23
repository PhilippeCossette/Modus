import { motion } from "framer-motion";

export function PingHeader({
  title,
  color = "primary",
}: {
  title: string;
  color?: "primary" | "secondary";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      className={`flex items-center gap-2 border ${color === "secondary" ? "border-white/20" : "border-secondary"} w-fit px-3 py-1.5 text-xs rounded-full`}
    >
      <span
        className={`inline-block h-0.5 w-0.5 animate-ping-long ${color === "secondary" ? "bg-white" : "bg-primary"} rounded-full`}
      ></span>
      <p
        className={`${color === "secondary" ? "text-white" : "text-secondary"} font-semibold`}
      >
        {title}
      </p>
    </motion.div>
  );
}
