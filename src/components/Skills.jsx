import '../styles/Skills.css'

export default function Skills({ skills }) {
    return (
        <div className="Skills">
            <h2 className="title">Skills</h2>
            <ul>
                {skills.map(skill => {
                    return <li className="row" key={skill.id}><h3>{skill.title}</h3>: {skill.content}</li>
                })}
            </ul>
        </div>
    )
}