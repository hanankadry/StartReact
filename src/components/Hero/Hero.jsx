import React from "react";
import "./Hero.css";
import img1 from "../../assets/avataaars.svg";
import Title from "../Title/Title";

export default function Hero() {
  return (
    <>
      <header className="header" id="home">
        <div className="container d-flex align-items-center flex-column">
          <div className="img">
            <img width="250px" src={img1} alt="avatar" />
          </div>
          <Title name="Start React" color="white" textSize="h1" />
          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    </>
  );
}
