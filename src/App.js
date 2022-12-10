import './App.css';
import {marked} from "marked";
import {useState} from "react";

function App() {
    let [mdText, setMdText] = useState("");
  return (
    <div className="App">
        <h1>Markdown Previewer</h1>
        <textarea 
        id="editor" 
        onChange={(e)=>{setMdText(e.target.value)}} 
        value={mdText}
        name="" 
        cols="30" 
        rows="10">
        </textarea>

        <div id="preview"
            dangerouslySetInnerHTML={{__html: marked.parse(mdText)}}   
        >
        </div>
    </div>
  );
}

export default App;
