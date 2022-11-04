const MaxMinIcon = (props) => {
    return (
        <>
        {props.maximiseType === "editor" ? props.editorMaximised ? <i onClick={props.handleClickMaximiseEditor} className="fa-solid fa-minimize"></i>
                : <i onClick={props.handleClickMaximiseEditor} className="fa-solid fa-maximize"></i> :
            props.previewMaximised ? <i onClick={props.handleClickMaximisePreview} className="fa-solid fa-minimize"></i> :
                <i onClick={props.handleClickMaximisePreview} className="fa-solid fa-maximize"></i>}
        </>
    )
}
export default MaxMinIcon