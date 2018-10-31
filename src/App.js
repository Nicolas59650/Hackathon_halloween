import React, { Component } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Candydex from "./Components/Candydex";
import Profile from "./Components/Profile";
import Gamepage from "./Components/Gamepage";
import Search from "./Components/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Gamepage" component={Gamepage} />
            <Route path="/Candydex" component={Candydex} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </BrowserRouter>
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
