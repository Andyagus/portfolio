//React components
import ProjectImage from "./projectComponents/ProjectImage.tsx";
import ProjectVideo from "./projectComponents/ProjectVideo.tsx";
import ProjectHeaderText from "./projectComponents/ProjectHeaderText.tsx";
import ProjectSubcaptionText from "./projectComponents/ProjectSubcaptionText.tsx";
import ProjectIcons from "./projectComponents/ProjectIcons.tsx";
import ProjectIcon from "./projectComponents/ProjectIcon.tsx";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText.tsx";

//icons
import { FaAppStoreIos, FaSafari, FaAward } from "react-icons/fa";

//images
import UserFlowImage1 from "../../assets/images/project/firstWoman/images/Body/image1-flow.png";
import AppScreens2 from "../../assets/images/project/firstWoman/images/Body/image2-appscreens.png";
import ARObject3 from "../../assets/images/project/firstWoman/images/Body/image3-ARObject.png";
import Achievements4 from "../../assets/images/project/firstWoman/images/Body/image4-Achievements.png";

//videos
import HeaderVideo from "../../assets/images/project/firstWoman/videos/Header/HeaderVideo1.mov";
import RTVideo1 from "../../assets/images/project/firstWoman/videos/Body/1RT.mov";
import InteractiveVideo2 from "../../assets/images/project/firstWoman/videos/Body/2Interactive.mov";
import WebARVideo3 from "../../assets/images/project/firstWoman/videos/Body/3webar.mov";
import MicrositeVideo4 from "../../assets/images/project/firstWoman/videos/Body/4Microsite.mov";
import CallieOutro5 from "../../assets/images/project/firstWoman/videos/Body/5callieOutro.mov";

