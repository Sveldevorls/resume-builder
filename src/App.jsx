import { useState } from 'react'
import './App.css'
import {
  defaultInfo,
  defaultEducation,
  defaultExperience,
  defaultProjects,
  defaultSkills
} from './components/DefaultResume'
import CV from './components/CV/CV';
import Editor from './components/Editor/Editor';

export default function App() { 
  const [info, setInfo] = useState(localStorage.getItem("info") || defaultInfo);
  const [education, setEducation] = useState(localStorage.getItem("education") || defaultEducation);
  const [experience, setExperience] = useState(localStorage.getItem("experiences") || defaultExperience);
  const [projects, setProjects] = useState(localStorage.getItem("projects") || defaultProjects);
  const [skills, setSkills] = useState(localStorage.getItem("skills") || defaultSkills);

  return (
    <div className="App">
      <Editor 
        infoState = {{info, setInfo}}
        educationState = {{education, setEducation}}
        experience = {{experience, setExperience}}
        projects = {{projects, setProjects}}
        skills = {{skills, setSkills}}
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