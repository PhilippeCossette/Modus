import { ImageBlock } from "../components/Block";
import { ShowcaseSection, type Card } from "../components/ShowcaseSection";
import { SiteHeader } from "../components/SiteHeader";
import { GoLightBulb } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { BiLeaf } from "react-icons/bi";
import { Highlight } from "../components/Highlight";
import { ImageMenu } from "../components/ImageMenu";
import Section from "../components/Section";
import { PingHeader } from "../components/PingHeader";
import { Accordion } from "../components/Accordion";
const FAQData = [
  {
    id: 1,
    question: "What services does Modus offer?",
    answer:
      "We offer a wide range of architectural services, including conceptual design, project management, and sustainable solutions.",
  },
  {
    id: 2,
    question: "How can I get in touch with Modus?",
    answer:
      "You can contact us through our website's contact form, email us at info@modus.com, or call us at (123) 456-7890.",
  },
  {
    id: 3,
    question: "What types of projects do you specialize in?",
    answer:
      "We work on residential, commercial, and mixed-use developments, tailoring each project to the client’s vision and needs.",
  },
  {
    id: 4,
    question: "Do you offer sustainable or eco-friendly design solutions?",
    answer:
      "Yes, we prioritize sustainable materials, energy-efficient systems, and environmentally responsible design strategies.",
  },
  {
    id: 5,
    question: "Can Modus help with permits and regulations?",
    answer:
      "Our team assists clients throughout the approval process, including zoning analysis, permit applications, and compliance reviews.",
  },
  {
    id: 6,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on size and complexity, but we provide a clear schedule and milestones at the start.",
  },
  {
    id: 7,
    question: "Do you provide interior design services?",
    answer:
      "Yes, we offer interior design solutions that complement the architectural concept and enhance functionality and aesthetics.",
  },
  {
    id: 8,
    question: "Can you work with an existing building or renovation project?",
    answer:
      "Absolutely. We have extensive experience in renovations, adaptive reuse, and modernizing existing structures.",
  },
  {
    id: 9,
    question: "How involved will I be during the design process?",
    answer:
      "We collaborate closely with clients through workshops, presentations, and feedback sessions to ensure alignment at every stage.",
  },
  {
    id: 10,
    question: "Do you handle construction supervision?",
    answer:
      "Yes, we can oversee construction phases to ensure the design intent is respected and quality standards are maintained.",
  },
];

const AboutCardsData: Card[] = [
  {
    icon: <GoLightBulb />,
    title: "CREATIVE VISION",
    description:
      "Bringing innovative and imaginative designs to life with unique flair.",
  },
  {
    icon: <PiSuitcaseSimple />,
    title: "TAILORED SOLUTIONS",
    description:
      "Customizing designs to perfectly align with client need and goals.",
  },
  {
    icon: <BiLeaf />,
    title: "ECO PRACTICES",
    description:
      "Implementing energy-efficient and eco-friendly solutions in each project.",
  },
];

function About() {
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
        src="AboutImage.jpg"
      />
      <ShowcaseSection
        cards={AboutCardsData}
        titleMaxWidth="25ch"
        backgroundImage="CornerBuilding.avif"
        pingTitle="OUR PURPOSE"
        title="With a focus on creativity and precision, we transform visions into enduring designs."
      />
      <Highlight />
      <Section>
        <PingHeader title="FAQ" color="secondary" />
        <h2 className="text-white text-center mt-3 text-4xl max-w-[15ch]">
          Quick Answers to Common Questions
        </h2>
        <Accordion items={FAQData} />
      </Section>
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

export default About;
