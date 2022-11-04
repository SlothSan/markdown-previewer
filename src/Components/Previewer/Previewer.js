import './Previewer.css'
import Toolbar from "../Toolbar/Toolbar";
import PreviewerText from "./PreviewerText/PreviewerText";

const Previewer = (props) => {
    return (
        <div className={"previewer-container"}>
            <Toolbar icon={"fa-solid fa-magnifying-glass"}
                     title={'Previewer'}
                     />
            <PreviewerText markdownBody={props.markdownBody} />
        </div>
    )
}

export default Previewer