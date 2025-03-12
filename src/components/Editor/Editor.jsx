import InfoEditor from "./InfoEditor"
import EducationEditor from "./EducationEditor"
import "../../styles/Editor.css"

export default function Editor({ infoState, educationState }) {
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
        </div>
    )
}