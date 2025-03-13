import { useState } from "react";
import "../../styles/CollapsibleBlock.css"

export default function CollapsibleBlock({ title, initState=false, children }) {
    const [active, setActive] = useState(initState);

    return (
        <div className={"CollapsibleBlock " + (active ? "active" : "hidden")}>
            <div className="row title">
                    {title}
                <button onClick={() => setActive(!active)}>
                    {active ? "▲" : "▼"}
                </button>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}