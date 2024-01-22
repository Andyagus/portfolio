import ProjectImage from "./projectComponents/ProjectImage.tsx";
import ProjectVideo from "./projectComponents/ProjectVideo.tsx";
import ProjectHeaderText from "./projectComponents/ProjectHeaderText.tsx";
import ProjectSubcaptionText from "./projectComponents/ProjectSubcaptionText.tsx";
import ProjectIcons from "./projectComponents/ProjectIcons.tsx";
import ProjectIcon from "./projectComponents/ProjectIcon.tsx";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText.tsx";
import FetchFirstWomanText from "../../assets/images/project/firstWoman/textblocks/FirstWomanText.tsx";

import {
  FaAppStoreIos,
  FaSafari,
  FaGithub,
  FaAward,
  FaLinkedin,
  FaLongArrowAltLeft,
} from "react-icons/fa";

//first women data
//images- importing as array of images
import headerImage from "../../assets/images/project/firstWoman/images/Header/1Header.png";
import image2 from "../../assets/images/project/firstWoman/images/Body/2Reach.png";
import image3 from "../../assets/images/project/firstWoman/images/Body/3Scope.png";
import image4 from "../../assets/images/project/firstWoman/images/Body/4MyRoleUXDesigner.png";
import image5 from "../../assets/images/project/firstWoman/images/Body/5UserFlow.png";
import image6 from "../../assets/images/project/firstWoman/images/Body/6StyleGuide.png";
import image7 from "../../assets/images/project/firstWoman/images/Body/7HomePage.png";
import image8 from "../../assets/images/project/firstWoman/images/Body/8ScanNovel.png";
import image9 from "../../assets/images/project/firstWoman/images/Body/9RT.png";
import image10 from "../../assets/images/project/firstWoman/images/Body/10AR Objects.png";
import image11 from "../../assets/images/project/firstWoman/images/Body/11Immersive Environments.png";
import image12 from "../../assets/images/project/firstWoman/images/Body/12Interactivity.png";
import image13 from "../../assets/images/project/firstWoman/images/Body/13Challenges.png";
import image14 from "../../assets/images/project/firstWoman/images/Body/14Sketch SetUp Symbols.png";
import image15 from "../../assets/images/project/firstWoman/images/Body/15WebAR SpeechFlow.png";
import image16 from "../../assets/images/project/firstWoman/images/Body/16WebAR Sketches for Main Functionality.png";
import image17 from "../../assets/images/project/firstWoman/images/Body/17MicrositeCards.png";
import image18 from "../../assets/images/project/firstWoman/images/Body/18Microsite Main.png";
import image19 from "../../assets/images/project/firstWoman/images/Body/19Bye Header.png";

