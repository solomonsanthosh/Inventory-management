import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
// import SideNav from "../../components/SideNav/SideNav";
import "../Manager/manager.css";
import {getProducts, postStore} from "../../Axios/store";
import {Button} from "@mui/material";
import {toast} from "react-toastify";
function Store() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getProducts().then((res) => {
			setProducts(res.data);
		});
	}, []);

	const navigate = useNavigate();

	const handleSubmit = async (id) => {
		postStore(id).then((response) => {
			if (response.data.message == "invalid") {
				toast.error("Insufficent quantity in warehouse");
			} else {
				navigate("/local");
				toast.success("Request sent successfully");
			}
		});
	};

	return (
		<div className="h-full min-h-screen relative bg-[#F5F5F5] ">
			<div className="w-full">
				<div className="dash">
					<h1 className="title">Products</h1>

					<table>
						<thead>
							<th>Product ID</th>
							<th>Part No</th>
							<th>Quantity</th>
							<th>Product Limit</th>
							<th>Operation</th>
						</thead>
						<tbody>
							{products?.map((product) => {
								// console.log(product);
								return (
									<tr>
										<td>{product.product_id}</td>
										<td>{product.product_part_no}</td>
										<td>{product.product_quantity}</td>
										<td>{product.product_limit}</td>
										<td>
											<Button
												color="success"
												variant="contained"
												onClick={() => {
													handleSubmit(
														product.product_id
													);
												}}
											>
												Request Product
											</Button>
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

export default Store;
