import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-light bg-dark pt-0 pb-0">
    <a className="navbar-brand" id="navigation" href="#navigation">
      Teeth or treat !
    </a>
    <Link className="link-nav" to="/Search">
      Jeu
    </Link>
    <Link className="link-nav" to="/Candydex">
      Bonbondex
    </Link>
  </nav>
);

export default Header;
