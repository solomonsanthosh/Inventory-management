const router = require("express").Router();

const { postStore } = require("../controllers/ticket.controller");
const {Store, Warehouse} = require("../database/database");

router.get("/allproducts", async (req, res) => {
	try {
		const allProducts = await Store.findAll();
		res.json(allProducts);
	} catch (error) {
		console.log(error);
	}
});

router.get(`/postStore/:product_id`, postStore)

router.post("/storecreate", async (req, res) => {
	try {
		const bulkProducts = [
			{
				product_id: "9828334b-2a70-46de-891f-55fc9375ee1c",
				product_quantity: 20,
				product_part_no: "part1",
				product_limit: 100,
			},
		];
		await Store.bulkCreate(bulkProducts).then((response) => {
			console.log(response);
		});
	} catch (error) {
		console.log(error);
	}
});

router.get("/showstore", async (req, res) => {
	try {
		const store = await Store.findAll();
		res.json(store);
		console.log(store);
	} catch (error) {
		console.log(error);
	}
});

// warehouse
router.post("/warehousecreate", async (req, res) => {
	try {
		const bulkProducts = [
			{
				product_id: "d58929aa-fc8d-4f3b-b4ed-1e05139496b3",
				product_quantity: 50,
				product_part_no: "part1",
				product_limit: 200,
			},
		];
		await Warehouse.bulkCreate(bulkProducts).then((response) => {
			console.log(response);
		});
	} catch (error) {
		console.log(error);
	}
});

router.get("/showwarehouse", async (req, res) => {
	try {
		const warehouse = await Warehouse.findAll();
		res.json(warehouse);
		console.log(warehouse);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
