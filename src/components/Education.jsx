import '../styles/Education.css'

export default function Education({ education }) {
    return (
        <div className="Education">
            <h2 className="title">Education</h2>
            {education.map(education => generateEducationDiv(education))}
        </div>
    )
}

function generateEducationDiv(education) {
    const startDate = new Date(education.start);
    const endDate = new Date(education.end);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="content" key={education.id}>
            <div className="row">
                <h3>{education.school}</h3>
                {new Date() > endDate ?
                    <span>{months[startDate.getMonth()]} {startDate.getFullYear()} – {months[endDate.getMonth()]} {endDate.getFullYear()}</span> :
                    <span>Expected graduation: {months[endDate.getMonth()]} {endDate.getFullYear()}</span>}
            </div>
            <div className="row">
                <span>{education.degree}</span>
                <span>{education.location}</span>
            </div>
            <ul>
                {education.extraInfo.map(info => {
                    return <li key={info.id}>{info.content}</li>
                })}
            </ul>
        </div>
    )
}