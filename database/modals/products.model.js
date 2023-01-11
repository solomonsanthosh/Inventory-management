module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("products", {
		product_id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		product_url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		product_part_no: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	// User.sync({ force: true }).then(() => console.log('USER MODEL CREATED')).catch((err) => console.log('ERROR ' + err))
	return User;
};
