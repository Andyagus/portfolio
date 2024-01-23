import { ReactNode } from "react";
import Title3 from "./projectComponents/Title3.tsx";
import ProjectDataText from "../../assets/images/project/firstWoman/textblocks/FirstWomanText.tsx";


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
      {data.videos["HeaderVideo"]}
      {data.textBlocks["text1"]}
      {data.images["userFlowImage1"]}
      {data.textBlocks["text2"]}
      {<Title3 title={"Native App"} borderTop={true} />}
      {data.images["AppScreens2"]}
      {data.textBlocks["text3"]}
      {data.videos["RTVideo1"]}
      {data.textBlocks["text4"]}

      {<Title3 title={"Immersive Elements"} />}
      {data.images["ARObject3"]}
      {data.textBlocks["text5"]}
      {data.videos["InteractiveVideo2"]}
      {data.textBlocks["text6"]}

      {<Title3 title={"Achievements"} />}
      {data.images["Achievements4"]}
      {data.textBlocks["text7"]}

      {<Title3 title={"WebAR"} borderTop={true} />}
      {data.videos["WebARVideo3"]}
      {data.textBlocks["text8"]}

      {<Title3 title={"Microsite"} borderTop={true} />}
      {data.videos["MicrositeVideo4"]}
      {data.textBlocks["text9"]}

      {<Title3 title={"Conclusion"} borderTop={true} />}
      {data.videos["CallieOutro5"]}
      {data.textBlocks["text10"]}


    </div>
  );
}
