const router = require("express").Router();

const {
	getTicketRequest,
	postTicketRequest,
	updateTicketRequest,
	ticketCheck
} = require("../controllers/ticket.controller");

router.get("/gettickets", getTicketRequest);
router.post("/createtickets", postTicketRequest);
router.put("/updatetickets/:ticket_id", updateTicketRequest);
router.get("/ticketcheck/:ticket_id", ticketCheck);

module.exports = router;
