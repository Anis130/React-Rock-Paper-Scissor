import React, { useContext } from "react";
import { GameOverContext } from "../../context";
import { NewGameButton } from "./..";
import "./../../assets/styles/gameOverModal.css";

function GameOverModal({ win }) {
  const { gameOver } = useContext(GameOverContext);

  return (
    <div className={`modalContainer ${gameOver ? "" : "hide"}`}>
      <div className="gameOverModal">
        <p> You {win ? "win" : "lose"} the game </p>
        <NewGameButton />
      </div>
    </div>
  );
}

export default GameOverModal;
