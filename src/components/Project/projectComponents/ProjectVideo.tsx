import React, { useState, useEffect } from "react";
import ProjectSubcaptionText from "./ProjectSubcaptionText.tsx";

interface VideoProps {
  video: string;
  caption: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
}

const MOBILE_WIDTH_THRESHOLD = 768; // Define a threshold for mobile devices

export default function ProjectVideo({
  video,
  caption,
  loop = true,
}: VideoProps) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Function to update state based on screen width
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < MOBILE_WIDTH_THRESHOLD);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full my-5">
      <video
        src={video}
        controls={isMobileScreen}
        autoPlay={!isMobileScreen} // Autoplay based on screen size
        muted={true}
        loop={loop}
        className="w-full max-h-[750px] shadow-lg object-cover overflow-hidden rounded-xl"
      />
      <ProjectSubcaptionText text={caption} />
    </div>
  );
}
