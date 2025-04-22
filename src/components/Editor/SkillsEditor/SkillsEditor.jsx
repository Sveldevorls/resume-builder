import TextareaAutosize from 'react-textarea-autosize';
import CollapsibleBlock from "../CollapsibleBlock"
import ConfirmButton from '../ConfirmButton';

export default function SkillsEditor({ skills, onFormChange }) {
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
        onFormChange(newSkillsArray);
    }

    function handleNewEntryClick() {
        const newSkillsArray = [
            ...skills,
            {
                "id": crypto.randomUUID(),
                "title": "Replace me",
                "content": "Replace me",
            }
        ]
        onFormChange(newSkillsArray);
    }

    function handleRemoveEntryClick(entryID) {
        onFormChange(skills.filter(entry => entry.id != entryID));
    }

    return (
        <div id="SkillsEditor">
            <CollapsibleBlock title={<h2>Skills</h2>} >
                {skills.map(entry => {
                    return (
                        <CollapsibleBlock title={<h3>{entry.title}</h3>} key={entry.id} initState={false}>
                            <form data-id={entry.id} onChange={e => handleFormChange(entry.id, e.target)}>
                                <label>
                                    Skill:
                                    <input type="text" name="title" defaultValue={entry.title} />
                                </label>
                                <label>
                                    Details:
                                    <TextareaAutosize minRows="3" name="content" defaultValue={entry.content} />
                                </label>
                            </form>
                            <ConfirmButton
                                buttonClass="button-remove-entry"
                                messageStrings={[
                                    `You are about to remove "${entry.title}" from this section.`,
                                    "This action can not be reversed.",
                                    "Are you sure?",
                                ]}
                                onConfirm={() => handleRemoveEntryClick(entry.id)}
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