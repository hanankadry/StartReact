import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top py-4">
        <div className="container">
          <Link className="navbar-brand fw-bolder text-uppercase fs-2 p-0" to="/StartReact">
            Start Framework
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={"bars"} size="md" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-0">
                <NavLink className="nav-link fw-bolder p-2" to="/StartReact/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item px-0">
                <NavLink className="nav-link fw-bolder p-2" to="/StartReact/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item px-0">
                <NavLink className="nav-link fw-bolder p-2" to="/StartReact/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
