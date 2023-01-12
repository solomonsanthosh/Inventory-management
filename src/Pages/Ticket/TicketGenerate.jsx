import React from "react";

const TicketGenerate = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center min-h-screen">
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
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="productQuantity"
						>
							Product Quantity
						</label>
						<input
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="productQuantity"
							type="productQuantity"
							placeHolder="100"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							class="bg-[#298ddf] hover:bg-[#298ddfc0] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TicketGenerate;
