import EditorBlock from "./EditorBlock"

export default function ExperienceEditor({ experience, experienceStateSetter }) {
    function handleNewNoteClick(entryID) {
        let newexperienceArray = [];
        for (let entry of experience) {
            entry.id == entryID ?
                newexperienceArray.push({ ...entry, "notes": [...entry.notes, { "id": crypto.randomUUID(), "content": "" }] }) :
                newexperienceArray.push(entry);
        }
        experienceStateSetter(newexperienceArray);
    }

    function handleRemoveNoteClick(entryID, removedNoteID) {
        let newexperienceArray = [];
        for (let entry of experience) {
            entry.id == entryID ?
                newexperienceArray.push({ ...entry, "notes": entry.notes.filter(note => note.id != removedNoteID) }) :
                newexperienceArray.push(entry);
        }
        experienceStateSetter(newexperienceArray);
    }

    function handleFormChange(entryID, changedElement) {
        let newexperienceArray = [];
        for (let entry of experience) {
            if (entry.id != entryID) {
                newexperienceArray.push(entry);
            }
            else {
                if (changedElement.name == "noteContent") {
                    newexperienceArray.push({
                        ...entry,
                        "notes": entry.notes.map(note =>
                            note.id == changedElement.dataset.id ?
                                { "id": changedElement.dataset.id, "content": changedElement.value } :
                                note
                        )
                    });
                }
                else if (changedElement.name == "isCurrentlyEmployed") {
                    newexperienceArray.push({ ...entry, [changedElement.name]: changedElement.checked });
                }
                else {
                    newexperienceArray.push({ ...entry, [changedElement.name]: changedElement.value });
                }
            }
        }
        experienceStateSetter(newexperienceArray);
    }

    function handleNewEntryClick() {
        experienceStateSetter([...experience, {
            "id": crypto.randomUUID(),
            "company": "Replace me",
            "location": "Replace me",
            "title": "Replace me",
            "startMonth": 1,
            "startYear": 1900,
            "endMonth": 1,
            "endYear": 1900,
            "isCurrentlyEmployed": false,
            "notes": [
            ],
        }])
    }

    function handleRemoveEntryClick(entryID) {
        experienceStateSetter(experience.filter(entry => entry.id != entryID));
    }

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div id="experienceEditor">
            <EditorBlock title={<h2>Experience</h2>} >
                {experience.map(entry => {
                    return (
                        <EditorBlock title={<h3>{entry.company}</h3>} key={entry.id}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label htmlFor={"company-" + entry.id}>Company:</label>
                                <input type="text" id={"company-" + entry.id} name="company" defaultValue={entry.company} />
                                <label htmlFor={"location-" + entry.id}>Location:</label>
                                <input type="text" id={"location-" + entry.id} name="location" defaultValue={entry.location} />
                                <label htmlFor={"title-" + entry.id}>Title:</label>
                                <input type="text" id={"title-" + entry.id} name="title" defaultValue={entry.title} />
                                <div className="row">
                                    <label htmlFor={"employed-" + entry.id}>Currently employed</label>
                                    <input type="checkbox" id={"employed-" + entry.id} name="isCurrentlyEmployed" defaultChecked={entry.isCurrentlyEmployed}></input>
                                </div>
                                <label htmlFor={"startMonth-" + entry.id}>Start date:</label>
                                <div className="row">
                                    <select id={"startMonth-" + entry.id} name="startMonth" defaultValue={entry.startMonth}>
                                        {months.map((month, index) =>
                                            <option key={index} value={index + 1}>
                                                {month}
                                            </option>
                                        )}
                                    </select>
                                    <input type="text" id={"startYear-" + entry.id} name="startYear" defaultValue={entry.startYear} />
                                </div>
                                {!entry.isCurrentlyEmployed &&
                                    <>
                                        <label htmlFor={"endMonth-" + entry.id}>End date:</label>
                                        <div className="row">
                                            <select id={"endMonth-" + entry.id} name="endMonth" defaultValue={entry.endMonth}>
                                                {months.map((month, index) =>
                                                    <option key={index} value={index + 1}>
                                                        {month}
                                                    </option>
                                                )}
                                            </select>
                                            <input type="text" id={"endYear-" + entry.id} name="endYear" defaultValue={entry.endYear} />
                                        </div>
                                    </>}
                                <div className="row">
                                    <span>Extra notes</span>
                                    <button type="button" onClick={() => handleNewNoteClick(entry.id)}>+</button>
                                </div>
                                {entry.notes.map(note =>
                                    <div className="row" key={note.id}>
                                        <button type="button" data-id={note.id} onClick={(e) => handleRemoveNoteClick(entry.id, e.target.dataset.id)}>X</button>
                                        <input type="text" name="noteContent" data-id={note.id} defaultValue={note.content} />
                                    </div>
                                )}
                            </form>
                            <button type="button" onClick={() => handleRemoveEntryClick(entry.id)}>Remove this entry</button>
                        </EditorBlock>
                    )
                })}
                <button onClick={handleNewEntryClick}>Add new entry</button>
            </EditorBlock>
        </div>
    )
}