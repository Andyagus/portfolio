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
      <br />
      <ProjectParagraphText
        text="When I find these problems, I typically have a rough solution in my head, however, this time I didn't have a specific location where I was able to have it filmed. My goal was SweetGreen, and my back up was chopped and my back-up back-up (not a typo) was green café.  After my met experience - I was a bit traumatized to ask for permission beforehand, so I decided to work on the project first. <br /> <br /> I started by visiting a few salad bars to see the experiences. After eating a salad at Sweetgreen, I took a scan of the salad bar and took it to my office for for further inspection. Since I wasn't able to simulate a salad bar, I used a fully opaque mesh of the sweet green salad bar in order to simulate it in my office.
"
      />
      {data.media[2]}
      <ProjectParagraphText text="Next I designed a variety of different concepts in Sketch.  This included the core interaction - such as selected an object and adding it to the menu.  Splitting up the ordering process between many different phases (like base, toppings, dressing, etc.) Sharing and viewing other peoples salad creations.  Filtering the salad ingredients through category and search.  Adding gamification to the users experience.  Briefly thinking about what the server’s perspective would be like, (that’s a project on its own). <br/> <br /> I decided to work on a full salad experience from choosing the base all the way to the dressing which, looking back at it was a mistake, as nobody who watched the video even realized what I was trying to do past the core interaction. " />
      {data.media[3]}
      <ProjectParagraphText
        text="Instead of selecting the element at a distance, by hand, I used the center I anchor to emulate I tracking and enable the card. When the user looked at an ingredient, I activated a card, which displayed it an image of the ingredient, it's name, calories and price. There was also an “Add to Salad” button, which instantiate the item on the menu. 
"
      />
      {data.media[4]}
      <ProjectParagraphText text="I set up the ordering process so it would be conducted through phases or ingredients sets, (base, toppings, etc.) when the user was done adding elements to a phase, they could hit the next button on the menu where I also designed a sliding panel to showcase to the user what said they were currently on, this also set the ingredients of that phase to active.  Back in the Unity hierarchy I started organizing my ingredients so they would only be activated during their corresponding state." />

      {data.media[5]}
      <ProjectParagraphText text="Next, I created an intro card, which faded in when a new phase of ordering was active. For the toppings phase specifically I morphed the intro card into a category panel by expanding in the size, delta, and fading in the info card categories, which functioned as Raycast buttons.  When a new category became active I invoked an event to make the corresponding ingredients in the scene available for selection." />
      {data.media[6]}
      <ProjectParagraphText text="Next, when the add to salad button was pressed on an ingredient I wanted to turn the salad panel into a checkmark above the item so that a user can keep track of what was currently in their salad. I tried a few different implementations of getting this to work, and in the end, the pixel percent multiplier with DoTween, a bit unconventional, and not a perfect circle, but it worked." />

      {data.media[7]}
      <ProjectParagraphText text="To make the experience of ordering a salad more fun and unexpected I instantiated coin particles, which added up to their reward points when the user hovers over miso salmon. I thought this was helpful to allude to future gamification possibilities. And also reward points could be an interesting way to tie in different experiences from the orders." />
      {data.media[8]}
      <ProjectParagraphText text="On the checkout screen, I reinstated all list items from their corresponding dictionary, so that the user could review their order and check out. When completing check out, I faded out the panel and the order was complete." />
      {data.media[9]}
      <ProjectParagraphText text="I then went to SweetGreen to fill the experience, but they need to ask corporate for permission, so I went to chopped, same thing. So I went to my local deli and the manager let me conduct the project there. <br/> <br/> I was there all day working on setting it up and it was pretty nerve-racking editing the project on the spot in such a busy environment. In the end unfortunately the design and its entirety did not work well. The main issue was the cards ended up being way too small to see clearly, and the emulated eye tracking was very difficult to make accurate in the busy environment. <br/> <br/> Also, I realized that viewers did not pay attention too much more than the core interaction so things like categories for toppings, and gamification, which took time to set up, could have been left out, and I could've shared the experience much sooner. <br/> <br/> Also, I should've had a specific location in mind. It would be helpful next time to work within the salad bar however, not knowing the owner makes it kind of difficult to use their space without sufficient bribery. <br/> <br/> Nevertheless, I was very happy with the variety of features, and the ability to turn the ideas in my head into a functioning prototype. Also, I was surprised again to see how well my planning in the office worked in the real environment. <br/> <br/> Overall working on this project was a challenging, but rewarding experience with many unknowns that I was able to work past." />
    </>
  );
}
