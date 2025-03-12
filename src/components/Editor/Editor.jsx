import InfoEditor from "./InfoEditor"
import EducationEditor from "./EducationEditor"
import ExperienceEditor from "./ExperienceEditor"
import ProjectsEditor from "./ProjectsEditor"
import SkillsEditor from "./SkillsEditor"
import "../../styles/Editor.css"

export default function Editor({ infoState, educationState, experienceState, projectsState, skillsState }) {
    return (
        <div className="Editor">
            <InfoEditor
                info={infoState.info}
                infoStateSetter={infoState.setInfo}
            />
            <EducationEditor
                education={educationState.education}
                educationStateSetter={educationState.setEducation}
            />
            <ExperienceEditor 
                experience = {experienceState.experience}
                experienceStateSetter={experienceState.setExperience}
            />
            <ProjectsEditor 
                projects = {projectsState.projects}
                projectsStateSetter={projectsState.setProjects}
            />
            <SkillsEditor 
                skills = {skillsState.skills}
                skillsStateSetter={skillsState.setSkills}
            />
        </div>
    )
}