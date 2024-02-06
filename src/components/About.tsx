// import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from 'react-icons/fa';

import ImageGallery from "./ImageGallery.tsx";

export default function About() {
  return (
    <div className="mt-20 mx-auto p-6 md:max-w-6xl m-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="lg:col-span-1 lg:order-2">
          <ImageGallery />
        </div>
        <div className="lg:col-span-2 lg:mr-52">
          <div className="mt-10 mb-4 text-2xl font-semibold">About Me</div>
          <div className="text-base text-gray-500">
            I am deeply interested in Augmented Reality and its potential to
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
            we interact with our environment.
          </div>
        </div>
      </div>
      <div className="flex mr-">
        <button className="mt-8 bg-gray-400 text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
          Email Me
        </button>
        <button className="ml-10 mt-8 bg-gray-400 text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
}
