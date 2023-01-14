const {Ticket, Store, Warehouse, Products} = require("../database/database");

exports.getTicketRequest = async (req, res) => {
	try {
		const tickets = await Ticket.findAll();
		res.json(tickets);
	} catch (error) {
		console.log(error);
	}
};

exports.postTicketRequest = async (req, res) => {
	try {
		const newTicket = Ticket.create({
			product_part_no: "abc",
			product_quantity: 423875,
			user_id: "sdfasjfv",
		});
		res.json(newTicket);
	} catch (error) {
		console.log(error);
	}
};

exports.updateTicketRequest = async (req, res) => {
	try {
		const ticket_id = req.params.ticket_id;
		const ticket = await Ticket.findOne({where: {ticket_id: ticket_id}});
		if (ticket) {
			ticket.status = "CLOSE";
			await ticket.save();
		}
	} catch (error) {
		console.log(error);
	}
};

exports.ticketCheck = async (req, res) => {
	try {
		const ticket_id = req.params.ticket_id;

		const getTicket = await Ticket.findOne({where: {ticket_id: ticket_id}});
		const getStore = await Store.findOne({
			where: {product_part_no: getTicket.dataValues.product_part_no},
		});
		const getWarehouse = await Warehouse.findOne({
			where: {product_part_no: getTicket.dataValues.product_part_no},
		});
		const storeTotal = getStore.dataValues.product_limit;
		const warehouseTotal = getWarehouse.dataValues.product_limit;

		if (
			getStore?.getStore.dataValues.product_quantity >=
			getTicket?.getTicket.dataValues.product_quantity
		) {
			const updatedValueStore =
				getStore.dataValues.product_quantity -
				getTicket.dataValues.product_quantity;

			getStore.dataValues.product_quantity = updatedValueStore;
			await getStore.save();
		} else if (
			getWarehouse?.getWarehouse.dataValues.product_quantity >=
			getTicket?.getTicket.dataValues.product_quantity
		) {
			const updatedValueWarehouse =
				warehouseTotal -
				(storeTotal - getStore.dataValues.product_quantity);
			const updatedValueStore =
				storeTotal - getTicket.dataValues.product_quantity;

			getWarehouse.dataValues.product_quantity = warehouseTotal;
			getStore.dataValues.product_quantity = updatedValueStore;
			await getWarehouse.save();
			await getStore.save();
		} else {
			getTicket.status = "APPROVAL";
			await getTicket.save();

			console.log("approval");
		}

		console.log(getStore);
	} catch (error) {
		console.log(error);
	}
};
