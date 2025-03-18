import { useState } from "react";
import "./ConfirmButton.css"

export default function ConfirmButton({ buttonClass, warningMessage, confirmMessage = "Confirm", cancelMessage = "Cancel", onConfirm, children }) {
    const [active, setActive] = useState(false);

    function handleConfirmClick() {
        onConfirm();
        setActive(false);
    }

    return (
        <>
            <button onClick={() => setActive(!active)} className={buttonClass}>
                {children}
            </button>
            {active &&
                <div className="confirm-inner">
                    {warningMessage}
                    <button onClick={handleConfirmClick}>{confirmMessage}</button>
                    <button onClick={() => setActive(false)}>{cancelMessage}</button>
                </div>
            }
        </>
    )
}