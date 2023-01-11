import React from "react";
import { Button } from "@mui/material";
import SideNav from "./SideNav/SideNav";
function Suggest() {
  return (
    <div className="h-full min-h-screen bg-[#F5F5F5]">
      <SideNav />
      <div className="w-full pl-[65px]">
        <div className="w-[90%] mx-auto p-[2rem]">
          <h1 className="text-[1.5rem] font-bold mb-8">Approve Request</h1>

          <Card/>

          <Card/>
          <Card/>



        </div>
      </div>
    </div>
  );
}
const Card = () => {
    return (
        <>
        <div className="w-full shadow-sm flex py-5 px-2 justify-around bg-[#fefefe] mb-5">
            <div className="mr-5">
              <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">ID</h1>
              <p className="">asdad</p>
            </div>
            <div className="mr-5">
              <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">Part Name</h1>
              <p>asdad</p>
            </div>
            <div className="mr-5">
              <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">Quantity</h1>
              <p>10</p>
            </div>
            <Button variant="outlined">
              <h1 className="text-[.95rem] font-bold">Approve</h1>
            </Button>

          </div>
        
        </>
    )
}
export default Suggest;
