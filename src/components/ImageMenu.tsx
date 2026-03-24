import { useRef } from "react";
import { FlipButton } from "./FlipButton";
import { PingHeader } from "./PingHeader";
import { motion, useScroll, useTransform } from "framer-motion";

type ImageMenu = {
  title: string;
  ping: string;
  buttonText: string;
  url: string;
  src: string;
};

interface ImageMenuItemProps {
  menu: ImageMenu[];
}

export function ImageMenu({ menu }: ImageMenuItemProps) {
  return (
    <div className="grid grid-cols-12 gap-1  lg:h-screen">
      {menu.map((item, index) => (
        <ImageMenuItem
          key={index}
          title={item.title}
          ping={item.ping}
          buttonText={item.buttonText}
          url={item.url}
          src={item.src}
        />
      ))}
    </div>
  );
}

function ImageMenuItem({
  src,
  title,
  ping,
  buttonText,
  url,
}: {
  src: string;
  title: string;
  ping: string;
  buttonText: string;
  url: string;
}) {
  return (
    <div className="relative flex flex-col items-center min-h-[525px] col-span-12 md:col-span-6 h-full rounded-md overflow-hidden">
      <motion.img
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-black/40"
      />
      <div className="items-center relative z-10 flex flex-col gap-5 mt-12 p-6 h-full">
        <PingHeader title={ping} color="secondary" />
        <h2 className="text-5xl text-white max-w-[11ch] text-center">
          {title}
        </h2>
        <FlipButton text={buttonText} url={url} color="secondary" />
      </div>
    </div>
  );
}
