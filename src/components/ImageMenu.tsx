import { useRef } from "react";
import { FlipButton } from "./FlipButton";
import { PingHeader } from "./PingHeader";
import { motion, useScroll, useTransform } from "framer-motion";

export function ImageMenu() {
  return (
    <div className="grid grid-cols-12 gap-1  lg:h-screen">
      <ImageMenuItem
        title="Your Vision, Our Expertise"
        ping="OUR SERVICES"
        buttonText="DISCOVER SERVICES"
        url="#"
        src="BentoPreview.avif"
      />
      <ImageMenuItem
        title="Let's Start the Conversation"
        ping="CONTACT US"
        buttonText="GET IN TOUCH"
        url="#"
        src="BentoPreview.avif"
      />
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
        transition={{ duration: 0.2, delay: 0.6 }}
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
