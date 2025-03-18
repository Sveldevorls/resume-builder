import TextareaAutosize from 'react-textarea-autosize';
import CollapsibleBlock from "../CollapsibleBlock"
import { Fragment } from 'react';
import ConfirmButton from '../ConfirmButton';

export default function ProjectsEditor({ projects, onFormChange }) {
    function handleNewNoteClick(entryID) {
        let newProjectsArray = [];
        for (let entry of projects) {
            entry.id == entryID ?
                newProjectsArray.push({ ...entry, "notes": [...entry.notes, { "id": crypto.randomUUID(), "content": "" }] }) :
                newProjectsArray.push(entry);
        }
        onFormChange(newProjectsArray);
    }

    function handleRemoveNoteClick(entryID, removedNoteID) {
        let newProjectsArray = [];
        for (let entry of projects) {
            entry.id == entryID ?
                newProjectsArray.push({ ...entry, "notes": entry.notes.filter(note => note.id != removedNoteID) }) :
                newProjectsArray.push(entry);
        }
        onFormChange(newProjectsArray);
    }

    function handleFormChange(entryID, changedElement) {
        let newProjectsArray = [];
        for (let entry of projects) {
            if (entry.id != entryID) {
                newProjectsArray.push(entry);
            }
            else {
                if (changedElement.name == "noteContent") {
                    newProjectsArray.push({
                        ...entry,
                        "notes": entry.notes.map(note =>
                            note.id == changedElement.dataset.id ?
                                { "id": changedElement.dataset.id, "content": changedElement.value } :
                                note
                        )
                    });
                }
                else {
                    newProjectsArray.push({ ...entry, [changedElement.name]: changedElement.value });
                }
            }
        }
        onFormChange(newProjectsArray);
    }

    function handleNewEntryClick() {
        const newProjectsArray = [
            ...projects,
            {
                "id": crypto.randomUUID(),
                "title": "Replace me",
                "techs": "Replace me",
                "notes": [
                    {
                        "id": crypto.randomUUID(),
                        "content": "",
                    }
                ],
            }
        ]
        onFormChange(newProjectsArray)
    }

    function handleRemoveEntryClick(entryID) {
        onFormChange(projects.filter(entry => entry.id != entryID));
    }

    return (
        <div id="ProjectsEditor">
            <CollapsibleBlock title={<h2>Projects</h2>} >
                {projects.map(entry => {
                    return (
                        <CollapsibleBlock title={<h3>{entry.title}</h3>} key={entry.id} initState={false}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label>
                                    Project name:
                                    <input type="text" name="title" defaultValue={entry.title} />
                                </label>
                                <label>
                                    Techs used:
                                    <TextareaAutosize minRows="3" name="techs" defaultValue={entry.techs} />
                                </label>
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
                                onConfirm={() => handleRemoveEntryClick(entry.id)}
                                warningMessage={<h3>This action can not be reversed. Are you sure?</h3>}
                                confirmMessage="Yes, remove this entry"
                            >
                                Remove this entry
                            </ConfirmButton>
                        </CollapsibleBlock>
                    )
                })}
                <button className="button-new-entry" onClick={handleNewEntryClick}>Add new entry</button>
            </CollapsibleBlock>
        </div>
    )
}