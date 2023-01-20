const {Suggestion} = require("../database/database");

exports.getSuggestions = async (req, res) => {
	try {
		const product_part_no = req.params.partno;
		const suggestions = await Suggestion.findAll({
			where: {product_part_no: product_part_no},
		});
		res.json(suggestions);
		console.log(suggestions);
	} catch (error) {
		console.log(error);
	}
};

exports.postSuggestion = async (req, res) => {
	const bulkSuppliers = [
		{
			company_name: "com1",
			company_email: "solosanty2064@gmail.com",
			product_part_no: "sdfasdf3523",
		},
		{
			company_name: "com2",
			company_email: "solosanty2064@gmail.com",
			product_part_no: "ds",
		},
		{
			company_name: "com3",
			company_email: "solosanty2064@gmail.com",
			product_part_no: "ds",
		},
		{
			company_name: "com4",
			company_email: "solosanty2064@gmail.com",
			product_part_no: "ds",
		},
	];
	try {
		const suppliers = await Suggestion.bulkCreate(bulkSuppliers);
		res.json(suppliers);
	} catch (error) {
		console.log(error);
	}
};
