import { ColoredBlock, ImageBlock, InfoBlock } from "../components/Block";
import { SiteHeader } from "../components/SiteHeader";
import { IoCubeOutline } from "react-icons/io5";
import { RiHome9Line } from "react-icons/ri";
import { LuLeaf } from "react-icons/lu";
import { TbBriefcase2 } from "react-icons/tb";
import { RiProgress5Line } from "react-icons/ri";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { ImageMenu } from "../components/ImageMenu";
import { motion } from "framer-motion";

export function Services() {
  return (
    <div className="flex flex-col gap-1">
      <SiteHeader
        pingTitle="OUR SERVICES"
        titleMaxWidth="20ch"
        title="Turning Ideas into Timeless Creations"
        description="We provide personalized services that integrate our expertise with innovative solutions to deliver remarkable results."
        buttonText="ABOUT US"
        buttonLink="/about"
      >
        <ColoredBlock
          initial={{ opacity: 0, height: "0%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="col-span-12 md:col-span-6 text-text-primary bg-secondary hover:bg-secondary/95"
          title="OUR PROJECTS"
          to="/projects"
          description="Explore our portfolio to see concepts come to life."
        />
        <ColoredBlock
          initial={{ opacity: 0, height: "-0%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="col-span-12 md:col-span-6 text-text-primary bg-accent hover:bg-accent/95"
          title="GET IN TOUCH"
          to="/contact"
          description="Contact us to discuss your vision and bring it to life."
        />
      </SiteHeader>
      <div className="grid grid-cols-12 gap-1">
        {/* TOP LEFT */}
        <ImageBlock
          className="col-span-12 md:col-span-6"
          src="ServiceImage1.avif"
        />

        {/* BOTTOM LEFT */}
        <ImageBlock
          className="col-span-12 md:col-span-6"
          src="ServiceImage2.avif"
        />

        {/* RIGHT FULL HEIGHT */}
        <ImageBlock
          className="max-h-[600px] md:max-h-full col-span-12 md:col-span-6 md:col-start-7 md:row-start-1 md:row-span-2"
          src="ServiceImage3.avif"
        />
      </div>
      <InfoBlock
        title="EXPPERT SOLUTIONS"
        divClassName="items-center py-12 gap-4"
        textClassName="text-[40px] max-w-[18ch] text-center leading-none"
        description="Modus delivers tailored architectural solutions that bring your vision to life."
      />
      <div className="grid grid-cols-12 gap-1">
        <ServiceCard
          title="Concept Design"
          description="Creating innovative and functional design concepts that align with your vision."
          imageSrc="ConceptDesign.avif"
          icon={<IoCubeOutline />}
        />
        <ServiceCard
          title="Interior Design"
          description="Creating functional interior designs that elevate your space's overall experience."
          imageSrc="InteriorDesign.avif"
          icon={<RiHome9Line />}
        />
        <ServiceCard
          title="Sustainable Design"
          description="Using eco-friendly and energy-efficient solutions to boost project suustainability."
          imageSrc="SubstainableDesign.avif"
          icon={<LuLeaf />}
        />
        <ServiceCard
          title="Space Renovation"
          description="Enhancing existing spaces with modern updates to better align with your needs."
          imageSrc="SpaceRenovation.avif"
          icon={<TbBriefcase2 />}
        />
        <ServiceCard
          title="Urban Planning"
          description="Developing detailed plans and blueprints to guide the construction process."
          imageSrc="UrbanPlanning.avif"
          icon={<RiProgress5Line />}
        />
        <ServiceCard
          title="Project Management"
          description="Revamping existing spaces with modern updates to suit your needs."
          imageSrc="PlanManagement.avif"
          icon={<LiaProjectDiagramSolid />}
        />
      </div>
      <ImageMenu
        menu={[
          {
            title: "Our Signature Creations",
            ping: "OUR PROJECTS",
            buttonText: "EXPLORE PORTFOLIO",
            url: "/projects",
            src: "ServiceBackground.avif",
          },
          {
            title: "Let's Start the Conversation",
            ping: "CONTACT US",
            buttonText: "GET IN TOUCH",
            url: "/contact",
            src: "ContactBackground.avif",
          },
        ]}
      />
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon?: React.ReactNode;
  className?: string;
}

function ServiceCard({
  title,
  description,
  imageSrc,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={`col-span-12 md:col-span-6 lg:col-span-4 relative rounded-md min-h-[500px] overflow-hidden ${className}`}
    >
      <motion.img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent"></div>
      <div className="items-center justify-between relative z-10 flex flex-col gap-5 text-white py-12 p-6 h-full">
        {icon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl mb-4"
          >
            {icon}
          </motion.div>
        )}

        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
