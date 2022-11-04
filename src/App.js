import './App.css';
import Editor from "./Components/Editor/Editor";
import {useState} from "react";

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
    </div>
  );
}

export default App;
