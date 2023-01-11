import {BrowserRouter, Route, Routes} from "react-router-dom";
import Manager from "./Pages/Manager/Manager";
import Suggest from "./Pages/Manager/Suggest";
import EmployeeForm from "./Pages/EmployeeForm";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/manager" element={<Manager />}></Route>
					<Route path="/form" element={<EmployeeForm />}></Route>
					<Route
						path="/manager/suggest"
						element={<Suggest />}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
