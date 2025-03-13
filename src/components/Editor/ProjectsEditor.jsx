import CollapsibleBlock from "./CollapsibleBlock"

export default function ProjectsEditor({ projects, projectsStateSetter }) {
    function handleNewNoteClick(entryID) {
        let newProjectsArray = [];
        for (let entry of projects) {
            entry.id == entryID ?
                newProjectsArray.push({ ...entry, "notes": [...entry.notes, { "id": crypto.randomUUID(), "content": "" }] }) :
                newProjectsArray.push(entry);
        }
        projectsStateSetter(newProjectsArray);
    }

    function handleRemoveNoteClick(entryID, removedNoteID) {
        let newProjectsArray = [];
        for (let entry of projects) {
            entry.id == entryID ?
                newProjectsArray.push({ ...entry, "notes": entry.notes.filter(note => note.id != removedNoteID) }) :
                newProjectsArray.push(entry);
        }
        projectsStateSetter(newProjectsArray);
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
        projectsStateSetter(newProjectsArray);
    }

    function handleNewEntryClick() {
        projectsStateSetter([...projects,     {
            "id": crypto.randomUUID(),
            "title": "Replace me",
            "techs": "Replace me",
            "notes": [],
        },])
    }

    function handleRemoveEntryClick(entryID) {
        projectsStateSetter(projects.filter(entry => entry.id != entryID));
    }

    return (
        <div id="ProjectsEditor">
            <CollapsibleBlock title={<h2>Projects</h2>} >
                {projects.map((entry, index) => {
                    return (
                        <CollapsibleBlock title={<h3>{entry.title}</h3>} key={entry.id} initState={index == 0}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label htmlFor={"title-" + entry.id}>Project name:</label>
                                <input type="text" id={"title-" + entry.id} name="title" defaultValue={entry.title} />
                                <label htmlFor={"techs-" + entry.id}>Techs used:</label>
                                <input type="text" id={"techs-" + entry.id} name="techs" defaultValue={entry.techs} />
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
                        </CollapsibleBlock>
                    )
                })}
                <button onClick={handleNewEntryClick}>Add new entry</button>
            </CollapsibleBlock>
        </div>
    )
}