const router = require("express").Router();

const {
	getTicketRequest,
	postTicketRequest,
	updateTicketRequest,
	ticketCheck,
	getTicketApprove,
	getTicketUser,
} = require("../controllers/ticket.controller");

router.get("/gettickets", getTicketRequest);
router.get("/gettickets/:id", getTicketUser);
router.get("/getticketapprove", getTicketApprove);
router.post("/createtickets", postTicketRequest);
router.put("/updatetickets/:ticketid", updateTicketRequest);
// router.get("/ticketcheck/:ticket_id", ticketCheck);

module.exports = router;
