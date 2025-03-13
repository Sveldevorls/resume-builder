import { useState } from "react";
import "../../styles/CollapsibleBlock.css"

export default function CollapsibleBlock({ title, initState=false, children }) {
    const [active, setActive] = useState(initState);

    return (
        <div className="CollapsibleBlock">
            <div className="row">
                {title}
                <button onClick={() => setActive(!active)}>
                    {active ? "-" : "+"}
                </button>
            </div>
            <div className={"content " + (active ? "active" : "hidden")}>
                {children}
            </div>
        </div>
    )
}