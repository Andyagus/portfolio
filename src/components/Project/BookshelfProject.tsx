import { ReactNode } from "react";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText";

import bookshelfImage from "../../assets/images/project/bookshelf/preview/projectPreview-3.png";

import Title3 from "./projectComponents/Title3";
import ProjectImage from "./projectComponents/ProjectImage";

interface BookshelfProps {
  data: {
    headerText: ReactNode;
    subcaptionText: ReactNode;
    icons: ReactNode;
    images: { [key: number]: ReactNode };
    videos: { [key: number]: ReactNode };
  };
}

export default function BookshelfProject(props: BookshelfProps) {
  return (
    <>
      {props.data.headerText}
      {props.data.subcaptionText}
      {props.data.icons}
      <ProjectImage image={bookshelfImage} caption="BookShelf designs" />
      <ProjectParagraphText
        text={
          "At about the time I was finishing up my ChordSet project - I felt confident enough with my Unity skills to dive into working with a Quest headset, Quest Pro at the time, and I wasn’t sure what I was getting myself into.  <br /> <br /> I went to Best Buy and purchased the headset. Prior to this I only spent significant time in the Microsoft HoloLens. After unboxing, which was surprisingly nice, I put on the headset, I was in awe of the passthrough, I couldn’t believe the lack of limitations in FOV and clarity.  Out of excitement I showed it to other.  After playing around with some incredible apps such as Cubism, I knew I had to start building for it"
        }
      />
      {props.data.videos[1]}
      <Title3 title={"The Idea"} borderTop={true} />
      {props.data.images[1]}
      <ProjectParagraphText
        text={
          "I have a makeshift bookshelf in my office, that is very flimsy and if I take a book out from it the entire thing falls.  After looking at it day to day I naturally thought it would be a good idea to be able to browse the bookshelf in AR.  And get the opportunity to even learn more information about a book, description and book progress. <br /> <br /> In addition I was also fascinated by the Judd Bookshelf website, which is a comprehensive and well organized website of Donald Judd’s bookshelf, I enjoyed the browsing experience immensely. <br /> <br />  With that in mind I started sketching rough wireframes of the experience, that I had in mind.  A lot of it was already reformulated in my head. But I used a simple paper prototype, like holding a piece of paper of the bookshelf, to help visualize the graphics in space and keep my thoughts moving. I referenced a prototype from Adam Vargas food selection project, which gave me the general slider interface that I wanted to implement.  In addition, I also referenced iBooks, to think about what features could be applied from the 2D environment, to a book in real space. For example, I like how only the cover was displayed on the selection screen, and also the vast amount of detail you could see about a book when selecting it.  <br /> <br />  Some features I appreciated but didn’t get the opportunity to implement was searching/filtering a bookshelf (highlight the results), and taking the book out.  I was interested in the possibilities of highlighting a books page and actually keeping track of bookmarks for a comprehensive experience. "
        }
      />
      <Title3 title={"Learning the Meta SDK"} borderTop={true} />
      <ProjectParagraphText text="Once I had the wireframes in mind, I took a dive into Meta’s Unity SDK.  This took a couple of weeks, where I read and worked through most of the documentation.  The part that I found most interesting, were the variety of hand gestures, and samples scene built around it.   I also learned about Spatial Anchor, and knew that was going to be the foundation for my app. I created a bunch of sample projects to test out all of the features of the SDK." />
      <Title3 title={"Implementing the Project"} borderTop={true} />
      {props.data.images[4]}
      <ProjectParagraphText text="I started out by taking a 3D scan of my bookshelf, and tested out a few different implementations, from using simple LiDAR scans to NERF’s.  In the end since the book scan needed a high level of detail and accuracy, I used the gaussian splatting technique offered in Polycam to capture the model.  I then took the model and placed into Blender to clean it up, center pivot point, etcetera.  <br /> <br /> I brought the scan into Unity, and I referenced the “Use Spatial Anchors” documentation to create my own implementation for my project.  Through this script I was able to place the Main Bookshelf Anchor prefab, which held all of the interactions ( which I will be discussing today ) in the scene, on top of the physical bookshelf.  <br /> <br /> I also used the 3D scan when working with the Main Bookshelf Anchor prefab to accurately position content in relation to the books, and in AR I removed the mesh so only the interactions were present." />
      <Title3 title={"Designing the UI"} borderTop={true} />
      {props.data.images[2]}
      <ProjectParagraphText text="I then went into Sketch and started laying out some of the main concepts of the app. This was a continuous process back and fourth between Unity and Sketch throughout depending on the features working on.  Starting with the Book cover, I referenced iBooks, and also utilized Apple’s Design Resources to help with the layout.  Aside from giving layout information the Design Resources, help me concept new functionality and ideas.  I really liked the glass panel that Apple design and did my best to implement it with my constrains on the Quest headset  Depending on the purpose of the UI and the specific animations that I was going to complete with it, I either exporting layers as a single images, or split up into multiple files.  I used SFUI, and imported the fonts into Unity so I could work with type directly on the platform for clear text.   I used DoTween for the animations throughout the project, which provided an easy/awesome way to make transitions for text and UI." />
      <Title3 title={"In Unity"} borderTop={true} />
      {props.data.videos[2]}
      <ProjectParagraphText text="I started out by overlaying the Bookshelf mesh by placing a quad on top of each book.  I applied a material to each of the quads - and created a simple “SpecificBook” script that checks if the book is selected, set its material to the Active Material <br/> <br/> Then I created a slider to sift through the books, and to make the slider feel more connected to each book — I made it snap to a series of dots, each corresponding to a specific book in the collection, handled by the “BookManager”. <br/> <br/> On the GUI, I started by testing out a simple sprite that I exported from Sketch, and was so excited to see it on the headset, nice + clean." />
      <Title3 title={"Aligning Book Covers"} borderTop={false} />
      {props.data.videos[3]}
      <ProjectParagraphText text="Next, I designed the Book Card in Sketch, and exported it out in 2 layers, the background and image mask. With this I created a world space Canvas that I positioned in relation to the active book.   And serialized properties in the inspector, to be able to programmatically assign the book’s image.   Then, I uploaded the image of each book cover, and assigned the covers to each respective book.  I then subscripted to the onBookChangeEvent fired from a specific book, and the “Book Info” canvas, and when a new book was selected, I repositioned the canvas, and animated it in with its corresponding image." />
      <Title3 title={"Expanding the Panel"} borderTop={false} />
      {props.data.videos[4]}
      <ProjectParagraphText text="The title and description was also passed in from each SpecificBook to the Canvas.  I set up a DoTween timer that was triggered and paused based on the selection of the Handle through Unity Events. When the timer hit the expected duration, I expanded the background’s Size Delta - kept the book cover anchored to the left, and faded in the title and description of the book. <br /> <br /> At the same time as displaying more details on the book — I enabled a vertical slider, that matched the position of the current slider by keeping track of its position on book change.  And in order to seamlessly change slider direction, I moved the handle form Slider 1 and set it on the new slider.  Once I dragged the slider to a value above 0.8, a faded out slider 1, filled up the knob stroke, and faded in the large panel.  Setting up secondary slider was tricky, and still doesn’t work perfectly, since when the knob changes to the new slider, I need to select it again. I worked through a bunch of sandboxes (outside of the mixed reality environment) in order to set it up.) " />
      <Title3 title={"Wall Banner"} borderTop={false} />
      {props.data.images[3]}
      <ProjectParagraphText text="At this point I designed the Wall Banner in sketch, and after a couple of iterations, was particularly proud of the design, and the order of information displayed.  I animated in the banner and text relevant to the selected book (some of this graphic was pre-populated because of time restrictions) and enabled Ray Interactors in the scene so the user could interact with the canvas at a distance and learn more about the book." />
      <Title3 title={"Pulling Book from a shelf"} borderTop={false} />
      {props.data.videos[5]}
      <ProjectParagraphText text="I was very interested in exploring the interactive possibilities of pulling a book off the shelf, so I set up a separate sandbox - that used grab interactors to keep track of the physical book, by grabbing it in tandem with the digital.  Although it was an awesome approach, I couldn’t get the accuracy strong enough for nuanced interactions like highlighted a piece of text.  Instead, for the presentation, I used a Poke intractable to track when the book was selected and on release I displayed a checkmark.  Although this is not the ideal implementation, I wanted to use the interaction to allude to the possibilities of the future." />
      <Title3 title={"Conclusion"} borderTop={true} />
      {props.data.videos[6]}
      <ProjectParagraphText text="I am very proud of this project, and it was an amazing experience to get the chance to use my Unity skills to create an Augmented Reality project.  Looking back at it, something that could be improved here is using more prefabs, as each book wasn’t its own variation of a prefab, making it very hard for maintainability.  On the other hand, I really liked my approach of how I designed the project, and relied more on past experience, and personal intuition than getting caught up in research to solve all of the designs.  <br/> <br/>  I’ve also had people ask me how it picks up the book information.  Currently, it’s all hard coded as discussed, but I’d be interested to use Image Recognition to pull the books title, and description, to scale it up to any bookshelf, in the world.  <br/> <br/>  The project was an awesome experience and I am excited to share it with you!" />
    </>
  );
}
