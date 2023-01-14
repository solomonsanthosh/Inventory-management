import React, {useState} from "react";
import axios from "axios";
import {getticketSingle} from "../../Axios/ticket";

import "./ticketdashboard.css";
import {useEffect} from "react";
function TicketDashboard() {
	const [ticketData, setTicketData] = useState([]);

	useEffect(() => {
		getticketSingle(localStorage.getItem("name")).then((response) => {
			setTicketData(response);
			
		});
	}, []);

	

	return (
		<div className="h-full min-h-screen  bg-[#F5F5F5] ">
			<div className="w-full pl-[65px]">
				<div className="dash">
					<h1 className="title">Dashboard</h1>

					<table>
						<thead>
							<th>ID</th>
							<th>Part Number</th>
							<th>Quantity</th>
							<th>Status</th>
						</thead>
						<tbody>
							<tr>
								<td>01</td>
								<td>Swrew</td>
								<td>100</td>
								<td className=" text-[#49b743]">Closed</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default TicketDashboard;
