const router = require("express").Router();

const sendEmail = require("../controllers/sendEmail");
const {
  getSuggestions,
  postSuggestion,
} = require("../controllers/suggestion.controller");

router.get("/getsuggestions/:partno", getSuggestions);
router.post("/postsuggestion", postSuggestion);
router.post("/sendemail", sendEmail);
module.exports = router;
