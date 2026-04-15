import { useEffect, useState } from "react";

export default function EffectDemo() {
    const [page, setPage] = useState(0);
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log(page);
        // logic to get post on the given page
    }, [state]) 
    // this useEffect will be called if and only if state which triggered the rerender is in the dependacy array
    // this useEffect will only be called if and only if the dependancy array has the state which triggered the rerender.

    return <>
        <h1>page: {page}</h1>
        <button onClick={() => { setPage(page + 1); }}>increment</button>
        <button onClick={() => { setPage(page - 1); }}>decrement</button>

        <h1>state: {state}</h1>
        <button onClick={() => { setState(state + 1); }}>increment</button>
    </>
}