import Info from "./Info/Info"
import Education from "./Education/Education"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import "./CV.css"

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