const router = require("express").Router();

const { User } = require("../database/database");
const {
  createAccount,
  showAccounts,
  loginAccount,
  refresh,
  checkLogin,
  deleteAccount,
  updateAccount,
} = require("../controllers/User");

const { checkLoginMiddleware } = require("../middleware/user");

router.post("/create", createAccount);

router.get("/show", showAccounts);

router.delete("/delete/:id", deleteAccount);
router.put("/update", updateAccount);
router.post("/refresh", refresh);
router.post("/login", loginAccount);
router.get("/check", checkLogin);
module.exports = router;
