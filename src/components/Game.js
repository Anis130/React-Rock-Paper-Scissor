import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GameOverContext, ScoreContext } from "../context";
import { NewGameButton } from "./";
import "../assets/styles/game.css";

function Game({ choice, setWin }) {
  const [bot, setBot] = useState("");
  const [roundResult, setRoundResult] = useState("");
  const { playerScore, setPlayerScore, botScore, setBotScore } = useContext(
    ScoreContext
  );
  const { setGameOver } = useContext(GameOverContext);

  function judgeRound(player, bot) {
    if (player === "rock" && bot === "scissors") {
      setPlayerScore(playerScore + 1);
      setRoundResult("Win");
    } else if (player === "rock" && bot === "paper") {
      setBotScore(botScore + 1);
      setRoundResult("Lose");
    } else if (player === "paper" && bot === "rock") {
      setPlayerScore(playerScore + 1);
      setRoundResult("Win");
    } else if (player === "paper" && bot === "scissors") {
      setBotScore(botScore + 1);
      setRoundResult("Lose");
    } else if (player === "scissors" && bot === "rock") {
      setBotScore(botScore + 1);
      setRoundResult("Lose");
    } else if (player === "scissors" && bot === "paper") {
      setPlayerScore(playerScore + 1);
      setRoundResult("Win");
    } else {
      setRoundResult("Draw");
    }
  }

  function botPick() {
    const choices = ["rock", "paper", "scissors"];
    setBot(choices[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    botPick();
  }, []);

  useEffect(() => {
    judgeRound(choice, bot);
  }, [bot]);

  if (playerScore === 2) {
    setWin(true);
    setGameOver(true);
  } else if (botScore === 2) {
    setGameOver(true);
  }

  return (
    <div className="game">
      <div className={`icon ${choice}`}></div>

      <div className="roundResult">
        <h1> {roundResult} </h1>

        {(playerScore || botScore) !== 2 ? (
          <div className="nextRoundButton">
            <Link to="/" className="primary-button ">
              Next Round
            </Link>
          </div>
        ) : (
          /* to be changed to setGameOverModal to true */
          <NewGameButton setGameOver={setGameOver} classes="primary-button" />
        )}
      </div>
      <div className={`icon ${bot}`}></div>
    </div>
  );
}

export default Game;
