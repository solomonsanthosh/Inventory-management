import React from "react";

const EmployeeForm = () => {
	return (
		<section className="h-screen w-full flex flex-col justify-center items-center font-sans">
			<div className="h-full w-full">
				<div className="w-full">
					<h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600 font-sans text-center py-7">
						Create Ticket
					</h1>
				</div>
				<div className="w-full">
					<form
						action=""
						className="w-full flex flex-col justify-center items-center"
					>
						<div class="mb-6">
							<label
								for="email"
								className="input-label mb-2 font-sans text-xl"
							>
								Your email
							</label>
							<input
								type="email"
								id="email"
								className="ml-5 shadow outline-none px-2 py-1 rounded"
								placeholder="email"
								required
							/>
						</div>
						<div class="mb-6">
							<label
								for="email"
								className="input-label mb-2 font-sans text-xl"
							>
								Part number
							</label>
							<input
								type="email"
								id="part_number"
								className="ml-5 shadow outline-none px-2 py-1 rounded"
								placeholder="part_number"
								required
							/>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default EmployeeForm;
