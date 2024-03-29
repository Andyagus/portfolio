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
          <div className="mt-10 mb-4 text-3xl font-semibold text-gray-800 opacity-80">
            I'm an Augmented Reality designer and prototyper dedicated to
            crafting technology that enhances our world
          </div>
          <div className="text-base text-gray-500">
            After graduating from Parsons School of Design and founding multiple
            startups — In 2020, I chose to concentrate my career entirely on
            Augmented Reality, embarking on a learning journey with Unity and
            embracing a role as a UX designer at forward-thinking creative
            agency, Bully Entertainment, where our team won the Webby Award for
            our work on “NASA: First Woman”. This transition allowed me to delve
            into the nuances of AR technology, marrying my creative skills with
            technical knowledge to design immersive user experiences.
            <br /> <br />
            My commitment to AR extends beyond my professional work. I lead the
            New York Augmented Reality meetup, which has hosted over 30 events
            to over 2,000 members, and curate the Augmented Report newsletters,
            both of which have become key resources for industry insights and
            community engagement. These platforms allow me to share knowledge,
            foster discussions, and stay at the forefront of AR innovations.
            <br /> <br />
            More recently, I have been focusing on developing interactive
            prototypes. This pursuit fuels my excitement for the field. My aim
            is to work with an exceptional team to create meaningful AR products
            that make a real difference in how we interact with our environment.
          </div>
          <br />
          <div className="text-base text-gray-500">
            Email at{" "}
            <a
              href="mailto:redagus@gmail.com"
              target="_blank"
              className="text-red-600 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              Redagus@gmail.com
            </a>{" "}
            {"   ||   "}
            <a
              href="https://drive.google.com/file/d/11h8YWkzn555FVH924W0w0ld5jCu5QBjR/view?usp=sharing"
              target="_blank"
              className="text-red-600 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              View my Resume
            </a>
            {"   ||   "}
            <a
              href="https://www.linkedin.com/in/andyagus/"
              target="_blank"
              className="text-red-600 hover:text-gray-500 underline hover:underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
