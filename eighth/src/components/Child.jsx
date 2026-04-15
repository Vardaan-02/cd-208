import { useEffect } from "react"

export default function Child({ handleClick }) {
    useEffect(() => {
        console.log("rerender");
    });

    return <button onClick={handleClick}></button>
}