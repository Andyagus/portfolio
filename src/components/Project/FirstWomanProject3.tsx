import { ReactNode } from "react";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText";
import Title3 from "./projectComponents/Title3";
import interactiveElementScreen1 from "../../assets/images/project/firstWoman/images/Body/interactiveElementScreens/1.png";
import interactiveElementScreen2 from "../../assets/images/project/firstWoman/images/Body/interactiveElementScreens/1.png";
import ProjectImageGrid from "./projectComponents/ProjectImageGrid";

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

//main content.

export default function FirstWomanProject3({ data }: ProjectData) {
  return (
    <>
      {data.headerText}
      {data.subcaptionText}
      {data.icons["mainIconSet"]}
      {data.videos[1]}
      <ProjectParagraphText text="Working as a UX designer on 'NASA: First Woman' at Bully! Entertainment allowed me to tackle unique challenges in creating an engaging app that introduces space exploration to the next generation. My primary goal was to design an intuitive user experience that balanced educational content with interactive storytelling. This project, my second with Bully!, was a deep dive into the intricacies of UX design, where I developed strategies to ensure users could effortlessly navigate through the content, focusing on usability and accessibility.  <br /> <br /> My efforts contributed to the app's success, evidenced by over 467 million worldwide interactions and recognition in the form of the Webby and People's Choice Awards for Best Integrated Mobile Experience in 2022. The narrative of Callie Rodriguez, the first woman and person of color on the moon, was our backdrop, and I was tasked with bringing her story to life through a user-friendly interface that made NASA's technology both accessible and engaging." />
      {<Title3 title="Native App" borderTop={true} />}
      {data.images[2]}
      <ProjectParagraphText text="As a UX designer, my primary focus was on enhancing the user interface to complement and highlight the graphic novel at the heart of our app. Recognizing the novel's central role, I structured the app's content hierarchically, ensuring that the novel was easily accessible and prominently featured, guiding users naturally to the additional experiences offered. <br/> <br/> In alignment with NASA's style guidelines, our UI team chose a clean, modern aesthetic, utilizing Helvetica for readability and bold colors for engagement. This collaborative decision aimed to make the app an immersive extension of the graphic novel, balancing functionality with visual appeal. <br/> <br/> In designing the app’s layout, I prioritized a modular approach for the homepage. This strategy was aimed at simplifying navigation through the app’s extensive content, allowing users to effortlessly explore each section of the graphic novel. By organizing the content modularly, we facilitated a user experience that was intuitive, enabling quick access and discovery within the app.<br/> <br/> The combination of thoughtful design aesthetics and a user-centric layout was instrumental in delivering a streamlined and straightforward app experience. My role was to ensure that the app’s design enhanced the storytelling of the graphic novel, making it the focal point for users, while also providing an accessible and engaging digital platform that aligns with NASA's vision and style." />
      {<Title3 title="Onboarding" borderTop={false} />}
      {data.videos[2]}
      <ProjectParagraphText text="We carefully designed the onboarding process to provide users with a thorough introduction to the app and its various features. We also took a unique approach to handling permissions during this phase, ensuring a smooth user entry into the app and its Augmented Reality features . <br / ><br /> As part of this initiative, we further solidified RT's role as the user's guide within the app. To achieve this, we introduced a feature that allowed RT to emphasize critical information by dimming surrounding elements on the screen. This focused users' attention on specific UI components, such as 'Issue Number 1.' In addition, to ensure accessibility for all users, including those who do not use audio, we introduced word bubbles for RT's dialogues. This integration seamlessly complemented the app's narrative while enhancing the overall user experience. This practical approach not only added depth to RT's character but also significantly aided app users in navigating and engaging with the content." />
      {<Title3 title="Interactive Elements" borderTop={false} />}
      {/* {data.images[3]} */}
      {
        <ProjectImageGrid
          image1={interactiveElementScreen1}
          image2={interactiveElementScreen2}
        />
      }
      {/* <ProjectImage image={interactiveElementScreen1} /> */}
      <ProjectParagraphText text="One of the pivotal UX features centered around immersing users in the graphic novel through Augmented Reality (AR). Our primary focus was to create a user-friendly way to seamlessly transition between the graphic novel and AR experiences, making them easily accessible within the app. Within the AR component, users encountered meticulously detailed NASA artifacts, including astronaut suits and the SLS Rocket, placed within their surroundings.<br /> <br /> In collaboration with the team, I played a key role in the onboarding process, ensuring users could effortlessly place AR objects in their environment. RT, our helpful guide, assisted users in a manner similar to the onboarding, making the experience user-friendly and intuitive.<br /> <br /> To enhance the learning experience, we introduced interactive word bubbles in the style of comic books. Users could simply tap on these bubbles to access additional information about different aspects of the technology, enhancing their understanding.  <br /> <br /> Moreover, we conceptualized and implemented a unique feature based on UX design principles. We introduced a 'Go Inside' button within the 3D object, a concept that emerged from our UX discussions. This button allowed users to seamlessly transition from the 3D object into immersive environments, providing an engaging and interactive journey." />
      {data.videos[3]}
      <ProjectParagraphText text="I concentrated on improving the user experience (UX) within immersive settings, making it easier for users to gain insights into their environment through engaging informational prompts, akin to augmented reality (AR) elements. They also enjoyed real-time (RT) guidance, which facilitated a smooth journey and offered various ways to navigate. This approach allowed users to delve deeper into the Artemis program's technology via videos and articles, enhancing their grasp of NASA's breakthroughs. <br /> <br /> In terms of interactivity, I proposed initial concepts aimed at enhancing the environments' interactivity, transitioning static scenes into more dynamic, engaging experiences. These ideas were developed to encourage tactile engagement and exploration." />
      <Title3 title="Achievements" />
      {data.images[4]}
      {/* Add navigation   */}
      <ProjectParagraphText text="To further enrich the user experience and promote exploration within the app, we introduced interactive challenges scattered across the environments. Completing these challenges allows users to earn badges, culminating in the achievement of the First Woman Specialist Badge as a reward for their engagement and discovery efforts. This gamification element was designed to tie together different aspects of the app, motivating users to explore more extensively and interact with the content in a more meaningful way." />
      <Title3 title="WebAR" borderTop={true} />
      {data.videos[4]}
      <ProjectParagraphText text="After laying a solid UX foundation in the native app, we shifted our focus to developing WebAR experiences, with an emphasis on using RT as the primary gateway for users. Initially, we explored a design that allowed users to engage with space objects through simple voice commands captured via microphone input. However, due to technological limitations at the time, which restricted the system's ability to process a diverse array of inputs effectively, we decided to adjust our strategy to concentrate more on the AR objects themselves. <br/> <br/> I took the lead in creating wireframes for a refined UX concept, where RT introduces space objects within a virtual environment, displayed as a grid of images behind him. This design enables users to click on an image, bringing the selected object to the forefront in a seamless transition, ready for interaction. Moreover, we delved into tailoring the user experience based on the entry point into the web experience, whether it be a general link, from the graphic novel, or directed at a specific object, ensuring a cohesive and engaging UX journey that aligns with the project's broader objectives." />
      {/* //process for desigining in sketch / clickable prototypes -and symbols  */}
      <Title3 title="Microsite" borderTop={true} />
      {data.videos[5]}
      <ProjectParagraphText text="In the development of the microsite, we prioritized UX to seamlessly unify the project's various elements: the Graphic Novel, the Native App, and the WebAR Experiences. Presented through distinct cards on a continuous scroll interface, the site's design—realized with the expertise of our Web Developer, Pedro, and our design and concept artists—featured vivid colors and engaging parallax images that captivated users with the story of Callie and RT.<br/> <br/>  We designed the site to be highly interactive. Users could explore a digital version of the Graphic Novel, partake in a 'Career at NASA' quiz for an educational and entertaining experience.  These elements were meticulously curated and integrated, ensuring a cohesive and immersive user journey across the microsite. This UX-driven approach effectively showcased the project to a global audience, highlighting the integration of each component into a single, engaging digital experience." />
      <Title3 title="Conclusion" borderTop={true} />
      {data.videos[6]}
      <ProjectParagraphText text="The project turned out to be a phenomenal success, a testament to the dedication and hard work of our entire team. This achievement reflects our commitment to innovative storytelling and engaging experiences through the Graphic Novels and app. It has been incredibly rewarding to see the project's impact, inspiring a wide audience with the story of space exploration.<br /> <br /> One of the highlights for me was the opportunity to collaborate closely with the NASA team, presenting our app designs and observing the Bully team's process from conceptualization to development. This experience offered a deep dive into the capabilities of Unity, showcasing its vast potential for creative projects. <br /> <br /> Reflecting on the project, I recognize that my focus might have leaned too much towards UI elements while working on UX, and I perhaps introduced too many features into the UX design. Some of these were indeed implemented, but in hindsight, a more concentrated effort on the most critical aspects could have been beneficial. However, each project is a learning opportunity, and I look forward to applying these insights in future endeavors. <br /> <br /> I take great pride in having contributed to this project and am eager to see how it evolves moving forward. The journey has been incredibly rewarding, and the project's impact continues to grow, extending its reach and inspiring more innovations along the way." />
    </>
  );
}

{
  /* <ProjectParagraphText text="" />
      <ProjectParagraphText text="" /> */
}
