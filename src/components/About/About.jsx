import React from "react";
import "./About.css";
import Title from "../Title/Title";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <Title name="About" color="white" textSize="h2" />
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-4">
              <p className="px-3 text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-12 col-lg-4">
              <p className="px-3 text-white">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
