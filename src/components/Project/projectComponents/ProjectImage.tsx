interface ImageProps {
  image: string;
}

export default function ProjectImage({ image }: ImageProps) {
  return (
    <div className="w-full">
      <img
        src={image}
        alt="Header"
        className="w-full max-h-[450px] shadow-lg object-cover overflow-hidden rounded-xl"
      />
    </div>
  );
}
