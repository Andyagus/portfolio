import React from "react";
import ProjectSubcaptionText from "./ProjectSubcaptionText.tsx";

interface VideoProps {
  video: string;
  caption: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
}

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export default function ProjectVideo({
  video,
  caption,
  controls = false,
  autoplay = !isMobile(), // Use the isMobile function to set autoplay
  loop = true,
}: VideoProps) {
  return (
    <div className="w-full my-5">
      <video
        src={video}
        controls={controls}
        autoPlay={autoplay}
        muted={true}
        loop={loop}
        className="w-full max-h-[750px] shadow-lg object-cover overflow-hidden rounded-xl"
      />
      <ProjectSubcaptionText text={caption} />
    </div>
  );
}
