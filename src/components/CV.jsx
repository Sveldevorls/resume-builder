import Info from "./Info"
import Education from "./Education"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import "../styles/CV.css"

export default function CV({ info, education, experience, projects, skills }) {
    return (
        <div className="CV">
            <Info info={info} />
            <Education education={education} />
            <Experience experience={experience} />
            <Projects projects={projects} />
            <Skills skills={skills} />
        </div>
    )
}