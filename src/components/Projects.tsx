import ProjectCard from "../components/ProjectCard.tsx";
import firstWomanImage from "../assets/images/first-woman.png";
import firstWomanVideo from "../assets/images/fw-1.mov";

import ocvibeImage from "../assets/images/oc.png";
import ocvibeVideo from "../assets/images/ocVibeVideo.mov";

import bookshelfImage from "../assets/images/bookshelfImage.png";
import bookshelfVideo from "../assets/images/bookShelfVideo.mp4";
export default function Projects() {

  return (
    <>
      <div className="mt-40 m-5 w-4/5 mx-auto">
        <div className="relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <ProjectCard image={firstWomanImage} video={firstWomanVideo} title={"NASA: First Woman"} 
                         description={"Capturing attention of the next generation " +
                             "of explorers who will return to the Moon."}/>
            <ProjectCard image={ocvibeImage} video={ocvibeVideo} title={"ocV!be Smart City"}
                         description={"HoloLens project with Microsoft, positioning " +
                             "OCV!ibe as “experience- first” destination"}/>

            <ProjectCard image={bookshelfImage} video={bookshelfVideo} title={"BookShelf"}
                         description={"Exploring the bookshelf, contents-within it, " +
                             "without having to pick up each book."}/>
            
          </div>
        </div>
      </div>
    </>
  );
}
