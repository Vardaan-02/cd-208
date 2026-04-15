import { useMemo, useState } from "react";

export default function MemoDemo() {
    const [state, setState] = useState(0);

    function expensiveCalculation() {

        // this can also be an API Call
        console.log("Calculating...");
        let sum = 0;
        for (let i = 0; i < 4 * 1e9; i++) {
            sum += i;
        }
        console.log("Completed");
        return sum;
    }

    const result = useMemo(() => {
        return expensiveCalculation();
    }, []);

    // const result = expensiveCalculation();

    return <>
        <h1>{result}</h1>
        <h1>{state}</h1>
        <button onClick={() => { setState(state + 1) }}>Increment</button >
    </>
}