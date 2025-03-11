import '../../styles/Projects.css'

export default function Projects({ projects }) {
    return (
        <div className="Projects">
            <h2 className="title">Projects</h2>
            {projects.map(project => generateProjectDiv(project))}
        </div>
    )
}

function generateProjectDiv(project) {
    return (
        <div className="content" key={project.id}>
            <h3>{project.title}</h3>
            <span>{project.techs}</span>
            <ul>
                {project.notes.map(note => {
                    return <li key={note.id}>{note.content}</li>
                })}
            </ul>
        </div>
    )
}
