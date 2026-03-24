import { ColoredBlock, ImageBlock, InfoBlock } from "../components/Block";
import { Highlight } from "../components/Highlight";
import { ImageMenu } from "../components/ImageMenu";
import ScrollSliderSection from "../components/ScrollSliderSection";
import { SiteHeader } from "../components/SiteHeader";
import { HomeProjects } from "../data/Projects";

export function Home() {
  return (
    <div className="flex flex-col gap-1">
      <SiteHeader
        pingTitle="BUILDING YOUR DREAMS"
        titleMaxWidth="20ch"
        title="Redefining Spaces, Shaping Bold Futures"
        description="We create visionary spaces that inspire, combining innovative design with lasting functionality to bring your ideas to life."
        buttonText="ABOUT US"
        buttonLink="/about"
      >
        <ColoredBlock
          initial={{ opacity: 0, height: "0%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="col-span-12 md:col-span-6 lg:col-span-3 text-text-primary bg-secondary hover:bg-secondary/95"
          title="OUR PROJECTS"
          to="/projects"
          description="Explore our portfolio to see concepts come to life."
        />
        <ColoredBlock
          initial={{ opacity: 0, height: "0%" }}
          whileInView={{ opacity: 1, y: 0, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="col-span-12 md:col-span-6 lg:col-span-3 text-text-primary bg-primary hover:bg-primary/90"
          title="OUR SERVICES"
          to="/services"
          description="Explore our services and elevate your project with us."
        />
        <ColoredBlock
          initial={{ opacity: 0, height: "-0%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="col-span-12 lg:col-span-6 text-text-primary bg-accent hover:bg-accent/95"
          title="GET IN TOUCH"
          to="/contact"
          description="Contact us to discuss your vision and bring it to life."
        />
      </SiteHeader>
      <BentoGrid />
      <ScrollSliderSection
        pingTitle="OUR PROJECTS"
        title="See Our Newest Projects in Action"
        titleMaxWidth="15ch"
        buttonText="VIEW ALL"
        buttonLink="/projects"
        projects={HomeProjects}
      />
      <Highlight />
      <ImageMenu
        menu={[
          {
            title: "Your Vision, Our Expertise",
            ping: "OUR SERVICES",
            buttonText: "DISCOVER SERVICES",
            url: "/services",
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

function BentoGrid() {
  return (
    <div className="grid grid-cols-12 grid-rows-[2fr_auto] lg:h-screen gap-1">
      <ImageBlock
        className="col-span-12 sm:col-span-6 row-span-2"
        src="BentoPreview2.jpg"
      />
      <ImageBlock
        className="col-span-12 sm:col-span-6 row-span-1"
        src="BentoPreview.avif"
      />
      <InfoBlock
        title="ABOUT US"
        withButton={true}
        buttonLink="/about"
        buttonText="LEARN MORE"
        description="At Modus, we transform bold ideas into spaces. Our team blends
          creativity with expertise to design structures that inspire and stand
          the test of time."
      />
    </div>
  );
}
