import React, { Component } from "react";
import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push("/Gamepage");
  }

  render() {
    return (
      <div>
        <div className="App-Body">
          <p id="slogan">Es-tu pret?</p>
          <button onClick={this.handleClick} className="button-homepage">
            <span id="button_main">Que la chasse commence !</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Homepage;
