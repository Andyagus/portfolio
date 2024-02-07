import { ReactNode } from "react";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText";
import Title3 from "./projectComponents/Title3";

interface ProjectData {
  data: {
    headerText: ReactNode;
    subcaptionText: ReactNode;
    images: { [key: number]: ReactNode };
    videos: { [key: number]: ReactNode };
    icons: { [key: string]: ReactNode };
    textBlocks: { [key: string]: ReactNode };
  };
}

export default function FirstWomanProjectHidden({ data }: ProjectData) {
  return (
    <>
      {data.headerText}
      {data.subcaptionText}
      {data.icons["mainIconSet"]}
      {data.videos[1]}
      <ProjectParagraphText text="Working as a UX designer on 'NASA: First Woman'—my second project at Bully! Entertainment—was an enriching experience. In partnership with NASA, our goal was to create an engaging app that introduces the next generation to space exploration, without overwhelming or under-stimulating the user.<br /><br />The experience's was successful, attracting over 467 million interactions  worldwide. It's been rewarding to see our work recognized with the Webby and People's Choice Awards for Best Integrated Mobile Experience in 2022, and being featured in Apple's App Store for Women's History Month was an unexpected honor. These achievements reflect the hard work of our entire team and the thoughtful design choices we made along the way.<br /><br />The narrative of Callie Rodriguez, the first woman and person of color on the moon, served as the backdrop for our project. While the story was illustrated through a graphic novel, my focus as a UX designer was on the app's user experience—ensuring that users could navigate through the content effortlessly and find information relevant to them without confusion. The app was designed to be intuitive, facilitating a direct and engaging interaction with the story and the information about NASA's technology.<br /><br />My role involved streamlining the user journey within the app, focusing on usability and accessibility. This meant prioritizing clear navigation, readable content, and interactive elements that supported the narrative without introducing unnecessary complexity. The challenge was to balance the rich story with a clean, user-friendly interface that would appeal to users of various ages and backgrounds." />
      {<Title3 title="Native App" borderTop={true} />}
      {data.images[2]}
      <ProjectParagraphText text="As a UX designer, my primary focus was on enhancing the user interface to complement and highlight the graphic novel at the heart of our app. Recognizing the novel's central role, I structured the app's content hierarchically, ensuring that the novel was easily accessible and prominently featured, guiding users naturally to the additional experiences offered. <br/> <br/> In alignment with NASA's style guidelines, our UI team chose a clean, modern aesthetic, utilizing Helvetica for readability and bold colors for engagement. This collaborative decision aimed to make the app an immersive extension of the graphic novel, balancing functionality with visual appeal. <br/> <br/> In designing the app’s layout, I prioritized a modular approach for the homepage. This strategy was aimed at simplifying navigation through the app’s extensive content, allowing users to effortlessly explore each section of the graphic novel. By organizing the content modularly, we facilitated a user experience that was intuitive, enabling quick access and discovery within the app.<br/> <br/> The combination of thoughtful design aesthetics and a user-centric layout was instrumental in delivering a streamlined and straightforward app experience. My role was to ensure that the app’s design enhanced the storytelling of the graphic novel, making it the focal point for users, while also providing an accessible and engaging digital platform that aligns with NASA's vision and style." />
      <Title3 title="Content Hidden" borderTop={true} />
    </>
  );
}

{
  /* <ProjectParagraphText text="" />
      <ProjectParagraphText text="" /> */
}
