import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Gamepage.css";

let goalAchieved = 0;
let messageh1 = "Et si on commençait à bouger ? Explorons !!";

class Gamepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 50.6331, //50.61  INITIAL VALUE 50.6331
      longitude: 3.0188, //3.06   INITIAL VALUE 3.0188
      city: "Wild+code+school"
    };
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goUp = this.goUp.bind(this);
    this.goDown = this.goDown.bind(this);
  }

  goRight() {
    let longTemp = JSON.parse(this.props.result)[0].longitude;
    if (
      this.state.longitude + 0.02 > longTemp - 0.02 &&
      this.state.longitude + 0.02 < longTemp + 0.02
    ) {
      messageh1 = "Stop !! Maintenant tu peux essayer nord ou sud";
      goalAchieved++;
    } else {
      if (longTemp > this.state.longitude) {
        messageh1 = "Continue vers l'est !";
      } else {
        messageh1 = "Ouuups, mauvaise direction ! Plutôt vers l'ouest ?";
      }
    }
    this.setState({ longitude: this.state.longitude + 0.02 });
  }

  goLeft() {
    let longTemp = JSON.parse(this.props.result)[0].longitude;
    if (
      this.state.longitude - 0.02 > longTemp - 0.02 &&
      this.state.longitude - 0.02 < longTemp + 0.02
    ) {
      messageh1 = "Stop !! Maintenant tu peux essayer nord ou sud";
      goalAchieved++;
    } else {
      if (longTemp < this.state.longitude) {
        messageh1 = "Continue vers l'ouest !";
      } else {
        messageh1 = "Ouuups, mauvaise direction ! Plutôt vers l'est ?";
      }
    }
    this.setState({ longitude: this.state.longitude - 0.02 });
  }

  goUp() {
    let latTemp = JSON.parse(this.props.result)[0].latitude;
    if (
      this.state.latitude + 0.02 > latTemp - 0.02 &&
      this.state.latitude + 0.02 < latTemp + 0.02
    ) {
      messageh1 = "Stop !! Maintenant tu peux essayer ouest ou est";
      goalAchieved++;
    } else {
      if (latTemp > this.state.latitude) {
        messageh1 = "Continue vers le nord !";
      } else {
        messageh1 = "Ouuups, mauvaise direction ! Plutôt vers le sud ?";
      }
    }
    this.setState({ latitude: this.state.latitude + 0.02 });
  }

  goDown() {
    let latTemp = JSON.parse(this.props.result)[0].latitude;
    if (
      this.state.latitude - 0.02 > latTemp - 0.02 &&
      this.state.latitude - 0.02 < latTemp + 0.02
    ) {
      messageh1 = "Stop !! Maintenant tu peux essayer ouest ou est";
      goalAchieved++;
    } else {
      if (latTemp < this.state.latitude) {
        messageh1 = "Continue vers le sud !";
      } else {
        messageh1 = "Ouuups, mauvaise direction ! Plutôt vers le nord ?";
      }
    }
    this.setState({ latitude: this.state.latitude - 0.02 });
  }

  render() {
    let base =
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyCEBcrR5PVaZRvVdEc7tIDnv5BdzNoB7Jg&q=";
    let results = this.props.result;
    if (goalAchieved === 2) {
      messageh1 = "You obtained a candy !!";
    }
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
                  <h1 className="messageh1 text-center">{messageh1}</h1>
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
      
          this.sweetGenerator = this.sweetGenerator.bind(this);
        <h1>{results}</h1>
        <h1>Long: {this.state.longitude}</h1>
        <h1>Lat: {this.state.latitude}</h1>

          */
