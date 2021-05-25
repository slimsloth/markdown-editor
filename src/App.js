import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import './styles/index.css';

function App() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route exact path="/">
        <HomePage handleChange={handleChange} text={text}/>
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

export default App;
