import { createContext, Fragment, useRef, useState } from "react";
import {
    defaultInfo,
    defaultEducation,
    defaultExperience,
    defaultProjects,
    defaultSkills
} from './components/DefaultResume'
import Editor from './components/Editor/Editor'
import CV from './components/CV/CV'
import './App.css'

export const DialogContext = createContext(null);

export default function App() {
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("info")) ?? defaultInfo);
    const [education, setEducation] = useState(JSON.parse(localStorage.getItem("education")) ?? defaultEducation);
    const [experience, setExperience] = useState(JSON.parse(localStorage.getItem("experiences")) ?? defaultExperience);
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects")) ?? defaultProjects);
    const [skills, setSkills] = useState(JSON.parse(localStorage.getItem("skills")) ?? defaultSkills);

    const dialogRef = useRef(null);
    const [dialogMessageStrings, setDialogMessageStrings] = useState([]);
    const [onDialogConfirm, setOnDialogConfirm] = useState(() => { });

    function handleFormChange(key, stateSetter) {
        return (newState) => {
            localStorage.setItem(key, JSON.stringify(newState));
            stateSetter(newState);
        }
    }

    return (
        <DialogContext.Provider value={{ dialogRef, setDialogMessageStrings, setOnDialogConfirm }}>
            <div className="App">
                <Editor
                    info={info}
                    onInfoFormChange={handleFormChange("info", setInfo)}
                    education={education}
                    onEducationFormChange={handleFormChange("education", setEducation)}
                    experience={experience}
                    onExperienceFormChange={handleFormChange("experiences", setExperience)}
                    projects={projects}
                    onProjectsFormChange={handleFormChange("projects", setProjects)}
                    skills={skills}
                    onSkillsFormChange={handleFormChange("skills", setSkills)}
                />
                <CV
                    info={info}
                    education={education}
                    experience={experience}
                    projects={projects}
                    skills={skills}
                />
                <dialog ref={dialogRef} className="dialog">
                    {dialogMessageStrings.map((message, index) =>
                        <Fragment key={index}>
                            {!!index && <br />}
                            {message}
                        </Fragment>
                    )}
                    <div className="dialog-buttons">
                        <button onClick={() => dialogRef.current.close()}>Cancel</button>
                        <button onClick={() => {
                            onDialogConfirm();
                            dialogRef.current.close();
                        }}>
                            Yes, continue
                        </button>
                    </div>
                </dialog>
            </div>
        </DialogContext.Provider>
    )
}