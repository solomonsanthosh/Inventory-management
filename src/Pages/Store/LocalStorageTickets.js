import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getticketSingle, updateticket } from "../../Axios/ticket";
import "../Ticket/ToggleSwitch.css";
import SideNav from "../../components/SideNav/SideNav";
import "../Manager/manager.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateRange, sliceData } from "../../utils/table-pagination";
function LocalStorageTickets() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [ticketData, setTicketData] = useState([]);
  const [toggle, setToggle] = useState("");
  const [showTicket, setShowTicket] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);

  // const [label, setLabel] = useState();

  useEffect(() => {
    getticketSingle("warehouse").then((res) => {
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

  const handleChange = (e, id) => {
    console.log(e, "id", id);
    updateticket(id, e);
    window.location.reload(false);
  };

  return (
    <div className="h-full min-h-screen  bg-[#F5F5F5] ">
      <SideNav />
      <div className="w-full pl-[65px]">
        <div className="dash">
          <h1 className="title">Ticket Status</h1>

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
                    <td className="">
                      <ToggleSwitch
                        toggle={data.status}
                        handleChange={handleChange}
                        id={data.ticket_id}
                      />
                    </td>
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

const ToggleSwitch = ({ toggle, handleChange, id }) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <select
          className="bg-[#F5F5F5]"
          name=""
          id=""
          defaultValue={toggle}
          onChange={(e) => handleChange(e.target.value, id)}
        >
          <option value="OPEN">OPEN</option>
          <option value="CLOSE">CLOSE</option>
        </select>
      </div>
    </div>
  );
};

export default LocalStorageTickets;
