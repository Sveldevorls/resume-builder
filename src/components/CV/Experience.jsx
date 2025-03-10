import '../../styles/Experience.css'

export default function Experience({ experience }) {
    return (
        <div className="Experience">
            <h2 className="title">Experience</h2>
            {experience.map(experience => generateExperienceDiv(experience))}
        </div>
    )
}

function generateExperienceDiv(experience) {
    const startDate = new Date(experience.start);
    const endDate = experience.end == "Present" ? "Present" : new Date(experience.end);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="content" key={experience.id}>
            <div className="row">
                <h3>{experience.company}</h3>
                {endDate == "Present" ?
                    <span>{months[startDate.getMonth()]} {startDate.getFullYear()} – {endDate}</span> :
                    <span>{months[startDate.getMonth()]} {startDate.getFullYear()} – {months[endDate.getMonth()]} {endDate.getFullYear()}</span>}
            </div>
            <div className="row">
                <span>{experience.title}</span>
                <span>{experience.location}</span>
            </div>
            <ul>
                {experience.extraInfo.map(info => {
                    return <li key={info.id}>{info.content}</li>
                })}
            </ul>
        </div>
    )
}