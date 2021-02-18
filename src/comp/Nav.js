import { useState } from "react";
import { Link } from "react-scroll";
import Ztext from "react-ztext";

const Nav = () => {
  const [togglemenu, settogglemenu] = useState(false);

  const togglemenuclick = () => {
    settogglemenu(!togglemenu);
  };

  // const scrolltop = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <Link className="logo" type="button" to="banner">
            {/* MrRawat */}
            <Ztext
              depth="1rem"
              direction="both"
              event="pointer"
              eventRotation="20deg"
              eventDirection="default"
              fade={false}
              layers={5}
              perspective="500px"
            >
              <span>MrRawat</span>
            </Ztext>
          </Link>
          <button
            className="navbar-toggler toggle-menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={togglemenuclick}
          >
            {togglemenu ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav menu ml-auto">
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="services"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="portfolio"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                >
                  Our Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
