//React components
import ProjectImage from "./projectComponents/ProjectImage.tsx";
import ProjectVideo from "./projectComponents/ProjectVideo.tsx";
import ProjectHeaderText from "./projectComponents/ProjectHeaderText.tsx";
import ProjectSubcaptionText from "./projectComponents/ProjectSubcaptionText.tsx";
import ProjectIcons from "./projectComponents/ProjectIcons.tsx";
import ProjectIcon from "./projectComponents/ProjectIcon.tsx";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText.tsx";

//icons
import {
  FaAppStoreIos,
  FaSafari,
  FaAward,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

//first woman
//images
import UserFlowImage1 from "../../assets/images/project/firstWoman/images/Body/image1-flow.png";
import AppScreens2 from "../../assets/images/project/firstWoman/images/Body/image2-appscreens.png";
import ARObject3 from "../../assets/images/project/firstWoman/images/Body/image3-ARObject.png";
import Achievements4 from "../../assets/images/project/firstWoman/images/Body/image4-Achievements.png";

//videos
import HeaderVideo from "../../assets/images/project/firstWoman/videos/Header/HeaderVideo1.mp4";
import RTVideo1 from "../../assets/images/project/firstWoman/videos/Body/1RT.mp4";
import InteractiveVideo2 from "../../assets/images/project/firstWoman/videos/Body/2Interactive.mp4";
import WebARVideo3 from "../../assets/images/project/firstWoman/videos/Body/3webar.mp4";
import MicrositeVideo4 from "../../assets/images/project/firstWoman/videos/Body/4Microsite.mp4";
import CallieOutro5 from "../../assets/images/project/firstWoman/videos/Body/5callieOutro.mp4";

//ocVibe videos
import headerVideo from "../../assets/images/project/ocVibe/videos/1HeaderVideo1.mp4";
import researchVideo from "../../assets/images/project/ocVibe/videos/2ResearchMerged.mp4";
import MITCityScope from "../../assets/images/project/ocVibe/videos/3MITCityScope.mp4";
import sliderToFullScale from "../../assets/images/project/ocVibe/videos/4SliderToFullScale.mp4";

//ocVibe images
import pavilionLookingIntoProperty from "../../assets/images/project/ocVibe/images/LookingIntoProperty.jpg";
import lifeSizedModel from "../../assets/images/project/ocVibe/images/LifeSizedModel.jpg";
import researchImageMoodboard from "../../assets/images/project/ocVibe/images/ResearchImageMoodboard.jpeg";
import initialWireframeSketches from "../../assets/images/project/ocVibe/images/initialWireframeSketches.jpeg";
import secondIterationWireframes from "../../assets/images/project/ocVibe/images/secondIterationWireframes.jpeg";
import lightExploration from "../../assets/images/project/ocVibe/images/TeamLightExplore.jpg";

//bookshelf content
import book_video1 from "../../assets/images/project/bookshelf/videos/Video1.mp4";
import book_video2 from "../../assets/images/project/bookshelf/videos/Video2.mp4";
import book_video3 from "../../assets/images/project/bookshelf/videos/Video3.mp4";
import book_video4 from "../../assets/images/project/bookshelf/videos/Video4.mp4";
import book_video5 from "../../assets/images/project/bookshelf/videos/Video5.mp4";
import book_video6 from "../../assets/images/project/bookshelf/videos/Video6.mp4";

import book_image1 from "../../assets/images/project/bookshelf/images/image1.gif";
import book_image2 from "../../assets/images/project/bookshelf/images/image2.png";
import book_image3 from "../../assets/images/project/bookshelf/images/image3.jpg";
import book_image4Sub from "../../assets/images/project/bookshelf/images/image4sub.jpg";

//museum content
import museumContent1 from "../../assets/images/project/museum/content/1VideoHeader.mp4";
import museumContent2 from "../../assets/images/project/museum/content/2Map.png";
import museumContent3 from "../../assets/images/project/museum/content/3_3dScanVideo.mp4";
import museumContent4 from "../../assets/images/project/museum/content/4SelectMultipleObjectsVideo.mp4";
import museumContent5 from "../../assets/images/project/museum/content/5InfoCardVideo.mp4";
import museumContent6 from "../../assets/images/project/museum/content/6WalkUpCloseVideo.mp4";
import museumContent7 from "../../assets/images/project/museum/content/7UIElements.jpeg";
import museumContent8 from "../../assets/images/project/museum/content/8MaterialSelection.mp4";
import museumContent9 from "../../assets/images/project/museum/content/9PopUpBanners.mp4";
import museumContent10 from "../../assets/images/project/museum/content/10WallBanner.mp4";
import museumContent11 from "../../assets/images/project/museum/content/11Gamification.mp4";
import museumContent12 from "../../assets/images/project/museum/content/12TestingInMet.mp4";

//saladBar content
import saladContent1 from "../../assets/images/project/saladBar/content/1saladBarHeader.mp4";
import saladContent2 from "../../assets/images/project/saladBar/content/2sketchScreens.png";
import saladContent3 from "../../assets/images/project/saladBar/content/3centerEyeRaycast.mp4";
import saladContent4 from "../../assets/images/project/saladBar/content/4menu.mp4";
import saladContent5 from "../../assets/images/project/saladBar/content/5categories.mp4";
import saladContent6 from "../../assets/images/project/saladBar/content/6Check.mp4";
import saladContent7 from "../../assets/images/project/saladBar/content/7Gamification.mp4";
import saladContent8 from "../../assets/images/project/saladBar/content/8Checkout.mp4";
import saladContent9 from "../../assets/images/project/saladBar/content/9conclusion.jpg";

// import saladContent9 from "../../assets/images/project/saladBar/content/8Checkout.mp4"; image of guy at greencafe

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
            "Since the app launched, over 467 million people from 70 different countries interacted with our project. In 2022, our team won the Webby and Peoples Choice Awards for Best Integrated Mobile Experience, and, we were featured in Apple's App Store to celebrate Women's History Month. The project, initially scoped as a single experience, is still being developed today with new graphic novel issues being released and continuous app updates!"
          }
        />
      ),
      text2: (
        <ProjectParagraphText
          text={
            "The project is based around an original story about Callie Rodriguez, the first female astronaut and person of color to set foot on the moon— And it was set in a beautifully detailed and illustrated graphic novel – which worked in conjunction with the Native iOS App - in order to bring static imagery to life through AR Objects and Immersive Environments. This excited the user to learn about NASA technology, and making one feel as if they are in space.  My role as the UX Designer, enabled me to be part of the project strategy , and also take part in meetings with the Director of Communications at NASA, to discuss the progress with the overall app."
          }
        />
      ),
      text3: (
        <ProjectParagraphText
          text={
            "Since the project was centered around the graphic novel, I designed the content so it was hierarchically structured, the most important was the novel itself, and through that you could access the other experiences. The graphic novel was a beautifully done, and I wanted to make sure that it was the main focus of the app. \n" +
            "<br/><br/>\n" +
            "With an awareness of NASA’s style guide, we adopted a modern and minimalistic design for the app, characterized by a Helvetica typeface and \n" +
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
            "The immersive environments were the most exciting part of the project. And it was the first time I saw the full potential of the Unity game engine. We worked closely with the NASA team to understand the different environments that Callie would be exploring. Through this, the user had the opportunity space environments and feel like they were really there! One of my favorites parts was turning the environments, which would have been relatively static, into interactable playgrounds.\n" +
            "<br/> <br/>\n" +
            "In order to do this, we concepted interactions that could enhance touch and exploration while moving around. In addition, this also enhanced team morale because it gave everybody freedom to play around a bit in the environments, and taking a step back from the rigid requirements of the project. Through these, we added the ability to learn more about the various technology of the Artemis program, through videos and articles.\n"
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
            "For me the most exciting part of the project was being able to communicate with the NASA team and share the teams work on the app designs, and also whitness the workflow across the entire Bully team from concept to development - understanding the potential of Unity.\n" +
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
  firstWomenDataDictionary3: {
    headerText: <ProjectHeaderText title={"NASA: First Woman"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={
          "An expansive project executed by Bully Entertainment for NASA, crafted to engage and inspire the next generation of space explorers through a compelling graphic novel and immersive experiences.          "
        }
      />
    ),
    images: {
      1: (
        <ProjectImage
          image={UserFlowImage1}
          caption={
            "Flow: Showcasing the Variety of Components and Interconnected Elements of the Graphic Novel\n" +
            "\n"
          }
        />
      ),
      2: (
        <ProjectImage
          image={AppScreens2}
          caption={"User-Centric Design in First Woman iOS App Homepage"}
        />
      ),
      3: (
        <ProjectImage
          image={ARObject3}
          caption={"Space Launch System (SLS) placed in AR"}
        />
      ),
      4: (
        <ProjectImage
          image={Achievements4}
          caption={
            "Enhancing User Engagement with Interactive Challenges Throughout the App"
          }
        />
      ),
    },
    videos: {
      1: (
        <ProjectVideo
          video={HeaderVideo}
          caption={"Overview of the entire First Woman Experience"}
        />
      ),
      2: (
        <ProjectVideo
          video={RTVideo1}
          caption={"RT Guiding the User through a Seamless Onboarding"}
        ></ProjectVideo>
      ),
      3: (
        <ProjectVideo
          video={InteractiveVideo2}
          caption={
            "Enhancing Immersive Environments with Information about NASA Technology and Interactivity"
          }
        ></ProjectVideo>
      ),
      4: (
        <ProjectVideo
          video={WebARVideo3}
          caption={
            "Exploring Space through WebAR: Wireframes and User Experience Design"
          }
        ></ProjectVideo>
      ),
      5: (
        <ProjectVideo
          video={MicrositeVideo4}
          caption={
            "Seamless Navigation through the Microsite's Diverse Sections"
          }
        ></ProjectVideo>
      ),
      6: (
        <ProjectVideo
          video={CallieOutro5}
          caption={
            "Vibrant Colors and Imagery in the First Woman Graphic Novel"
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
            "Since the app launched, over 467 million people from 70 different countries interacted with our project. In 2022, our team won the Webby and Peoples Choice Awards for Best Integrated Mobile Experience, and, we were featured in Apple's App Store to celebrate Women's History Month. The project, initially scoped as a single experience, is still being developed today with new graphic novel issues being released and continuous app updates!"
          }
        />
      ),
      text2: (
        <ProjectParagraphText
          text={
            "The project is based around an original story about Callie Rodriguez, the first female astronaut and person of color to set foot on the moon— And it was set in a beautifully detailed and illustrated graphic novel – which worked in conjunction with the Native iOS App - in order to bring static imagery to life through AR Objects and Immersive Environments. This excited the user to learn about NASA technology, and making one feel as if they are in space.  My role as the UX Designer, enabled me to be part of the project strategy , and also take part in meetings with the Director of Communications at NASA, to discuss the progress with the overall app."
          }
        />
      ),
      text3: (
        <ProjectParagraphText
          text={
            "Since the project was centered around the graphic novel, I designed the content so it was hierarchically structured, the most important was the novel itself, and through that you could access the other experiences. The graphic novel was a beautifully done, and I wanted to make sure that it was the main focus of the app. \n" +
            "<br/><br/>\n" +
            "With an awareness of NASA’s style guide, we adopted a modern and minimalistic design for the app, characterized by a Helvetica typeface and \n" +
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
            "The immersive environments were the most exciting part of the project. And it was the first time I saw the full potential of the Unity game engine. We worked closely with the NASA team to understand the different environments that Callie would be exploring. Through this, the user had the opportunity space environments and feel like they were really there! One of my favorites parts was turning the environments, which would have been relatively static, into interactable playgrounds.\n" +
            "<br/> <br/>\n" +
            "In order to do this, we concepted interactions that could enhance touch and exploration while moving around. In addition, this also enhanced team morale because it gave everybody freedom to play around a bit in the environments, and taking a step back from the rigid requirements of the project. Through these, we added the ability to learn more about the various technology of the Artemis program, through videos and articles.\n"
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
            "For me the most exciting part of the project was being able to communicate with the NASA team and share the teams work on the app designs, and also whitness the workflow across the entire Bully team from concept to development - understanding the potential of Unity.\n" +
            "<br/><br/>\n" +
            "Looking back at it one of my regrets in the project was diving to deep into the UI while working on the UX, and also adding to many different features to the UX, (many of which were added) instead of focusing further on the aspects that were most important. But there is always next time! I am proud to have been involved on this project and I am excited to see where it continues to develop in the future!"
          }
        />
      ),
    },
  },

  ocVibeDataDictionary: {
    headerText: <ProjectHeaderText title={"ocV!BE - Smart City"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={
          "Working with Microsoft to position ocV!BE, a major real estate development project, as a leader in technological innovation and a model for connected urban living."
        }
      />
    ),
    icons: (
      <ProjectIcons
        projectIcon1={
          <ProjectIcon icon={FaSafari} link="https://www.ocvibe.com/" />
        }
      />
    ),
    videos: {
      headerVideo: (
        <ProjectVideo
          video={headerVideo}
          caption={
            "Witness the ocV!BE Experience in Action through the eyes of a HoloLens headset"
          }
        />
      ),
      researchVideo: (
        <ProjectVideo
          video={researchVideo}
          caption={
            "Exploring research from a variety of different Augmented Reality based Architecture Tools"
          }
        />
      ),
      cityScopeVideo: (
        <ProjectVideo
          video={MITCityScope}
          caption={
            "Urban Simulation Tool that uses Augmented Reality to predict and quantify the impact of disruptive interventions"
          }
        />
      ),
      SliderToFullScale: (
        <ProjectVideo
          video={sliderToFullScale}
          caption={
            "Showcase of the slider being dragged to launch a full scale experience"
          }
        />
      ),
    },
    images: {
      ARPavilionImage: (
        <ProjectImage
          image={pavilionLookingIntoProperty}
          caption={
            "Rendering from team artist, Pavel Zosim, showcases Pavilion's view of the future site of ocV!BE"
          }
        />
      ),
      LifeSizedModelImage: (
        <ProjectImage
          image={lifeSizedModel}
          caption={
            "Also from Pavel, Rendering of full scale model placed in actual position of future development"
          }
        />
      ),
      ResearchMoodboard: (
        <ProjectImage
          image={researchImageMoodboard}
          caption={
            "Interesting UI Interaction Design References that we used to help concept our designs"
          }
        />
      ),
      InitialWireframeSketches: (
        <ProjectImage
          image={initialWireframeSketches}
          caption={
            "A few snapshots of initial wireframe sketches, which detailed out the entire experience"
          }
        />
      ),
      SecondIterationWireframes: (
        <ProjectImage
          image={secondIterationWireframes}
          caption={
            "Updated wireframs by showcasing specific property details and added in multi-user functionality"
          }
        />
      ),
      TeamLightExplore: (
        <ProjectImage
          image={lightExploration}
          caption={
            "UI Team exploring different ways to highlight objects of interest including this unique handle with a spotlight"
          }
        />
      ),
    },
    textBlocks: {
      text1: (
        <ProjectParagraphText
          text={
            "After working on the NASA Project at Bully, we began focusing on a new project for OCVibe an upcoming large, $4B, Real EstateDevelopment Project, aimed at being Anaheims premier mixed-use community and live entertainment district.  The goal of the project was to leverage Microsoft’s technology, primarily the HoloLens 2 Headset - and other software, in order to position OCVibe at the forefront of technology and as a tool to showcase the upcoming development to potential tenants and investors."
          }
        />
      ),

      text2: (
        <ProjectParagraphText
          text={
            "Once we received the proposal from the client, our team began brainstorming different approaches to take the project.  We began by referencing a variety of different Architecture focused Augmented Reality apps, which we drew a variety of inspiration from.  Afterwords we decided to form the project around a variety of stages.   Phase 1, which we intended to complete right away, which was a stationary Mixed Reality in a pavilion, to stage 4, which highlighted the potential of a fully connected ‘Digital Twin’, and consumer facing AR platform.  All of it was to be powered by Microsoft Technology."
          }
        />
      ),
      text3: (
        <ProjectParagraphText
          text={
            "For the first phase, we decided to create a pavilion that would be strategically placed in a position, facing the future development site (now a parking lot).  In the Pavilion, we initially planned on having a physical table, which was either empty or adorned with a simple 3D model (reference this project), and an array of HoloLenses and iPad Pro’s.  When a user put on the headset, a scaled down, and highly detailed model, of the projected development would appear on the table, and be brought to life."
          }
        />
      ),
      text4: (
        <ProjectParagraphText
          text={
            "To promote Microsoft’s Azure and Mesh Technology, we planned on leverage Remote Rendering for high quality, low latency display of 3D models, and Azure Spatial Anchors, and Mesh Multiuser sync for multi user collaboration.  Through this, multiple users in the environment, could be part of the experience at the same time, either in the same room, or halfway around the world.  In addition, through this technology we enabled a guide to be able to guide a wearer through the experience, while both looking at the same thing."
          }
        />
      ),
      text5: (
        <ProjectParagraphText
          text={
            "We also intended on leveraging Microsoft’s MRTK in order to set up some of the different UI/UX interactions while interacting with the model.  Including, showcasing the guide’s gaze position, buttons, sliders, tooltips, and even elasticity for more realistic physics movements."
          }
        />
      ),
      text6: (
        <ProjectParagraphText text="When the user was satisfied interacting with the tabletop model, we conceptualized an experience — where the user could grab the model - throw it with inertia like a frisbee.  And through that - the model would transition in front of them, to a life-sized scale.  Also given the placement of the pavilion the user would also see the development in its future projected site. <br /> <br />  To handle the transition we planned on using Windows Scene System to seamlessly load the model full scale, while also attaching a new set of markers.  We also planned on outfitting the pavilion glass walls with unique patterns to help keep the 3D model stable while walking around the space." />
      ),
      text7: (
        <ProjectParagraphText text="Lastly, in anticipation of future stages, we planned on connected analytics that we gathered through this experience and share it on Azure Digital Twins. This would enable us to gather information on places that peaked a users interest, and give us a seamless understanding of both the virtual and physical spaces in the property, which could eventually lead to a backend for the property and consumer facing AR experience." />
      ),

      text8: (
        <ProjectParagraphText text="I was particularly interested in the digital twin aspect of the project, where I conducted a variety of research and learned more about different techniques in which development projects, utilized collected data, and in the case of MIT City Scale, used AR to help visualize and enhance urban planning.  I also learned more bout companies, such as the Aria Network, which were partnering with real estate companies - in order to bring engaging consumer experiences, as marketing pieces to properties." />
      ),
      text9: (
        <ProjectParagraphText text="Once we had approval to begin working on the project with the client, I began focusing on the user experience.  I started out by breaking the project up into different areas of research,  including visually understanding different approaches taken on the HoloLens for Architecture Visualization, digital twin data layers, selection mechanisms and other interesting UI that fascinated me.  With this I created a visual moldboard to excite the team and help us brainstorm the immense possibilities of designing on the platform." />
      ),
      text10: (
        <ProjectParagraphText
          text="I also began reading a variety of research papers, which I continued throughout the UX process, to help inform my design decisions: 
        "
        />
      ),
      text11: (
        <ProjectParagraphText
          text="With a foundation of research, we started on a user flow, which outlined the functionality and interaction of the app, including the ability to place the AR Object utilizing Azure Spatial Anchors, Click MRTK Buttons for more property information, and the ability to transition from a tabletop model to real life scale.  
        "
        />
      ),
      text12: (
        <ProjectParagraphText
          text="After we created a consistent user flow, began exploring wireframes, which underwent three main stages. The first set of wireframes focused on a few core areas including.   
        "
        />
      ), //list follows this text
      text13: (
        <ProjectParagraphText text="After receiving feedback on the first draft we started on the second iteration of the UX, some of the main changes of this draft, included:    " />
      ), // list follows this text

      text14: (
        <ProjectParagraphText text="At the same time the UI team was crafting incredible 3D interfaces based in tandem with our UX and research where they conceptualized different experiences, and made the project feel alive. Some of the elements they were exploring including, what the pavilion (it’s 3D markers), table and virtual city would look like.   How the hand grab interaction would work.  And lastly, I remember an interesting design discussion over whether or not the control panel would follow the user, we worked closely with the UI team to envision different solutions." />
      ),
      text15: (
        <ProjectParagraphText
          text="After witnessing the work of the UI team and there ability too spatially concept and understand the UI Designs, I noticed the drawbacks and limitations for not understanding how to work in 3D software.  Since Sketch is a 2D design software its nature restricted megrim understanding how a design would feel in a true 3D/ or AR environment. (Bezi solves this…)
        "
        />
      ),

      text16: (
        <ProjectParagraphText
          text="Even more so, I realized that the process between designer and developers in the company, was way to black and white.  We would design a set of state screens, and the developers would copy it verbatim.  But its within the process that we were skipping that a design could be even further understood, fleshed, conceptualized, interactivity, purpose in the flow and connection between the designs, all of which added a layer of magic to the design, turning a regular static app into an experience.  At this point I realized that being a designer without the skill set of knowing how to build an AR app, to test out the work, and design considering the full functionality of the app was like being an artist who didn’t know how to draw. You aren’t really able to design.  Especially in new fields of Augmented Reality, it requires the skillset, because things are no longer static they are moving, like objects in the real world… and this planted a seed for my future dive into Unity and AR design. 
        "
        />
      ),
      text17: (
        <ProjectParagraphText
          text="I began working on a new project, when Jack the teams other UX designer and team kept focusing on this work.  The team continued to progress the UX and the UI.  For example the hierarchy of the properties being presented was shifted around specific categories, such as “Entertainment”, or “Wellness”, and the categories would activate environment ‘Tooltips’, which  when clicked, would highlight the building and associated panel.   
        "
        />
      ),
      text18: (
        <ProjectParagraphText text="The experience had a successful launch at the OCVibe property with the reception being very well received.  Working with the MRTK toolkit, helped provide a UX framework for future projects.   Looking back at it, I would take a step back from my research backed design decisions and rely more on intuition. Nevertheless, it was amazing getting the chance to work on a consumer facing HoloLens 2 app that served as a powerful tool for Real Estate developers!  I look forward to getting the opportunity to hear your thoughts!" />
      ),
    },
    listItemBlocks: {
      1: "Interaction Modes for Augmented Reality Visualization, discussed the utilization of tangible surfaces in Augmented Reality, and the importance of table based controls, vs RayCasting at far distances. This study reinforced the importance of having hand-touchable buttons in our environment for an intuitive user experience.",
    },
  },
  bookshelfProjectDataDictionary: {
    headerText: <ProjectHeaderText title={"BookShelf"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={
          "Leveraging Augmented Reality to make it easier to browse a bookshelf and learn more about the books in it."
        }
      />
    ),
    icons: (
      <ProjectIcons
        projectIcon1={
          <ProjectIcon
            icon={FaGithub}
            link="https://github.com/Andyagus/BookShelf"
          />
        }
        projectIcon2={
          <ProjectIcon
            icon={FaLinkedin}
            link="https://www.linkedin.com/posts/andyagus_augmentedreality-interfaces-questpro-activity-7123751214772584449-wtbM?utm_source=share"
          />
        }
      />
    ),
    videos: {
      1: (
        <ProjectVideo
          video={book_video1}
          caption={
            "Full bookshelf demo, showcasing the ability to browse the bookshelf, and learn more about the books in it."
          }
        />
      ),
      2: (
        <ProjectVideo
          video={book_video2}
          caption={"Changing book to active material on change"}
        />
      ),
      3: (
        <ProjectVideo
          video={book_video3}
          caption={
            "Moving world space canvas, and changing book cover to match active book"
          }
        />
      ),
      4: (
        <ProjectVideo
          video={book_video4}
          caption={
            "Expanded canvas from a selected book to showcase more information"
          }
        />
      ),
      5: (
        <ProjectVideo
          video={book_video5}
          caption={
            "Exploring future interactions by coupling digital and physical elements"
          }
        />
      ),
      6: (
        <ProjectVideo
          video={book_video6}
          caption={
            "Frozen screen and laggy recording during passthrough-session"
          }
        />
      ),
    },
    images: {
      1: (
        <ProjectImage
          image={book_image1}
          caption={"Paper prototypes exploring possible interactions"}
        />
      ),
      2: (
        <ProjectImage
          image={book_image2}
          caption={"UI Panels based on current book interaction"}
        />
      ),
      3: (
        <ProjectImage
          image={book_image3}
          caption={
            "Rendering of a large panel on a wall, used Quest Link to accurately position content in play mode."
          }
        />
      ),
      4: (
        <ProjectImage
          image={book_image4Sub}
          caption={
            "Utilizing Spatial Anchors to accurately position content in space"
          }
        />
      ),
    },
  },
  museumProjectDataDictionary: {
    headerText: <ProjectHeaderText title={"Museum"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={
          "Exploring ways to use Augmented Reality in order to enhance the Museum-Goers experience of looking at and experiencing art."
        }
      />
    ),
    icons: (
      <ProjectIcons
        projectIcon1={
          <ProjectIcon
            icon={FaGithub}
            link="https://github.com/Andyagus/Museum"
          />
        }
        projectIcon2={
          <ProjectIcon
            icon={FaLinkedin}
            link="https://www.linkedin.com/posts/andyagus_augmentedreality-interfaces-quest3-ugcPost-7140086378096160768-IxZX/"
          />
        }
      />
    ),
    media: {
      1: (
        <ProjectVideo
          video={museumContent1}
          caption={
            "Rough Museum video: Couldn't get the whole because experience because stopped me"
          }
        />
      ),
      2: (
        <ProjectImage
          image={museumContent2}
          caption={
            "Reiteration of my map the day at the Met, lost the real copy on a bike"
          }
        />
      ),
      3: (
        <ProjectVideo
          video={museumContent3}
          caption={"3D scan of the room I planned on implementing project"}
        />
      ),
      4: (
        <ProjectVideo
          video={museumContent4}
          caption={
            "Using distance raycaster to select objects in my environment"
          }
        />
      ),
      5: (
        <ProjectVideo
          video={museumContent5}
          caption={"Implemented info cards to display detail about items"}
        />
      ),
      6: (
        <ProjectVideo
          video={museumContent6}
          caption={"Up close wall banner instantiated below wearer"}
        />
      ),
      7: (
        <ProjectImage
          image={museumContent7}
          caption={"UI Designs exported exported from Sketch"}
        />
      ),
      8: (
        <ProjectVideo
          video={museumContent8}
          caption={"Changing the active material when arrow is pressed "}
        />
      ),
      9: (
        <ProjectVideo
          video={museumContent9}
          caption={
            "Small banners helping user focus on element and providing more detail"
          }
        />
      ),
      10: (
        <ProjectVideo
          video={museumContent10}
          caption={
            "Large Panel gives more information on item that user is focused on"
          }
        />
      ),
      11: (
        <ProjectVideo
          video={museumContent11}
          caption={"Treasure chest animation holding ewer 3D Object"}
        />
      ),
      12: (
        <ProjectVideo
          video={museumContent12}
          caption={
            "Sitting at T   he American Wing Cafe in the Met testing out placing the Ewer"
          }
        />
      ),
    },
  },
  saladBarProjectDataDictionary: {
    headerText: <ProjectHeaderText title={"SaladBar"} />,
    subcaptionText: (
      <ProjectSubcaptionText
        text={"Enhancing the in-person SaladBar ordering experience"}
      />
    ),
    icons: (
      <ProjectIcons
        projectIcon1={
          <ProjectIcon
            icon={FaGithub}
            link="https://github.com/Andyagus/SaladBar"
          />
        }
        projectIcon2={
          <ProjectIcon
            icon={FaLinkedin}
            link="https://www.linkedin.com/feed/update/urn:li:activity:7149148723493711872/"
          />
        }
      />
    ),
    media: {
      1: (
        <ProjectVideo
          video={saladContent1}
          caption={"Full concept of salad bar ordering experience"}
        />
      ),
      2: (
        <ProjectImage
          image={saladContent2}
          caption={
            "Various design concepts throught Sketch aimed out laying out different areas of experience"
          }
        />
      ),
      3: (
        <ProjectVideo
          video={saladContent3}
          caption={
            "Raycast sandbox, using center eye gaze raycast to activate element"
          }
        />
      ),
      4: (
        <ProjectVideo
          video={saladContent4}
          caption={
            "Adding food item, and transitioning the menu between various ingredient steps."
          }
        />
      ),
      5: (
        <ProjectVideo
          video={saladContent5}
          caption={"Filtering the toppings by category"}
        />
      ),
      6: (
        <ProjectVideo
          video={saladContent6}
          caption={"Food information banner turns into a checkmark on add"}
        />
      ),
      7: (
        <ProjectVideo
          video={saladContent7}
          caption={
            "User gaining reward points, when hovering over a Miso Salmon, and then adding it to salad"
          }
        />
      ),
      8: (
        <ProjectVideo
          video={saladContent8}
          caption={
            "Scrolling through Checkout Screen to review order, (lots of shredded kale)"
          }
        />
      ),
      9: (
        <ProjectImage
          image={saladContent9}
          caption={"Employee at Green Cafe trying out the Quest 3 headset"}
        />
      ),
    },
  },
};
