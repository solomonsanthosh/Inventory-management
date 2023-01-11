module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("users", {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	// User.sync({ force: true }).then(() => console.log('USER MODEL CREATED')).catch((err) => console.log('ERROR ' + err))
	return User;
};
