import InfoEditor from "./InfoEditor"

export default function Editor({ infoState}) {
    return (
        <div className="Editor">
            <InfoEditor info={infoState.info} infoSetter={infoState.setInfo} />
        </div>
    )
}