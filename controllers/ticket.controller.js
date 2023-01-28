const { response } = require("express");
const { where } = require("sequelize");
const {
  Ticket,
  Store,
  Warehouse,
  Products,
  User,
} = require("../database/database");

exports.getTicketRequest = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({});
    res.json(tickets);
  } catch (error) {
    console.log(error);
  }
};

exports.getTicketUser = async (req, res) => {
  try {
    if (req.params.id == "local") {
      const tickets = await Ticket.findAll({ where: { status: "OPEN" } });
      res.json(tickets);
    } else {
      const tickets = await Ticket.findAll({
        where: { user_id: req.params.id },
      });
      res.json(tickets);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getTicketApprove = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({ where: { status: "APPROVAL" } });
    res.json(tickets);
  } catch (error) {
    console.log(error);
  }
};

exports.postStore = async (req, res) => {
  try {
    const id = req.params.product_id;
    const product = await Products.findOne({ where: { product_id: id } });
    const part_no = product.dataValues.product_part_no;

    const store = await Store.findOne({ where: { product_part_no: part_no } });
    const warehouse = await Warehouse.findOne({
      where: { product_part_no: part_no },
    });

    const storeLimit = getStore.dataValues.product_limit;
    const storeTotal = getStore.dataValues.product_quantity;
    const warehouseLimit = getWarehouse.dataValues.product_limit;
    const warehouseTotal = getWarehouse.dataValues.product_quantity;
    const difference = storeLimit - storeTotal;

    if (storeTotal <= storeLimit && warehouseTotal >= difference) {
      await Store.update(
        { product_quantity: difference + storeTotal },
        { where: { product_part_no: part_no } }
      );
      await Warehouse.update(
        { product_quantity: warehouseTotal - difference },
        { where: { product_part_no: part_no } }
      );
    }
    return "Success";
  } catch (error) {
    console.log(error);
  }
};

exports.postTicketRequest = async (req, res) => {
  try {
    const { part_no, quantity, id } = req.body;

    const ticket = await Ticket.create({
      product_part_no: part_no,
      product_quantity: quantity,
      user_id: id,
    });
    // console.log("====================================");
    // console.log(ticket, "SS", user, "SS");
    // console.log("====================================");
    const getStore = await Store.findOne({
      where: { product_part_no: part_no },
    });
    const getWarehouse = await Warehouse.findOne({
      where: { product_part_no: part_no },
    });

    if (quantity >= storeTotal && quantity >= warehouseTotal) {
      await Ticket.update(
        { status: "APPROVAL" },
        { where: { ticket_id: ticket.ticket_id } }
      );
    } else if (quantity <= storeTotal) {
      const updatedStoreTotal = storeTotal - quantity;
      await Store.update(
        { product_quantity: updatedStoreTotal },
        { where: { product_part_no: part_no } }
      );
    } else if (quantity >= storeTotal && quantity <= warehouseTotal) {
      if (storeLimit <= warehouseTotal) {
        const differenceAdded = storeLimit - storeTotal;
        const updatedStore = storeTotal + differenceAdded - quantity;
        const updateWarehouse = warehouseTotal - differenceAdded;
        await Warehouse.update(
          { product_quantity: updateWarehouse },
          {
            where: { product_part_no: part_no },
          }
        );
        await Store.update(
          { product_quantity: updatedStore },
          {
            where: { product_part_no: part_no },
          }
        );
      } else if (storeLimit > warehouseTotal) {
        const updatedStore = storeTotal + warehouseTotal - quantity;
        const updateWarehouse = 0;
        await Store.update(
          { product_quantity: updatedStore },
          {
            where: { product_part_no: part_no },
          }
        );
        await Warehouse.update(
          { product_quantity: updateWarehouse },
          {
            where: { product_part_no: part_no },
          }
        );
      }
    } else {
      await Ticket.update(
        { status: "APPROVAL" },
        { where: { ticket_id: ticket.ticket_id } }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateTicketRequest = async (req, res) => {
  try {
    const ticket_id = req.params.ticketid;
    const status = req.body.message;
    const ticket = await Ticket.findOne({ where: { ticket_id: ticket_id } });
    if (ticket) {
      ticket.status = status;
      await ticket.save();
    }
  } catch (error) {
    console.log(error);
  }
};

// exports.ticketCheck = async (req, res) => {
// 	try {
// 		const ticket_id = req.params.ticket_id;

// 		const getTicket = await Ticket.findOne({where: {ticket_id: ticket_id}});
// 		const getStore = await Store.findOne({
// 			where: {product_part_no: getTicket.dataValues.product_part_no},
// 		});
// 		const getWarehouse = await Warehouse.findOne({
// 			where: {product_part_no: getTicket.dataValues.product_part_no},
// 		});
// 		const storeTotal = getStore.dataValues.product_limit;
// 		const warehouseTotal = getWarehouse.dataValues.product_limit;

// 		if (
// 			getStore?.getStore.dataValues.product_quantity >=
// 			getTicket?.getTicket.dataValues.product_quantity
// 		) {
// 			const updatedValueStore =
// 				getStore.dataValues.product_quantity -
// 				getTicket.dataValues.product_quantity;

// 			getStore.dataValues.product_quantity = updatedValueStore;
// 			await getStore.save();
// 		} else if (
// 			getWarehouse?.getWarehouse.dataValues.product_quantity >=
// 			getTicket?.getTicket.dataValues.product_quantity
// 		) {
// 			const updatedValueWarehouse =
// 				warehouseTotal -
// 				(storeTotal - getStore.dataValues.product_quantity);
// 			const updatedValueStore =
// 				storeTotal - getTicket.dataValues.product_quantity;

// 			getWarehouse.dataValues.product_quantity = warehouseTotal;
// 			getStore.dataValues.product_quantity = updatedValueStore;
// 			await getWarehouse.save();
// 			await getStore.save();
// 		} else {
// 			getTicket.status = "APPROVAL";
// 			await getTicket.save();

// 			console.log("approval");
// 		}

// 		console.log(getStore);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
