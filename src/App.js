import React, { Component } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Candydex from "./Components/Candydex";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Gamepage" component={Search} />
            <Route path="/Candydex" component={Candydex} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
