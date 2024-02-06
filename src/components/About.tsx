// import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from 'react-icons/fa';

import { Link } from "react-router-dom";
import ImageGallery from "./ImageGallery.tsx";
import ProjectHeaderText from "./Project/projectComponents/ProjectHeaderText.tsx";
import ProjectSubcaptionText from "./Project/projectComponents/ProjectSubcaptionText.tsx";
import ProjectParagraphText from "./Project/projectComponents/ProjectParagraphText.tsx";

export default function About() {
  return (
    <div className="mt-24  mx-auto p-6">
      <div className="max-w-xl ml-5 md:max-w-4xl lg:mx-auto">
        {/*go back arrow*/}
        <Link
          to={"/"}
          className="flex items-center group lg:ml-200 py-2"
        ></Link>
        <br />
        <ProjectHeaderText title="About Me" />
        <ProjectSubcaptionText text="Augmented Reality designer and prototyper dedicated to crafting technology that enhances our world" />
        <br />
        <ImageGallery />
        <br />
        <br />
        <ProjectParagraphText
          text="I am deeply interested in Augmented Reality and its potential to
            improve the world we live in. In 2020, I chose to pivot from
            entrepreneurship to concentrate fully on AR, embarking on a learning
            journey with Unity and embracing a role as a UX designer at Bully
            Entertainment. This transition allowed me to delve into the nuances
            of AR technology, marrying my creative skills with technical
            knowledge to design immersive user experiences.
            <br /> <br />
            My commitment to AR extends beyond my professional work. I lead the
            New York Augmented Reality meetup and curate the augmented report
            newsletters, both of which have become key resources for industry
            insights and community engagement. These platforms allow me to share
            knowledge, foster discussions, and stay at the forefront of AR
            innovations.
            <br /> <br />
            More recently, I have been focusing on developing interactive
            prototypes. This pursuit, now my full-time endeavor, fuels my
            excitement for the field. My aim is to work with an exceptional team
            to create meaningful AR products that make a real difference in how
            we interact with our environment."
        />
        <br /> <br />
        <div className="text-base text-gray-500">
          Email me at{" "}
          <a
            href="mailto:redagus@gmail.com"
            className="text-red-600 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
          >
            Redagus@gmail.com
          </a>{" "}
          {"   ||   "}
          <a
            href="mailto:redagus@gmail.com"
            className="text-red-500 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
          >
            View my Resume (PDF)
          </a>
          {"   ||   "}
          <a
            href="mailto:redagus@gmail.com"
            className="text-red-400 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>

    // <div className=" mt-24  mx-auto p-6 md:max-w-6xl m-12">
    //   <div className="grid grid-cols-1 lg:grid-cols-3 ">
    //     <div className="lg:col-span-1 lg:order-2">
    //       <ImageGallery />
    //     </div>
    //     <div className="lg:col-span-2 lg:mr-52">
    //       <div className="mt-10 mb-4 text-3xl font-semibold">About Me</div>
    //       <div className="text-base text-gray-500">

    //       </div>
    //       <br />
    //       <div className="text-base text-gray-500">
    //         Email me at{" "}
    //         <a
    //           href="mailto:redagus@gmail.com"
    //           className="text-red-600 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
    //         >
    //           Redagus@gmail.com
    //         </a>{" "}
    //         {"   ||   "}
    //         <a
    //           href="mailto:redagus@gmail.com"
    //           className="text-red-500 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
    //         >
    //           View my resume
    //         </a>
    //         {"   ||   "}
    //         <a
    //           href="mailto:redagus@gmail.com"
    //           className="text-red-400 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
    //         >
    //           LinkedIn
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
