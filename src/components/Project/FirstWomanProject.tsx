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
      <br />
      {/*{data.images["image2"]}*/}
      {data.textBlocks["text2"]}
      {data.images["image3"]}
      {data.textBlocks["text3"]}
      <br />
      <div className="border-t border-gray-200 my-4"></div>
      <div className="text-xl font-semibold">Native App</div>
      {data.images["image7"]}
      {data.textBlocks["text4"]}
      {data.textBlocks["text6"]}
      {data.videos["RT1"]}
      {data.textBlocks["text9RT"]}
      <br /> <div className="text-xl font-semibold">Immersive Elements</div>
      {data.images["image10ARObject"]}
      {data.textBlocks["text8Scan"]}
      {data.videos["Interactivity2"]}
      {data.textBlocks["text11ImmersiveEnvironments"]}
      <br /> <div className="text-xl font-semibold">Achievements</div>
      {data.images["image13"]}
      {data.textBlocks["text13"]}
      <br />
      <div className="border-t border-gray-200 my-4"></div>
      <div className="text-xl font-semibold">WebAR</div>
      {data.videos["WebAR3"]}
      {data.textBlocks["text15WebAR"]}
      <br />
      <div className="border-t border-gray-200 my-4"></div>
      <div className="text-xl font-semibold">Microsite</div>
      {data.videos["MicrositeVideo"]}
      {data.textBlocks["text17"]}
      <br />
      {data.textBlocks["text19"]}
      <div className="border-t border-gray-200 my-4"></div>
      <div className="text-xl font-semibold">Conclusion</div>
      {data.videos["CallieOutro"]}
      {data.textBlocks["text20"]}
    </div>
  );
}
