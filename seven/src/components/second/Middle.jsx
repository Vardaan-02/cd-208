export default function Middle({middle}) {
    return (
        <div className="flex flex-col p-4 items-center">
            <p className={`font-medium ${middle.dateColor}`}>{middle.date}</p>
            <h1 className="text-5xl font-extrabold">{middle.heading}</h1>
            <p className="my-4 py-4 text-gray-500 text-center">{middle.text}</p>
        </div>
    );
}