import { ImageBlock } from "../components/Block";
import { ImageMenu } from "../components/ImageMenu";
import ScrollSliderSection from "../components/ScrollSliderSection";
import { SiteHeader } from "../components/SiteHeader";
import { AllProjects } from "../data/Projects";

function Projects() {
  return (
    <div className="flex flex-col gap-1">
      <SiteHeader
        pingTitle="ABOUT MODUS"
        titleMaxWidth="20ch"
        title="Crafting Spaces, Shaping Visions"
        description="Our passion lies in crafting spaces that not only inspire and captivate, but also stand the test of time and innovation."
        buttonText="OUR SERVICES"
        buttonLink="/services"
      />
      <ImageBlock
        className="h-[500px] md:h-auto max-h-[700px]"
        src="ProjectsImage.avif"
      />
      <ScrollSliderSection
        pingTitle="OUR PROJECTS"
        title="Showcase of Our Design Excellence"
        titleMaxWidth="15ch"
        projects={AllProjects}
      />
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

export default Projects;
