import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ScoreContext, GameOverContext } from "../../context";
import { GlobalButton } from "../index";

function NewGameButton({ classes = "" }) {
  const { setPlayerScore, setBotScore } = useContext(ScoreContext);
  const { setGameOver } = useContext(GameOverContext);

  // scores reset
  function newGame() {
    setPlayerScore(0);
    setBotScore(0);
    setGameOver(false);
  }

  return (
    <GlobalButton classes={`global-btn ${classes}`}>
      <Link to="/" onClick={() => newGame()}>
        New Game
      </Link>
    </GlobalButton>
  );
}

export default NewGameButton;
