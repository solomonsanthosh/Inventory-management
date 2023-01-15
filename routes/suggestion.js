const router = require("express").Router();

const {
	getSuggestions, postSuggestion,
} = require("../controllers/suggestion.controller");

router.get("/getsuggestions/:partno", getSuggestions);
router.post("/postsuggestion", postSuggestion);
module.exports = router;
