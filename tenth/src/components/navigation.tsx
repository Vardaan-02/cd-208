import { Link } from "react-router";
import { Button } from "./ui/button";

export default function Navigation() {
    return <div className="flex gap-4">
        <Button>
            <Link to={"/about"}>To About</Link>
        </Button>
        <Button>
            <Link to={"/home"}>To Home</Link>
        </Button>
        <Button>
            <Link to={"/dashboard"}>To Dashbaord</Link>
        </Button>
    </div>
}