import { useContext } from "react";
import { DialogContext } from "../../App";

export default function ConfirmButton({ buttonClass, messageStrings, onConfirm, children }) {
    const { dialogRef, setDialogMessageStrings, setOnDialogConfirm } = useContext(DialogContext);

    function handleButtonClick() {
        dialogRef.current.showModal();
        setDialogMessageStrings(messageStrings);
        setOnDialogConfirm(() => onConfirm);
    }

    return (
        <button onClick={handleButtonClick} className={buttonClass}>
            {children}
        </button>
    )
}