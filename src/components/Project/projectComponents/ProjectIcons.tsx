import {ReactNode} from "react";

interface projectIconsProps{
    projectIcon1 : ReactNode;
    projectIcon2? : ReactNode;
    projectIcon3? : ReactNode;
    projectIcon4? : ReactNode;
}

export default function ProjectIcons(props: projectIconsProps){
    return(
    <div className="flex justify-left space-x-4 my-3.5">
        {props.projectIcon1 !== null && props.projectIcon1}
        {props.projectIcon2 !== null && props.projectIcon2}
        {props.projectIcon3 !== null && props.projectIcon3}
        {props.projectIcon4 !== null && props.projectIcon4}
    </div>
    )
}