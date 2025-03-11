import '../../styles/Education.css'

export default function Education({ education }) {
    return (
        <div className="Education">
            <h2 className="title">Education</h2>
            {education.map(education => generateEducationDiv(education))}
        </div>
    )
}

function generateEducationDiv(education) {
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="content" key={education.id}>
            <div className="row">
                <h3>{education.school}</h3>
                {education.endYear > now.getFullYear() || (education.endYear == now.getFullYear && education.endMonth - 1 > now.getMonth) ?
                    <span>Expected graduation: {months[education.endMonth]} {education.endYear}</span> :
                    <span>{months[education.startMonth - 1]} {education.startYear} – {months[education.endMonth - 1]} {education.endYear}</span>}
            </div>
            <div className="row">
                <span>{education.degree}</span>
                <span>{education.location}</span>
            </div>
            <ul>
                {education.notes.map(note => {
                    return <li key={note.id}>{note.content}</li>
                })}
            </ul>
        </div>
    )
}