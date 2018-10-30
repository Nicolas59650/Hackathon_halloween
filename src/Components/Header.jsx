import React from "react";
import "../App.css";
import "./Header.css";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-header">
      <a className="navbar-brand" href="" />
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="offset-3">
          <h1 className="mt-2 text-white description-text mb-2">
            TEETH OR TREAT !
          </h1>
          <h3>Get all the candies and loose as much tooth as possible!</h3>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
