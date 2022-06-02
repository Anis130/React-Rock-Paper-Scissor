import React, { useState, useContext } from "react";
import { GlobalButton } from "./";
import iconClose from "../assets/images/iconClose.svg";
import "../assets/styles/history.css";
import { HistoryContext } from "../context";

function History() {
  const [hidden, setHidden] = useState(true);
  const { history } = useContext(HistoryContext);

  return (
    <React.Fragment>
      <GlobalButton
        classes="padding10-15"
        actionEvent={() => {
          setHidden(!hidden);
        }}
      >
        History
      </GlobalButton>

      <div className={` modal-container ${hidden ? "hide" : ""}`}>
        <div className="modal-content historyModal">
          <div
            className="close"
            onClick={() => {
              setHidden(true);
            }}
          >
            <img src={iconClose} alt="close" />
          </div>
          <div className="history">
            {history.length !== 0 ? (
              <div className="table">
                <div className="wrraper wrraper_header">
                  <div className="id"> id </div>
                  <div className="name"> name </div>
                  <div className="status"> status </div>
                  <div className="time"> time</div>
                  <div className="date"> date</div>
                </div>

                {history.map((e) => (
                  <div className="wrraper">
                    <div className="id"> {e.id} </div>
                    <div className="name"> {e.name} </div>
                    <div className="status"> {e.status} </div>
                    <div className="time"> {e.time}</div>
                    <div className="date"> {e.date}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>
                Please run db.json with the command <br /> " json-server --watch
                history.json --port 5000 " <br /> then refresh the page
              </p>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default History;
