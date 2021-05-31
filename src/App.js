import React, {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import './styles/index.css';

function App() {
  const [text, setText] = useState(defaultText);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route exact path="/">
        <HomePage handleChange={handleChange} text={text} className="home-page"/>
        </Route>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </Router>
  );
}
const defaultText=`# Real-time Markdown Previewer
## This is an h2 heading
### This is an h3 heading

You can insert code \`<div></div>\` with 2 backticks.

\`\`\`
// This is a code block:

function beepBoop(beep) {
  if (beep) {
    return boop;
  }
}
\`\`\`

You can insert **bold** text or _italic_ text.

You can even do **_bold and italic text_**.

This is an example of ~~strike through text~~.

Here is an example of a [link](https://www.reddit.com/r/TVTooHigh/).

Here is an example of a table:

Header 1 | Header 2 | Header 3
------------ | ------------- | -------------
Row content | Row Content | Row Content
Row Content | Row Content | Row Content

- Here is a list.
  - You can
     - Keep indenting
        - The list.


1. This is
1. a numbered
1. list.

And lastly, here is an example of an embedded picture:

![hide the pain](https://i.imgur.com/iojvSeD.jpg)`

export default App;
