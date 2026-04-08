import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

export default function Comp() {
    return (<>
        <div className="flex flex-col gap-4 bg-purple-950 w-[40%]">
            <Top />
            <Middle />
            <Bottom />
        </div>
    </>)
}