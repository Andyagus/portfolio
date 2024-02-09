import { ReactNode } from "react";
import Title3 from "./projectComponents/Title3.tsx";
import ProjectList from "./projectComponents/ProjectList.tsx";

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
      {<Title3 title={"Brainstorming Concepts"} borderTop={true} />}
      {data.images["ARPavilionImage"]}
      {data.textBlocks["text3"]}
      <br />
      {data.textBlocks["text4"]}
      <br />
      {data.textBlocks["text5"]}
      {data.images["LifeSizedModelImage"]}
      {data.textBlocks["text6"]}
      {data.videos["cityScopeVideo"]}
      {data.textBlocks["text7"]}
      <br />
      {data.textBlocks["text8"]}
      {<Title3 title={"Designing a User Experience"} borderTop={true} />}
      {data.images["ResearchMoodboard"]}
      {data.textBlocks["text9"]}
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
        listItem1="Welcoming and onboarding which led the user into the experience."
        listItem2="The initialization experience, what the experience would be like to track the space, to load up a spatial anchor, and if someone wasn’t the space, fall back with a virtual tabletop , that the user could interact with to see the 3D object .        "
        listItem3="The tabletop experience.  Which included: <br /> 
        A) Raycast line to show where the user, and guide was looking, or point <br/>
        B) We added a UI panel too the front of the table where the user could control to prompt different events in the environment/digital twin, including showcasing foot traffic,  or weather data.  And a slider to change the scene from day to night.  
        At this point, we were still exploring what each datatype should be, but we like the idea of having a variety of buttons for the user to interact with. 
        <br/> C)We also designed a handle, which the user could use to grab the model, and throw it into real-life scale.  At this point, the UI Controls, would leave the table and appear on the wall. 
        "
      />

      {data.images["SecondIterationWireframes"]}
      {data.textBlocks["text13"]}

      <ProjectList
        listItem1="Switching the highlighted content away from the digital twin data sets, and instead focus on specific properties."
        listItem2="We enabled user to select a building both directly from the buttons and through a raycast click - while pointing at the building."
        listItem3="We also, similar to the research that I gathered, we enabled highlighting a building through an animation on selection, while at the same time having a panel appear in behind the table to give more information on the selected property.  We designed the panel, so that it was 6 feet behind the user, and the text was large enough to be clearly readable without straining ones eyes."
        listItem4="In addition, we focused more into the multi-user environment and how that would work. We set it up by making it easy to add others to the session, and visualize their presence through initials on their raycast line.  
        <br /> A) We also emphasized the importance of multi-user collaboration in an Augmented Reality environment, as opposed to individual app experiences. This approach was informed by the insights of Dr. Helen Papagiannis. She states, ‘For AR to truly exist as a mass communications medium, it needs to be multi-user and two-way. For the most part, AR has been a single user experience, and that’s beginning to shift in major ways.’This perspective guided our approach, underlining the importance of collaborative experiences in AR.
        "
      />

      {<Title3 title={"Crafting the interface"} borderTop={true} />}

      {/* thought  of putting this here so dont need team light explroe……… */}
      {data.videos["SliderToFullScale"]}

      {/* {data.images["TeamLightExplore"]} */}

      {data.textBlocks["text14"]}

      {<Title3 title={"Design Evolution"} borderTop={false} />}

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
