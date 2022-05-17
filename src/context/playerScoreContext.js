import React, { createContext, useState } from "react";

export const PlayerScoreContext = createContext();

export function PlayerScoreProvider({ children }) {
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <PlayerScoreContext.Provider value={{ playerScore, setPlayerScore }}>
      {children}
    </PlayerScoreContext.Provider>
  );
}
