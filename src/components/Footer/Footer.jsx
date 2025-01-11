import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div className="location">
                <h4 className="fw-bolder mb-3">Location</h4>
                <p>
                  2215 John Daniel Drive <br />
                  Clark, MO 65243
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="links">
                <h4 className="fw-bolder mb-3">Around The Web</h4>
                <ul className="d-flex justify-content-center list-unstyled">
                  <li className="mx-1 d-flex justify-content-center align-items-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fa-brands fa-facebook-f"
                        size="lg"
                        className="social-icon"
                      />
                    </a>
                  </li>
                  <li className="mx-1 d-flex justify-content-center align-items-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fa-brands fa-twitter"
                        size="lg"
                        className="social-icon"
                      />
                    </a>
                  </li>
                  <li className="mx-1 d-flex justify-content-center align-items-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fa-brands fa-linkedin-in"
                        size="lg"
                        className="social-icon"
                      />
                    </a>
                  </li>
                  <li className="mx-1 d-flex justify-content-center align-items-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fa-solid fa-globe"
                        size="lg"
                        className="social-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <h4 className="fw-bolder mb-3">About Freelancer</h4>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Hanan Ibrahim
              </p>
            </div>
          </div>
        </div>
        <div className="rights">
          <p className="p-4 text-center">Copyright © Hanan Ibrahim 2025</p>
        </div>
      </footer>
    </>
  );
}
