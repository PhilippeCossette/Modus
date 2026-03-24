import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleItem(id: number) {
    setActiveIndex((prev) => (prev === id ? null : id));
  }

  const leftItems = items.filter((_, i) => i % 2 === 0);
  const rightItems = items.filter((_, i) => i % 2 !== 0);

  return (
    <div className="w-full mt-20 max-w-[1200px] flex flex-col lg:flex-row gap-2">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-2 flex-1">
        {leftItems.map((item, index) => (
          <FaqCard
            key={item.id}
            item={item}
            activeIndex={activeIndex}
            toggleItem={toggleItem}
            index={index}
          />
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-2 flex-1">
        {rightItems.map((item, index) => (
          <FaqCard
            index={index}
            key={item.id}
            item={item}
            activeIndex={activeIndex}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  );
}

type FaqCardProps = {
  item: AccordionItem;
  activeIndex: number | null;
  toggleItem: (id: number) => void;
  index: number;
};

function FaqCard({ item, activeIndex, toggleItem, index }: FaqCardProps) {
  const isOpen = activeIndex === item.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
      onClick={() => toggleItem(item.id)}
      className="text-white bg-white/5 p-4 rounded-md cursor-pointer border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{item.question}</h3>
        <motion.span animate={isOpen ? { rotate: 45 } : { rotate: 0 }}>
          <LuPlus />
        </motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <p className="text-gray-400 mt-2">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
