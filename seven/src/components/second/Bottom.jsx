import BottomText from "./BottomText";

export default function Bottom({bottom}){
    return (
        <div className={`flex ${bottom.color} h-24 w-full rounded-b-xl justify-around items-center`}>
            <BottomText props={bottom.first}/>
            <BottomText props={bottom.second}/>
            <BottomText props={bottom.third}/>
        </div>
    );
}