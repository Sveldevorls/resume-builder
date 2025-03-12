import CollapsibleBlock from "./CollapsibleBlock"

export default function SkillsEditor({ skills, skillsStateSetter }) {
    function handleFormChange(entryID, changedElement) {
        let newSkillsArray = [];
        for (let entry of skills) {
            if (entry.id != entryID) {
                newSkillsArray.push(entry);
            }
            else {
                newSkillsArray.push({ ...entry, [changedElement.name]: changedElement.value });
            }
        }
        skillsStateSetter(newSkillsArray);
    }

    function handleNewEntryClick() {
        skillsStateSetter([...skills, {
            "id": crypto.randomUUID(),
            "title": "Replace me",
            "content": "Replace me",
        },])
    }

    function handleRemoveEntryClick(entryID) {
        skillsStateSetter(skills.filter(entry => entry.id != entryID));
    }

    return (
        <div id="SkillsEditor">
            <CollapsibleBlock title={<h2>Skills</h2>} >
                {skills.map(entry => {
                    return (
                        <CollapsibleBlock title={<h3>{entry.title}</h3>} key={entry.id}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label htmlFor={"title-" + entry.id}>Skill:</label>
                                <input type="text" id={"title-" + entry.id} name="title" defaultValue={entry.title} />
                                <label htmlFor={"detail-" + entry.id}>Detail:</label>
                                <input type="text" id={"detail-" + entry.id} name="content" defaultValue={entry.content} />
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