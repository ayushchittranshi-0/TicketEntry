import React, { useEffect, useState } from "react";
import DIsplayItem from "./DisplayItem";
import "./DisplayBox.css";

const DisplayBox = ({ ticketList, deleteticket, compUpdate }) => {
  const [newTicketList, setNewTicketList] = useState([]);
  // console.log(compUpdate);

  useEffect(() => {
    setNewTicketList(ticketList);
  }, [ticketList]);

  return (
    <div className="displayOuterBox">
      <h2>Your Selected Tickets:</h2>
      <div className="displaybox">
        {newTicketList.map((item, index) => {
          return (
            <DIsplayItem
              key={item}
              index={index}
              ticket={item}
              deleteticket={deleteticket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DisplayBox;
