const router = require("express").Router();

const {getAllProducts, createProducts, deleteProducts} = require("../controllers/Products");

router.get("/getproducts", getAllProducts);
router.post("/createproducts", createProducts);
router.delete("/deleteproducts", deleteProducts);

module.exports = router;
