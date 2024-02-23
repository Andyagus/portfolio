import { ReactNode } from "react";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText";
import Title3 from "./projectComponents/Title3";

import museumPreviewImage from "../../assets/images/project/museum/preview/museumPreviewImage2.png";
import ProjectImage from "./projectComponents/ProjectImage";

interface MuseumProps {
  data: {
    headerText: ReactNode;
    subcaptionText: ReactNode;
    icons: ReactNode;
    media: { [key: number]: ReactNode };
  };
}

export const MuseumProject = (props: MuseumProps) => {
  return (
    <>
      {props.data.headerText}
      {props.data.subcaptionText}
      {props.data.icons}

      <ProjectImage image={museumPreviewImage} caption="Museum designs" />

      <ProjectParagraphText
        text={
          "After completing Bookshelf, I felt confident enough to start bringing my designs into the real world.  I am interested in ways that AR could enhance our world, and I knew that the opportunities were far greater than my office.  Luckily, NYC streets were right downstairs.  I knew I wanted to create a project in the real-world, but I wasn’t sure where/or what.  I spent the day searching for ideas.  I was roughing out different ideas, then I went to The Metropolitan Museum of Art.  And the scope was endless."
        }
      />
      {props.data.media[1]}
      <Title3 title="The Metropolitan Museum of Art" borderTop={true} />
      {props.data.media[2]}
      <ProjectParagraphText text="There was so much opportunity, from snapping elements to a Japanese fountain, to introducing ways to streamline the inventory experience, I walked around the entire museum in awe of the vast amount of ways Augmented Reality could improve the museum.  In the end, I was exploring a gallery and realized that the artwork info card is so limiting, and its very difficult to learn more about a specific item… I knew this was the direction I wanted to go in." />
      {props.data.media[3]}
      <ProjectParagraphText text="I sat down in the room and quickly designed concepts for the project on Sketch.  Afterwords, I browsed the museum for the best room to start up the project, but ended up settling on my initial room.  I started taking details scans of it so I could continue to work on the project in my office." />
      <Title3 title="Testing out interactions" borderTop={true} />
      {props.data.media[4]}
      <ProjectParagraphText text="Back in the office, I started testing out some of the Distance Ray Interactions that I had in mind.  In the above video you could see, hovering and selecting multiple objects at a distance.  The goal of this was to imitate the functionality of browsing and viewing multiple objects in the museum gallery. <br /> <br /> At about the same time, I set up a new spatial anchor script that was capable of placing multiple anchors.  I needed each object to have its own spatial anchor to make sure the interactions would be positioned with high accuracy." />
      {props.data.media[5]}
      <ProjectParagraphText text="Since I didn’t have access to the museum I used objects in my own environment, like a calculator or a plant, to simulate actual objects in the museum. <br /> <br /> I created an Interactable Item script that I placed on every item in the scene. The purpose of the Interactable Item was to manage state and interactions for the object in the users environment.   I had an interactable manager keep track over which Interactable Item was currently being selected.  When an item was selected I animated a glow over it, and instantiated an InfoCard. <br /> <br /> The info card was designed in sketch and brought in via multiple layers.  When the card was selected from a Distance Hand Grab Interactor,  I animated the card in and out with DoTween, and updated its information to match the currently selected item.   I also added a billboard effect so the card would face the user no matter the objects orientation." />
      <Title3 title="Walk Up Closer Banner" />
      {props.data.media[6]}
      <ProjectParagraphText text="To help guide the user to get closer to the object that they were interested in I initiated a prefab in front of the user after an object was selected for a few seconds.  The prefab starts as a walking man icon and then smoothly expands out to display the text ' walk closer '. I thought this was a nice and nonintrusive way to guide the user through the environment." />
      {props.data.media[7]}
      <ProjectParagraphText text="It was time to get really close to the object, to learn more more about the object and its specific details.  I designed a simple UI in sketch to handle the information, and kept going back and improving it.   <br /> <br /> In order to make the up close animations precise, I gave each element it’s own spatial anchor (as discussed) and also used the gaussian splatting technique from PolyCam to accurately align the content. <br /> <br /> I took the elements and exported them as a single layer, static layers, and positioned them over the object for testing.  I then checked if the distance between the camera and the object was above a certain threshold, and if it was, faded all of the up-close elements in, and it looked great! <br /> <br /> The up close interactions centered around a selector - the selector controls, the child elements of the Interactable Item and it works by keeping track of the currently selected index, which is changed based on Arrow Press (poke interactable).  When an arrow is pressed the Pagination Dots shift and so does the current index (int field) and an OnSelectorChanged event is called which passes the index to a variety of items." />
      <Title3 title="Material Selection" />
      {props.data.media[8]}
      <ProjectParagraphText text="I wanted the app to highlight different parts of the object in order to showcase  showcase the part of the object that was in focus, since objects could be complex and have many focal points highlighting a specific area could help focus what specific part of the object the user is learning about.  In order to set this up I worked in Blender to separate materials on the object and when a new index was passed I set the corresponding ‘material slot’ to active.  This initiated a white glow material over the specific area I wanted to outline." />
      <Title3 title="Specific Element Banners" />
      {props.data.media[9]}
      <ProjectParagraphText text="Next, I designed these cool banners called specific elements, they consisted of a dot, and a header banner.  They shared more information on the specific element that you were focused in.  When the selected index changed - I animated in the banner by filling the stroke of the dot sprite. And smoothy faded in the line and banner details.  Through the inspector I was able to input what specific information I wanted to instantiate on the banner, and this also translated later to pass information to the sub panels." />
      <Title3 title="Large Info Panels" />
      {props.data.media[10]}
      <ProjectParagraphText text="In addition, I designed a large canvas to display the main information about an item, and when the user would move onto a specific component, I would activate the sub page, which displayed the currently selected elements details.  When the slider went back to the first pagination dot, I deactivated all elements and went back to the main panel." />
      <Title3 title="Gamification" borderTop={true} />
      {props.data.media[11]}
      <ProjectParagraphText text="As a way to conclude the project demonstration, and allude to further exploration, I was interested in adding an element of gamification to the project in order to excite the user to find more items/get points browsing the museum, and also give them the chance to view the 3D models back in their own space.  <br /> <br /> For demonstration purposes, I set this up so that when the selected index was greater than a certain amount I converted the selector into a button, and when the button was on press I animated the 3D model to fly out of its position and into a 3D model of a box, which animated closed with particle effects and flew away." />
      <Title3 title="Setting Up" borderTop={true} />
      {props.data.media[12]}
      <ProjectParagraphText text="I went to the met on a Friday afternoon to set up the interactions and to work with a specific object in the museum, all was good.  Here I also added an entry panel for a smooth entry into the room.   Sunday I came back to finalize the experience and film, to my dismay the guards told me that I was not allowed to use the headset in the museum.  But I was pleased to know that I was the “First ever to wear a mixed-reality headset in the museum.” Luckily the guards gave me 10 minutes and I was able to get a rough recording of the experience.  " />
      <br />
      <ProjectParagraphText text="Overall, I really enjoyed creating the project and the reception was positive.  Looking back at it some of the things thatI could improve here, including knowing when to stop spending time on certain elements, for example I spent almost a week perfecting the info card, it didn’t even make it on the final video.  On the other hand, it was an amazing opportunity getting the chance to create the AR project in public, and I was excited to see how well the planning went, creating interactions outside of the museum.  In the future I would be interested in adding more museum elements, and even applying the designs to a real museum collection." />
    </>
  );
};
