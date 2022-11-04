import './Editor.css'
import Toolbar from "../Toolbar/Toolbar";
import EditorTextarea from "./EditorTextarea/EditorTextarea";

const Editor = (props) => {
    return (
        <div className={"editor-container"}>
            <Toolbar icon={"fa-regular fa-pen-to-square"}
                     title={"Editor"}
                     handleClickMaximiseEditor={props.handleClickMaximiseEditor}
                     editorMaximised={props.editorMaximised}/>
            <EditorTextarea markdownBody={props.markdownBody}
                            setMarkdownBody={props.setMarkdownBody}/>
        </div>
    )
}

export default Editor