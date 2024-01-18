import { IconType } from "react-icons";

interface IconProps {
    icon: IconType;
}

export default function ProjectIcon({ icon }: IconProps) {
    // Create an IconComponent using the passed icon prop
    const IconComponent = icon;

    return (
        <IconComponent className="cursor-pointer text-gray-300 hover:text-gray-500 duration-200 text-2xl" />
    );
}
