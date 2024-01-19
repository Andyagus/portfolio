import { IconType } from "react-icons";
import {Link} from "react-router-dom";

interface IconProps {
    icon: IconType;
    link?: string
}

export default function ProjectIcon({ icon, link }: IconProps) {
    // Create an IconComponent using the passed icon prop
    const IconComponent = icon;

    return (
        <Link to={link || "wsj.com"} target="_blank" rel="noopener noreferrer">
            <IconComponent className="cursor-pointer text-gray-300 hover:text-gray-500 duration-200 text-2xl" />
        </Link>
    );
}
