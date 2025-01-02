import React from "react";
import "./Contact.css";
import Title from "../Title/Title";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <Title name="Contact Me" color="dark" textSize="h2" />
          <div className="row">
            <div className="col-lg-8 mx-auto mt-5">
              <div className="form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-3 mb-3 border-0 w-100 form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="p-3 mb-3 border-0 w-100 form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="p-3 mb-3 border-0 w-100 form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control border-0"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
