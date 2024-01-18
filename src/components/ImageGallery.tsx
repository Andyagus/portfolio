import ProfilePic from "../assets/images/profilePic.png";

import image1 from "../assets/images/first-woman.png";
import image2 from "../assets/images/oc.png";
// import image3 from "../assets/images/testimage.png";
import { useEffect, useState } from "react";
const images = [ProfilePic, ProfilePic,ProfilePic, image1, image2];

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

  const HandleImageClick = (imageString: string) => {
    setActiveImage(imageString);
    // setPrevImage(activeImage);
  };

  //

  return (
    // transition-opacity duration-300

    <div>
      <img
        src={activeImage}
        className={`mt-10 mx-auto w-72 h-56 rounded-xl overflow-hidden object-cover shadow-md "
        }`}
        alt="Profile Pic"
      />
      {/*main image*/}
      {/*button grid*/}
      <div className="mt-5">
        <div className={"grid grid-flow-col gap-3 max-w-xs mx-auto"}>
          {images.map((image) => (
            <img
              className={`rounded-xl ${
                activeImage === image ? "opacity-100" : "opacity-50"
              } hover:opacity-100 transition-opacity duration-300 ease-in-out`}
              onClick={() => HandleImageClick(image)}
              src={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
