import InfoEditor from "./InfoEditor/InfoEditor"
import EducationEditor from "./EducationEditor/EducationEditor"
import ExperienceEditor from "./ExperienceEditor/ExperienceEditor"
import ProjectsEditor from "./ProjectsEditor/ProjectsEditor"
import SkillsEditor from "./SkillsEditor/SkillsEditor"
import "./Editor.css"

export default function Editor(props) {
    return (
        <div className="Editor">
            <InfoEditor
                info={props.info}
                onFormChange={props.onInfoFormChange}
            />
            <EducationEditor
                education={props.education}
                onFormChange={props.onEducationFormChange}
            />
            <ExperienceEditor
                experience={props.experience}
                onFormChange={props.onExperienceFormChange}
            />
            <ProjectsEditor
                projects={props.projects}
                onFormChange={props.onProjectsFormChange}
            />
            <SkillsEditor
                skills={props.skills}
                onFormChange={props.onSkillsFormChange}
            />
        </div>
    )
}