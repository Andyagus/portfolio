import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  // Props here
  image: string;
  video: string;
  title: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { image, video, title, description } = props;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const [isHovered, setIsHovered] = useState(false); // Set isHovered to false by default
  const [isMobileScroll, setIsMobileScroll] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Don't get confused by what's scrolling - It's not the window
    if (scrollY > 0 && scrollY < 200) {
      if (title == "NASA: First Woman") {
        setIsMobileScroll(true);
      } else {
        setIsHovered(false);
      }
    } else if (scrollY > 200 && scrollY < 250) {
      if (title == "ocV!be Smart City") {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    } else if (scrollY > 600 && scrollY < 685) {
      if (title == "BookShelf") {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    } else if (scrollY > 860 && scrollY < 960) {
      if (title == "Museum") {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    } else if (scrollY > 1200 && scrollY < 1300) {
      if (title == "SaladBar") {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    } else {
      setIsMobileScroll(false);
    }
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // setIsMobileScroll(mediaQuery.matches);

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
    const handler = () => setIsMobileScroll(mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  let formattedString = title
    .replace(/\s+/g, "-")
    .replace(/:/g, "")
    .replace("!", "i")
    .toLowerCase();

  return (
    <div>
      <Link to={`/projects/${formattedString}`}>
        <div
          onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
          className="group cursor-pointer bg-white rounded-xl 
            shadow-md overflow-hidden relative "
        >
          <div>
            {isHovered && !isMobile ? (
              <video
                className="object-cover w-full h-96"
                src={video}
                autoPlay
                loop
                muted
              ></video>
            ) : (
              <img
                className="object-cover w-full h-96"
                src={image}
                alt={title}
              />
            )}
          </div>

          <div className="bg">
            <div
              className={`absolute bottom-0 mb-5 p-4 bg-white bg-opacity-90 rounded-xl 
                shadow-lg w-full max-w-[260px] md:max-w-xs lg:max-w-sm mx-auto left-0 right-0 ${
                  isHovered || isMobileScroll ? "opacity-90" : "opacity-0"
                } duration-500 `}
            >
              <span
                className="text-base
                  md:text-base lg:text-lg font-bold"
              >
                {title}
              </span>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 mt-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
