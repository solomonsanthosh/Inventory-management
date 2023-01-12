
import { useState,useEffect } from "react";
import { Button } from "@mui/material";
import SideNav from "./SideNav/SideNav";
import { getAccounts } from "../../Axios/manager";

const ShowAccounts = () => {
    const [accounts, setAccounts] = useState([])
    useEffect(() => {
      getAccounts().then((res)=>{
        setAccounts(res.data)
      })
    
     
    }, [])
    
  return (
    <div className="h-full min-h-screen bg-[#F5F5F5]">
      <SideNav />
      <div className="w-full pl-[65px]">
        <div className="w-[90%] mx-auto p-[2rem]">
          <h1 className="text-[1.5rem] font-bold mb-8">Accounts</h1>
            {
                accounts?.map((acc)=>{
                    return <Card accounts={acc}/>

                })
            }
          
          
        </div>
      </div>
    </div>
  );
};
const Card = ({accounts}) => {
  return (
    <>
      <div className="w-full shadow-sm flex py-5 px-2  bg-[#fefefe] mb-5">
       
        <div className="mr-5 w-[35%] px-3  overflow-auto">
          <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">
            Name
          </h1>
          <p>{accounts.name}</p>
        </div>
        <div className="mr-5 w-[35%] px-3  overflow-auto">
          <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">
          Password
          </h1>
          <p>{accounts.password}</p>
        </div>
        <div className=" flex items-center w-[30%] px-3">
        <span className="mr-3 ">
            
        <Button variant="outlined" >
          <h1 className="text-[.95rem] font-bold">Change</h1>
        </Button>
        </span>
        <Button variant="outlined" color="error">
          <h1 className="text-[.95rem] font-bold">Delete</h1>
        </Button>
        </div>
      </div>
    </>
  );
};

export default ShowAccounts;
