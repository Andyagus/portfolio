// import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from 'react-icons/fa';



import ImageGallery from "./ImageGallery.tsx";

export default function About() {
  return (
    <div className="mt-20 mx-auto p-6 md:max-w-6xl m-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="lg:col-span-1 lg:order-2">
            <ImageGallery/>
        </div>
        <div className="lg:col-span-2 lg:mr-52">
          <div className="mt-10 mb-4 text-2xl font-semibold">About Andy</div>
          <div className="text-base text-gray-500">
            Andy is an experienced professional who worked in a variety of
            different industries and entrepreneurial enterprises before defining
            his career into Augmented Reality in 2020.
            <br />
            <br />
            Andy’s foray into AR started out by extending his UX design skills
            in college to apply the work at Bully! Entertainment and then
            furthermore, began extending his network through New York Augmented
            Reality meetups and newsletters.
          </div>
        </div>
      </div>
        <div className="flex mr-">
            <button
                className="mt-8 bg-gray-400 text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
                Email Me
            </button>
            <button
                className="ml-10 mt-8 bg-gray-400 text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
                Download Resume
            </button>
        </div>
    </div>
  );
}
