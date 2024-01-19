import {ReactNode} from "react";

interface projectIconsProps{
    projectIcon1 : ReactNode;
    projectIcon2? : ReactNode;
    projectIcon3? : ReactNode;
    projectIcon4? : ReactNode;
}

export default function ProjectIcons(props: projectIconsProps){
    return(
    <div className="flex justify-left space-x-4 mt-4 mb-4">
        {props.projectIcon1}
    </div>
    )
}