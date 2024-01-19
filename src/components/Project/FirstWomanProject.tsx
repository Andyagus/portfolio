import { ProjectImage, ProjectVideo, ProjectHeaderText } from './projectComponents/projectComponentLibrary.tsx';
import {ReactNode} from "react";

interface ProjectData {
  title: string;
  data: {
    images: {[key: string]: ReactNode};
  };
}

export default function FirstWomanProject(props: ProjectData) {
  return (
    <div>
      {props.data.images["image1"]}
    </div>
  );
}
