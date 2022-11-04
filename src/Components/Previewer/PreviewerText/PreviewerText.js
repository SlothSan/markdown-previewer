import './PreviewerText.css'
import Markdown from "marked-react";
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
             <Markdown value={props.markdownBody}
                       gfm={true}
                       breaks={true}></Markdown>
        </div>
    )
}

export default PreviewerText