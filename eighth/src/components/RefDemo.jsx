import { useRef, useState } from "react";

export default function RefDemo() {
    const [state, setState] = useState(0);

    let variable = 3;
    // const ref = useRef(3); // the refference to this number will not change between rerenders
    const inputRef = useRef(null); // ref can also be used to extract values out of input

    return (
        <>
            <h1 >{state}</h1>
            <input ref={inputRef} />
            <button onClick={() => {
                setState(Number(inputRef.current.value));
            }}>set Value</button>
        </>);
}