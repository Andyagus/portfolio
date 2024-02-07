// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import ProjectIcon from "./Project/projectComponents/ProjectIcon";
// import ProjectIcons from "./Project/projectComponents/ProjectIcons";
// import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="h-24 w-full border-t border-grey-500 flex">
        <div className="flex-1 flex items-center justify-start">
          {/* <div className="text-sm md:text-base md:ml-36 ml-9">
            <ProjectIcons
              projectIcon1={
                <ProjectIcon icon={MdEmail} link="mailto:redagus@gmail.com" />
              }
              projectIcon2={
                <ProjectIcon
                  icon={FaGithub}
                  link="https://github.com/andyagus/"
                />
              }
              projectIcon3={
                <ProjectIcon
                  icon={FaLinkedin}
                  link="https://www.linkedin.com/in/andyagus/"
                />
              }
              projectIcon4={
                <ProjectIcon
                  icon={FaInstagram}
                  link="https://www.instagram.com/andyexperiments"
                />
              }
            />
          </div> */}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="text-sm md:text-base lg:mt-6 opacity-85 mr-9 md:mr-36">
            Andy Agus © 2023. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
