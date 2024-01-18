
interface headerTextProps {
    title: string;
}

export default function ProjectHeaderText({title}: headerTextProps){
    return(
        <div className="text-3xl lg:text-5xl font-bold mt-4">
            {title}
        </div>
    )
}