import Bottom from "./Bottom";
import Middle from "./Middle";

export default function Card({CardProps}) {
    return(
    <div className="w-96 rounded-xl bg-white shadow-2xl shadow-balck">
        <img src={CardProps.image} className="rounded-t-xl"></img>
        <Middle middle={CardProps.middle}/>
        <Bottom bottom={CardProps.bottom}/>
    </div>
    );
}