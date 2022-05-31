import React, { useState, useEffect } from "react";
import trashImg from "./trash.png";
import deleteImg from "./delete.png";
import addIMG from "./add.png";
import wheelImg from "./imageWwheel.png";

import "./InputBox.css";
import Numbox from "./Numbox";

const InputBox = ({ ticketList, setTicketList }) => {
  const [error, setError] = useState("");
  const [ticket, setTicket] = useState(0);

  const validateInput = () => {
    setError("");

    if (ticketList.length >= 5) {
      setError("Ticket Limit Reached");
      return;
    }

    if (ticket < 100000 || ticket > 999999) {
      setError("Enter 6 digits");
      return;
    }

    if (ticketList.includes(ticket)) setError("Token number must be unique.");
  };
  const addTicketHandler = () => {
    setTicketList((tList) => {
      return [...tList, ticket];
    });
    setTicket(0);
  };

  const generateToken = () => {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    let x;
    do {
      x = Math.floor(getRandomArbitrary(100000, 999999));
    } while (ticketList.includes(x.toString()));

    setTicket(x);
  };

  useEffect(() => {
    let inputTimeout = setTimeout(() => {
      validateInput();
    }, 500);
  }, [ticket]);

  return (
    <div className="inputbox">
      <div className="inputpad">
        <div className="inputrow">
          <div className="searchrow">
            <p className="pInputTicket">{ticket}</p>
            <div className="error">{error && <span>{error}</span>}</div>
          </div>

          <div className="numrow">
            <Numbox
              number={7}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <Numbox
              number={8}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <Numbox
              number={9}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
          </div>

          <div className="numrow">
            <Numbox
              number={6}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <Numbox
              number={5}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <Numbox
              number={4}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
          </div>
          <div className="numrow">
            <Numbox
              number={3}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <Numbox
              number={2}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <Numbox
              number={1}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
          </div>
          <div className="numrow">
            <button
              className="numpad-icon"
              onClick={() => {
                setTicket((num) => {
                  if (ticket === "") {
                    return "";
                  }

                  let temp = num / 10;
                  return Math.floor(temp);
                });
              }}
            >
              <img src={deleteImg} />
            </button>
            <Numbox
              number={0}
              type="square"
              ticket={ticket}
              setTicket={setTicket}
            ></Numbox>
            <button
              className="numpad-icon"
              onClick={() => {
                setTicket("");
              }}
            >
              <img src={trashImg} />
            </button>
          </div>
          <div className="numrow">
            <button
              className="addTicket"
              disabled={error}
              onClick={() => {
                addTicketHandler();
              }}
            >
              <img src={addIMG} />
              ADD TICKET
            </button>
          </div>
        </div>
      </div>
      <div className="wheelbox">
        <h3>Click The wheel to generate random Tickets</h3>
        <button className="wheel" onClick={generateToken}>
          <img src={wheelImg}></img>
        </button>
        <div className="error msg">
          <span>Ticket Range Number: 100000 - 999999 </span>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
