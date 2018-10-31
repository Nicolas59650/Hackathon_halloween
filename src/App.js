import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Candydex from "./Components/Candydex";
import Profile from "./Components/Profile";
import Gamepage from "./Components/Gamepage";
import Search from "./Components/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
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
