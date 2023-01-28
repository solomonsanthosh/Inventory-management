import { BrowserRouter, Route, Routes } from "react-router-dom";

import Manager from "./Pages/Manager/Manager";
import Suggest from "./Pages/Manager/Suggest";
import SignIn from "./Pages/Auth/SignIn";
import CreateAccount from "./Pages/Manager/CreateAccount";
import ShowAccounts from "./Pages/Manager/ShowAccounts";
import LocalStorage from './Pages/Manager/LocalStorage'
import TicketGenerate from "./Pages/Ticket/TicketGenerate";
import TicketDashboard from "./Pages/Ticket/TicketDashboard";
import { useState, useEffect } from "react";
import { checkLogin } from "./Axios/user";


function App() {
  const [user, setUser] = useState(false);
  // useEffect(() => {
  // 	if (localStorage.getItem("jwt")) {
  // 		checkLogin(localStorage.getItem("jwt")).then((res) => {
  // 			if (res?.status == 200) {
  // 				setUser(true);
  // 			}
  // 		});
  // 	}
  // }, [user]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {user ? ( */}
          <Route path="/ticketform" element={<TicketGenerate />}></Route>
          {/* ) : null} */}
          <Route path="/ticketdashboard" element={<TicketDashboard />}></Route>

          <Route path="/" element={<SignIn />}></Route>
          <Route path="/manager" element={<Manager />}></Route>
          <Route path="/local" element={<LocalStorage />}></Route>
          <Route
            path="/manager/showaccounts"
            element={<ShowAccounts />}
          ></Route>
          <Route path="/manager/suggest" element={<Suggest />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
