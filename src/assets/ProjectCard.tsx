// import React, { Component } from 'react';
import { useState } from "react";
import { useEffect } from "react";

interface ProjectCardProps {
  // Props here
  image: string;
  video: string;
  title: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { image, video, title, description } = props;

  const handleScroll = () => {
    const scrollY = window.scrollY; // Don't get confused by what's scrolling - It's not the window
    if (scrollY > 10 && scrollY < 200) {
      if (title == "NASA: First Woman") {
        setIsHovered(true);
      }
    } else if (scrollY > 240 && scrollY < 400) {
      if (title == "ocV!be Smart City") {
        setIsHovered(true);
      }
    } else if (scrollY > 300 && scrollY < 340) {
      if (title == "BookShelf") {
        setIsHovered(true);
      }
    } else {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false); // Set isHovered to false by default
  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
        className="group cursor-pointer bg-white rounded-xl 
            shadow-md overflow-hidden relative "
      >
        <div>
          {isHovered ? (
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
              alt="NASA: First Woman"
            />
          )}
        </div>

        <div className="bg">
          <div
            className={`absolute bottom-0 mb-5 p-4 bg-white bg-opacity-90 rounded-xl 
                shadow-lg w-full max-w-[260px] md:max-w-xs lg:max-w-sm mx-auto left-0 right-0 ${
                  isHovered ? "opacity-90" : "opacity-0"
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
    </div>
  );
}
