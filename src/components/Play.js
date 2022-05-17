import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/play.css";

function Play({ setChoice }) {
  function handleChoice(e) {
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">
      <div className="play-container">
        <Link to="/game">
          <div
            data-id="rock"
            onClick={handleChoice}
            className="icon rock"
          ></div>
        </Link>

        <Link to="/game">
          <div
            data-id="paper"
            onClick={handleChoice}
            className="icon paper"
          ></div>
        </Link>

        <Link to="/game">
          <div
            data-id="scissors"
            onClick={handleChoice}
            className="icon scissors"
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default Play;
