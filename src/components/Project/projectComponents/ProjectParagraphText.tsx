interface paragraphTextProps {
    text : string;
}



export default function ProjectParagraphText({ text }: paragraphTextProps) {
    return(
        <div className="mt-1 text-gray-600" dangerouslySetInnerHTML={{ __html: text }} />
        
    )
}