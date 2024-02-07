//react components
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaLongArrowAltLeft } from "react-icons/fa";

//project pages
import FirstWomanProject from "./Project/FirstWomanProject.tsx";
// import FirstWomanProject2 from "./Project/FirstWomanProject2.tsx";
// import OcVibeProject from "./Project/OcVibeProject.tsx";
import BookshelfProject from "./Project/BookshelfProject.tsx";

//data for all projects
import { ProjectData } from "./Project/ProjectData.tsx";
import { MuseumProject } from "./Project/MuseumProject.tsx";
import SaladBarProject from "./Project/SaladBarProject.tsx";
import OcVibeProject2 from "./Project/OcVibeProject2.tsx";
import FirstWomanProject3 from "./Project/FirstWomanProject3.tsx";
import FirstWomanProjectHidden from "./Project/FirstWomanProjectHidden.tsx";

export default function Project() {
  let { id } = useParams();
  const [currentProject, setCurrentProject] = useState<React.ReactNode>(null);

  useEffect(() => {
    switch (id) {
      case "nasa-first-woman":
        setCurrentProject(
          <FirstWomanProject3 data={ProjectData.firstWomenDataDictionary3} />
        );
        break;
      //reference...
      case "123z":
        setCurrentProject(
          <FirstWomanProject data={ProjectData.firstWomenDataDictionary} />
        );
        break;
      case "fw":
        setCurrentProject(
          <FirstWomanProjectHidden
            data={ProjectData.firstWomenDataDictionary3}
          />
        );
        break;
      case "ocvibe-smart-city":
        setCurrentProject(
          <OcVibeProject2 data={ProjectData.ocVibeDataDictionary} />
        );
        break;
      case "bookshelf":
        setCurrentProject(
          <BookshelfProject data={ProjectData.bookshelfProjectDataDictionary} />
        );
        break;
      case "museum":
        setCurrentProject(
          <MuseumProject data={ProjectData.museumProjectDataDictionary} />
        );
        break;
      case "saladbar":
        setCurrentProject(
          <SaladBarProject data={ProjectData.saladBarProjectDataDictionary} />
        );
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <div className="mt-24  mx-auto p-6">
        <div className="max-w-xl ml-5 md:max-w-4xl lg:mx-auto">
          {/*go back arrow*/}
          <Link to={"/"} className="flex items-center group lg:ml-200 py-2">
            <FaLongArrowAltLeft className="text-gray-500 text-lg group-hover:text-gray-400 duration-200" />
            <div className="text-sm font-semibold ml-2 text-gray-700 group-hover:text-gray-400 duration-200">
              Back to All Projects
            </div>
          </Link>
          {currentProject}
        </div>
      </div>
    </>
  );
}
