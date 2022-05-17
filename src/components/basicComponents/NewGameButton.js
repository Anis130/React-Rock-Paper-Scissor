import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerScoreContext, BotScoreContext } from "../../context";

function NewGameButton({ setGameOver }) {
  const { setPlayerScore } = useContext(PlayerScoreContext);
  const { setBotScore } = useContext(BotScoreContext);

  // scores reset
  function newGame() {
    setPlayerScore(0);
    setBotScore(0);
    setGameOver(false);
  }

  return (
    <Link to="/" onClick={() => newGame()}>
      New Game
    </Link>
  );
}

export default NewGameButton;
