import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "./Candydex.css";

class Candydex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candies: [] //name  & image
    };
  }

  componentDidMount() {
    let api = axios;
    let url = "https://fr.openfoodfacts.org/categorie/bonbons/1.json";
    let bonbons = [];

    api
      .get(url)
      .then(res => {
        for (let i = 0; i < 1; i++) {
          bonbons.push({
            image: res.data.products[i].image_url,
            name: res.data.products[i].product_name
          });
        }
        this.setState({ candies: bonbons });
      })
      .catch(err => {
        console.log(err);
        console.log(url);
      });
  }
  render() {
    //JSON.stringify(this.state.candies)
    return (
      <div className="container-fluid text-center candybody">
        {this.state.candies.map(candy => {
          return (
            <div>
              <Header />
              <img
                className="mt-5 imgcandy"
                src={candy.image}
                alt={candy.image}
              />
              <p id="textcandy" className="my-3">
                {candy.name}
              </p>
              <p className="mb-5">
                Un bonbon est une confiserie, généralement aromatisée avec
                divers goûts sucrés. Les bonbons sont vendus au poids en vrac ou
                conditionnés en sachet, emballés individuellement ou non. Le
                bonbon est un marché mondial lucratif et représente une
                récompense pour l'enfant qui est la principale cible.
              </p>
              <Footer />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Candydex;
/*
<img
          src={this.state.candies[chosenCandy].image}
          alt={this.state.candies[chosenCandy].image}
        />
        <p>{this.state.candies[chosenCandy].name}</p>*/
