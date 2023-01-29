import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getticketHistory } from "../../Axios/ticket";
import "./ToggleSwitch.css";
import SideNav from "../../components/SideNav/SideNav";
import "./ticketdashboard.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateRange, sliceData } from "../../utils/table-pagination";
function TicketHistory() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [ticketData, setTicketData] = useState([]);
  const [toggle, setToggle] = useState("");
  const [showTicket, setShowTicket] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);

  // const [label, setLabel] = useState();

  useEffect(() => {
    getticketHistory(user.id).then((res) => {
      setTicketData(res.data);
      setPagination(calculateRange(res.data, 10));

      setShowTicket(sliceData(res.data, page, 10));
    });
  }, []);
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    console.log(new_page);

    setShowTicket(sliceData(ticketData, new_page, 10));
  };

  return (
    <div className="h-full min-h-screen  bg-[#F5F5F5] ">
      <SideNav />
      <div className="w-full pl-[65px]">
        <div className="dash">
          <h1 className="title">Ticket History</h1>

          <table>
            <thead>
              <th>ID</th>
              <th>Part Number</th>
              <th>Quantity</th>
              <th>Status</th>
            </thead>
            <tbody>
              {showTicket.map((data) => {
                return (
                  <tr>
                    <td>{data.ticket_id}</td>
                    <td>{data.product_part_no}</td>
                    <td>{data.product_quantity}</td>
                    <td className="">{data.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {ticketData.length !== 0 ? (
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

export default TicketHistory;
