import { useState } from "react";
import "../../styles/EditorBlock.css"

export default function EditorBlock({ title, children }) {
    const [active, setActive] = useState(true);

    return (
        <>
            <div className="row">
                <h2>{title}</h2>
                <button onClick={() => setActive(!active)}>
                    {active ? "-" : "+"}
                </button>
            </div>
            {active && children}
        </>
    )
}