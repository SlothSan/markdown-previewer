import './Toolbar.css'
import MaxMinIcon from "./MaxiMinIcon/MaxMinIcon";

const Toolbar = (props) => {
    return (
        <div className={"toolbar"}>
            <div className={"icon-and-title-container"}>
                <i className={props.icon}></i>
                <p className={"toolbar-title"}>{props.title}</p>
            </div>
            <div className={"maximise-container"}>
                <MaxMinIcon editorMaximised={props.editorMaximised}
                            previewMaximised={props.previewMaximised}
                            maximiseType={props.maximiseType}
                            handleClickMaximiseEditor={props.handleClickMaximiseEditor}
                            handleClickMaximisePreview={props.handleClickMaximisePreview}/>
            </div>
        </div>
    )
}

export default Toolbar