import React from "react";
import "../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer navbar-dark">
      <div className="container-fluid">
        <ul className="row text-center d-flex list-unstyled justify-content-center pt-3 mb-0">
          <li className="mb-2 col-xs-12 col-sm-2">
            <a
              href="https://dr-merac-annie.chirurgiens-dentistes.fr/default.aspx"
              className="text-white"
            >
              Besoin d'un dentiste ?
            </a>
          </li>
          <li className="col-xs-12 col-sm-2 text-white mb-2">
            Mention Légales
          </li>
          <li className="col-xs-12 col-sm-2 text-white madeWithLove">
            Made with <span className="heart">♥</span> by Wild Code School
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
