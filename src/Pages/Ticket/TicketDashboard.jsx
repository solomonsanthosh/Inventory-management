import React, {useState} from "react";
import axios from "axios";
import {getticketSingle, updateticket} from "../../Axios/ticket";
import "./ToggleSwitch.css";
import SideNav from '../../components/SideNav/SideNav'
import "./ticketdashboard.css";
import {useEffect} from "react";
function TicketDashboard() {
	const [ticketData, setTicketData] = useState([]);
	const [toggle, setToggle] = useState("");
	// const [label, setLabel] = useState();

	useEffect(() => {
		getticketSingle(localStorage.getItem("name")).then((response) => {
			setTicketData(response.data);
		});
	}, []);

	const handleChange = (e, id) => {
		console.log(e, "id", id);
		updateticket(id, e);
	};

	return (
		<div className="h-full min-h-screen  bg-[#F5F5F5] ">
			<SideNav/>
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
							{ticketData.map((data) => {
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
				</div>
			</div>
		</div>
	);
}

const ToggleSwitch = ({toggle, handleChange, id}) => {
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
					<option value="CLOSE">CLOSE</option>
					<option value="OPEN">OPEN</option>
					<option value="APPROVAL">APPROVAL</option>
				</select>
			</div>
		</div>
	);
};

export default TicketDashboard;
