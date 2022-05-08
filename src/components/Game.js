import React, { useState, useEffect, useContext } from "react";
import { PlayerScoreContext } from "../context";
import { BotScoreContext } from "../context";

function Game({ choice, setGameOver, setWin }) {
  const [bot, setBot] = useState("");
  const { playerScore, setPlayerScore } = useContext(PlayerScoreContext);
  const { botScore, setBotScore } = useContext(BotScoreContext);

  useEffect(() => {
    botPick();
  }, []);

  function judgeRound(player, bot) {
    if (player === "rock" && bot === "scissor") {
      setPlayerScore(playerScore + 1);
    } else if (player === "rock" && bot === "paper") {
      setBotScore(botScore + 1);
    } else if (player === "paper" && bot === "rock") {
      setPlayerScore(playerScore + 1);
    } else if (player === "paper" && bot === "scissor") {
      setBotScore(botScore + 1);
    } else if (player === "scissor" && bot === "rock") {
      setBotScore(botScore + 1);
    } else if (player === "scissor" && bot === "paper") {
      setPlayerScore(playerScore + 1);
    } else {
      return "draw";
    }
  }

  function botPick() {
    const choices = ["rock", "paper", "scissor"];
    setBot(choices[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    judgeRound(choice, bot);
  }, [bot]);

  if (playerScore === 1) {
    setGameOver(true);
    setWin(true);
  } else if (botScore === 1) {
    setGameOver(true);
  }

  return (
    <div>
      Yout choice :{choice} <br />
      Bot :{bot} <br />
    </div>
  );
}

export default Game;