//videos
import headerVideo from "../../assets/images/project/firstWoman/videos/Header/HeaderVideo1.mov";
import RTVideo from "../../assets/images/project/firstWoman/videos/Body/1RT.mov";
import InteractivityVideo from "../../assets/images/project/firstWoman/videos/Body/2Interactive.mov";
import WebARVideo from "../../assets/images/project/firstWoman/videos/Body/3webar.mov"
import MicrositeVideo from "../../assets/images/project/firstWoman/videos/Body/4Microsite.mov"
import CallieOutro from "../../assets/images/project/firstWoman/videos/Body/5callieOutro.mov"
//text blocks
import { ProjectDataText } from "../../assets/images/project/firstWoman/textblocks/FirstWomanText.tsx";

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
      //header image
      headerImage1: (
        <ProjectImage
          image={headerImage}
          caption={"this is the header image"}
        />
      ),
      image2: (
        <ProjectImage
          image={image2}
          caption={"Vast reach across a variety of different channels"}
        />
      ),
      image3: <ProjectImage image={image3} caption={"Flow: Showcasing the Variety of Components and Interconnected Elements of the Graphic Novel"} />,
      image4: <ProjectImage image={image4} caption={"scope"} />,
      image5: <ProjectImage image={image5} caption={"scope"} />,
      image6UI: <ProjectImage image={image6} caption={"scope"} />,
      image7: <ProjectImage image={image7} caption={"Native App Screenshots: Homepage Grid Features Important App Elements"} />,
      image8: <ProjectImage image={image8} caption={"scope"} />,
      image9: <ProjectImage image={image9} caption={"scope"} />,
      image10ARObject: <ProjectImage image={image10} caption={"AR Object: Preview of the SLS in Augmented Reality with the 'Core Stage' Clickable Component Selected"} />,
      image11: <ProjectImage image={image11} caption={"scope"} />,
      image12: <ProjectImage image={image12} caption={"scope"} />,
      image13: <ProjectImage image={image13} caption={"Challenges for Achievements: Added the Next Level of Gamification and Interactivity into the App!"} />,
      image14: <ProjectImage image={image14} caption={"asdas"} />,
      image15: <ProjectImage image={image15} caption={"a"} />,
      image16: <ProjectImage image={image16} caption={"a"} />,
      image17: <ProjectImage image={image17} caption={"scope"} />,
      image18: <ProjectImage image={image18} caption={"scope"} />,
      image19: <ProjectImage image={image19} caption={"scope"} />,
    },
    videos: {
      headerVideo: (
        <ProjectVideo
          video={headerVideo}
          caption={
            "Dreamscape: An Overview of the Different Environments to Explore within the App."
          }
          autoplay={true}
          controls={false}
        />
      ),
      RT1: <ProjectVideo video={RTVideo} autoplay={true} caption={"RT Explorations: Cross Team Collaborations to Understand RT's Personality and Visual Appearance."} />,
      Interactivity2: <ProjectVideo video={InteractivityVideo} autoplay={true} caption={"Immersive Environments: Made Interactive, Turning Static into Memorable Experiences, Finding the Rubber Ducks!"}/>,
      WebAR3: <ProjectVideo video={WebARVideo} autoplay={true} caption={"A preview of the 8th Wall, WebAR Experience. (Left) Wireframes Concepting Experience."}/>,
      MicrositeVideo: <ProjectVideo video={MicrositeVideo} autoplay={true} caption={"Fluid Scrolling: Designing with Cards Enabled our team to a Flexible Microsite Experience About Many Topics"}/>,
      CallieOutro: <ProjectVideo video={CallieOutro} autoplay={true} caption={"Stories: Vibrant Colors Fill the Pages of the First Women Graphic Novel, Displayed Here. "}/>

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
      text1: <ProjectParagraphText text={ProjectDataText.text1} />,
      text2: <ProjectParagraphText text={ProjectDataText.text2} />,
      text3: <ProjectParagraphText text={ProjectDataText.text3} />,
      text4: <ProjectParagraphText text={ProjectDataText.text4} />,
      text5: <ProjectParagraphText text={ProjectDataText.text5} />,
      text6: <ProjectParagraphText text={ProjectDataText.text6UI} />,
      // text7: <ProjectParagraphText text={ProjectDataText.text7} />,
      text8Scan: <ProjectParagraphText text={ProjectDataText.text8Scan} />,
      text9RT: <ProjectParagraphText text={ProjectDataText.text9RT} />,
      text10: <ProjectParagraphText text={ProjectDataText.text10} />,
      text11ImmersiveEnvironments: (
        <ProjectParagraphText
          text={ProjectDataText.text11ImmersiveEnvironments}
        />
      ),
      text12: <ProjectParagraphText text={ProjectDataText.text12} />,
      text13: <ProjectParagraphText text={ProjectDataText.text13} />,
      // text14: <ProjectParagraphText text={ProjectDataText.text14} />,
      text15WebAR: <ProjectParagraphText text={ProjectDataText.text15WebAR} />,
      text16: <ProjectParagraphText text={ProjectDataText.text16} />,
      text17: <ProjectParagraphText text={ProjectDataText.text17} />,
      text18: <ProjectParagraphText text={ProjectDataText.text18} />,
      text19: <ProjectParagraphText text={ProjectDataText.text19} />,
      text20: <ProjectParagraphText text={ProjectDataText.text20} />,
      text21: <ProjectParagraphText text={ProjectDataText.text21} />,
    },
  },
};
