const router = require("express").Router();

const {
	getAllProducts,
	createProducts,
	deleteProducts,
	updateProducts,
	deleteOneProducts,
} = require("../controllers/products.controller");

router.get("/getproducts", getAllProducts);
router.post("/createproducts", createProducts);
router.delete("/deleteproducts", deleteProducts);
router.delete("/deleteoneproducts/:product_id", deleteOneProducts);
router.put("/updateProducts/:product_id", updateProducts);

module.exports = router;
