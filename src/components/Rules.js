import React, { useState } from "react";
import "../assets/styles/rules.css";
import iconClose from "../assets/images/iconClose.svg";
import imageRules from "../assets/images/imageRules.svg";
import { GlobalButton } from "./";

function Rules() {
  const [hidden, setHidden] = useState(true);

  return (
    <React.Fragment>
      <GlobalButton
        classes="padding10-15"
        actionEvent={() => {
          setHidden(!hidden);
        }}
      >
        Rules
      </GlobalButton>

      <div className={` modal-container ${hidden ? "hide" : ""}`}>
        <div className="modal-content rulesModal">
          <div
            className="close"
            onClick={() => {
              setHidden(true);
            }}
          >
            <img src={iconClose} alt="close" />
          </div>
          <div className="rules">
            <img src={imageRules} alt="rules" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Rules;
