import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScoreContext, GameOverContext } from "../../context";

function NewGameButton({ classes = "primary-button" }) {
  const { setPlayerScore, setBotScore } = useContext(ScoreContext);
  const { setGameOver } = useContext(GameOverContext);

  // scores reset
  function newGame() {
    setPlayerScore(0);
    setBotScore(0);
    setGameOver(false);
  }

  return (
    <Link
      className={`newGameButton ${classes} `}
      to="/"
      onClick={() => newGame()}
    >
      New Game
    </Link>
  );
}

export default NewGameButton;
