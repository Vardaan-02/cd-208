import { useParams } from "react-router"

export default function ID() {
    const { id } = useParams();

    return <div>
        Hello {id}
    </div>
}