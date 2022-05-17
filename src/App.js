import "./assets/styles/styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Play, Game, Footer, GameOverModal } from "./components";
import {
  PlayerScoreProvider,
  BotScoreProvider,
  HistoryProvider,
} from "./context";

function App() {
  const [choice, setChoice] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  return (
    <div className="App">
      <PlayerScoreProvider>
        <BotScoreProvider>
          <Header />
          {/* <HistoryProvider> */}
          <Routes>
            <Route exact path="/" element={<Play setChoice={setChoice} />} />
            <Route
              path="/game"
              element={
                <Game
                  choice={choice}
                  setWin={setWin}
                  setGameOver={setGameOver}
                />
              }
            />
          </Routes>
          {/* </HistoryProvider> */}
        </BotScoreProvider>
      </PlayerScoreProvider>
      <GameOverModal win={win} gameOver={gameOver} />
      <Footer />
    </div>
  );
}

export default App;
