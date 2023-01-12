import {BrowserRouter, Route, Routes} from "react-router-dom";
import Manager from "./Pages/Manager/Manager";
import Suggest from "./Pages/Manager/Suggest";
import SignIn from "./Pages/auth/SignIn";
import CreateAccount from "./Pages/Manager/CreateAccount";
import ShowAccounts from "./Pages/Manager/ShowAccounts";
import TicketGenerate from "./Pages/Ticket/TicketGenerate";
import TicketDashboard from "./Pages/Ticket/TicketDashboard";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/manager" element={<Manager />}></Route>
					<Route
						path="/manager/showaccounts"
						element={<ShowAccounts />}
					></Route>
					<Route
						path="/manager/suggest"
						element={<Suggest />}
					></Route>

					<Route
						path="/ticketform"
						element={<TicketGenerate />}
					></Route>
					<Route
						path="/ticketdashboard"
						element={<TicketDashboard />}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
