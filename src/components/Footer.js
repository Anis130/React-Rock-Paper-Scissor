import React from "react";
import { Rules, History } from "./";
import { NewGameButton } from "./";
import "../assets/styles/footer.css";

function Footer({ setGameOver }) {
  return (
    <div className="footer">
      <NewGameButton setGameOver={setGameOver} classes="primary-button" />
      <History />
      <Rules />
    </div>
  );
}

export default Footer;
