import InfoEditor from "./InfoEditor"
import EducationEditor from "./EducationEditor"
import ExperienceEditor from "./ExperienceEditor"
import "../../styles/Editor.css"

export default function Editor({ infoState, educationState, experienceState }) {
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
        </div>
    )
}