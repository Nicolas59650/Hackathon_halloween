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
          <div className="introduction">
            <p id="text-introduction" className="pt-4 mb-0 text-center">
              Sois curieux et cherche les bonbons sur la carte a l' aide des
              boutons directionnels
            </p>
            <div className="text-center pt-0 mt-0">
              <img
                className="citrouille"
                src="/img/citrouille.png"
                alt="citrouille"
              />
            </div>
          </div>
          <div className="container-fluid pt-5">
            <div className="row">
              <div className="embed-responsive embed-responsive-16by9 col-lg-7 col-sm-12 ml-lg-3 mb-5">
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
                  <div className="row">
                    <div className="offset-4 col-3">
                      <button
                        className="button-gamepage"
                        onClick={() => {
                          this.goUp();
                        }}
                      >
                        Nord
                      </button>
                    </div>
                    <div className="offset-3 col-3">
                      <button
                        className="button-gamepage button-left-gamepage"
                        onClick={() => {
                          this.goLeft();
                        }}
                      >
                        Ouest
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className=" button-right-gamepage"
                        onClick={() => {
                          this.goRight();
                        }}
                      >
                        Est
                      </button>
                    </div>
                    <div className="offset-4 col-3">
                      <button
                        className="button-gamepage"
                        onClick={() => {
                          this.goDown();
                        }}
                      >
                        Sud
                      </button>
                    </div>
                  </div>
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
