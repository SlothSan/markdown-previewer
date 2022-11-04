import './Editor.css'
import Toolbar from "../Toolbar/Toolbar";
import EditorTextarea from "./EditorTextarea/EditorTextarea";

const Editor = (props) => {

    let classString = ''

    if(props.previewMaximised) {
        classString = 'hidden'
    } else if (props.editorMaximised) {
        classString = 'editor-container maximised'
    } else {
        classString = 'editor-container'
    }

    return (
        <div className={classString} >
            <Toolbar icon={"fa-regular fa-pen-to-square"}
                     title={"Editor"}
                     handleClickMaximiseEditor={props.handleClickMaximiseEditor}
                     editorMaximised={props.editorMaximised}
                     maximiseType={'editor'}/>
            <EditorTextarea markdownBody={props.markdownBody}
                            setMarkdownBody={props.setMarkdownBody}/>
        </div>
    )
}

export default Editor