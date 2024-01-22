//react components
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {FaLongArrowAltLeft } from "react-icons/fa";


//project pages
import FirstWomanProject from "./Project/FirstWomanProject.tsx";
import OcVibeProject from "./Project/OcVibeProject.tsx";

//data for all projects
import ProjectDataFetch, {ProjectData} from './Project/ProjectData.tsx'


export default function Project() {
  let { id } = useParams();
  const [currentProject, setCurrentProject] = useState<React.ReactNode>(null);

  useEffect(() => {
    switch (id) {
      case "fw":
        setCurrentProject(<FirstWomanProject data={ProjectData.firstWomenDataDictionary}/>);
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
      {<ProjectDataFetch />}
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
