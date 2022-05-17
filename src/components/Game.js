import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerScoreContext } from "../context";
import { BotScoreContext } from "../context";
import { NewGameButton } from "./";

function Game({ choice, setGameOver, setWin }) {
  const [bot, setBot] = useState("");
  const [roundResult, setRoundResult] = useState("");
  const { playerScore, setPlayerScore } = useContext(PlayerScoreContext);
  const { botScore, setBotScore } = useContext(BotScoreContext);

  function judgeRound(player, bot) {
    if (player === "rock" && bot === "scissor") {
      setPlayerScore(playerScore + 1);
      setRoundResult("Win");
    } else if (player === "rock" && bot === "paper") {
      setBotScore(botScore + 1);
      setRoundResult("Lose");
    } else if (player === "paper" && bot === "rock") {
      setPlayerScore(playerScore + 1);
      setRoundResult("Win");
    } else if (player === "paper" && bot === "scissor") {
      setBotScore(botScore + 1);
      setRoundResult("Lose");
    } else if (player === "scissor" && bot === "rock") {
      setBotScore(botScore + 1);
      setRoundResult("Lose");
    } else if (player === "scissor" && bot === "paper") {
      setPlayerScore(playerScore + 1);
      setRoundResult("Win");
    } else {
      setRoundResult("Draw");
    }
  }

  function botPick() {
    const choices = ["rock", "paper", "scissor"];
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
    <div>
      <p>Round Result {roundResult}</p>
      Your choice :{choice} <br />
      Bot :{bot} <br />
      {(playerScore || botScore) !== 2 ? (
        <Link to="/">Next Round</Link>
      ) : (
        <NewGameButton />
      )}
    </div>
  );
}

export default Game;
