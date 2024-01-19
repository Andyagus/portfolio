import ProjectImage from "./projectComponents/ProjectImage.tsx";
import ProjectVideo from "./projectComponents/ProjectVideo.tsx";
import ProjectHeaderText from "./projectComponents/ProjectHeaderText.tsx";
import ProjectSubcaptionText from "./projectComponents/ProjectSubcaptionText.tsx";
import ProjectIcons from "./projectComponents/ProjectIcons.tsx";
import ProjectIcon from "./projectComponents/ProjectIcon.tsx";

import {
  FaAppStoreIos,
  FaSafari,
  FaGithub,
  FaAward,
  FaLinkedin,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import ProjectParagraphText from "./projectComponents/ProjectParagraphText.tsx";

//first women data
//images
import headerImage from "../../assets/images/project/firstWoman/images/1Header.png";
import image2 from "../../assets/images/project/firstWoman/images/2Reach.png";
import image3 from "../../assets/images/project/firstWoman/images/3Scope.png";

//videos
import headerVideo from "../../assets/images/project/firstWoman/videos/Header/HeaderVideo1.mov";

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
      headerImage: (
        <ProjectImage
          image={headerImage}
          caption={"this is the header image"}
        />
      ),
      bodyImage1: <ProjectImage image={image2} caption={"reach"} />,
      bodyImage2: <ProjectImage image={image3} caption={"scope"} />,
    },
    videos: {
      headerVideo: (
        <ProjectVideo
          video={headerVideo}
          caption={"Video Snapshots of the Different First Woman Environments"}
          autoplay={true}
        />
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
    paragraphs: {},
  },
};
