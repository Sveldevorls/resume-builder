import TextareaAutosize from 'react-textarea-autosize';
import CollapsibleBlock from "../CollapsibleBlock"
import { Fragment } from 'react';

export default function ExperienceEditor({ experience, onFormChange }) {
    function handleNewNoteClick(entryID) {
        let newexperienceArray = [];
        for (let entry of experience) {
            entry.id == entryID ?
                newexperienceArray.push({ ...entry, "notes": [...entry.notes, { "id": crypto.randomUUID(), "content": "" }] }) :
                newexperienceArray.push(entry);
        }
        onFormChange(newexperienceArray);
    }

    function handleRemoveNoteClick(entryID, removedNoteID) {
        let newexperienceArray = [];
        for (let entry of experience) {
            entry.id == entryID ?
                newexperienceArray.push({ ...entry, "notes": entry.notes.filter(note => note.id != removedNoteID) }) :
                newexperienceArray.push(entry);
        }
        onFormChange(newexperienceArray);
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
        onFormChange(newexperienceArray);
    }

    function handleNewEntryClick() {
        const newExperienceArray = [
            ...experience,
            {
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
                    {
                        "id": crypto.randomUUID(),
                        "content": "",
                    }
                ],
            }
        ];
        onFormChange(newExperienceArray)
    }

    function handleRemoveEntryClick(entryID) {
        onFormChange(experience.filter(entry => entry.id != entryID));
    }

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div id="ExperienceEditor">
            <CollapsibleBlock title={<h2>Experience</h2>}>
                {experience.map((entry, index) => (
                    <CollapsibleBlock title={<h3>{entry.company}</h3>} key={entry.id} initState={index == 0}>
                        <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                            <label>
                                Company:
                                <input type="text" name="company" defaultValue={entry.company} />
                            </label>
                            <label>
                                Location:
                                <input type="text" name="location" defaultValue={entry.location} />
                            </label>
                            <label>
                                Title:
                                <input type="text" name="title" defaultValue={entry.title} />
                            </label>
                            <label>
                                <div className="row">
                                    Currently employed
                                    <input type="checkbox" name="isCurrentlyEmployed" defaultChecked={entry.isCurrentlyEmployed}></input>
                                </div>
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
                                    <input type="text" name="startYear" className="input-year" defaultValue={entry.startYear} />
                                </div>
                            </fieldset>
                            {!entry.isCurrentlyEmployed &&
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
                                        <input type="text" name="endYear" className="input-year" defaultValue={entry.endYear} />
                                    </div>
                                </fieldset>}
                            <fieldset>
                                <legend>
                                    <div className="row">
                                        Extra notes:
                                        <button type="button" className="button-new-entry" onClick={() => handleNewNoteClick(entry.id)}>Add new note</button>
                                    </div>
                                </legend>
                                <div className="note-grid">
                                    {entry.notes.map(note =>
                                        <Fragment key={note.id}>
                                            <TextareaAutosize minRows="3" name="noteContent" data-id={note.id} defaultValue={note.content} />
                                            <button type="button" data-id={note.id} onClick={(e) => handleRemoveNoteClick(entry.id, e.target.dataset.id)}>X</button>
                                        </Fragment>
                                    )}
                                </div>
                            </fieldset>
                        </form>
                        <button type="button" className="button-remove-entry" onClick={() => handleRemoveEntryClick(entry.id)}>Remove this entry</button>
                    </CollapsibleBlock>
                )
                )}
                <button className="button-new-entry" onClick={handleNewEntryClick}>Add new entry</button>
            </CollapsibleBlock>
        </div>
    )
}