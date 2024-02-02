import { ReactNode } from "react";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText";

interface SaladBarProps {
  data: {
    headerText: ReactNode;
    subcaptionText: ReactNode;
    icons: ReactNode;
    media: { [key: number]: ReactNode };
  };
}

export default function SaladBarProject({ data }: SaladBarProps) {
  return (
    <>
      {data.headerText}
      {data.subcaptionText}
      {data.icons}
      {data.media[1]}
      <ProjectParagraphText
        text="While working on the museum project, I had many different ideas, one of them was to solve the frustration I have while ordering food at a Salad Bar.  I always find it difficult to order a salad, especially when you have to point to an ingredient all the way towards the back. You need to point yell the item name a couple of times.   And finally, they picked the wrong thing.  There's also the language barrier, and the difficulty employee must have to keep track of the pricing. 
"
      />
      <ProjectParagraphText
        text="When I find these problems, I typically have a rough solution in my head, however, this time I didn't have a specific location where I was able to have it filmed. My goal was SweetGreen, and my back up was chopped and my back-up back-up (not a typo) was green café.  After my met experience - I was a bit traumatized to ask for permission beforehand, so I decided to work on the project first. <br /> <br /> I started by visiting a few salad bars to see the experiences. After eating a salad at Sweetgreen, I took a scan of the salad bar and took it to my office for for further inspection. Since I wasn't able to simulate a salad bar, I used a fully opaque mesh of the sweet green salad bar in order to simulate it in my office.
"
      />
      {data.media[2]}
      <ProjectParagraphText text="I started out by designing a variety of different concepts in Sketch.  This included the core interaction - such as selected an object and adding it to the menu.  Splitting up the ordering process between many different phases (like base, toppings, dressing, etc.) Sharing and viewing other peoples salad creations.  Filtering the salad ingredients through category and search.  Adding gamification to the users experience.  Briefly thinking about what the server’s perspective would be like, (that’s a project on its own). <br/> <br /> I decided to work on a full salad experience from choosing the base all the way to the dressing which, looking back at it was a mistake, as nobody who watched the video even realized what I was trying to do past the core interaction. " />
      {data.media[3]}
      <ProjectParagraphText
        text="Instead of selecting the element at a distance, by hand, I used the center I anchor to emulate I tracking and enable the card. When the user looked at an ingredient, I activated a card, which displayed it an image of the ingredient, it's name, calories and price. There was also an “Add to Salad” button, which instantiate the item on the menu. 
"
      />
      {data.media[4]}
      {data.media[5]}
      {data.media[6]}
      {data.media[7]}
      {data.media[8]}
      {data.media[9]}
    </>
  );
}
