import React, { createContext, useState } from "react";

export const GameOverContext = createContext();

export function GameOverProvider({ children }) {
  const [gameOver, setGameOver] = useState(false);

  return (
    <GameOverContext.Provider value={{ gameOver, setGameOver }}>
      {children}
    </GameOverContext.Provider>
  );
}
