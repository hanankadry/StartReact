import React from "react";
import style from "./ImgCard.module.css";
import Modal from "../Modal/Modal";

export default function ImgCard({ img, index }) {
  return (
    <>
      <div className="portfolio-item">
        <div
          className={style.img}
          data-bs-toggle="modal"
          data-bs-target={`#index${index}`}
        >
          <img className="w-100" src={img.src} alt={img.name} />
        </div>
      </div>
      <Modal
        id={`index${index}`}
        name={img.name}
        image={img.src}
        description={img.description}
      />
    </>
  );
}
