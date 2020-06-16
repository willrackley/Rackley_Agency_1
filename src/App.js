import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/contactUs" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
