import './Toolbar.css'

const Toolbar = (props) => {
    return (
        <div className={"toolbar"}>
            <div className={"icon-and-title-container"}>
                <i className={props.icon}></i>
                <p className={"toolbar-title"}>{props.title}</p>
            </div>
            <div className={"maximise-container"}>
                {props.editorMaximised ? <i onClick={props.handleClickMaximiseEditor} className="fa-solid fa-minimize"></i>
                    : <i onClick={props.handleClickMaximiseEditor} className="fa-solid fa-maximize"></i> }

            </div>
        </div>
    )
}

export default Toolbar