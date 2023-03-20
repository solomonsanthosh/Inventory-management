const { Suggestion } = require("../database/database");

exports.getSuggestions = async (req, res) => {
  try {
    const product_part_no = req.params.partno;
    const suggestions = await Suggestion.findAll({
      where: { product_part_no: product_part_no },
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
      company_name: "PEN_SUPPLIER",
      company_email: "solosanty2064@gmail.com",
      product_part_no: "b_max_ball_pen",
      address: "No 13, 8th street eswaran nagar pammal",
      city: "chennai",
      pincode: 600075,
      phone: 7397293940,
    },
    {
      company_name: "PEN_SUPPLIER",
      company_email: "solosanty2064@gmail.com",
      product_part_no: "glue_stick",
      address: "No 13, 8th street eswaran nagar pammal",
      city: "chennai",
      pincode: 600075,
      phone: 7397293940,
    },
    {
      company_name: "PEN_SUPPLIER",
      company_email: "solosanty2064@gmail.com",
      product_part_no: "box_file",
      address: "No 13, 8th street eswaran nagar pammal",
      city: "chennai",
      pincode: 600075,
      phone: 7397293940,
    },
    {
      company_name: "PEN_SUPPLIER",
      company_email: "solosanty2064@gmail.com",
      product_part_no: "spring_file",
      address: "No 13, 8th street eswaran nagar pammal",
      city: "chennai",
      pincode: 600075,
      phone: 7397293940,
    },
  ];
  try {
    const suppliers = await Suggestion.bulkCreate(bulkSuppliers);
    res.json(suppliers);
  } catch (error) {
    console.log(error);
  }
};
