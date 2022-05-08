import { createContext, useState } from "react";

export const BotScoreContext = createContext();

export function BotScoreProvider({ children }) {
  const [botScore, setBotScore] = useState(0);

  return (
    <BotScoreContext.Provider value={{ botScore, setBotScore }}>
      {children}
    </BotScoreContext.Provider>
  );
}
