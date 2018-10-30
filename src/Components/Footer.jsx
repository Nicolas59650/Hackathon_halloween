import React from "react";
import "../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer navbar-dark">
      <div className="container-fluid">
        <div className="row justify-content-center pt-3">
          <div className="col-10 col-md-6 col-md-offset-1">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://dr-merac-annie.chirurgiens-dentistes.fr/default.aspx"
                  className="NeddADentist text-white"
                >
                  Need a dentist ?
                </a>
              </li>
              <li className="text-white Contactus">Contact us</li>
              <li className="text-white Legalmentions">Legal mentions</li>
              <li className="text-white madeWithLove">
                Made with <span className="heart">♥</span> by Wild Code School
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
