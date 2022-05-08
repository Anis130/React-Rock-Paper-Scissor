import React, { useContext } from "react";
import { PlayerScoreContext } from "../context";
import { BotScoreContext } from "../context";

function Header() {
  const { playerScore } = useContext(PlayerScoreContext);
  const { botScore } = useContext(BotScoreContext);

  return (
    <div className="header">
      You : {playerScore}
      bot : {botScore}
    </div>
  );
}

export default Header;
