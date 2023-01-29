import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {ticketgenerate, gettickets} from "../../Axios/ticket";
import {getProducts} from "../../Axios/store";
import SideNav from "../../components/SideNav/SideNav";
const TicketGenerate = () => {
	const navigate = useNavigate();

	const [part, setPart] = useState("");
	const [quantity, setQuantity] = useState();
	const [allproducts, setAllProducts] = useState([]);

	const generateTicket = () => {
		if (localStorage.getItem("name")) {
			ticketgenerate(part, quantity, localStorage.getItem("name"));
			navigate("/ticketdashboard");
		} else {
			console.log("error");
		}
	};

	useEffect(() => {
		getProducts().then((response) => {
			setAllProducts(response.data);
		});
	});

	return (
		<div className="w-full flex flex-col justify-center items-center min-h-screen bg-[#F5F5F5]">
			<SideNav />

			<div className="w-full flex flex-col justify-center items-center max-w-xs">
				<form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="productPartNo"
						>
							Product Part No
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="productPartNo"
							type="text"
							placeHolder="1xefhg2345"
							onChange={(e) => setPart(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="productPartNo"
						>
							Product Part No
						</label>
						<select
							name=""
							id=""
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						>
							{allproducts.map((part_no) => {
								return (
									<option value="part1">
										{part_no.product_part_no}
									</option>
								);
							})}
						</select>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="productQuantity"
						>
							Product Quantity
						</label>
						<input
							onChange={(e) => setQuantity(e.target.value)}
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="productQuantity"
							type="productQuantity"
							placeHolder="100"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							onClick={generateTicket}
							class="bg-[#298ddf] hover:bg-[#298ddfc0] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Generate Ticket
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TicketGenerate;
