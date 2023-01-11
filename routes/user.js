const router = require("express").Router();

const {User} = require("../database/database");

router.post("/create", async (req, res) => {
	try {
		const jane = await User.create({
			id: "sadfasdfasfd",
			name: "Helsadfasdflo",
			password: "Wordasfasdfld",
		}).then((response) => {
			console.log(response);
		});
	} catch (error) {
		console.log(error);
	}
});

router.get("/showusers", async (req, res) => {
	try {
		const users = await User.findAll()
		res.json(users);
		console.log(users);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
