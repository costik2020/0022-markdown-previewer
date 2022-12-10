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

| ID | Title |
|---|------|
|#1 | Hello |
|#2 | Markdown |


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
    let [mdText, setMdText] = useState(initialDefalutMarkdown);
  return (
    <div className="App">
        <h1>My Markdown Previewer in React</h1>
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
