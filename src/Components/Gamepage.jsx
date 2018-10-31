import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Gamepage.css";

class Gamepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 50.6331,
      longitude: 3.0188,
      city: "Wild+code+school"
    };
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goUp = this.goUp.bind(this);
    this.goDown = this.goDown.bind(this);
  }

  goRight() {
    this.setState({ longitude: this.state.longitude + 0.002 });
  }

  goLeft() {
    this.setState({ longitude: this.state.longitude - 0.002 });
  }

  goUp() {
    this.setState({ latitude: this.state.latitude + 0.002 });
  }

  goDown() {
    this.setState({ latitude: this.state.latitude - 0.002 });
  }

  render() {
    let base =
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyCEBcrR5PVaZRvVdEc7tIDnv5BdzNoB7Jg&q=";
    return (
      <div>
        <Header />
        <div className="gamepage-bg">
          <div className="container-fluid pt-5">
            <div className="row">
              <div className="embed-responsive embed-responsive-16by9 col-lg-7 col-sm-12">
                <iframe
                  className="embed-responsive-item"
                  title="test_map"
                  frameborder="0"
                  src={
                    base +
                    this.state.city +
                    "&center=" +
                    this.state.latitude +
                    "," +
                    this.state.longitude
                  }
                  allowfullscreen
                />
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="container buttons">
                  <button
                    className="offset-1 col-3 button-gamepage"
                    onClick={() => {
                      this.goUp();
                    }}
                  >
                    Up
                  </button>

                  <button
                    className="col-3 button-gamepage"
                    onClick={() => {
                      this.goLeft();
                    }}
                  >
                    L
                  </button>

                  <button
                    className="offset-6 col-3 button-gamepage"
                    onClick={() => {
                      this.goRight();
                    }}
                  >
                    R
                  </button>

                  <button
                    className="offset-1 col-3 button-gamepage"
                    onClick={() => {
                      this.goDown();
                    }}
                  >
                    D
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gamepage;

/*<button
onClick={() => {
  this.sweetGenerator(tempVariables);
}}
>
Go get them candies !
</button>


<iframe
title="test_map"
width="600"
height="450"
frameborder="0"
src={base2 + this.state.latitude + "," + this.state.longitude}
allowfullscreen
/>


<iframe
          title="test_map"
          width="600"
          height="450"
          frameborder="0"
          src={
            base +
            this.state.latitude +
            "," +
            this.state.longitude +
            "&zoom=17&maptype=satellite"
          }
          allowfullscreen
        />
        
        
        let base =
      "https://www.google.com/maps/embed/v1/view?key=AIzaSyCEBcrR5PVaZRvVdEc7tIDnv5BdzNoB7Jg&center=";
    let base2 =
      "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCEBcrR5PVaZRvVdEc7tIDnv5BdzNoB7Jg&location=";*/

// A STATE THAT COUNTS HOW MANY SWEETS THERE ARE nbSweets: 0, //

/* <h3>You have earned {this.state.nbSweets} sweets !!</h3>
     
         let tempVariables = [5, 18, 205, "acdeetzaetazet"];

     sweetGenerator(variablesStreet) {
        let calculatedSweets = 0;
        variablesStreet.map(
          elementStreet =>
            typeof elementStreet === "number"
              ? (calculatedSweets += elementStreet)
              : (calculatedSweets += elementStreet.length)
        );
        calculatedSweets = calculatedSweets % 3;
        this.setState({ nbSweets: calculatedSweets });
      }
      
          this.sweetGenerator = this.sweetGenerator.bind(this);*/
