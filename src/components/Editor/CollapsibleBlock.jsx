import { useState } from "react";
import "../../styles/CollapsibleBlock.css"

export default function CollapsibleBlock({ title, children }) {
    const [active, setActive] = useState(true);

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