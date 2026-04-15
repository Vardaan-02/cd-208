import { useEffect, useState } from "react"

export default function FetchData() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (res.ok) {
                    const json = await res.json();
                    setData(json.slice(0, 2));
                }
                else throw new Error("Failed to fetch data");
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [refresh]);

    if (loading) return <h1>is loading...</h1>

    if (error) return <h1> {error}</h1>

    return <>
        <h1>Todos</h1>
        {
            data.length == 0 ? (
                <p>No Data Found</p>
            ) : (
                <ul>
                    {data.map(ele => {
                        return <li key={ele.id}>{ele.title}</li>
                    })}
                </ul>
            )
        }
        <button onClick={() => { setRefresh(refresh + 1) }}>Refresh</button>
    </>
}