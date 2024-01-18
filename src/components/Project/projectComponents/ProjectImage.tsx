import ProjectSubcaptionText from "./ProjectSubcaptionText.tsx";

interface ImageProps {
  image: string;
  caption: string;
}

export default function ProjectImage({ image, caption }: ImageProps) {
  return (
    <div className="w-full my-5">
      <img
        src={image}
        alt="Header"
        className="w-full max-h-[450px] shadow-lg object-cover overflow-hidden rounded-xl"
      />
        {<ProjectSubcaptionText text={caption} />}
    </div>
  );
}
