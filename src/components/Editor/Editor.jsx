import { saveAs } from 'file-saver'
import { pdf } from '@react-pdf/renderer';

import InfoEditor from "./InfoEditor/InfoEditor"
import EducationEditor from "./EducationEditor/EducationEditor"
import ExperienceEditor from "./ExperienceEditor/ExperienceEditor"
import ProjectsEditor from "./ProjectsEditor/ProjectsEditor"
import SkillsEditor from "./SkillsEditor/SkillsEditor"
import ConfirmButton from "./ConfirmButton";
import MyDocument from "../PDF";
import "./Editor.css"


export default function Editor(props) {
    async function handleDownloadClick() {
        const blob = await pdf(<MyDocument
            info={props.info}
            education={props.education}
            experience={props.experience}
            projects={props.projects}
            skills={props.skills}
        />).toBlob();
        saveAs(blob, "resume.pdf");
    }

    function handleClearResumeClick() {
        props.onInfoFormChange({});
        props.onEducationFormChange([]);
        props.onExperienceFormChange([]);
        props.onProjectsFormChange([]);
        props.onSkillsFormChange([]);
    }

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
            <ConfirmButton
                buttonClass="button-clear"
                onConfirm={handleClearResumeClick}
                warningMessage={<h3>This action can not be reversed. Are you sure?</h3>}
                confirmMessage="Yes, clear the resume"
            >
                <h3>Clear resume</h3>
            </ConfirmButton>
            <button className="button-download" onClick={handleDownloadClick}><h3>Download as PDF</h3></button>
        </div>
    )
}