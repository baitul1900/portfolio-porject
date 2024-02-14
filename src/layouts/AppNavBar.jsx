/* eslint-disable react/prop-types */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const AppNavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <h1>M.shongoti</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="container-fluid d-flex justify-content-lg-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="navbar-item text-decoration-none"
                  activeClassName="is-active"
                  to="/work"
                  onClick={() => scrollToSection("work-section")}
                >
                  work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navbar-item text-decoration-none"
                  activeClassName="is-active"
                  to="/about"
                  onClick={() => scrollToSection("about-section")}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navbar-item text-decoration-none"
                  activeClassName="is-active"
                  to="/contact"
                  onClick={() => scrollToSection("contact-section")}
                >
                  contact
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
