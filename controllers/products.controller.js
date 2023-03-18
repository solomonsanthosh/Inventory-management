const { Products } = require("../database/database");

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
      product_name: "B MAX Ball Pen",

      product_part_no: "b_max_ball_pen",
      product_price: 254,
    },
    {
      product_name: "Single Punch Kangaro FP",

      product_part_no: "single_punch_kangaro_FP",
      product_price: 186,
    },
    {
      product_name: "Double Punch Kangaro",

      product_part_no: "double_punch_kangaro",
      product_price: 180,
    },
    {
      product_name: "Scissors",

      product_part_no: "scissors",
      product_price: 67,
    },
    {
      product_name: "Glue stick",

      product_part_no: "glue_stick",
      product_price: 97,
    },
    {
      product_name: "Spring File",

      product_part_no: "spring_file",
      product_price: 152,
    },
    {
      product_name: "Box File",

      product_part_no: "box_file",
      product_price: 305,
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

exports.deleteOneProducts = async (req, res) => {
  const product_id = req.params.id;
  try {
    await Products.destroy({
      where: { product_id: product_id },
      truncate: true,
    }).then((response) => console.log("Product data deleted"));
  } catch (error) {
    console.log(error);
  }
};

exports.updateProducts = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    console.log(product_id);
    const product = await Products.findOne({
      where: { product_id: product_id },
    });

    if (product) {
      product.product_name = "sfasdfas";
      product.product_url = "dsadfasdfasf";
      product.product_part_no = "dsasdfagafg";

      await product.save();
    } else {
      console.log("Product not found");
    }
  } catch (error) {
    console.log(error);
  }
};
