import React from "react";

function GameOverModal({ win, gameOver }) {
  return (
    <div className={`game-over-modal ${gameOver ? "" : "hide"}`}>
      You {win ? "win" : "lose"}
    </div>
  );
}

export default GameOverModal;
