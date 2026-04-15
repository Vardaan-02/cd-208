import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallbackDemo() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []); // this will prevent handleClick to get reCreated and therfore stop the rerender of the child

    // const handleClick = () => {
    //     console.log("Clicked");
    // };

    return <>
        <h1>{count}</h1>
        <button onClick={() => { setCount(count + 1) }}>Increment</button>
        <Child handleClick={handleClick} />
    </>
}