import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Manager from "./Pages/Manager/Manager";
import Suggest from "./Pages/Manager/Suggest";
import SignIn from "./Pages/Auth/SignIn";
import CreateAccount from "./Pages/Manager/CreateAccount";
import ShowAccounts from "./Pages/Manager/ShowAccounts";
import LocalStorage from "./Pages/Store/LocalStorage";
import TicketGenerate from "./Pages/Ticket/TicketGenerate";
import TicketDashboard from "./Pages/Ticket/TicketDashboard";
import {useState, useEffect} from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
import ManagerRoute from "./utils/ManagerRoute";
import Store from "./Pages/Store/Store";
import TicketHistory from "./Pages/Ticket/TicketHistory";
import Warehouse from "./Pages/Store/Warehouse";
import LocalStorageTickets from "./Pages/Store/LocalStorageTickets";
import LocalStorageRoute from "./utils/LocalStorageRoute";
import ErrorPage from "./Pages/Error/ErrorPage";

function App() {
	const [user, setUser] = useState(false);

	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<SignIn />}></Route>

					{/* user */}
					<Route element={<ProtectedRoute />}>
						<Route path="/" element={<TicketGenerate />}></Route>

						<Route
							path="/ticketdashboard"
							element={<TicketDashboard />}
						></Route>
						<Route
							path="/tickethistory"
							element={<TicketHistory />}
						></Route>
					</Route>
					{/* user */}

					{/* manager */}
					<Route element={<ManagerRoute />}>
						<Route path="/manager" element={<Manager />}></Route>
						<Route
							path="/manager/showaccounts"
							element={<ShowAccounts />}
						></Route>
						<Route
							path="/manager/suggest"
							element={<Suggest />}
						></Route>
					</Route>

					{/* manager */}
					{/* local */}
					<Route element={<LocalStorageRoute />}>
						<Route path="/store" element={<Store />}></Route>
						<Route
							path="/localtickets"
							element={<LocalStorageTickets />}
						></Route>

						<Route path="/local" element={<LocalStorage />}></Route>
					</Route>
					{/* local */}
					<Route path="/warehouse" element={<Warehouse />}></Route>
					<Route path="/error404" element={<ErrorPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
