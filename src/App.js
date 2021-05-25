import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import './styles/index.css';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path="/"component={HomePage} exact/>
        <Route path="/about" component={AboutPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
