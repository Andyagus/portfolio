import {ReactNode} from "react";

interface ProjectData {
  data: {
    
    headerText: ReactNode;
    subcaptionText: ReactNode;
    images: {[key: string]: ReactNode};
    videos: {[key: string]: ReactNode};
    icons: {[key: string]: ReactNode};
    textBlocks: {[key: string]: ReactNode};
  };
}

export default function FirstWomanProject({data}: ProjectData) {
  return (
    <div>
      {data.headerText}
      {data.subcaptionText}
      {data.icons["mainIconSet"]}
      {data.videos["headerVideo"]}
      {data.textBlocks["text1"]}
      {data.textBlocks["text2"]}
      {/*{data.images["headerImage"]}*/}
    </div>
  );
}
