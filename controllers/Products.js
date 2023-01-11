const {Products} = require("../database/database");

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Products.findAll();
		res.json(products);
		console.log(products);
	} catch (error) {
		console.log(error);
	}
};

exports.createProducts = async (req, res) => {
	const bulkProducts = [
		{
			product_id: 123,
			product_name: "Sfgasdf",
			product_url: "dfgadff",
			product_part_no: "sdfasdf3523",
		},
		{
			product_id: 2345,
			product_name: "s",
			product_url: "d",
			product_part_no: "ds",
		},
		{
			product_id: 121113,
			product_name: "Sfgasdf",
			product_url: "dfgadff",
			product_part_no: "sdfasdf3523",
		},
		{
			product_id: 2222345,
			product_name: "s",
			product_url: "d",
			product_part_no: "ds",
		},
	];
	try {
		const products = await Products.bulkCreate(bulkProducts);
		res.json(products);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteProducts = async (req, res) => {
	try {
		await Products.destroy({
			where: {},
			truncate: true,
		}).then((response) => console.log("Product data deleted"));
	} catch (error) {
		console.log(error);
	}
};

exports.updateProducts = async (req, res) => {
	try {
		const product = Products.findOne({where: {product_id: 2222345}});

		if (product) {
			product.product_name = "sfasdfas";
			product.product_url = "dsadfasdfasf";
			product.product_part_no = "dsasdfagafg";
		}
	} catch (error) {
		console.log(error);
	}
};
