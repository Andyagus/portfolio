import ProfilePic from '../assets/images/profilePic.png';

export default function About() {
    return (
        <div className="mt-32 mx-auto p-6 max-w-xl md:max-w-4xl lg:max-w-6xl">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-24">
                <div className="ml-8">
                    <h1 className="text-5xl font-semibold my-4">About Andy</h1>
                    <p className="text-lg lg:text-xl">
                        Andy is an experienced professional who worked in a variety of different industries and entrepreneurial enterprises before defining his career in Augmented Reality in 2020. Andy’s journey into AR began by extending his UX design skills from college to work at Bully! Entertainment. Furthermore, he expanded his network through New York Augmented Reality meetups and newsletters.
                    </p>
                    <p className="text-lg lg:text-xl mt-4">
                        With a determination to be involved in the product, Andy started focusing directly on Unity. He has been developing prototypes that explore the potential of Augmented Reality, a domain that is only now beginning to be explored. Andy hopes to apply his design knowledge and game design skills to a company working on creating Augmented Reality tools that can make a positive impact on the world.
                    </p>
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

                {/* Image */}
                <div className="flex justify-center items-center order-first xl:order-last">
                    <img
                        src={ProfilePic} // Replace with your image path
                        alt="Profile"
                        className="max-w-full h-full rounded max-w-96 object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
