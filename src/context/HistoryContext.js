import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/history").then((res) => {
      console.log(res.data);
      setHistory(res.data);
    });
  }, []);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}
