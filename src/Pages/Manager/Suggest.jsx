import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SideNav from "./SideNav/SideNav";
import { suggesttickets } from "../../Axios/ticket";
import { getSuggestion, sendEmail } from "../../Axios/manager";
import { calculateRange, sliceData } from "../../utils/table-pagination";

function Suggest() {
  const [showTicket, setShowTicket] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [tickets, setTickets] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    suggesttickets().then((res) => {
      setTickets(res.data);
      setPagination(calculateRange(res.data, 8));
      setShowTicket(sliceData(res.data, page, 8));
    });
  }, []);

  const __handleChangePage = (new_page) => {
    setPage(new_page);
    console.log(new_page);

    setShowTicket(sliceData(tickets, new_page, 8));
  };
  const handleSuggest = (partno, qty) => {
    setOpen(true);
    setQuantity(qty);
    getSuggestion(partno, quantity).then((res) => {
      setSuppliers(res.data);
    });
  };
  const handleEmail = (id, product) => {
    sendEmail(id, product, quantity).then(() => {
      setOpen(false);
      alert("email sent successfully");
    });
  };
  function changeBackground(e) {
    e.target.style.background = "#20c88a";
  }
  function changeBackgroundRemove(e) {
    e.target.style.background = "#e9e9e9";
  }

  return (
    <>
      {open ? (
        <div className="w-full h-full  bg-[#00000089] absolute flex justify-center items-center z-10">
          <div className="w-[50%] bg-[#f5f5f5] flex flex-col p-4 rounded max-h-[350px] ">
            <h1 className="p-1 font-bold text-xl">Suppliers</h1>
            <div className="w-full overflow-y-scroll">
              {suppliers?.map((supplier) => (
                <div className="p-3 shadow-md mb-4 flex justify-between">
                  <div>
                    <span className="font-semibold">Company Name: </span>
                    {"   "}
                    {supplier.company_name}
                  </div>
                  <button
                    onMouseEnter={changeBackground}
                    onMouseLeave={changeBackgroundRemove}
                    onClick={() =>
                      handleEmail(supplier.company_id, supplier.product_part_no)
                    }
                    className="bg-[#e9e9e9] p-2 rounded-md"
                  >
                    Send Mail
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full min-h-screen bg-[#F5F5F5]">
          <SideNav />
          <div className="w-full pl-[65px]">
            <div className="w-[90%] mx-auto p-[2rem]">
              <h1 className="text-[1.5rem] font-bold mb-8">Approve Request</h1>

              {showTicket?.map((ticket) => (
                <Card ticket={ticket} handleSuggest={handleSuggest} />
              ))}
              {tickets.length > 8 ? (
                <div className="dashboard-content-footer">
                  {pagination.map((item, index) => (
                    <span
                      key={index}
                      className={
                        item === page ? "active-pagination" : "pagination"
                      }
                      onClick={() => __handleChangePage(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
              {tickets.length == 0 ? (
                <div className="dashboard-content-footer">
                  <span className="empty-table">No data</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const Card = ({ ticket, handleSuggest }) => {
  return (
    <>
      <div className="w-full shadow-sm flex py-5 px-2 justify-around bg-[#fefefe] mb-5">
        <div className="mr-5">
          <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">ID</h1>
          <p className="">{ticket.ticket_id}</p>
        </div>
        <div className="mr-5">
          <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">
            Part Name
          </h1>
          <p>{ticket.product_part_no}</p>
        </div>
        <div className="mr-5">
          <h1 className="text-[.95rem] font-bold mb-3 text-[#2D83B5]">
            Quantity
          </h1>
          <p>{ticket.product_quantity}</p>
        </div>
        <Button
          color="success"
          variant="outlined"
          onClick={() =>
            handleSuggest(ticket.product_part_no, ticket.product_quantity)
          }
        >
          <h1 className="text-[.95rem] font-bold">{ticket.status}</h1>
        </Button>
      </div>
    </>
  );
};
export default Suggest;
