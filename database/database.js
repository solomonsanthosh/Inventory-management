const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize.Sequelize(
	process.env.DATABASE,
	process.env.USER,
	process.env.PASSWORD,
	{
		host: process.env.HOST,
		dialect: "postgres",
		logging: false,
	}
);

sequelize.authenticate().then(() => console.log("Database Connected")).catch((err) => console.log(err));

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./modals/user.model")(sequelize, Sequelize.DataTypes);
db.Products = require("./modals/products.model")(sequelize, Sequelize.DataTypes);
db.Warehouse = require("./modals/warehouse.model")(sequelize, Sequelize.DataTypes);
db.Store = require("./modals/store.model")(sequelize, Sequelize.DataTypes);

module.exports = db;
