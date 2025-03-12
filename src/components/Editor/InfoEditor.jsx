import EditorBlock from "./EditorBlock"

export default function InfoEditor({info, infoStateSetter}) {
    function handleFormChange(updatedElement){
        infoStateSetter({...info, [updatedElement.name]: updatedElement.value})
    }

    return (
        <div id="InfoEditor">
            <EditorBlock title={<h2>Personal details</h2>}>
                <form onChange={(e) => handleFormChange(e.target)}>
                    <label htmlFor="fullName">Full name:</label>
                    <input type="text" id="fullName" name="fullName" defaultValue={info.fullName} />
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" defaultValue={info.location}/>
                    <label htmlFor="phone">Phone number:</label>
                    <input type="text" id="phone" name="phone" defaultValue={info.phone}/>
                    <label htmlFor="email">Email address:</label>
                    <input type="text" id="email" name="email" defaultValue={info.email}/>
                </form>
            </EditorBlock>
        </div>
    )
}

