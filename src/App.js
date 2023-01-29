import { BrowserRouter, Route, Routes } from "react-router-dom";

import Manager from "./Pages/Manager/Manager";
import Suggest from "./Pages/Manager/Suggest";
import SignIn from "./Pages/Auth/SignIn";
import CreateAccount from "./Pages/Manager/CreateAccount";
import ShowAccounts from "./Pages/Manager/ShowAccounts";
import LocalStorage from "./Pages/Store/LocalStorage";
import TicketGenerate from "./Pages/Ticket/TicketGenerate";
import TicketDashboard from "./Pages/Ticket/TicketDashboard";
import { useState, useEffect } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
import ManagerRoute from "./utils/ManagerRoute";
import Store from "./Pages/Store/Store";
import TicketHistory from "./Pages/Ticket/TicketHistory";
function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<TicketGenerate />}></Route>

            <Route
              path="/ticketdashboard"
              element={<TicketDashboard />}
            ></Route>
            <Route path="/tickethistory" element={<TicketHistory />}></Route>
          </Route>

          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/store" element={<Store />}></Route>

          <Route path="/local" element={<LocalStorage />}></Route>
          {/* manager */}
          <Route element={<ManagerRoute />}>
            <Route path="/manager" element={<Manager />}></Route>
            <Route
              path="/manager/showaccounts"
              element={<ShowAccounts />}
            ></Route>
            <Route path="/manager/suggest" element={<Suggest />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
