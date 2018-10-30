import React from "react";
import axios from "axios";

let maTournee = [
  {
    name: "Le Switch",
    number: "153",
    label: "Rue+Colbert",
    postcode: "59800+Lille"
  },
  {
    name: " IBM",
    number: "6",
    label: "Avenue+des+Saules",
    postcode: "59800+Lille"
  },
  {
    name: "So Good",
    number: "163",
    label: "Avenue+de+bretagne",
    postcode: "59800+Lille"
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
    let urlBase = "https://api-adresse.data.gouv.fr/search/?q="
    this.state.address.map(id=>{
        api.get(urlBase + id.number + id.label + id.postcode)
        .then(res => {

        })
  }
  render() {
    return <div />;
  }
}

export default Search;

/*<button onClick={this.searchAdress}>On click</button>
{this.state.results
  .filter((Address, index) => {
     return index < 5;
})*/
