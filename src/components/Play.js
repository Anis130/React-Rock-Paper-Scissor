import React from "react";
import { Link } from "react-router-dom";
import { NewGameButton } from "./";

function Play({ setChoice }) {
  function handleChoice(e) {
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">
      <Link to="/game">
        <div data-id="rock" onClick={handleChoice} className="icon rock">
          rock
        </div>
      </Link>

      <Link to="/game">
        <div data-id="paper" onClick={handleChoice} className="icon paper">
          paper
        </div>
      </Link>

      <Link to="/game">
        <div data-id="scissor" onClick={handleChoice} className="icon scissor">
          scissor
        </div>
      </Link>

      <NewGameButton />
    </div>
  );
}

export default Play;
