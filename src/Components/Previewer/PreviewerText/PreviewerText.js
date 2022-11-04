import './PreviewerText.css'
import Markdown from "marked-react";


const PreviewerText = (props) => {

    return (
        <div id={"preview"} className={"preview-text"}>
             <Markdown value={props.markdownBody}
                       gfm={true}
                       breaks={true}></Markdown>
        </div>
    )
}

export default PreviewerText