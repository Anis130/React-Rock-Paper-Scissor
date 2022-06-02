import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={{ playerScore, setPlayerScore, botScore, setBotScore }}
    >
      {children}
    </ScoreContext.Provider>
  );
}
