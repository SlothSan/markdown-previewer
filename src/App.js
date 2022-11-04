import './App.css';
import Editor from "./Components/Editor/Editor";
import {useState} from "react";
import Previewer from "./Components/Previewer/Previewer";

function App() {

    const [editorMaximised, setEditorMaximised] = useState(false)

    //TODO Add the functionality for changing to fullscreen and viceversa
    const handleClickMaximiseEditor = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setEditorMaximised(!editorMaximised)
    }

  return (
    <div className="App">
      <Editor handleClickMaximiseEditor={handleClickMaximiseEditor}
              editorMaximised={editorMaximised}/>
      <Previewer />
    </div>
  );
}

export default App;
