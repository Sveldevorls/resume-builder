import EditorBlock from "./EditorBlock"

export default function EducationEditor({ education, educationStateSetter }) {
    function handleNewNoteClick(entryID) {
        let newEducationArray = [];
        for (let entry of education) {
            entry.id == entryID ?
                newEducationArray.push({ ...entry, "notes": [...entry.notes, { "id": crypto.randomUUID(), "content": "" }] }) :
                newEducationArray.push(entry);
        }
        educationStateSetter(newEducationArray);
    }

    function handleRemoveNoteClick(entryID, removedNoteID) {
        let newEducationArray = [];
        for (let entry of education) {
            entry.id == entryID ?
                newEducationArray.push({ ...entry, "notes": entry.notes.filter(note => note.id != removedNoteID) }) :
                newEducationArray.push(entry);
        }
        educationStateSetter(newEducationArray);
    }

    function handleFormChange(entryID, changedElement) {
        let newEducationArray = [];
        for (let entry of education) {
            if (entry.id != entryID) {
                newEducationArray.push(entry);
            }
            else {
                if (changedElement.name == "noteContent") {
                    newEducationArray.push({
                        ...entry,
                        "notes": entry.notes.map(note =>
                            note.id == changedElement.dataset.id ?
                                { "id": changedElement.dataset.id, "content": changedElement.value } :
                                note
                        )
                    });
                }
                else {
                    newEducationArray.push({ ...entry, [changedElement.name]: changedElement.value });
                }
            }
        }
        educationStateSetter(newEducationArray);
    }

    function handleNewEntryClick() {
        educationStateSetter([...education, {
            "id": crypto.randomUUID(),
            "school": "Replace me",
            "location": "Replace me",
            "degree": "Replace me",
            "startMonth": 1,
            "startYear": 1900,
            "endMonth": 1,
            "endYear": 1900,
            "notes": [
            ],
        }])
    }

    function handleRemoveEntryClick(entryID) {
        educationStateSetter(education.filter(entry => entry.id != entryID));
    }

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div id="EducationEditor">
            <EditorBlock title={<h2>Education</h2>} >
                {education.map(entry => {
                    return (
                        <EditorBlock title={<h3>{entry.school}</h3>} key={entry.id}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label htmlFor={"school-" + entry.id}>School:</label>
                                <input type="text" id={"school-" + entry.id} name="school" defaultValue={entry.school} />
                                <label htmlFor={"location-" + entry.id}>Location:</label>
                                <input type="text" id={"location-" + entry.id} name="location" defaultValue={entry.location} />
                                <label htmlFor={"degree-" + entry.id}>Degree:</label>
                                <input type="text" id={"degree-" + entry.id} name="degree" defaultValue={entry.degree} />
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