import { ReactNode } from "react";

interface ProjectData {
  data: {
    headerText: ReactNode;
    subcaptionText: ReactNode;
    images: { [key: string]: ReactNode };
    videos: { [key: string]: ReactNode };
    icons: { [key: string]: ReactNode };
    textBlocks: { [key: string]: ReactNode };
  };
}

export default function FirstWomanProject({ data }: ProjectData) {
  return (
    <div>
      {data.headerText}
      {data.subcaptionText}
      {data.icons["mainIconSet"]}
      {data.videos["headerVideo"]}
      {data.textBlocks["text1"]}
      {data.images["image2"]}
      {data.textBlocks["text2"]}
      {data.images["image3"]}
      {data.textBlocks["text3"]}
      {data.images["image4"]}
      {data.textBlocks["text4"]}
      {data.images["image5"]}
      {data.textBlocks["text5"]}
      {data.images["image6"]}
      {data.textBlocks["text6"]}
      {data.images["image7"]}
      {data.textBlocks["text7"]}
      {data.images["image8"]}
      {data.textBlocks["text8"]}
      {data.images["image9"]}
      {data.textBlocks["text9"]}
      {data.images["image10"]}
      {data.textBlocks["text10"]}
      {data.images["image11"]}
      {data.textBlocks["text11"]}
      {data.images["image12"]}
      {data.textBlocks["text12"]}
      {data.images["image13"]}
      {data.textBlocks["text13"]}
      {data.images["image14"]}
      {data.textBlocks["text14"]}
      {data.images["image15"]}
      {data.textBlocks["text15"]}
      {data.images["image16"]}
      {data.textBlocks["text16"]}
      {data.images["image17"]}
      {data.textBlocks["text17"]}
      {data.images["image18"]}
      {data.textBlocks["text18"]}
      <br />
      {data.textBlocks["text19"]}
      {data.images["image19"]}
      {data.textBlocks["text20"]}
      <br />
      {data.textBlocks["text21"]}
      {/*{data.images["headerImage"]}*/}
    </div>
  );
}
