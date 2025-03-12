import InfoEditor from "./InfoEditor"
import EducationEditor from "./EducationEditor"
import ExperienceEditor from "./ExperienceEditor"
import ProjectEditor from "./ProjectsEditor"
import "../../styles/Editor.css"

export default function Editor({ infoState, educationState, experienceState, projectsState }) {
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
            <ProjectEditor 
                projects = {projectsState.projects}
                projectsStateSetter={projectsState.setProjects}
            />
        </div>
    )
}