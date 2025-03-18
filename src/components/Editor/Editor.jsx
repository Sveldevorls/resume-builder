import { jsPDF } from "jspdf";
import InfoEditor from "./InfoEditor/InfoEditor"
import EducationEditor from "./EducationEditor/EducationEditor"
import ExperienceEditor from "./ExperienceEditor/ExperienceEditor"
import ProjectsEditor from "./ProjectsEditor/ProjectsEditor"
import SkillsEditor from "./SkillsEditor/SkillsEditor"
import "./Editor.css"


export default function Editor(props) {
    function handleDownloadClick() {
        const resumeDoc = new jsPDF("p", "pt", "a4");

        resumeDoc.html(
            document.body.querySelector(".CV"),
            {
                callback: resumeDoc => resumeDoc.save(),

                // Force content to fit into one page
                windowWidth: 793.7,
                width: 595,
            }
        )
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
            <button className="button-download" onClick={handleDownloadClick}><h3>Download as PDF</h3></button>
        </div>
    )
}