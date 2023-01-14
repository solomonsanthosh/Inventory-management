import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ticketgenerate } from "../../Axios/ticket";

const TicketGenerate = () => {
  const [part, setPart] = useState("");
  const [quantity, setQuantity] = useState();

  const generateTicket = () => {
    if (localStorage.getItem("name")) {
      ticketgenerate(part, quantity, localStorage.getItem("name")).then((res) => {
      
      });
    } else {
      Navigate('/')
    }
  };
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
              onChange={(e) => setPart(e.target.value)}
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
