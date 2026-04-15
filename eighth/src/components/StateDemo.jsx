import { useState } from "react"

export default function StateDemo() {
    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}