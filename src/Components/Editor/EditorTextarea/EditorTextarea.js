import './EditorTextarea.css'

const EditorTextarea = (props) => {
    return (
        <textarea id={"editor"} className={"editor-textarea"}
                  value={props.markdownBody}
                  onChange={e => props.setMarkdownBody(e.target.value)}>
        </textarea>
    )
}

export default EditorTextarea