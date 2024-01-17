import React, { useEffect, useState } from "react";
import ProfilePic from "../assets/images/profilePic.png";
import image1 from "../assets/images/first-woman.png";
import image2 from "../assets/images/oc.png";
import image3 from "../assets/images/testimage.png";

const images = [image1, image2, image3];

export default function ImageGallery() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // Calculate the index of the next image
            const nextIndex = (activeImageIndex + 1) % images.length;

            // Set the next image as the activeImage
            setPrevImageIndex(activeImageIndex);
            setActiveImageIndex(nextIndex);
        }, 5000); // Switch images every 5 seconds

        // Clean up the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, [activeImageIndex]);

    return (
        <div>
            {/* main image with fade effect */}
            {images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    className={`mt-10 mx-auto w-72 h-52 rounded-xl overflow-hidden object-cover shadow-md" 
                    //     activeImageIndex === index
                    //         ? "opacity-100 transition-opacity duration-500 ease-in-out" // Active image: fully visible
                    //         : " opacity-20 absolute"   // Other images: initially hidden
                    // }`}
                    // style={{
                    //     opacity: activeImageIndex === index ? 1 : 0,
                    //     transition: "opacity 1s ease-in-out",
                    //     display: activeImageIndex === index ? "block" : "none",
                    // }}

                    alt="Profile Pic"

                />
            ))}
            {/* button grid */}
            <div className="mt-5">
                <div className={"grid grid-flow-col gap-3 max-w-xs mx-auto"}>
                    {images.map((image, index) => (
                        <img
                            key={image}
                            onClick={() => setActiveImageIndex(index)}
                            src={image}
                            className="rounded-xl"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
