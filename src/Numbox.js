import React from "react";
import "./Numbox.css";

const Numbox = ({ number, type, ticket, setTicket }) => {
  let boxtype = type === "circle" ? "numbox-circle" : "numbox";
  const numpadHandler = (number) => {
    if (number === 0 && ticket === 0) {
      setTicket(0);
    }

    setTicket((num) => {
      return num * 10 + number;
    });
  };

  return (
    <button
      className={boxtype}
      onClick={() => {
        numpadHandler(number);
      }}
    >
      <span>{number}</span>
    </button>
  );
};

export default Numbox;
