import type React from "react";
import { PingHeader } from "./PingHeader";
import { motion } from "framer-motion";

interface ShowcaseProps {
  pingTitle: string;
  title: string;
  titleMaxWidth: string;
  backgroundImage: string;
  cards: Card[];
}

export function ShowcaseSection({
  pingTitle,
  title,
  titleMaxWidth,
  cards,
  backgroundImage,
}: ShowcaseProps) {
  return (
    <div className="rounded-md relative flex flex-col items-center pt-20 mx-6 my-[150px] min-h-[1200px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundImage}
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/5 h-full"></div>
      <div className="max-w-[900px] mx-6 z-10 gap-4 flex flex-col items-center justify-center">
        <PingHeader title={pingTitle} color="secondary" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl lg:text-4xl text-white"
          style={{ maxWidth: titleMaxWidth }}
        >
          {title}
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-2 mt-10">
          {cards.map((card, index) => (
            <Card card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

interface CardProps {
  card: Card;
  index: number;
}

function Card({ card, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white/10 text-white rounded-md px-4 py-8 backdrop-blur-lg border border-white/10 flex flex-col items-center"
    >
      <span className="text-2xl mb-4">{card.icon}</span>
      <h3 className="text-center font-semibold">{card.title}</h3>
      <p className="text-center text-sm">{card.description}</p>
    </motion.div>
  );
}
