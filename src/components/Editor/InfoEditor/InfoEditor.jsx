import CollapsibleBlock from "../CollapsibleBlock"

export default function InfoEditor({ info, onFormChange }) {
    function handleFormChange(updatedElement) {
        const newInfoState = { ...info, [updatedElement.name]: updatedElement.value };
        onFormChange(newInfoState);
    }

    return (
        <div id="InfoEditor">
            <CollapsibleBlock title={<h2>Personal details</h2>} initState={true}>
                <form onChange={(e) => handleFormChange(e.target)}>
                    <label>
                        Full name:
                        <input type="text" name="fullName" defaultValue={info.fullName} />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" defaultValue={info.location} />
                    </label>
                    <label>
                        Phone number:
                        <input type="text" name="phone" defaultValue={info.phone} />
                    </label>
                    <label>
                        Email address:
                        <input type="text" name="email" defaultValue={info.email} />
                    </label>

                </form>
            </CollapsibleBlock>
        </div>
    )
}

