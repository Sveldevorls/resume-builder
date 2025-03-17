import { useState } from 'react'
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
    const [info, setInfo] = useState(localStorage.getItem("info") || defaultInfo);
    const [education, setEducation] = useState(localStorage.getItem("education") || defaultEducation);
    const [experience, setExperience] = useState(localStorage.getItem("experiences") || defaultExperience);
    const [projects, setProjects] = useState(localStorage.getItem("projects") || defaultProjects);
    const [skills, setSkills] = useState(localStorage.getItem("skills") || defaultSkills);

    return (
        <div className="App">
            <Editor
                info={info}
                onInfoFormChange={setInfo}
                education={education}
                onEducationFormChange={setEducation}
                experience={experience}
                onExperienceFormChange={setExperience}
                projects={projects}
                onProjectsFormChange={setProjects}
                skills={skills}
                onSkillsFormChange={setSkills}
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