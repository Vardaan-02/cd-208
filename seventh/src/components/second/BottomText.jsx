export default function BottomText({props}) {
    return (
    <div className="flex justify-center items-center flex-col">
        <p className="font-black text-xl text-white">{props.number}</p>
        <p className="font-extralight text-gray-200">{props.text}</p>
    </div>)
}