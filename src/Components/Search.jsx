import React, { Component } from "react";
import Gamepage from "./Gamepage";
import axios from "axios";

let maTournee = [
  {
    name: "Maison 1",
    number: "115",
    label: "rue+Turgot",
    postcode: "59000"
  },
  {
    name: "Maison 2",
    number: "8",
    label: "rue+Aristide+Briand",
    postcode: "59000"
  },
  {
    name: "Maison 3",
    number: "121",
    label: "rue+Gabrielle+Bouveur",
    postcode: "59130"
  }
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: maTournee,
      result: []
    };
  }

  componentDidMount() {
    let api = axios;
    let urlBase = "https://api-adresse.data.gouv.fr/search/?q=";
    let coordinates = [];
    for (let i = 0; i < this.state.address.length; i++) {
      api
        .get(
          urlBase +
            this.state.address[i].number +
            this.state.address[i].label +
            "&postcode=" +
            this.state.address[i].postcode
        )
        .then(response => {
          coordinates.push({
            longitude: response.data.features[0].geometry.coordinates[0],
            latitude: response.data.features[0].geometry.coordinates[1]
          });
          this.setState({ result: coordinates });
        });
    }
  }

  render() {
    return (
      <div>
        <Gamepage result={JSON.stringify(this.state.result)} />
      </div>
    );
  }
}

export default Search;

/*<button onClick={this.searchAdress}>On click</button>
{this.state.results
  .filter((Address, index) => {
     return index < 5;
})*/
