import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerScoreContext, BotScoreContext } from "../../context";

function NewGameButton({ setGameOver, classes }) {
  const { setPlayerScore } = useContext(PlayerScoreContext);
  const { setBotScore } = useContext(BotScoreContext);

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
