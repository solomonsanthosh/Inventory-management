import React, { useState, useEffect } from "react";
import SideNav from "./SideNav/SideNav";
import "./manager.css";
import { gettickets } from "../../Axios/ticket";
import { calculateRange, sliceData } from "../../utils/table-pagination";

function Manager() {
  const [tickets, setTickets] = useState([]);
  const [showTicket,setShowTicket] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    gettickets().then((res) => {
      setTickets(res.data);
      setPagination(calculateRange(res.data, 10));
      
      setShowTicket(sliceData(res.data, page, 10))
    });
  }, []);
  const __handleChangePage = (new_page) => {

    setPage(new_page);
    console.log(new_page);
    
    setShowTicket(sliceData(tickets, new_page, 10));
    
  };
  return (
    <div className="h-full min-h-screen  bg-[#F5F5F5] ">
      <SideNav></SideNav>
      <div className="w-full pl-[65px]">
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
              
              {showTicket?.map((ticket) => {
                

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
          {tickets.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Manager;
