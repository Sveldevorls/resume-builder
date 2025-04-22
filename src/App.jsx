import { useState } from "react";
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


export default function App() {
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("info")) ?? defaultInfo);
    const [education, setEducation] = useState(JSON.parse(localStorage.getItem("education")) ?? defaultEducation);
    const [experience, setExperience] = useState(JSON.parse(localStorage.getItem("experiences")) ?? defaultExperience);
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects")) ?? defaultProjects);
    const [skills, setSkills] = useState(JSON.parse(localStorage.getItem("skills")) ?? defaultSkills);


    function handleFormChange(key, stateSetter) {
        return (newState) => {
            localStorage.setItem(key, JSON.stringify(newState));
            stateSetter(newState);
        }
    }

    return (
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
        </div>
    )
}