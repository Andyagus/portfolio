import { ReactNode } from "react";
import Title3 from "./projectComponents/Title3.tsx";
import ProjectList from "./projectComponents/ProjectList.tsx";
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
      {data.textBlocks["text1"]}
      {data.videos["researchVideo"]}
      {data.textBlocks["text2"]}
      {<Title3 title={"Project Ideation"} borderTop={true} />}
      {data.images["ARPavilionImage"]}
      <ProjectParagraphText
        text={
          "In designing the user experience for the ocV!BE project, our team worked together to envision a pavilion facing the site of the future development. This pavilion was to feature a central table, equipped with HoloLens headsets and iPad Pros, presenting a highly detailed, scaled model of the development. Users wearing the HoloLens would see this model come to life, offering a dynamic and interactive visualization of the future space, illustrated nicely in Pavel’s renderings. <br /> <br />I focused on leveraging Microsoft's technology, including Azure for remote rendering of 3D models with low latency and Azure Spatial Anchors for precise location tracking, alongside Microsoft’s Mixed Reality Toolkit (MRTK) to enable real-time, multi-user collaboration and enrich interaction design.  This comprehensive setup facilitated intuitive controls like buttons, sliders, and tooltips, allowing users, whether in the same space or remotely, to share a unified experience, guided through the development with synchronized views. <br /> <br /> We also aimed to offer a unique interaction with the model by allowing users to 'throw' it, at which point it would transform into a full-scale representation. This full-scale model would then appear in the exact location where the development is planned, providing a glimpse into the future of the space and blending digital projections with the real-world environment seamlessly."
        }
      />
      {/* {data.textBlocks["text3"]}
      <br />
      {data.textBlocks["text4"]}
      <br />
      {data.textBlocks["text5"]}
      {data.images["LifeSizedModelImage"]}
      {data.textBlocks["text6"]}
      {data.videos["cityScopeVideo"]}
      {data.textBlocks["text7"]} */}
      <br />
      {data.textBlocks["text8"]}
      {<Title3 title={"Crafting the User Experience"} borderTop={true} />}
      {data.images["ResearchMoodboard"]}
      {/* {data.textBlocks["text9"]} */}
      <br />
      {data.textBlocks["text10"]}

      <ProjectList
        listItem1={data.listItemBlocks[1]}
        listItem2="A Comparative Analysis of 3D User Interaction: How to Move Virtual Objects in Mixed Reality, offered unique insight into the applicability of nature hand gestures in Augmented Reality.  The study’s analysis of hand interaction techniques, influenced our project, most notably the grab gesture, to make it feel like a natural user experience. 
        "
        listItem3="Mixed Reality Presentation on STEM Engagement and Comprehension emphasized the importance of both 3d Interactions with static 2D text for enhancing learning experiences.  This research gave us a better understanding on how we could best present the informational aspects of the project for engagement and understanding 
        "
      />
      <br />
      {<Title3 title="Wireframes" />}
      {data.images["InitialWireframeSketches"]}

      {data.textBlocks["text11"]}
      <br />
      {data.textBlocks["text12"]}

      <ProjectList
        listItem1="Welcoming and Onboarding: This initial phase introduced users to the experience, setting the stage for engagement."
        listItem2="Initialization Experience: We designed this to help users orient themselves within the space, utilizing spatial anchors for accurate tracking. For situations where physical presence in the space was not possible, we developed a fallback to a virtual tabletop, allowing users to interact with and explore the 3D model."
        listItem3="Tabletop Experience: This aspect was multifaceted:
        
        A) We incorporated a raycast line to indicate where users and guides were looking or pointing, enhancing the interactive guide experience.
        B) A UI panel was added to the front of the table, offering controls for users to trigger various events within the environment or digital twin, such as displaying foot traffic or weather data, and a slider to transition the scene from day to night. We aimed to explore various data types to enhance user interaction through diverse buttons and controls.
        C) Additionally, we designed a handle mechanism allowing users to 'grab' the model, enabling them to 'throw' it into a real-life scale. This transition saw the UI controls move from the table to the wall, further immersing the user in the experience. 
        "
      />

      {data.images["SecondIterationWireframes"]}
      {data.textBlocks["text13"]}

      <ProjectList
        listItem1="Focused Content: We narrowed our emphasis to specific properties instead of general digital twin data, making the information more targeted and useful for users.        "
        listItem2="Building Selection Improvements: Users can now select buildings using buttons or by pointing, improving ease of use and interaction flexibility.        "
        listItem3="Building Highlighting: When a building is selected, it's highlighted with an animation, and a detailed information panel appears behind the table, designed for clear readability.        "
        listItem4="Enhanced Multi-User Features: We simplified adding users to sessions and visually represented their presence, reinforcing the collaborative aspect of the experience."
      />

      {/* thought  of putting this here so dont need team light explroe……… */}
      {/* {data.videos["SliderToFullScale"]} */}

      {/* {data.images["TeamLightExplore"]} */}

      {data.textBlocks["text14"]}

      {<Title3 title={"Design Evolution Insights"} borderTop={true} />}

      {data.textBlocks["text15"]}
      <br />
      {data.textBlocks["text16"]}

      <br />

      {<Title3 title={"Conclusion"} borderTop={true} />}

      {data.textBlocks["text17"]}
      <br />

      {/* {data.videos["SliderToFullScale"]} */}
      {data.textBlocks["text18"]}
    </>
  );
}
