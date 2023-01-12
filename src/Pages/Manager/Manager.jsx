import React from "react";
import SideNav from "./SideNav/SideNav";
import "./manager.css";
function Manager() {
  return (
    <div className="h-full min-h-screen  bg-[#F5F5F5] ">
      <SideNav></SideNav>
      <div className="w-full pl-[65px]">
        <div className="dash">
          <h1 className="title">Dashboard</h1>
          
          <table>
            <thead>
              <th>ID</th>
              <th>Part Name</th>
              <th>Quantity</th>
              <th>Ticket ID</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Swrew</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>santy</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Dash</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Loki</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Loki</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Loki</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Loki</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Loki</td>
                <td>100</td>
                <td>0x123ew</td>
                <td className=" text-[#49b743]">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manager;