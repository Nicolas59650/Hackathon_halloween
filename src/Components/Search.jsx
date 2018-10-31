import React, { Component } from "react";
import axios from "axios";

let maTournee = [
  {
    name: "Nico",
    number: "11",
    label: "rue+colombines",
    postcode: "59660"
  },
  {
    name: "Nico",
    number: "11",
    label: "rue+colombines",
    postcode: "59660"
  },
  {
    name: "Nico",
    number: "11",
    label: "rue+colombines",
    postcode: "59660"
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
    this.state.address.map(id => {
      api
        .get(urlBase + id.number + id.label + "&postcode=" + id.postcode)
        .then(response => {
          coordinates.push({
            latitude: response.data.features[0].geometry.coordinates[0],
            longitude: response.data.features[0].geometry.coordinates[1]
          });
          this.setState({ result: coordinates });
        });
    });
  }

  render() {
    return <div>{JSON.stringify(this.state.result)}</div>;
  }
}

export default Search;

/*<button onClick={this.searchAdress}>On click</button>
{this.state.results
  .filter((Address, index) => {
     return index < 5;
})*/
