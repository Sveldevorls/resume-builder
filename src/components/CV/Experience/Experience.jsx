import './Experience.css'

export default function Experience({ experience }) {
    return (
        <div className="Experience">
            <h2 className="title">Experience</h2>
            {experience.map(experience => generateExperienceDiv(experience))}
        </div>
    )
}

function generateExperienceDiv(experience) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="content" key={experience.id}>
            <div className="row">
                <h3>{experience.company}</h3>
                {experience.isCurrentlyEmployed ?
                    <span>{months[experience.startMonth - 1]} {experience.startYear} – Present</span> :
                    <span>{months[experience.startMonth - 1]} {experience.startYear} – {months[experience.endMonth - 1]} {experience.endYear}</span>}
            </div>
            <div className="row">
                <span>{experience.title}</span>
                <span>{experience.location}</span>
            </div>
            <ul>
                {experience.notes.map(note => {
                    return <li key={note.id}>{note.content}</li>
                })}
            </ul>
        </div>
    )
}