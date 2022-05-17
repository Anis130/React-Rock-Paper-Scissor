import React from "react";

function GameOverModal({ win, gameOver }) {
  return (
    <div className={`game-over-modal ${gameOver ? "" : "hide"}`}>
      <p> You {win ? "win" : "lose"} the game </p>
    </div>
  );
}

export default GameOverModal;
