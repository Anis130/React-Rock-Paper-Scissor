import React, { useContext } from "react";
import { GameOverContext, HistoryContext } from "../../context";
import { NewGameButton } from "./..";
import { motion } from "framer-motion";
import axios from "axios";
import { Temporal } from "@js-temporal/polyfill";
import "./../../assets/styles/gameOverModal.css";

function GameOverModal({ win }) {
  const { gameOver } = useContext(GameOverContext);
  const { history, setHistory } = useContext(HistoryContext);

  function handleSubmit(e) {
    e.preventDefault();

    const gameState = win ? "win" : "lose";
    const newHistoryGame = {
      gameStatus: gameState,
      name: e.target.name.value,
      time: Temporal.Now.plainTimeISO().toString(),
      date: Temporal.Now.plainDateISO().toString(),
    };

    axios
      .post("http://localhost:5000/history", newHistoryGame)
      .then((res) => {
        setHistory([newHistoryGame, ...history]);
        console.log(res, newHistoryGame);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("registered successfully");
  }

  return (
    <div className={`modal-container ${gameOver ? "" : "hide"}`}>
      <div className="modal-content gameOverModal">
        <h1> You {win ? "won ✨" : "lost 😥"}</h1>
        <h3>Would like to register the game ?</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="register" />
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="modal-btn"
          >
            Register
          </motion.button>
        </form>
        <NewGameButton classes=" restart">New Game</NewGameButton>
      </div>
    </div>
  );
}

export default GameOverModal;
