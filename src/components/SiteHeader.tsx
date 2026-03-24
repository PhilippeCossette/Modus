import { Hero } from "./Hero";

interface SiteHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  pingTitle: string;
  titleMaxWidth: string;
  children?: React.ReactNode;
}

export function SiteHeader({
  title,
  description,
  buttonText,
  buttonLink,
  pingTitle,
  titleMaxWidth,
  children,
}: SiteHeaderProps) {
  return (
    <header className="min-h-dvh grid grid-cols-12 gap-1 grid-rows-[minmax(0,1fr)_auto]">
      <Hero
        className="col-span-12 min-h-0"
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        pingTitle={pingTitle}
        titleMaxWidth={titleMaxWidth}
      />

      {children}
    </header>
  );
}
