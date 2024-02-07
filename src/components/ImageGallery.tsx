import pic1 from "../assets/images/About/ProfilePic1.png";
// import pic2 from "../assets/images/About/pic2.jpg";

// import ProfilePic2 from "../assets/images/About/profilePic2.png";

// import image2 from "../assets/images/oc.png";
// import image3 from "../assets/images/testimage.png";
import { useEffect, useState } from "react";
// import ProjectSubcaptionText from "./Project/projectComponents/ProjectSubcaptionText";
const images = [pic1, pic1, pic1];

export default function ImageGallery() {
  const [activeImage, setActiveImage] = useState(images[0]);
  // const [prevImage, setPrevImage] = useState(images[0])

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index of the next image
      const currentIndex = images.indexOf(activeImage);
      const nextIndex = (currentIndex + 1) % images.length;

      // Set the next image as the activeImage
      setActiveImage(images[nextIndex]);
      // setPrevImage(activeImage);
    }, 5000); // Switch images every 5 seconds

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [activeImage]);

  // const HandleImageClick = (imageString: string) => {
  //   setActiveImage(imageString);
  //   // setPrevImage(activeImage);
  // };

  //

  return (
    // transition-opacity duration-300

    <div>
      <img
        src={activeImage}
        className={`mt-10 mx-auto rounded-xl overflow-hidden object-cover shadow-lg shadow-gray-500 max-h-72 lg:max-h-full lg:mt-20 "
      }`}
        alt="Profile Pic"
      />
      {/* <ProjectSubcaptionText text="Picture of me in sweater" /> */}
      {/*button grid*/}
      {/* <div className="mt-5">
        <div className={"grid grid-flow-col gap-3 max-h-0.5 max-w-20 mx-auto"}>
          {images.map((image) => (
            <img
              className={`rounded-xl w-24 h-24 object-cover  ${
                activeImage === image ? "opacity-100" : "opacity-50"
              } hover:opacity-100 transition-opacity duration-300 ease-in-out`}
              onClick={() => HandleImageClick(image)}
              src={image}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
