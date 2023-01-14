const {Suggestion} = require("../database/database");

exports.getSuggestions = async (req, res) => {
	try {
		const product_part_no = req.body.product_part_no;

		const suggestions = await Suggestion.findAll({
			where: {product_part_no: product_part_no},
		});
		res.json(suggestions);
	} catch (error) {
		console.log(error);
	}
};
