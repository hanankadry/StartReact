import React from "react";
import "./Title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Title({ name, color, textSize }) {
  return (
    <>
      <h1 className={"fw-bolder text-" + color + " " + textSize}>{name}</h1>
      <div className={"divider-" + color}>
        <FontAwesomeIcon icon={"star"} size="2xl" className={"icon-" + color} />
      </div>
    </>
  );
}
