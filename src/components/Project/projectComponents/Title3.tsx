interface Title3Props {
    title: string;
    borderTop?: boolean;
}

export default function Title3({ title, borderTop = false }: Title3Props) {
    return (
        <>
            {borderTop !== false && (
                <div className="border-t border-gray-200 my-4"></div>
            )}
            {borderTop !== true && (
                <div className="my-4"></div>
            )}

            <div className="text-xl font-semibold text-gray-700">{title}</div>
        </>
    );
}
