import './Previewer.css'
import Toolbar from "../Toolbar/Toolbar";

const Previewer = () => {
    return (
        <div className={"previewer-container"}>
            <Toolbar icon={"fa-solid fa-magnifying-glass"}
                     title={'Previewer'}
                     />
        </div>
    )
}

export default Previewer