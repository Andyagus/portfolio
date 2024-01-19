import ProjectSubcaptionText from "./ProjectSubcaptionText.tsx";

interface VideoProps {
  video: string;
  caption: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
}

export default function ProjectVideo({ video, caption, controls = true, autoplay = false, loop = true}: VideoProps) {
  return (
    <div className="w-full my-5">
      <video
        src={video}
        controls={controls}
        autoPlay={autoplay}
        loop = {loop}
        muted={!autoplay}
        className="w-full max-h-[450px] shadow-lg object-cover overflow-hidden rounded-xl"
      />
        {<ProjectSubcaptionText text={caption} />}
    </div>
  );
}
