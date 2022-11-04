import './Previewer.css'
import Toolbar from "../Toolbar/Toolbar";
import PreviewerText from "./PreviewerText/PreviewerText";

const Previewer = () => {
    return (
        <div className={"previewer-container"}>
            <Toolbar icon={"fa-solid fa-magnifying-glass"}
                     title={'Previewer'}
                     />
            <PreviewerText />
        </div>
    )
}

export default Previewer