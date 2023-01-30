module.exports = (sequelize, DataTypes) => {
	const Ticket = sequelize.define("ticket", {
		ticket_id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		product_part_no: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		product_quantity: {
			type: DataTypes.INTEGER,
		},
		user_id: {
			type: DataTypes.STRING,
		},
		status: {
			type: DataTypes.STRING,
			defaultValue: "OPEN",
		}
	});
	// Ticket.sync({ force: true }).then(() => console.log('Ticket MODEL CREATED')).catch((err) => console.log('ERROR ' + err))
	return Ticket;
};
