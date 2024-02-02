import { ReactNode } from "react";
import Title3 from "./projectComponents/Title3.tsx";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText.tsx";

interface ProjectProps {
  data: {
    headerText: ReactNode;
    subcaptionText: ReactNode;
    icons: ReactNode;
    images: { [key: string]: ReactNode };
    videos: { [key: string]: ReactNode };
    textBlocks: { [key: string]: ReactNode };
    listItemBlocks: { [key: number]: string };
  };
}
export default function OcVibeProject({ data }: ProjectProps) {
  return (
    <>
      {data.headerText}
      {data.subcaptionText}
      {data.icons}
      {data.videos["headerVideo"]}
      <ProjectParagraphText text="Our team at Bully focused on a new project for OCVibe an upcoming large Real-Estate Development Project, aimed at being Anaheims premier mixed-use community and live entertainment district.  The goal of the project was to leverage Microsoft’s technology, primarily the HoloLens 2 Headset - and other software, in order to position OCVibe at the forefront of technology and as a tool to showcase the upcoming development to potential tenants and investors." />
      <Title3 title={"Content Hidden"} borderTop={true} />
    </>
  );
}
