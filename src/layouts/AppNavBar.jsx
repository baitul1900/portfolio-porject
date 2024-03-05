/* eslint-disable react/prop-types */ // Disable eslint check for prop types validation

import { Link, NavLink } from "react-router-dom"; // Importing Link and NavLink from react-router-dom

const AppNavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid p-0">
        {/* Brand link to home */}
        <Link className="navbar-brand" to={"/"}>
          <h1>M.shongoti</h1> {/* Brand text */}
        </Link>
        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span> {/* Navbar toggler icon */}
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="container-fluid d-flex justify-content-lg-end">
            <ul className="navbar-nav">
              {/* Navigation links */}
              <li className="nav-item">
                <NavLink
                  className="navbar-item text-decoration-none"
                  activeClassName="is-active" // Active class name
                  to="/work"
                  onClick={() => scrollToSection("work-section")}
                >
                  work {/* Navigation text */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navbar-item text-decoration-none"
                  activeClassName="is-active" // Active class name
                  to="/about"
                  onClick={() => scrollToSection("about-section")}
                >
                  About {/* Navigation text */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navbar-item text-decoration-none"
                  activeClassName="is-active" // Active class name
                  to="/contact"
                  onClick={() => scrollToSection("contact-section")}
                >
                  contact {/* Navigation text */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
