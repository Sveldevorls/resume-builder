import TextareaAutosize from 'react-textarea-autosize';
import CollapsibleBlock from "../CollapsibleBlock"
import { Fragment } from 'react';
import ConfirmButton from "../ConfirmButton";

export default function EducationEditor({ education, onFormChange }) {
    function handleNewNoteClick(entryID) {
        let newEducationArray = [];
        for (let entry of education) {
            entry.id == entryID ?
                newEducationArray.push({ ...entry, "notes": [...entry.notes, { "id": crypto.randomUUID(), "content": "" }] }) :
                newEducationArray.push(entry);
        }
        onFormChange(newEducationArray);
    }

    function handleRemoveNoteClick(entryID, removedNoteID) {
        let newEducationArray = [];
        for (let entry of education) {
            entry.id == entryID ?
                newEducationArray.push({ ...entry, "notes": entry.notes.filter(note => note.id != removedNoteID) }) :
                newEducationArray.push(entry);
        }
        onFormChange(newEducationArray);
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
        onFormChange(newEducationArray);
    }

    function handleNewEntryClick() {
        const newEducationArray = [
            ...education,
            {
                "id": crypto.randomUUID(),
                "school": "Replace me",
                "location": "Replace me",
                "degree": "Replace me",
                "startMonth": 1,
                "startYear": 1900,
                "endMonth": 1,
                "endYear": 1900,
                "notes": [
                    {
                        "id": crypto.randomUUID(),
                        "content": "",
                    }
                ],
            }
        ]
        onFormChange(newEducationArray);
    }

    function handleRemoveEntryClick(entryID) {
        onFormChange(education.filter(entry => entry.id != entryID));
    }

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div id="EducationEditor">
            <CollapsibleBlock title={<h2>Education</h2>} >
                {education.map(entry =>
                    <CollapsibleBlock title={<h3>{entry.school}</h3>} key={entry.id} initState={false}>
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
                                    <input type="text" name="startYear" className="input-year" defaultValue={entry.startYear} />
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
                                    <input type="text" name="endYear" className="input-year" defaultValue={entry.endYear} />
                                </div>
                            </fieldset>
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
                        <ConfirmButton
                            buttonClass="button-remove-entry"
                            messageStrings={[
                                `You are about to remove "${entry.school}" from this section.`,
                                "This action can not be reversed.",
                                "Are you sure?",
                            ]}
                            onConfirm={() => handleRemoveEntryClick(entry.id)}
                        >
                            Remove this entry
                        </ConfirmButton>
                    </CollapsibleBlock>
                )}
                <button className="button-new-entry" onClick={handleNewEntryClick}>Add new entry</button>
            </CollapsibleBlock>
        </div>
    )
}