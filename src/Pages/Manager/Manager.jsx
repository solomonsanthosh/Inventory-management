import React, { useState, useEffect } from "react";
import SideNav from "./SideNav/SideNav";
import "./manager.css";
import { gettickets } from "../../Axios/ticket";
function Manager() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    gettickets().then((res) => {
      setTickets(res.data);
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    });
  }, []);

  return (
    <div className="h-full min-h-screen  bg-[#F5F5F5] ">
      <SideNav></SideNav>
      <div className="w-full pl-[65px]">
        <div className="dash">
          <h1 className="title">Dashboard</h1>

          <table>
            <thead>
              <th>Ticket ID</th>
              <th>Part Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td className=" text-[#49b743]">a</td>
              </tr>
              {tickets?.map((ticket) => {
                console.log(ticket);

                return (
                  <tr>
                    <td>a</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.product_part_no}</td>
                    <td>{ticket.product_quantity}</td>
                    {/* <td className=" text-[#49b743]">{ticket.status}</td> */}
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
