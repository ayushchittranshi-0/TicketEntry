import React from "react";
import "./DisplayItem.css";
import deleteImg from "./trash.png";

const DIsplayItem = ({ index, ticket, deleteticket }) => {
  const getdigits = (num) => {
    let li = [];
    let temp = num;
    while (temp > 0) {
      li = [temp % 10, ...li];
      temp = Math.floor(temp / 10);
    }
    return li;
  };

  let liDigits = getdigits(ticket);

  return (
    <div className="ticketOuter">
      <h2>Ticket #{index}</h2>
      <div className="digitflex">
        {liDigits.map((digit, index) => {
          return (
            <p className="digit" key={index}>
              <span>{digit}</span>
            </p>
          );
        })}
      </div>
      <button
        className="deleteinDisplay"
        onClick={() => {
          deleteticket(ticket);
        }}
      >
        <img src={deleteImg} />
      </button>
    </div>
  );
};
export default DIsplayItem;
