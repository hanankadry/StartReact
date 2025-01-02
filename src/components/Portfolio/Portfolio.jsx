import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/cabin.png";
import img2 from "../../assets/cake.png";
import img3 from "../../assets/circus.png";
import img4 from "../../assets/game.png";
import img5 from "../../assets/safe.png";
import img6 from "../../assets/submarine.png";
import Title from "../Title/Title";
import ImgCard from "../ImgCard/ImgCard";

export default function Portfolio() {
  const images = [
    {
      name: "LOG CABIN",
      src: img1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "TASTY CAKE",
      src: img2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "CIRCUS TENT",
      src: img3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "CONTROLER",
      src: img4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "LOCKED SAFE",
      src: img5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "SUBMARINE",
      src: img6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
  ];

  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <Title name="Portfolio" color="dark" textSize="h2" />
          <div className="row mt-5">
            {images.map((img, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-5 px-3">
                <ImgCard img={img} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
