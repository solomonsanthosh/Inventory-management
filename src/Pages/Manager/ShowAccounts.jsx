import {useState, useEffect} from "react";
import {Button} from "@mui/material";
import SideNav from "./SideNav/SideNav";
import {getAccounts} from "../../Axios/manager";
import {calculateRange, sliceData} from "../../utils/table-pagination";
import UpdateAccount from "./UpdateAccount";
import {deleteAccount} from "../../Axios/manager";
import {Navigate, useNavigate} from "react-router-dom";

const ShowAccounts = () => {
	const [accounts, setAccounts] = useState([]);
	const [showAcc, setShowAcc] = useState([]);
	const [pagination, setPagination] = useState([]);
	const [page, setPage] = useState(1);

	const [updateUser, setUpdateUser] = useState(false);
	const [user, setUser] = useState([]);

	const navigate = useNavigate();

	const deleteUser = (id) => {
		deleteAccount(id);
		navigate("");
	};

	useEffect(() => {
		getAccounts().then((res) => {
			setAccounts(res.data);
			setPagination(calculateRange(res.data, 8));

			setShowAcc(sliceData(res.data, page, 8));
		});
	}, []);
	const __handleChangePage = (new_page) => {
		setPage(new_page);
		console.log(new_page);

		setShowAcc(sliceData(accounts, new_page, 8));
	};

	return (
		<div className="h-full min-h-screen bg-[#F5F5F5]">
			<SideNav />
			{updateUser ? (
				<UpdateAccount setUpdateUser={setUpdateUser} user={user} />
			) : null}
			<div className="w-full pl-[65px]">
				<div className="w-[90%] mx-auto p-[2rem]">
					<h1 className="text-[1.5rem] font-bold mb-8">Accounts</h1>
					{showAcc?.map((acc) => {
						return (
							<Card
								setUpdateUser={setUpdateUser}
								accounts={acc}
								setUser={setUser}
								deleteUser={deleteUser}
							/>
						);
					})}
					{accounts.length > 8 ? (
						<div className="dashboard-content-footer">
							{pagination.map((item, index) => (
								<span
									key={index}
									className={
										item === page
											? "active-pagination"
											: "pagination"
									}
									onClick={() => __handleChangePage(item)}
								>
									{item}
								</span>
							))}
						</div>
					) : null}
					{accounts.length == 0 ? (
						<div className="dashboard-content-footer">
							<span className="empty-table">No data</span>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

const Card = ({accounts, setUpdateUser, setUser, deleteUser}) => {
	return (
		<>
			<div className="w-full shadow-sm flex py-5 px-2  bg-[#fefefe] mb-5">
				<div className="mr-5 w-[35%] px-3  overflow-auto">
					<h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">
						Name
					</h1>
					<p>{accounts.name}</p>
				</div>
				<div className="mr-5 w-[35%] px-3  overflow-auto">
					<h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">
						Password
					</h1>
					<p>{accounts.password}</p>
				</div>
				<div className=" flex items-center w-[30%] px-3">
					<span className="mr-3 ">
						<Button variant="outlined">
							<h1
								className="text-[.95rem] font-bold"
								onClick={() => {
									setUpdateUser(true);
									setUser(accounts);
								}}
							>
								Change
							</h1>
						</Button>
					</span>
					<Button variant="outlined" color="error">
						<h1
							className="text-[.95rem] font-bold"
							onClick={() => deleteUser(accounts.id)}
						>
							Delete
						</h1>
					</Button>
				</div>
			</div>
		</>
	);
};

export default ShowAccounts;
