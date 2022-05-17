import React, { useContext } from "react";
import { PlayerScoreContext } from "../context";
import { BotScoreContext } from "../context";
import "../assets/styles/header.css";

function Header() {
  const { playerScore } = useContext(PlayerScoreContext);
  const { botScore } = useContext(BotScoreContext);

  return (
    <div className="header">
      <p>Scores : </p>

      <div className="score-container">
        <p>You</p>
        <div>{playerScore}</div>
      </div>
      <div className="score-container">
        <p>Bot</p>
        <div>{botScore}</div>
      </div>
    </div>
  );
}

export default Header;
