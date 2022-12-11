import './App.css';
import {marked} from "marked";
import {useState} from "react";

// When my markdown previewer first loads,
// the default text in the #editor field should contain valid markdown
// that represents at least one of each of the following elements:
// a header (H1 size),
// a sub header (H2 size),
// a link, inline code,
// a code block,
// a list item,
// a blockquote,
// an image,
// and bolded text


let initialDefalutMarkdown = `
# Heading level 1 

## Heading level 2  
### Heading level 3

Here is some inline code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is a codeblock:

function square(number) {
  return number * number;
}

\`\`\`

You can also make text **bold**... 
Or _italic1_ or *italic2*.
Or a bold italic text like so: **_both!_**
You can cross text in markdown, ~~crossing stuff out~~.

There's also links [MDN Documentation](https://developer.mozilla.org/en-US/),
and Block Quotes:
> It does not matter how slowly you go as long as you do not stop. 
> by Confucius  


And you can make tables in markdown too:

| ID | Language  | Description |
|----|-----------|-------------|
|#1 | JavaScript |It is a programming language |
|#2 | Markdown | It is a markup language, useful for taking notes |
|#3| CSS | It is the styling language that makes the web pretty and sexy |
|#4 | HTML | A markup language that provides the fundamental structure for a page |

This is a list in markdown:

- List item 
- List item
    - Indented list item 
    - Indented list item
- List item 



1. And there are numbered lists too.
2. Item 2
3. Item 3:

You can embed images as well:

![Notes taking picture](notes-taking.jpg)


`;



// My markdown previewer interprets carriage returns and renders them as <br> (line break) elements 
marked.setOptions({
breaks: true
});






function App() {
    // Handle and change the themes
    let [themeClass, setThemeClass] = useState("light");
    
    // Keep track of the md text in a state variable called `mdText`
    let [mdText, setMdText] = useState(initialDefalutMarkdown);
  return (
    <div id="App" className={`${themeClass}`}>
        <h1 className="myMarkdownApp">My Markdown Previewer in React</h1>
        <div className="themes">Themes: 
            <button onClick={(e)=>{setThemeClass(e.target.textContent)} }>light</button>
            <button onClick={(e)=>{setThemeClass(e.target.textContent)} }>dark</button>
            <button onClick={(e)=>{setThemeClass(e.target.textContent)} }>github</button>
            <button onClick={(e)=>{setThemeClass(e.target.textContent)} }>rainbow</button>
            <button onClick={(e)=>{setThemeClass(e.target.textContent)} }>dark</button>
            <button onClick={(e)=>{setThemeClass(e.target.textContent)} }>dark</button>
        </div>
      
      <div className="container">
        <div className="editorWrap">
        <div className="toolbar">Editor</div>
        <textarea 
        id="editor" 
        onChange={(e)=>{setMdText(e.target.value)}} 
        value={mdText}
        name="" 
        >
        </textarea>
    </div>

      <div className="previewWrap">
        <div className="toolbar">Previewer</div>
        <div id="preview"
            dangerouslySetInnerHTML={{__html: marked.parse(mdText)}}   
        >
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
