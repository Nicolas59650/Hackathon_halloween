import React, { Component } from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar id="nav-tool" color="dark" dark expand="md">
        <NavbarBrand href="/" className="mt-2 navigation">
          Teeth or Treat !
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-5" navbar>
            <NavItem>
              <NavLink className="mt-2 ml-5 navigation" href="/Gamepage">
                Jeu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mt-2 ml-5 navigation" href="/Candydex">
                Bonbondex
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;

/*
<nav className="navbar navbar-expand-lg navbar-light bg-dark pt-0 pb-0">
        <a className="navbar-brand" id="navigation" href="#navigation">
          Teeth or treat !
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarcandy"
          aria-controls="navbarcandy"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarcandy">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="link-nav nav-link" href="localhost:3000/Search">
                Jeu
              </a>
            </li>
            <li className="nav-item">
              <a className="link-nav nav-link" href="localhost:3000/Candydex">
                Bonbondex
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );*/
