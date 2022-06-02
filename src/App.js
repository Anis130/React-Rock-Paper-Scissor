import "./assets/styles/styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Play, Game, Footer, GameOverModal } from "./components";
import { ScoreProvider, GameOverProvider, HistoryProvider } from "./context";

function App() {
  const [choice, setChoice] = useState("");
  const [win, setWin] = useState(false);

  return (
    <div className="App">
      <ScoreProvider>
        <Header />
        <GameOverProvider>
          <Routes>
            <Route exact path="/" element={<Play setChoice={setChoice} />} />
            <Route
              path="/game"
              element={<Game choice={choice} setWin={setWin} />}
            />
          </Routes>
          <HistoryProvider>
            <GameOverModal win={win} />
            <Footer />
          </HistoryProvider>
        </GameOverProvider>
      </ScoreProvider>
    </div>
  );
}

export default App;
