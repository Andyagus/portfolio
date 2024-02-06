import { Gallery, GalleryProps } from "react-grid-gallery";
import image1 from "../assets/images/About/ProfilePic1.png";
import image2 from "../assets/images/About/pic2.jpg";
import { useState } from "react";
import { Image } from "react-grid-gallery";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// interface Image {
//   src: string;
//   original?: string;
//   thumbnail: string;
//   thumbnailWidth: number;
//   thumbnailHeight: number;
//   width: number; // Add width and height properties
//   height: number;
// }

export interface CustomImage extends Image {
  original: string;
}

const images: CustomImage[] = [
  {
    src: image1,
    original: image1,

    width: 512,
    height: 683,
    customOverlay: <div className=" bg-gray-900 opacity-15 h-full"> </div>,
  },
  {
    src: image2,
    original: image2,

    width: 500,
    height: 500,
    customOverlay: <div className=" bg-gray-900 opacity-15 h-full"> </div>,
  },
  {
    src: image2,
    original: image2,

    width: 500,
    height: 500,
    customOverlay: <div className=" bg-gray-900 opacity-15 h-full"> </div>,
  },
  {
    src: image2,
    original: image2,

    width: 500,
    height: 500,
    customOverlay: <div className=" bg-gray-900 opacity-15 h-full"> </div>,
  },
];

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: Image) => setIndex(index);

  return (
    <div>
      <div>
        <Gallery
          images={images}
          onClick={handleClick}
          onSelect={() => console.log("select")}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
}
