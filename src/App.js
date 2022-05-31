import React, { useState } from "react";
import "./App.css";
import InputBox from "./InputBox";
import DisplayBox from "./DisplayBox";

function App() {
  const [ticketList, setTicketList] = useState([]);
  const [compUpdate, setCompUpdate] = useState(true);

  const deleteticket = (ticketNumber) => {
    let index = ticketList.indexOf(ticketNumber);
    let temp = ticketList;
    temp.splice(index, 1);
    console.log(temp);
    setTicketList(temp);
    setCompUpdate((item) => {
      return !item;
    });
  };

  return (
    <div className="MostOuter">
      <h1 className="title">Ticket Entry System</h1>
      <div className="App">
        <div className="TicketEntryBody">
          <InputBox ticketList={ticketList} setTicketList={setTicketList} />
          <DisplayBox
            ticketList={ticketList}
            deleteticket={deleteticket}
            compUpdate={compUpdate}
          />
          <div className="displaybox"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
