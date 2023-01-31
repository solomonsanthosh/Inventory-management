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
    getticketSingle("local").then((res) => {
      setTickets(res.data);
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    });
  }, []);

  return (
    <div className="h-full min-h-screen relative bg-[#F5F5F5] ">
      <div className="w-full">
        <div className="dash">
          <h1 className="title">Tickets</h1>
          <div className="pt-5 pl-[1rem] flex">
            <Button
              color="success"
              variant="contained"
              onClick={() => navigate("/store")}
            >
              View Products
            </Button>
            <div className="ml-6">
              <Button
                color="success"
                variant="contained"
                onClick={() => navigate("/localtickets")}
              >
                View Tickets
              </Button>
            </div>
          </div>
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
                    <td>
                      {ticket.status == "OPEN" ? (
                        <div className="text-[#FF3131] font-bold p-2 rounded-md ">
                          {ticket.status}
                        </div>
                      ) : (
                        <div className="text-[#4CBB17] font-bold p-2 rounded-md ">
                          {ticket.status}
                        </div>
                      )}
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
