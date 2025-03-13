import CollapsibleBlock from "./CollapsibleBlock"

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
            <CollapsibleBlock title={<h2>Education</h2>} >
                {education.map((entry, index) => {
                    return (
                        <CollapsibleBlock title={<h3>{entry.school}</h3>} key={entry.id} initState={index == 0}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label>
                                    School:
                                    <input type="text" name="school" defaultValue={entry.school} />
                                </label>
                                <label>
                                    Location:
                                    <input type="text" name="location" defaultValue={entry.location} />
                                </label>
                                <label>
                                    Degree:
                                    <input type="text" name="degree" defaultValue={entry.degree} />
                                </label>
                                <fieldset>
                                    <legend>Start date:</legend>
                                    <div className="row">
                                        <select name="startMonth" defaultValue={entry.startMonth}>
                                            {months.map((month, index) =>
                                                <option key={index} value={index + 1}>
                                                    {month}
                                                </option>
                                            )}
                                        </select>
                                        <input type="text" name="startYear" defaultValue={entry.startYear} />
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>End date:</legend>
                                    <div className="row">
                                        <select name="endMonth" defaultValue={entry.endMonth}>
                                            {months.map((month, index) =>
                                                <option key={index} value={index + 1}>
                                                    {month}
                                                </option>
                                            )}
                                        </select>
                                        <input type="text" name="endYear" defaultValue={entry.endYear} />
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        <div className="row">
                                            Extra notes:
                                            <button type="button" onClick={() => handleNewNoteClick(entry.id)}>+</button>
                                        </div>
                                    </legend>

                                    {entry.notes.map(note =>
                                        <div className="row" key={note.id}>
                                            <button type="button" data-id={note.id} onClick={(e) => handleRemoveNoteClick(entry.id, e.target.dataset.id)}>X</button>
                                            <input type="text" name="noteContent" data-id={note.id} defaultValue={note.content} />
                                        </div>
                                    )}
                                </fieldset>
                            </form>
                            <button type="button" onClick={() => handleRemoveEntryClick(entry.id)}>Remove this entry</button>
                        </CollapsibleBlock>
                    )
                })}
                <button onClick={handleNewEntryClick}>Add new entry</button>
            </CollapsibleBlock>
        </div>
    )
}