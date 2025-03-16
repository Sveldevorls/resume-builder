import Info from "./Info"
import Education from "./Education"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import "../../styles/CV.css"

export default function CV(props) {
    return (
        <div className="CV">
            <Info info={props.info} />
            <Education education={props.education} />
            <Experience experience={props.experience} />
            <Projects projects={props.projects} />
            <Skills skills={props.skills} />
        </div>
    )
}