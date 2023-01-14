const router = require("express").Router();

const {
	getSuggestions,
} = require("../controllers/products.controller");

router.get("/getsuggestions", getSuggestions);

module.exports = router;
