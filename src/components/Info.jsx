import '../styles/Info.css'

export default function Info({info}) {
    return(
        <div className="Info">
            <h1>{info.fullName}</h1>
            <div className="row">
                {info.location && <span>{info.location}</span>}
                {info.phone && <span>{info.phone}</span>}
                {info.email && <span>{info.email}</span>}
            </div>
        </div>
    )
}