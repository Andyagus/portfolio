
interface paragraphTextProps {
    text: string;
}

export default function ProjectSubcaptionText({text}: paragraphTextProps){
    return(
        <p className="mt-1 text-gray-400">
            {text}
        </p>
    )
}