module.exports = (sequelize, DataTypes) => {
	const Suggestion = sequelize.define("suggestion", {
		company_id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		product_part_no: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	// Suggestion.sync({ force: true }).then(() => console.log('Suggestion MODEL CREATED')).catch((err) => console.log('ERROR ' + err))
	return Suggestion;
};
