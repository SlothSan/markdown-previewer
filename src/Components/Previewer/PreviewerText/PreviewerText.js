import './PreviewerText.css'
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm"
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';


const PreviewerText = (props) => {

    Lowlight.registerLanguage('js', javascript);

    const renderer = {
        code(snippet, lang) {
            return <Lowlight key={this.elementId} language={lang} value={snippet} />;
        },
    };


    return (
        <div id={"preview"} className={"preview-text"}>
            <ReactMarkdown children={props.markdownBody}
                           remarkPlugins={[remarkGFM]}
                           skipHtml={true}></ReactMarkdown>
        </div>
    )
}

export default PreviewerText