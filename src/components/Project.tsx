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
import ProjectIcons from "./Project/projectComponents/ProjectIcons.tsx";
import ProjectIcon from "./Project/projectComponents/ProjectIcon.tsx";

//project assets
import image1 from "../assets/images/project/firstWoman/testimage.png";
import image2 from "../assets/images/project/firstWoman/fw2Test.png";
import video1 from "../assets/images/fw-1.mov";
//
// const firstWomanAssetDictionary = {
//   image1: image1,
//   image2: image2,
//   video1: video1,
// };


// PASS IN DATA STRCUTURE

//PROJECT 
// 
//
// const projectData = {
//   title: "Project Title",
//   images: [
//     { src: "image1.jpg", caption: "First Image" },
//     { src: "image2.jpg", caption: "Second Image" },
//     // ... more images
//   ],
//   videos: [
//     // ... video data
//   ],
//   textBlocks: [
//     // ... text data
//   ],
//   // ... other data
// };

in first women project

// nterface ImageData {
//   src: string;
//   caption: string;
// }
//
// interface VideoData {
//   // Define the structure for video data
// }
//
// interface TextBlockData {
//   // Define the structure for text block data
// }
//

// interface ProjectData {
//   title: string;
//   images: ImageData[];
//   videos: VideoData[];
//   textBlocks: TextBlockData[];
//   // ... other fields as needed
// }
//
// interface MyProjectComponentProps {
//   projectData: ProjectData;
// }

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

        <div className="max-w-xl ml-5 md:max-w-4xl lg:mx-auto">
          {currentProject}
        </div>
      </div>
    </>
  );
}
