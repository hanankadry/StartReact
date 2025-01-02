import React from "react";
import "./Modal.css";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ id, name, image, description }) {
  return (
    <>
      <div
        className="modal fade w-100"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog rounded">
          <div className="modal-content py-5">
            <Title name={name} color="dark" size="2xl" textSize="h3" />
            <button
              type="button"
              className="position-absolute end-0 top-0 m-3 border-0 bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={"xmark"} size="xl" />
            </button>

            <div className="modal-body">
              <div className="container">
                <figure className="my-5">
                  <img className="img-fluid" src={image} alt={name} />
                </figure>
                <p>{description}</p>
              </div>
            </div>
            <div className="modal-footer justify-content-center align-items-center border-top-0">
              <button
                type="button"
                className="btn btn-secondary main-background border-0 fw-bolder py-2 px-3"
                data-bs-dismiss="modal"
              >
                <span className="fw-bolder">X</span> Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
