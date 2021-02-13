import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <div className="bar mb-3"></div>
            <p>
              Our team is experienced with advanced latest technologies and we
              try to use suitable ones in our client projects! We try not to let
              your project down anyway!
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <div className="bar mb-3"></div>
            <ul className="footer-link">
              <li>
                <Link to="banner" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="nav-link">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow US</h5>
            <div className="bar mb-3"></div>

            <div className="f-icon">
              <a
                target="_blank"
                href="https://www.facebook.com/mrrawatofficial"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://twitter.com/mrrawatofficial">
                <i className="fab fa-twitter"> </i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/mrrawatofficial/"
              >
                <i className="fab fa-instagram"> </i>
              </a>
              <a
                target="_blank"
                href="https://join.skype.com/invite/iscdSE8EsWCE"
              >
                <i className="fab fa-skype"> </i>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=%2B918285515165&text&app_absent=0"
              >
                <i className="fab fa-whatsapp"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
