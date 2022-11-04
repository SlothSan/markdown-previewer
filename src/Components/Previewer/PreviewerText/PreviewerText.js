import './PreviewerText.css'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const PreviewerText = (props) => {

    return (
        <div id={"preview"} className={"preview-text"}>
            <ReactMarkdown children={props.markdownBody}
                           remarkPlugins={[remarkGfm]}
                           skipHtml={true}>
            </ReactMarkdown>
        </div>
    )
}

export default PreviewerText