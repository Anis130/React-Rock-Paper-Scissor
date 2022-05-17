import React, { useContext } from "react";
import { HistoryContext } from "../context";

function History({ props }) {
  // const { history } = useContext(HistoryContext);

  return (
    <button className="footer-item history" {...props}>
      History
    </button>
  );
}

export default History;
