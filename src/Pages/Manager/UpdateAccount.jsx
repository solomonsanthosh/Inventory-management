import React, {useState, useEffect} from "react";
import SideNav from "./SideNav/SideNav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {updateAccount, deleteAccount} from "../../Axios/manager";

const UpdateAccount = ({setUpdateUser, user}) => {
	const [trigger, setTrigger] = useState(false);
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [userId, setUserId] = useState(user.id);

	const navigate = useNavigate();

	useEffect(() => {
		if (password.length > 0 && name.length > 0) {
			setTextErr(false);
		} else {
			setTextErr(true);
		}
	}, [trigger]);

	const [password, setPassword] = useState("");
	const [textErr, setTextErr] = useState(null);
	const submitForm = () => {
		const user = {
			id: userId,
			name: name,
			password: password,
			role: role,
		};
		updateAccount(user);
		console.log(user);
		setUpdateUser(false);
	};

	return (
		<>
			<div className="w-full h-full  bg-[#00000069] absolute flex justify-center items-center z-10">
				<div className="w-[50%] bg-[#f5f5f5] flex flex-col p-8 rounded">
					<h1 className="text-[1.5rem] font-bold mb-8">
						Update Account
					</h1>

					<TextField
						id="outlined-required"
						className="w-[%100]"
						required
						label="Name"
						defaultValue={user.name}
						onChange={(e) => {
							setName(e.target.value);
							setTrigger(!trigger);
						}}
					/>
					<br />
					<TextField
						required
						id="outlined-required"
						label="Password"
						defaultValue={user.password}
						onChange={(e) => {
							setPassword(e.target.value);
							setTrigger(!trigger);
						}}
					/>
					<FormControl sx={{m: 1, minWidth: 120}}>
						<InputLabel id="demo-simple-select-helper-label">
							Role
						</InputLabel>
						<Select
							className="w-[%100]"
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							label="Role"
							defaultValue={user.role}
							onChange={(e) => setRole(e.target.value)}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="user">user</MenuItem>
							<MenuItem value="local">local</MenuItem>
							<MenuItem value="admin">admin</MenuItem>
						</Select>
					</FormControl>

					<div className="mt-5 flex justify-between">
						<Button
							onClick={submitForm}
							disabled={textErr}
							variant="outlined"
						>
							Update Account
						</Button>
						<Button
							onClick={() => {
								setUpdateUser(false);
							}}
							variant="outlined"
							color="error"
						>
							Cancel
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpdateAccount;
