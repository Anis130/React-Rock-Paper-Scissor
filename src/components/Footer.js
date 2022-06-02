import React from "react";
import { Rules, History } from "./";
import { NewGameButton } from "./";
import "../assets/styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <NewGameButton />
      <History />
      <Rules />
    </div>
  );
}

export default Footer;
