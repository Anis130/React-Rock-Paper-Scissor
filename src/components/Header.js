import React, { useContext } from "react";
import { ScoreContext } from "../context";
import "../assets/styles/header.css";

function Header() {
  const { playerScore, botScore } = useContext(ScoreContext);

  return (
    <div className="header">
      <p>Scores : </p>

      <div className="score-container">
        <div className="score-item">
          <p>You</p>
          <div className="score">{playerScore}</div>
        </div>
        <div className="score-item">
          <p>Bot</p>
          <div className="score">{botScore}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