export const ProjectData = {
  firstWomenDataDictionary: {
    headerText: <ProjectHeaderText title={"NASA: First Woman"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={
          "A large scale project done at Bully Entertainment for NASA aimed at exciting the next generation of space explorers through a graphic novel and immersive experiences"
        }
      />
    ),
    images: {
      userFlowImage1: (
        <ProjectImage
          image={UserFlowImage1}
          caption={
            "Flow: Showcasing the Variety of Components and Interconnected Elements of the Graphic Novel\n" +
            "\n"
          }
        />
      ),
      AppScreens2: (
        <ProjectImage
          image={AppScreens2}
          caption={
            "Native App Screenshots: Homepage Grid Features Important App Elements"
          }
        />
      ),
      ARObject3: (
        <ProjectImage
          image={ARObject3}
          caption={
            "AR Object: Preview of the SLS in Augmented Reality with the 'Core Stage' Clickable Component Selected\n"
          }
        />
      ),
      Achievements4: (
        <ProjectImage
          image={Achievements4}
          caption={
            "Challenges for Achievements: Added the Next Level of Gamification and Interactivity into the App!"
          }
        />
      ),
    },
    videos: {
      HeaderVideo: (
        <ProjectVideo
          video={HeaderVideo}
          caption={
            "Dreamscape: An Overview of the Different Environments to Explore within the App."
          }
        />
      ),
      RTVideo1: (
        <ProjectVideo
          video={RTVideo1}
          caption={
            "RT Explorations: Cross Team Collaborations to Understand RT's Personality and Visual Appearance.\n" +
            "\n"
          }
        ></ProjectVideo>
      ),
      InteractiveVideo2: (
        <ProjectVideo
          video={InteractiveVideo2}
          caption={
            "Immersive Environments: Made Interactive, Turning Static into Memorable Experiences, Finding the Rubber Ducks!"
          }
        ></ProjectVideo>
      ),
      WebARVideo3: (
        <ProjectVideo
          video={WebARVideo3}
          caption={
            "A preview of the 8th Wall, WebAR Experience. (Left) Wireframes Concepting Experience."
          }
        ></ProjectVideo>
      ),
      MicrositeVideo4: (
        <ProjectVideo
          video={MicrositeVideo4}
          caption={
            "Fluid Scrolling: Designing with Cards Enabled our team to a Flexible Microsite Experience About Many Topics\n" +
            "\n"
          }
        ></ProjectVideo>
      ),
      CallieOutro5: (
        <ProjectVideo
          video={CallieOutro5}
          caption={
            "Stories: Vibrant Colors Fill the Pages of the First Women Graphic Novel, Displayed Here."
          }
        ></ProjectVideo>
      ),
    },
    icons: {
      mainIconSet: (
        <ProjectIcons
          projectIcon1={
            <ProjectIcon
              icon={FaAppStoreIos}
              link={
                "https://apps.apple.com/us/app/nasas-first-woman/id1574700198"
              }
            />
          }
          projectIcon2={
            <ProjectIcon
              icon={FaSafari}
              link={"https://www.nasa.gov/calliefirst/"}
            />
          }
          projectIcon3={
            <ProjectIcon
              icon={FaAward}
              link={
                "https://winners.webbyawards.com/2022/apps-and-software/mobile-ott-app-features/integrated-mobile-experience/218744/first-woman--nasas-promise-for-humanity"
              }
            />
          }
        />
      ),
    },
    textBlocks: {
      // fetch(textFile1).then((r) => console.log(r.text));
      text1: (
        <ProjectParagraphText
          text={
            "NASA: First Woman was the second project I had the opportunity to work on at Bully! Entertainment. Our team took on the project in close partnership with the team at NASA with the goal of exciting the next generation of space explorers!\n" +
            "<br /> <br /> \n" +
            "Since the app launched, over 467 million people from 70 different countries interacted with our project. In 2022, our team won the Webby and Peoples Choice Awards for Best Integrated Mobile Experience, and, we were featured in Apple's App Store to celebrate Women's History Month. The project, initially scoped as a single experience, is still being developed today with new graphic novel issues being released, continuous app updates, and even a First Woman Camp Experience!"
          }
        />
      ),
      text2: (
        <ProjectParagraphText
          text={
            "The project is based around an original story about Callie Rodriguez, the first female astronaut and person of color to set foot on the moon— And it was set in a beautifully detailed and illustrated graphic novel – which worked in conjunction with the Native iOS App - in order to bring static imagery to life through AR Objects and Immersive Environments. This excited the user to learn about NASA technology, and making one feel as if they are in space.  My role as the UX Designer, extended to being part of the overall strategy , and taking part in meetings with Derek Wang, the Director of Communications at NASA, to discuss the teams designs and progress with the overall app."
          }
        />
      ),
      text3: (
        <ProjectParagraphText
          text={
            "Since the project was centered around the graphic novel, I designed the content so it was hierarchically structured, the most important was the novel itself, and through that you could access the other experiences. The graphic novel was a beautifully done, and I wanted to make sure that it was the main focus of the app. \n" +
            "<br/><br/>\n" +
            "With an awareness of NASA’s style guide, the team was very receptive to my suggestion of adopting a modern and minimalistic design for the app, characterized by a Helvetica typeface and \n" +
            "bold colors.\n" +
            "<br/><br/>\n" +
            "From a layout perspective we designed a modular homepage to facilitate easy access to the extensive content in each graphic novel. This allowed users to quickly browse and access all content within the app. Both the design aesthetics and the user-friendly layout collectively contributed to creating a streamlined and simple app experience.\n"
          }
        />
      ),
      text4: (
        <ProjectParagraphText
          text={
            "RT, Callie's homemade robot and space companion, was an essential part of the story. The team worked hard on creating lovable and funny animations that enabled the robot to express itself. At the same time, I worked closely with Brent, the concept artist, and Pedro, the video producer, to understand how RT could best fit in the app. We decided that just as RT is Callie's guide through space, he should also help guide the user through the app. From the onboarding to immersive explorations."
          }
        />
      ),
      text5: (
        <ProjectParagraphText
          text={
            "One of the core features was the ability to view the graphic novel in AR. So, we focused on designing a straightforward way to initiate the AR experience from the graphic novel, all while ensuring they are accessible through the App itself. The AR objects experiences consisted of highly detailed NASA artifacts, like an astronaut suit, or the SLS Rocket. At the same time as experiencing the object in one's environment, a user was able to tap different elements, placed in the style of word bubbles in order to learn more about that area of the technology. Since the AR objects were tied into immersive environments, we provided a seamless transition to further exploration."
          }
        />
      ),
      text6: (
        <ProjectParagraphText
          text={
            "The immersive environments were the most exciting part of the project. And it was the first time I saw the full potential of the Unity game engine. We worked closely with the NASA team to understand the different environments that Callie would be exploring. Through this, the user had the opportunity space environments and feel like they were really there! I played a pivotal role in turning the environments, which would have been relatively static, into interactable playgrounds.\n" +
            "<br/> <br/>\n" +
            "In order to do this, I sat with the other designers and we concepted interactions that could enhance touch and exploration while moving around. In addition, this also enhanced team morale because it gave everybody freedom to play around a bit in the environments, and taking a step back from the rigid requirements of the project. Through these, we added the ability to learn more about the various technology of the Artemis program, through videos and articles.\n"
          }
        />
      ),
      text7: (
        <ProjectParagraphText
          text={
            "To tie in the various components of the experience and encourage exploration throughout the app, we added challenges throughout the environments, which a user could complete to earn badges, and unlock the First Woman Specialist Badge.\n" +
            "<br/> <br/>\n" +
            "Throughout the design and development of the project, we had many product reviews, both internally and with the NASA Team, so I created fully clickable prototypes, based on Sketch symbols, in order to fully experience the app, and it's new features. At the same time the symbols made it easier to make changes, while keeping consistency across the experience.Both of these features played important roles when working on a feature, such as achievements, that played its part across the project.\n"
          }
        />
      ),
      text8: (
        <ProjectParagraphText
          text={
            "Once we had a solid foundation in the native app, we started working on the WebAR experiences. We wanted to focus on RT as the entry point to the experience and we initially concepted a design where the user in could have light voice interactions through microphone input in order to experience various space objects. However, at the time, the technology wasn't capable of handling responses to a wide range of input so we pivoted to focus directly on the AR objects.\n" +
            "<br/><br/>\n" +
            "I ended up designing wireframes for a novel UX, where RT presents space objects in an environment through a grid of images behind him. When a user clicked on an image, object would fade into the center point of the piece, where the user could interact. We also explored how the experience could change based on where the user entered the web experience from either, (a general link, the graphic novel, or for a specific object).\n"
          }
        />
      ),
      text9: (
        <ProjectParagraphText
          text={
            "Lastly, we worked on the Microsite, which tied all of the components of the project togethger. The Graphic Novel, the Native App, and WebAR Experiences, were now all visualized through through seperate cards on a continuous scroll website.\n" +
            "With the help of our great Web Developer, Pedro, design and concept artists, the site came together beautifully through vibrant colors, large scale parralaax images - all of which really entranced the viewer into the story of Callie and RT.\n" +
            "<br/><br/>\n" +
            "We also designed interactive elements, such as the ability to read a digital version of the Graphic Novel, and the opportunity for one to learn about there 'Career At Nasa' through a fun quiz. Later on NASA also developed more activities including coloring books and the ability to 'Design a Crew Module' - all of which is hosted on the website! The site was a great way to tie all of the components of the project together, and it was a great way to showcase the project to the world.\n"
          }
        />
      ),
      text10: (
        <ProjectParagraphText
          text={
            "Overall the project was an amazing success, which was a result of the hard work of the entire team. The project continues to live on through more Graphic Novels, and in app content, as I write this the 3rd Novel is in development!\n" +
            "<br/><br/>\n" +
            "For me the most exciting part of the project was being able to communicate with the NASA team and share the teams work on the designs, and also whitness the workflow across the entire Bully team from concept to development - understanding the potential of Unity.\n" +
            "<br/><br/>\n" +
            "Looking back at it one of my regrets in the project was diving to deep into the UI while working on the UX, and also adding to many different features to the UX, (many of which were added) instead of focusing further on the aspects that were most important. But there is always next time! I am proud to have been involved on this project and I am excited to see where it continues to develop in the future!"
          }
        />
      ),
    },
  },
  firstWomenDataDictionary2: {
    headerText: <ProjectHeaderText title={"NASA: First Woman"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={
          "A large scale project done at Bully Entertainment for NASA aimed at exciting the next generation of space explorers through a graphic novel and immersive experiences"
        }
      />
    ),
    images: {
      userFlowImage1: (
        <ProjectImage
          image={UserFlowImage1}
          caption={
            "Flow: Showcasing the Variety of Components and Interconnected Elements of the Graphic Novel\n" +
            "\n"
          }
        />
      ),
      AppScreens2: (
        <ProjectImage
          image={AppScreens2}
          caption={
            "Native App Screenshots: Homepage Grid Features Important App Elements"
          }
        />
      ),
      ARObject3: (
        <ProjectImage
          image={ARObject3}
          caption={
            "AR Object: Preview of the SLS in Augmented Reality with the 'Core Stage' Clickable Component Selected\n"
          }
        />
      ),
      Achievements4: (
        <ProjectImage
          image={Achievements4}
          caption={
            "Challenges for Achievements: Added the Next Level of Gamification and Interactivity into the App!"
          }
        />
      ),
    },
    videos: {
      HeaderVideo: (
        <ProjectVideo
          video={HeaderVideo}
          caption={
            "Dreamscape: An Overview of the Different Environments to Explore within the App."
          }
        />
      ),
      RTVideo1: (
        <ProjectVideo
          video={RTVideo1}
          caption={
            "RT Explorations: Cross Team Collaborations to Understand RT's Personality and Visual Appearance.\n" +
            "\n"
          }
        ></ProjectVideo>
      ),
      InteractiveVideo2: (
        <ProjectVideo
          video={InteractiveVideo2}
          caption={
            "Immersive Environments: Made Interactive, Turning Static into Memorable Experiences, Finding the Rubber Ducks!"
          }
        ></ProjectVideo>
      ),
      WebARVideo3: (
        <ProjectVideo
          video={WebARVideo3}
          caption={
            "A preview of the 8th Wall, WebAR Experience. (Left) Wireframes Concepting Experience."
          }
        ></ProjectVideo>
      ),
      MicrositeVideo4: (
        <ProjectVideo
          video={MicrositeVideo4}
          caption={
            "Fluid Scrolling: Designing with Cards Enabled our team to a Flexible Microsite Experience About Many Topics\n" +
            "\n"
          }
        ></ProjectVideo>
      ),
      CallieOutro5: (
        <ProjectVideo
          video={CallieOutro5}
          caption={
            "Stories: Vibrant Colors Fill the Pages of the First Women Graphic Novel, Displayed Here."
          }
        ></ProjectVideo>
      ),
    },
    icons: {
      mainIconSet: (
        <ProjectIcons
          projectIcon1={
            <ProjectIcon
              icon={FaAppStoreIos}
              link={
                "https://apps.apple.com/us/app/nasas-first-woman/id1574700198"
              }
            />
          }
          projectIcon2={
            <ProjectIcon
              icon={FaSafari}
              link={"https://www.nasa.gov/calliefirst/"}
            />
          }
          projectIcon3={
            <ProjectIcon
              icon={FaAward}
              link={
                "https://winners.webbyawards.com/2022/apps-and-software/mobile-ott-app-features/integrated-mobile-experience/218744/first-woman--nasas-promise-for-humanity"
              }
            />
          }
        />
      ),
    },
    textBlocks: {
      text1: (
        <ProjectParagraphText
          text={
            "NASA: First Woman was the second project I had the opportunity to work on at Bully! Entertainment. Our team took on the project in close partnership with the team at NASA with the goal of exciting the next generation of space explorers! <br /> <br /> Since the app launched, over 467 million people from 70 different countries interacted with our project. In 2022, our team won the Webby and Peoples Choice Awards for Best Integrated Mobile Experience, and, we were featured in Apple's App Store to celebrate Women's History Month. The project, initially scoped as a single experience, is still being developed today with new graphic novel issues being released, continuous app updates, and even a First Woman Camp Experience!"
          }
        />
      ),

      text2: (
        <ProjectParagraphText
          text={
            "The project was centered around - and original story, turned graphic novel, about Callie Rodriguez, the first female and person of color to step foot on the moon.  The graphic novel is cleverly written, beautifully illustrated and really captivated the audience into feeling as if they were really part of Callie’s mission.  <br /> <br /> In addition, the graphic novel served as an entry point to a variety of 3D Content — AR Objects, and Immersive Environments, available in the Native App.   My role as a UX Designer, was to help design the overall flow of content from the Graphic Novel, to the Native App, WebAR Experience, and Microsite.  This also led me to be part of the team’s overall strategy, as well as taking part in meetings with the Director of Communication at NASA to share the team's designs and our progress with the overall app."
          }
        />
      ),

      text3: (
        <ProjectParagraphText
          text={
            "The content in the Native App was based off of the Graphic Novel, so I designed the UX with the hierarchy in mind.  Here, a user could learn more about the graphic novel, and then learn more about the content associated with it.  If a user didn’t have the graphic novel or just wanted to experience the content on its own,  we focused on different ways for a user to launch the content depending on their entry point and still have a cohesive experience.  <br /> <br /> On the homepage, you can we prominently placed the “Scan the Graphic Novel” feature while also dispersing other immersive content from around the app, in order for a user to get the opportunity to engage with and learn about a variety of interesting content. <br /> <br /> From a UI perspective I worked closely with the team to adopt NASA’s style guide of a simple Helvetica typeface and usage of Bold Colors.  And in the environments, we drew inspiration from the graphic novel to bring the colorful and stylized elements into the app, beautifully tying in both the digital and physical experiences."
          }
        />
      ),

      text4: (
        <ProjectParagraphText
          text={
            "RT, Callie's homemade robot and space companion, was an essential part of the story. The team worked hard on creating lovable and funny animations that enabled the robot to express itself. At the same time, I worked closely with Brent, the concept artist, and Pedro, the video producer, to understand how RT could best fit in the app. We decided that just as RT is Callie's guide through space, he should also help guide the user through the app. From the onboarding to immersive explorations."
          }
        />
      ),

      text5: (
        <ProjectParagraphText
          text={
            "One of the core features of the app was giving users the ability to scan the graphic novel to activate immersive environments, so we implement a seamless way for a user to initiate the AR Objects and Immersive Environments directly from the physical book. <br /> <br />  We designed the AR Objects so that a user could experience what a NASA technology, large or small, could feel like in your own environment, while also making it easy to learn more about the technology.  Since the AR objects typically had an immersive environment counterpart, we also made it easy for a user to go right to the immersive environment, through a simple call to action “Go Inside.” This became a really nice way to experience both the exterior and also get the chance to go inside something that is way beyond reach."
          }
        />
      ),

      text6: (
        <ProjectParagraphText
          text={
            "The immersive environments showcased the massive potential of the Unity game engine. The team worked hard from Tech Art, to Unity Development, to concept art, in order to design otherworldly environments, tied into the specificities provided by NASA.  The environments became a counterpoint to the App Experience, where users enjoyed living life as Callie, or an astronaut.  I worked closely with the team to outline informative elements, spread throughout the environment, giving walking around, a further purpose. <br /> <br />  Even more so, I started exploring ways to add interactivity to the environment to encourage facilitate a deeper connection to learning and exploration. Now instead of just walking around, things became clickable, like a video game.  We worked as a small group in order to come up with simple interactions, before the idea spread throughout the entire team, where everybody wanted to be involved, and was suggested new ways to improve the models.  <br /> <br /> By adding an element of fun to the environments, we not only improved the user’s experience, but also improved team morale, as it allowed everyone to take a step back, be creative, and leave the rigid requirements of the project.  I am very proud of this part of the projects, and til this day it is one of the most excited parts for me."
          }
        />
      ),

      text7: (
        <ProjectParagraphText
          text={
            "Aimless exploration, was fun, but overtime it could get stale,  so we implemented challenges and achievements to the app, that users could unlock by answering trivia and quiz questions, watching space technology videos, or finding hidden elements in the immersive habitats.  NASA really like this idea, so we closely with the team to come up with challenging, yet fun, questions, to keep the app fun and engaging.  After completing a certain number of achievements the user had the opportunity to earn the “First Woman Mission Specialist Badge” and unlock hidden content in the app. We even explored turning the badge into an NFT, but quickly nixed the idea."
          }
        />
      ),

      text8: (
        <ProjectParagraphText
          text={
            '"For this project, I spend a lot of time connecting and designing in Sketch, and to me the most interesting part of the workflow was twofold.  First, clickable prototypes.  Making clickable prototypes of the app screens enabled me to showcase the design in its entirety to the entire team and at NASA product review meetings, so we could both get approval, before handing off to the devs.  Also, working with Sketch Symbols enabled me to use elements across the project, from the header, to the typeface, to images. <br /> <br /> Together both of these tools enabled the team to easily review the app, and make any necessary changes, that persistent across all of the app screens.   This was particularly useful at the end of the Native App phase when we worked on implemented 508 Compliance.  Given the adherence NASA must follow for an app - this required many revisions across may screens, without the symbols, adjusting each screen would have been very difficult."'
          }
        />
      ),

      text9: (
        <ProjectParagraphText
          text={
            "Once we had a solid foundation in the native app, we started working on the WebAR experiences. We wanted to focus on RT as the entry point to the experience and we initially concepted a design where the user in could have light voice interactions through microphone input in order to experience various space objects. However, at the time, the technology wasn't capable of handling responses to a wide range of input so we pivoted to focus directly on the AR objects. <br /><br />  I ended up designing wireframes for a novel UX, where RT presents space objects in an environment through a grid of images behind him. When a user clicked on an image, object would fade into the center point of the piece, where the user could interact. We also explored how the experience could change based on where the user entered the web experience from either, (a general link, the graphic novel, or for a specific object)."
          }
        />
      ),

      text10: (
        <ProjectParagraphText
          text={
            "Lastly, we worked on the Microsite, which tied all of the components of the project together. The Graphic Novel, the Native App, and WebAR Experiences, were now all visualized through separate cards on a continuous scroll website. With the help of our great Web Developer, Pedro, design and concept artists, the site came together beautifully through vibrant colors, large scale parallax images - all of which really entranced the viewer into the story of Callie and RT. <br /> <br /> We also designed interactive elements, such as the ability to read a digital version of the Graphic Novel, and the opportunity for one to learn about there 'Career At Nasa' through a fun quiz. Later on NASA also developed more activities including coloring books and the ability to 'Design a Crew Module' - all of which is hosted on the website! The site was a great way to tie all of the components of the project together, and it was a great way to showcase the project to the world."
          }
        />
      ),

      text11: (
        <ProjectParagraphText
          text={
            "Overall the project was an amazing success, which was a result of the hard work of the entire team. The project continues to live on through more Graphic Novels, and in app content, as I write this the 3rd Novel is in development!  <br /> <br /> For me the most exciting part of the project was being able to communicate with the NASA team and share the teams work on the designs, and also whiteness the workflow across the entire Bully team from concept to development - understanding the potential of Unity.  <br /> <br /> Looking back at it one of my regrets in the project was diving to deep into the UI while working on the UX, and also adding to many different features to the UX, (many of which were added) instead of focusing further on the aspects that were most important. But there is always next time! I am proud to have been involved on this project and I am excited to see where it continues to develop in the future!"
          }
        />
      ),

      // text1: "NASA: First Woman was the second project I had the opportunity to work on at Bully! Entertainment. Our team took on the project in close partnership with the team at NASA with the goal of exciting the next generation of space explorers! <br /> <br /> Since the app launched, over 467 million people from 70 different countries interacted with our project. In 2022, our team won the Webby and Peoples Choice Awards for Best Integrated Mobile Experience, and, we were featured in Apple's App Store to celebrate Women's History Month. The project, initially scoped as a single experience, is still being developed today with new graphic novel issues being released, continuous app updates, and even a First Woman Camp Experience!",
      // text2: "The project was centered around - and original story, turned graphic novel, about Callie Rodriguez, the first female and person of color to step foot on the moon.  The graphic novel is cleverly written, beautifully illustrated and really captivated the audience into feeling as if they were really part of Callie’s mission.  <br /> <br /> In addition, the graphic novel served as an entry point to a variety of 3D Content — AR Objects, and Immersive Environments, available in the Native App.   My role as a UX Designer, was to help design the overall flow of content from the Graphic Novel, to the Native App, WebAR Experience, and Microsite.  This also led me to be part of the team’s overall strategy, as well as taking part in meetings with the Director of Communication at NASA to share the teams designs and our progress with the overall app.",
      // text3: "The content in the Native App was based off of the Graphic Novel, so I designed the UX with the hierarchy in mind.  Here, a user could learn more about the graphic novel, and then learn more about the content associated with it.  If a user didn’t have the graphic novel or just wanted to experience the content on its own,  we focused on different ways for a user to launch the content depending on their entry point and still have a cohesive experience.  <br /> <br /> On the homepage, you can we prominently placed the “Scan the Graphic Novel” feature while also dispersing other immersive content from around the app, in order for a user to get the opportunity to engage with and learn about a variety of interesting content. <br /> <br /> From a UI perspective I worked closely with the team to adopt NASA’s style guide of a simple Helvetica typeface and usage of Bold Colors.  And in the environments, we drew inspiration from the graphic novel to bring the colorful and stylized elements into the app, beautifully tying in both the digital and physical experiences.",
      // text4: "RT, Callie's homemade robot and space companion, was an essential part of the story. The team worked hard on creating lovable and funny animations that enabled the robot to express itself. At the same time, I worked closely with Brent, the concept artist, and Pedro, the video producer, to understand how RT could best fit in the app. We decided that just as RT is Callie's guide through space, he should also help guide the user through the app. From the onboarding to immersive explorations.",
      // Text5: "One of the core features of the app was giving users the ability to scan the graphic novel to activate immersive environments, so we implement a seamless way for a user to initiate the AR Objects and Immersive Environments directly from the physical book. <br /> <br />  We designed the AR Objects so that a user could experience what a NASA technology, large or small, could feel like in your own environment, while also making it easy to learn more about the technology.  Since the AR objects typically had an immersive environment counterpart, we also made it easy for a user to go right to the immersive environment, through a simple call to action “Go Inside.” This became a really nice way to experience both the exterior and also get the chance to go inside something that is way beyond reach.",
      // Text6: "The immersive environments showcased the massive potential of the Unity game engine. The team worked hard from Tech Art, to Unity Development, to concept art, in order to design otherworldly environments, tied into the specificities provided by NASA.  The environments became a counterpoint to the App Experience, where users enjoyed living life as Callie, or an astronaut.  I worked closely with the team to outline informative elements, spread throughout the environment, giving walking around, a further purpose. <br /> <br />  Even more so, I started exploring ways to add interactivity to the environment to encourage facilitate a deeper connection to learning and exploration. Now instead of just walking around, things became clickable, like a video game.  We worked as a small group in order to come up with simple interactions, before the idea spread throughout the entire team, where everybody wanted to be involved, and was suggested new ways to improve the models.  <br /> <br /> By adding an element of fun to the environments, we not only improved the user’s experience, but also improved team morale, as it allowed everyone to take a step back, be creative, and leave the rigid requirements of the project.  I am very proud of this part of the projects, and til this day it is one of the most excited parts for me.",
      // Text7: "Aimless exploration, was fun, but overtime it could get stale,  so we implemented challenges and achievements to the app, that users could unlock by answering trivia and quiz questions, watching space technology videos, or finding hidden elements in the immersive habitats.  NASA really like this idea, so we closely with the team to come up with challenging, yet fun, questions, to keep the app fun and engaging.  After completing a certain number of achievements the user had the opportunity to earn the “First Woman Mission Specialist Badge” and unlock hidden content in the app. We even explored turning the badge into an NFT, but quickly nixed the idea.",
      // Text8:"For this project, I spend a lot of time connecting and designing in Sketch, and to me the most interesting part of the workflow was twofold.  First, clickable prototypes.  Making clickable prototypes of the app screens enabled me to showcase the design in its entirety to the entire team and at NASA product review meetings, so we could both get approval, before handing off to the devs.  Also, working with Sketch Symbols enabled me to use elements across the project, from the header, to the typeface, to images. <br /> <br /> Together both of these tools enabled the team to easily review the app, and make any necessary changes, that persistent across all of the app screens.   This was particularly useful at the end of the Native App phase when we worked on implemented 508 Compliance.  Given the adherence NASA must follow for an app - this required many revisions across may screens, without the symbols, adjusting each screen would have been very difficult.",
      // Text9:"Once we had a solid foundation in the native app, we started working on the WebAR experiences. We wanted to focus on RT as the entry point to the experience and we initially concepted a design where the user in could have light voice interactions through microphone input in order to experience various space objects. However, at the time, the technology wasn't capable of handling responses to a wide range of input so we pivoted to focus directly on the AR objects. <br /><br />  I ended up designing wireframes for a novel UX, where RT presents space objects in an environment through a grid of images behind him. When a user clicked on an image, object would fade into the center point of the piece, where the user could interact. We also explored how the experience could change based on where the user entered the web experience from either, (a general link, the graphic novel, or for a specific object).",
      // Text10:"Lastly, we worked on the Microsite, which tied all of the components of the project together. The Graphic Novel, the Native App, and WebAR Experiences, were now all visualized through separate cards on a continuous scroll website. With the help of our great Web Developer, Pedro, design and concept artists, the site came together beautifully through vibrant colors, large scale parallax images - all of which really entranced the viewer into the story of Callie and RT. <br /> <br /> We also designed interactive elements, such as the ability to read a digital version of the Graphic Novel, and the opportunity for one to learn about there 'Career At Nasa' through a fun quiz. Later on NASA also developed more activities including coloring books and the ability to 'Design a Crew Module' - all of which is hosted on the website! The site was a great way to tie all of the components of the project together, and it was a great way to showcase the project to the world.",
      // Text11: "Overall the project was an amazing success, which was a result of the hard work of the entire team. The project continues to live on through more Graphic Novels, and in app content, as I write this the 3rd Novel is in development!  <br /> <br /> For me the most exciting part of the project was being able to communicate with the NASA team and share the teams work on the designs, and also whiteness the workflow across the entire Bully team from concept to development - understanding the potential of Unity.  <br /> <br /> Looking back at it one of my regrets in the project was diving to deep into the UI while working on the UX, and also adding to many different features to the UX, (many of which were added) instead of focusing further on the aspects that were most important. But there is always next time! I am proud to have been involved on this project and I am excited to see where it continues to develop in the future!"
      //
      //
    },
  },
  ocVibeDataDictionary: {},
};
