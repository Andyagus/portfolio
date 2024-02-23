import ProjectCard from "../components/ProjectCard.tsx";
import firstWomanImage from "../assets/images/project/firstWoman/preview/1projectPreviewImage.png";
import firstWomanVideo from "../assets/images/project/firstWoman/preview/1projectPreviewVideo.mp4";

import ocvibeImage from "../assets/images/project/ocVibe/preview/1projectPreview.png";
import ocvibeVideo from "../assets/images/project/ocVibe/preview/1projectPreview.mp4";

// import bookshelfImage from "../assets/images/project/bookshelf/preview/1projectpreview.png";
import bookshelfImage from "../assets/images/project/bookshelf/preview/projectPreview2.png";
import bookshelfVideo from "../assets/images/project/bookshelf/preview/1projectPreview.mp4";

// import museumPreviewImage from "../assets/images/project/museum/preview/museumPreviewImage.png";
import museumPreviewImage from "../assets/images/project/museum/preview/museumPreviewImage2.png";
import museumPreviewVideo from "../assets/images/project/museum/preview/museumPreviewVideo.mp4";

import saladBarPreviewVideo from "../assets/images/project/saladBar/preview/previewVideo.mp4";
// import saladBarPreviewImage from "../assets/images/project/saladBar/preview/previewImage.jpeg";
import saladBarPreviewImage from "../assets/images/project/saladBar/preview/SaladBarPreview.png";

export default function Projects() {
  return (
    <>
      <div className="mt-32 m-5 w-4/5 mx-auto">
        <div className="relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <ProjectCard
              image={firstWomanImage}
              video={firstWomanVideo}
              title={"NASA: First Woman"}
              description={
                "Capturing attention of the next generation " +
                "of explorers who will return to the Moon."
              }
            />
            <ProjectCard
              image={ocvibeImage}
              video={ocvibeVideo}
              title={"ocV!be Smart City"}
              description={
                "HoloLens project with Microsoft, positioning " +
                "OCV!ibe as “experience- first” destination"
              }
            />
            <ProjectCard
              image={bookshelfImage}
              video={bookshelfVideo}
              title={"BookShelf"}
              description={
                "Exploring the bookshelf, contents-within it, " +
                "without having to pick up each book."
              }
            />
            <ProjectCard
              image={museumPreviewImage}
              video={museumPreviewVideo}
              title={"Museum"}
              description={
                "Enhancing the Museum-goers experience of looking art by providing more information"
              }
            />
            <ProjectCard
              image={saladBarPreviewImage}
              video={saladBarPreviewVideo}
              title={"SaladBar"}
              description={
                "Improving the in-person experience of ordering a salad with information and gamification"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
