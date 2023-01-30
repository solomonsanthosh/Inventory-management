import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../Manager/SideNav/SideNav";
import "../Manager/manager.css";
import { getticketSingle, postStore } from "../../Axios/ticket";
import { Button } from "@mui/material";
function Manager() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getticketSingle("warehouse").then((res) => {
      setTickets(res.data);
    });
  }, []);

  return (
    <div className="h-full min-h-screen relative bg-[#F5F5F5] ">
      <div className="w-full">
        <div className="dash">
          <h1 className="title">Tickets</h1>

          <table>
            <thead>
              <th>Ticket ID</th>
              <th>Part Name</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              {tickets?.map((ticket) => {
                console.log(ticket);

                return (
                  <tr>
                    <td>{ticket.ticket_id}</td>

                    <td>{ticket.product_part_no}</td>
                    <td>{ticket.product_quantity}</td>
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
