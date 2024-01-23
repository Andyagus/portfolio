//react components
import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";

import {FaLongArrowAltLeft } from "react-icons/fa";


//project pages
import FirstWomanProject from "./Project/FirstWomanProject.tsx";
import OcVibeProject from "./Project/OcVibeProject.tsx";

//data for all projects
import {ProjectData} from './Project/ProjectData.tsx'


export default function Project() {
  let { id } = useParams();
  const [currentProject, setCurrentProject] = useState<React.ReactNode>(null);

  useEffect(() => {
    switch (id) {
      case "nasa-first-woman":
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
      <div className="mt-24  mx-auto p-6">
        {/*go back arrow*/}
        <Link to={"/"} className="flex items-center group lg:ml-32 pt-4">
          <FaLongArrowAltLeft className="text-gray-500 text-lg group-hover:text-gray-400 duration-200" />
          <div className="text-sm font-semibold ml-2 text-gray-700 group-hover:text-gray-400 duration-200">
            Back to All Projects
          </div>
        </Link>

        <div className="max-w-xl ml-5 md:max-w-4xl lg:mx-auto">
          {currentProject}
        </div>
      </div>
    </>
  );
}
