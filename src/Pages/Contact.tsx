import { ColoredBlock, ImageBlock } from "../components/Block";
import { SiteHeader } from "../components/SiteHeader";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="flex flex-col gap-1">
      <SiteHeader
        pingTitle="CONTACT US"
        titleMaxWidth="20ch"
        title="Contact Us to Turn Ideas into Reality"
        description="Let’s work together to bring your vision to life. Reach out to explore how we can create innovative, functional spaces that exceed your expectations."
        buttonText="SEE OUR PROJECTS"
        buttonLink="/projects"
      >
        <ColoredBlock
          initial={{ opacity: 0, height: "0%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="col-span-12 md:col-span-6 lg:col-span-3 text-text-primary bg-secondary hover:bg-secondary/95"
          title="EMAIL US"
          icon={<MdMailOutline />}
          href="mailto:hello@modus.com"
          description="Share your questions or ideas, and we'll respond quickly."
        />
        <ColoredBlock
          initial={{ opacity: 0, height: "0%" }}
          whileInView={{ opacity: 1, y: 0, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="col-span-12 md:col-span-6 lg:col-span-3 text-text-primary bg-primary hover:bg-primary/90"
          title="CALL US"
          icon={<LuPhone />}
          href="tel:5141234567"
          description="Contact us directly for immediate assistance."
        />
        <ColoredBlock
          initial={{ opacity: 0, height: "-0%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="col-span-12 lg:col-span-6 text-text-primary bg-accent hover:bg-accent/95"
          title="VISIT US"
          icon={<LuBuilding2 />}
          href="https://maps.google.com/?q=123+Main+Street"
          description="Visit us for personalized consultations and advice."
        />
      </SiteHeader>
      <div className="grid grid-cols-12 gap-1">
        <ImageBlock
          className="col-span-12 md:col-span-6"
          src="ContactFormImage.avif"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-md col-span-12 md:col-span-6 p-6"
        >
          <header>
            <h2 className="text-5xl text-secondary mb-10 max-w-[12ch]">
              Share Your Vision with Us
            </h2>
          </header>
          <form className="w-full grid grid-cols-2 gap-2">
            <Input
              label="FULL NAME"
              placeholder="John Anderson"
              type="text"
              className="col-span-2"
            />
            <Input
              label="EMAIL"
              placeholder="john.anderson@example.com"
              type="email"
              className="col-span-1"
            />
            <Input
              label="PHONE"
              placeholder="(123) 456-7890"
              type="tel"
              className="col-span-1"
            />
            <TextArea
              label="Message"
              placeholder="How can we help you?"
              className="col-span-2"
            />
            <button
              type="submit"
              className="col-span-2 bg-secondary text-white mt-6 text-xs py-4 rounded-full border border-primary hover:text-secondary hover:bg-background transition-all duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type,
  className,
}: {
  label: string;
  placeholder: string;
  type: string;
  className?: string;
}) {
  return (
    <div className={`${className} flex flex-col gap-1 mt-4`}>
      <label className="text-xs text-secondary">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-400/20  text-primary placeholder:text-primary/50 focus:border focus:border-gray/20 focus:outline-none rounded-md p-5 px-6"
      />
    </div>
  );
}

function TextArea({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={`${className} flex flex-col gap-1 mt-4`}>
      <label className="text-xs text-secondary">{label}</label>
      <textarea
        placeholder={placeholder}
        className="bg-gray-400/20 min-h-[200px] text-primary placeholder:text-primary/50 focus:border focus:border-gray/20 focus:outline-none rounded-md p-5 px-6"
      />
    </div>
  );
}
