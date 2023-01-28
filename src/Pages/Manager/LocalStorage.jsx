import React, { useState, useEffect } from "react";
import SideNav from "./SideNav/SideNav";
import "./manager.css";
import { getticketSingle } from "../../Axios/ticket";
function Manager() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    getticketSingle('local').then((res) => {
      setTickets(res.data);
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    });
  }, []);

  return (
    <div className="h-full min-h-screen  bg-[#F5F5F5] ">
   
      <div className="w-full">
        <div className="dash">
          <h1 className="title">Tickets</h1>

          <table>
            <thead>
              <th>Ticket ID</th>
              <th>Part Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </thead>
            <tbody>
              
              {tickets?.map((ticket) => {
                console.log(ticket);

                return (
                  <tr>
                    <td>{ticket.ticket_id}</td>
                    
                    <td>{ticket.product_part_no}</td>
                    <td>{ticket.product_quantity}</td>
                    <td >
                      {ticket.status == 'OPEN' ?
                        (<div className="text-[#FF3131] font-bold p-2 rounded-md ">
                        {ticket.status}
                        </div>):
                     
                      (<div className="text-[#4CBB17] font-bold p-2 rounded-md ">
                      {ticket.status}
                      </div>)}
                     </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manager;
