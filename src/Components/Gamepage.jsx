import React, { Component } from "react";

class Gamepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 50.6331,
      longitude: 3.0188,
      city: "Wild+code+school"
    };
    this.goRight = this.goRight.bind(this);
    this.goRightUp = this.goRightUp.bind(this);
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

  goRightUp() {
    this.setState({
      longitude: this.state.longitude + 0.002,
      latitude: this.state.latitude + 0.002
    });
  }

  goLeftUp() {
    this.setState({
      longitude: this.state.longitude - 0.002,
      latitude: this.state.latitude + 0.002
    });
  }

  goRightDown() {
    this.setState({
      longitude: this.state.longitude + 0.002,
      latitude: this.state.latitude - 0.002
    });
  }

  goLeftDown() {
    this.setState({
      longitude: this.state.longitude - 0.002,
      latitude: this.state.latitude - 0.002
    });
  }

  render() {
    let base =
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyCEBcrR5PVaZRvVdEc7tIDnv5BdzNoB7Jg&q=";
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <iframe
              title="test_map"
              width="800"
              height="500"
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

            <br />
            <div className="container buttons">
              <div className="row">
                <button
                  className="col-4"
                  onClick={() => {
                    this.goLeftUp();
                  }}
                >
                  Left Up
                </button>

                <button
                  className="col-4"
                  onClick={() => {
                    this.goUp();
                  }}
                >
                  Up
                </button>

                <button
                  className="col-4"
                  onClick={() => {
                    this.goRightUp();
                  }}
                >
                  Right Up
                </button>

                <button
                  className="col-4"
                  onClick={() => {
                    this.goLeft();
                  }}
                >
                  Left
                </button>

                <button
                  className="col-4 offset-4"
                  onClick={() => {
                    this.goRight();
                  }}
                >
                  Right
                </button>

                <button
                  className="col-4"
                  onClick={() => {
                    this.goLeftDown();
                  }}
                >
                  Left Down
                </button>

                <button
                  className="col-4"
                  onClick={() => {
                    this.goDown();
                  }}
                >
                  Down
                </button>

                <button
                  className="col-4"
                  onClick={() => {
                    this.goRightDown();
                  }}
                >
                  Right Down
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h2>Longitude : {this.state.longitude}</h2>
            <h2>Latitude : {this.state.latitude}</h2>
          </div>
        </div>
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
