import React from "react";
import "./Title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Title({ name, color, textSize }) {
  return (
    <>
      <div className="text-center pt-4">
        <h2 className={"text-uppercase fw-bolder fs-1 text-" + color}>{name}</h2>
        <div className={"divider-" + color}>
          <FontAwesomeIcon
            icon={"star"}
            size="lg"
            className={"icon-" + color}
          />
        </div>
      </div>
    </>
  );
}
