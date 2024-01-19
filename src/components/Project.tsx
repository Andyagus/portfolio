//react components
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//project pages
import FirstWomanProject from "./Project/FirstWomanProject.tsx";
import OcVibeProject from "./Project/OcVibeProject.tsx";

//project components
import ProjectImage from "./Project/projectComponents/ProjectImage.tsx";
import ProjectVideo from "./Project/projectComponents/ProjectVideo.tsx";
import ProjectHeaderText from "./Project/projectComponents/ProjectHeaderText.tsx";
import ProjectSubcaptionText from "./Project/projectComponents/ProjectSubcaptionText.tsx";
import ProjectIcon from "./Project/projectComponents/ProjectIcon.tsx";

//project assets
import image1 from "../assets/images/project/firstWoman/testimage.png";
import image2 from "../assets/images/project/firstWoman/fw2Test.png";
import video1 from "../assets/images/fw-1.mov";

const firstWomanAssetDictionary = {
  image1: image1,
  image2: image2,
  video1: video1,
};

//…icons
import { FaGithub, FaLinkedin, FaLongArrowAltLeft } from "react-icons/fa";
import ProjectParagraphText from "./Project/projectComponents/ProjectParagraphText.tsx";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Project() {
  let { id } = useParams();
  const [currentProject, setCurrentProject] = useState<React.ReactNode>(null);

  useEffect(() => {
    switch (id) {
      case "fw":
        setCurrentProject(<FirstWomanProject />);
        break;
      case "oc":
        setCurrentProject(<OcVibeProject />);
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <div className="mt-24  mx-auto p-6">
        {/*go back arrow*/}
        <div className="flex items-center p-4 lg:pl-16">
          <FaLongArrowAltLeft className="text-gray-500 text-lg" />
          <span className="text-sm font-semibold ml-2 text-gray-700">
            Back to All Projects
          </span>
        </div>

        {/*//main content*/}
        <div className="max-w-xl ml-5 md:max-w-4xl lg:mx-auto">
          {/*//header*/}
          {<ProjectHeaderText title={"Bookshelf"} />}
          {
            <ProjectSubcaptionText
              text={
                "Enhacing the book finding experience by providing access to additional\n" +
                "          information while searching for your book."
              }
            />
          }
          {/*//social icons */}
          <div className="flex justify-left space-x-4 mt-4 mb-4">
            {<ProjectIcon icon={FaGithub} />}
            {<ProjectIcon icon={FaLinkedin} />}
          </div>
          {
            <ProjectImage
              image={firstWomanAssetDictionary["image1"]}
              caption={""}
            />
          }
          {/*//body*/}
          {
            <ProjectParagraphText
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation " +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
                "sunt in culpa qui officia deserunt mollit anim id est laborum"
              }
            />
          }
          {
            <ProjectImage
              image={firstWomanAssetDictionary["image2"]}
              caption={"Second test image thanks"}
            />
          }
          {
            <ProjectParagraphText
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation " +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
                "sunt in culpa qui officia deserunt mollit anim id est laborum"
              }
            />
          }
          //video needs own component --
          {
            <ProjectVideo
              video={firstWomanAssetDictionary["video1"]}
              caption={"First Women Environment Video"}
              autoplay={true}
            />
          }
        </div>
      </div>
    </>
  );
}
