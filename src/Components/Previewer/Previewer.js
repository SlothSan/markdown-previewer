import './Previewer.css'
import Toolbar from "../Toolbar/Toolbar";
import PreviewerText from "./PreviewerText/PreviewerText";

const Previewer = (props) => {

    let classString = '';

    if(props.editorMaximised) {
        classString = 'hidden'
    } else if (props.previewMaximised === true) {
        classString = 'previewer-container maximised'
    } else {
        classString = 'previewer-container'
    }

    return (
        <div className={classString}>
            <Toolbar icon={"fa-solid fa-magnifying-glass"}
                     title={'Previewer'}
                     handleClickMaximisePreview={props.handleClickMaximisePreview}
                     previewMaximised={props.previewMaximised}
                     />
            <PreviewerText markdownBody={props.markdownBody} />
        </div>
    )
}

export default Previewer