import React, { useState ,useEffect} from "react";
import SideNav from "./SideNav/SideNav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { createAccountAxios } from "../../Axios/manager";
const CreateAccount = ({setOpenModel}) => {
  const [trigger, setTrigger] = useState(false)
  const [name, setName] = useState('');
    useEffect(() => {
      
    
        if(password.length > 0 && accountId.length > 0 && name.length > 0) {
            setTextErr(false)
        }  else {
            setTextErr(true)
        }
      
    }, [trigger])
    
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [textErr, setTextErr] = useState(null)
  const submitForm = () => {
    const user = {
      id: accountId,
      name:name,
      password: password
    }
    createAccountAxios(user)
    setOpenModel(false);
  }
  return (
    <>
      <div className="w-full h-full  bg-[#00000069] absolute flex justify-center items-center z-10">
        <div className="w-[50%] bg-[#f5f5f5] flex flex-col p-8 rounded">
          <h1 className="text-[1.5rem] font-bold mb-8">Create Account</h1>
        

          <TextField id="outlined-required"  className="w-[%100]" required label="Account ID" onChange={(e)=>{
            setAccountId(e.target.value);
            setTrigger(!trigger);
            }}/>
        <br/>
        <TextField id="outlined-required"  className="w-[%100]" required label="Name" onChange={(e)=>{
            setName(e.target.value);
            setTrigger(!trigger);
            }}/>
        <br/>
          <TextField required id="outlined-required" label="Password" onChange={(e)=>{
            setPassword(e.target.value);
            setTrigger(!trigger);
            }}/>
          <div className="mt-5 flex justify-between">
          <Button onClick={submitForm} disabled={textErr} variant="outlined" >Create Account</Button>
          <Button onClick={()=>setOpenModel(false)} variant="outlined" color="error">Cancel</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
